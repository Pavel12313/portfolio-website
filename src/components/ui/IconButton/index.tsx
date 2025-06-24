import { forwardRef, ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../utils/cn';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  label: string;
  variant?: 'default' | 'ghost' | 'outline';
}

/**
 * アイコンボタンコンポーネント
 * アクセシビリティに配慮したアイコンボタン
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, label, variant = 'default', className, ...props }, ref) => {
    const variants = {
      default: 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700',
      ghost: 'hover:bg-neutral-100 dark:hover:bg-neutral-800',
      outline: 'border-2 border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'group relative inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-normal focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
          variants[variant],
          className
        )}
        aria-label={label}
        {...props}
      >
        <Icon className="h-5 w-5 transition-transform duration-normal group-hover:scale-110" />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';