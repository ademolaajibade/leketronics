'use client';

import { useFormContext, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { RadioPillGroup } from '@/components/ui/RadioPillGroup';
import { propertyTypes, type ContactFormInput } from '@/lib/validations/contactForm';

export function StepOneFields() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<ContactFormInput>();

  return (
    <div className="flex flex-col gap-5">
      <Input label="Full name" required {...register('name')} error={errors.name?.message} />
      <Input label="Email address" type="email" required {...register('email')} error={errors.email?.message} />
      <Input
        label="Phone number"
        type="tel"
        required
        placeholder="0810 234 5678"
        helperText="e.g. 0810 234 5678 or +234 810 234 5678"
        {...register('phone')}
        error={errors.phone?.message}
      />
      <Controller
        control={control}
        name="propertyType"
        render={({ field }) => (
          <RadioPillGroup
            legend="Property type"
            options={propertyTypes}
            value={field.value}
            onChange={field.onChange}
            error={errors.propertyType?.message}
          />
        )}
      />
      <Input
        label="Property address / area in Lagos"
        required
        {...register('address')}
        error={errors.address?.message}
      />
    </div>
  );
}
