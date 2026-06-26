'use client';

import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ProgressHeader } from '@/components/sections/contact/ProgressHeader';
import { SuccessCard } from '@/components/sections/contact/SuccessCard';
import { StepOneFields } from '@/components/sections/contact/StepOneFields';
import { StepTwoFields } from '@/components/sections/contact/StepTwoFields';
import { StepThreeFields } from '@/components/sections/contact/StepThreeFields';
import {
  contactFormSchema,
  contactFormDefaults,
  STEP_FIELDS,
  type ContactFormInput,
  type ContactFormValues,
} from '@/lib/validations/contactForm';

const STEP_LABELS = ['Your Property', 'Your Energy Needs', 'Next Steps'];

export interface MultiStepFormProps {
  defaultNotes?: string;
}

export function MultiStepForm({ defaultNotes }: MultiStepFormProps) {
  const [step, setStep] = React.useState(0);
  const [submitState, setSubmitState] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const form = useForm<ContactFormInput, unknown, ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { ...contactFormDefaults, notes: defaultNotes ?? '' },
    mode: 'onBlur',
  });

  async function handleNext() {
    const valid = await form.trigger(STEP_FIELDS[step]);
    if (valid) setStep((s) => Math.min(s + 1, STEP_LABELS.length - 1));
  }

  function handleBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit(values: ContactFormValues) {
    setSubmitState('submitting');
    try {
      // No backend exists yet for this marketing site; this simulated round-trip keeps the
      // loading/success/error UI states real and ready to wire up to a real endpoint later.
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.05) resolve();
          else reject(new Error('network'));
        }, 900);
      });
      void values;
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  }

  if (submitState === 'success') {
    const firstName = form.getValues('name').trim().split(/\s+/)[0] || 'there';
    return <SuccessCard firstName={firstName} />;
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-8 rounded-3xl border border-slate-200 p-6 sm:p-8"
      >
        <ProgressHeader step={step} labels={STEP_LABELS} />

        {submitState === 'error' && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            <AlertTriangle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <div>
              <p className="font-semibold">{`We couldn't send your enquiry`}</p>
              <p>Looks like a network issue on our end. Your answers are still here — just try again.</p>
            </div>
          </div>
        )}

        {step === 0 && <StepOneFields />}
        {step === 1 && <StepTwoFields />}
        {step === 2 && <StepThreeFields />}

        <div className="flex justify-between gap-4">
          {step > 0 ? (
            <Button type="button" variant="outline" onClick={handleBack}>
              Back
            </Button>
          ) : (
            <span />
          )}
          {step < STEP_LABELS.length - 1 ? (
            <Button type="button" onClick={handleNext}>
              Next Step
            </Button>
          ) : (
            <Button type="submit" loading={submitState === 'submitting'}>
              Submit Enquiry
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
