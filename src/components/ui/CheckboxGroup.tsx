'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CheckboxGroupProps {
  legend: string;
  options: readonly string[];
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
}

export function CheckboxGroup({ legend, options, value, onChange, error }: CheckboxGroupProps) {
  const groupId = React.useId();
  const errorId = `${groupId}-error`;

  function toggle(option: string) {
    onChange(value.includes(option) ? value.filter((v) => v !== option) : [...value, option]);
  }

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm font-medium text-slate-700">{legend}</legend>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3" aria-describedby={error ? errorId : undefined}>
        {options.map((option) => {
          const checked = value.includes(option);
          return (
            <label
              key={option}
              className={cn(
                'flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-brand-600 focus-within:ring-offset-2',
                checked ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'
              )}
            >
              <input type="checkbox" checked={checked} onChange={() => toggle(option)} className="sr-only" />
              <span
                className={cn(
                  'flex size-4 shrink-0 items-center justify-center rounded border',
                  checked ? 'border-brand-600 bg-brand-600' : 'border-slate-300'
                )}
                aria-hidden="true"
              >
                {checked && <Check className="size-3 text-white" />}
              </span>
              {option}
            </label>
          );
        })}
      </div>
      {error && (
        <p id={errorId} role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}
    </fieldset>
  );
}
