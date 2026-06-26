'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface RadioPillGroupProps {
  legend: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function RadioPillGroup({ legend, options, value, onChange, error }: RadioPillGroupProps) {
  const name = React.useId();
  const errorId = `${name}-error`;

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm font-medium text-slate-700">{legend}</legend>
      <div className="flex flex-wrap gap-2" aria-describedby={error ? errorId : undefined}>
        {options.map((option) => {
          const checked = value === option;
          return (
            <label
              key={option}
              className={cn(
                'cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-brand-600 focus-within:ring-offset-2',
                checked ? 'border-brand-600 bg-brand-50 text-brand-700' : 'border-slate-300 text-slate-600 hover:bg-slate-50'
              )}
            >
              <input
                type="radio"
                name={name}
                value={option}
                checked={checked}
                onChange={() => onChange(option)}
                className="sr-only"
              />
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
