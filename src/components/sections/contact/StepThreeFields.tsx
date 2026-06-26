'use client';

import Link from 'next/link';
import { useFormContext, Controller } from 'react-hook-form';
import { RadioPillGroup } from '@/components/ui/RadioPillGroup';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { contactMethods, bestTimes, type ContactFormInput } from '@/lib/validations/contactForm';

export function StepThreeFields() {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext<ContactFormInput>();
  const notes = watch('notes') ?? '';

  return (
    <div className="flex flex-col gap-5">
      <Controller
        control={control}
        name="contactMethod"
        render={({ field }) => (
          <RadioPillGroup
            legend="Preferred contact method"
            options={contactMethods}
            value={field.value}
            onChange={field.onChange}
            error={errors.contactMethod?.message}
          />
        )}
      />

      <Select label="Best time to reach you" required {...register('bestTime')} error={errors.bestTime?.message}>
        {bestTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </Select>

      <Textarea
        label="Additional notes"
        maxLength={500}
        charCount={{ current: notes.length, max: 500 }}
        {...register('notes')}
        error={errors.notes?.message}
      />

      <div className="flex flex-col gap-1.5">
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input
            type="checkbox"
            {...register('consent')}
            className="mt-0.5 size-4 rounded border-slate-300 text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          />
          <span>
            I agree to be contacted by SolarGenius Renewables regarding my enquiry. See our{' '}
            <Link href="/privacy" className="font-medium text-brand-600 hover:text-brand-700">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p role="alert" className="text-sm text-red-600">
            {errors.consent.message}
          </p>
        )}
      </div>
    </div>
  );
}
