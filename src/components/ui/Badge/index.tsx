import { HTMLAttributes } from 'react';
import { cn } from '../../../utils/cn';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * バッジコンポーネント
 * スキルやタグの表示に使用
 */
export function Badge({ variant = 'default', size = 'md', className, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100',
    primary: 'bg-primary/10 text-primary dark:bg-primary/20',
    success: 'bg-success/10 text-success dark:bg-success/20',
    warning: 'bg-warning/10 text-warning dark:bg-warning/20',
    error: 'bg-error/10 text-error dark:bg-error/20',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}