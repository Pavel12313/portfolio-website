import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/cn';

/* ボタンのバリアント定義 */
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-normal focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5',
        secondary: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-neutral-300 dark:border dark:border-neutral-400',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-primary-light dark:text-primary-light dark:hover:bg-primary-light dark:hover:text-black',
        ghost: 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-neutral-200',
        glass: 'glass text-neutral-900 dark:text-neutral-950 hover:bg-white/20 dark:hover:bg-white/10 dark:border dark:border-white/30',
        gradient: 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:-translate-y-0.5',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

/**
 * モダンなボタンコンポーネント
 * 複数のバリアントとサイズに対応
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';