import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', disabled, ...props }, ref) => {
    return (
      <button
        className={cn(
          'px-4 py-2 rounded-lg font-medium transition-colors',
          variant === 'default' && 'bg-purple-500 text-white hover:bg-purple-600',
          variant === 'outline' && 'border border-gray-600 hover:bg-gray-800',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button'; 