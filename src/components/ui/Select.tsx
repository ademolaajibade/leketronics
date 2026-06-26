'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, required, id, children, ...props }, ref) => {
    const generatedId = React.useId();
    const selectId = id ?? generatedId;
    const describedBy = error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={selectId} className="text-sm font-medium text-slate-700">
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            aria-invalid={!!error || undefined}
            aria-describedby={describedBy}
            required={required}
            className={cn(
              'h-11 w-full appearance-none rounded-lg border border-slate-300 bg-white px-3.5 pr-10 text-sm text-slate-900',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-1',
              'disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500',
              error && 'border-red-500 focus-visible:ring-red-500',
              className
            )}
            {...props}
          >
            {children}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
        </div>
        {error ? (
          <p id={`${selectId}-error`} className="text-sm text-red-600" role="alert">
            {error}
          </p>
        ) : helperText ? (
          <p id={`${selectId}-helper`} className="text-sm text-slate-500">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);
Select.displayName = 'Select';
