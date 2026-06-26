'use client';

import { useFormContext, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { CheckboxGroup } from '@/components/ui/CheckboxGroup';
import { RadioPillGroup } from '@/components/ui/RadioPillGroup';
import { appliances, type ContactFormInput } from '@/lib/validations/contactForm';

export function StepTwoFields() {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext<ContactFormInput>();
  const hours = watch('powerSupplyHours');

  return (
    <div className="flex flex-col gap-5">
      <Input
        label="Average monthly electricity bill (₦)"
        type="number"
        inputMode="numeric"
        min={0}
        leftIcon={<span aria-hidden="true">₦</span>}
        {...register('monthlyBill')}
        error={errors.monthlyBill?.message}
      />
      <Input
        label="Average monthly generator fuel cost (₦)"
        type="number"
        inputMode="numeric"
        min={0}
        leftIcon={<span aria-hidden="true">₦</span>}
        {...register('monthlyGeneratorCost')}
        error={errors.monthlyGeneratorCost?.message}
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="powerSupplyHours" className="text-sm font-medium text-slate-700">
          Current power supply hours per day:{' '}
          <span className="font-semibold text-brand-600">{String(hours ?? 8)}</span>
        </label>
        <input
          type="range"
          id="powerSupplyHours"
          min={0}
          max={24}
          step={1}
          {...register('powerSupplyHours')}
          className="h-2 w-full cursor-pointer rounded-full accent-brand-600"
        />
      </div>

      <Controller
        control={control}
        name="appliances"
        render={({ field }) => (
          <CheckboxGroup
            legend="Which appliances do you need to power?"
            options={appliances}
            value={field.value}
            onChange={field.onChange}
            error={errors.appliances?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="hasBattery"
        render={({ field }) => (
          <RadioPillGroup
            legend="Do you have battery backup already?"
            options={['Yes', 'No']}
            value={field.value ? 'Yes' : 'No'}
            onChange={(v) => field.onChange(v === 'Yes')}
          />
        )}
      />
    </div>
  );
}
