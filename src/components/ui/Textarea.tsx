'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
  charCount?: { current: number; max: number };
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, required, id, charCount, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id ?? generatedId;
    const describedBy = error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined;

    return (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-baseline justify-between">
          <label htmlFor={textareaId} className="text-sm font-medium text-slate-700">
            {label}
            {required && <span className="text-red-600"> *</span>}
          </label>
          {charCount && (
            <span className="text-xs text-slate-400" aria-live="polite">
              {charCount.current}/{charCount.max}
            </span>
          )}
        </div>
        <textarea
          ref={ref}
          id={textareaId}
          aria-invalid={!!error || undefined}
          aria-describedby={describedBy}
          required={required}
          className={cn(
            'min-h-28 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-1',
            'disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500',
            error && 'border-red-500 focus-visible:ring-red-500',
            className
          )}
          {...props}
        />
        {error ? (
          <p id={`${textareaId}-error`} className="text-sm text-red-600" role="alert">
            {error}
          </p>
        ) : helperText ? (
          <p id={`${textareaId}-helper`} className="text-sm text-slate-500">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
