import { HTMLAttributes } from 'react';
import { cn } from '../../../utils/cn';

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'accent' | 'rainbow';
}

/**
 * グラデーションテキストコンポーネント
 * 見出しやアクセントテキストに使用
 */
export function GradientText({ variant = 'primary', className, ...props }: GradientTextProps) {
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-primary-light',
    accent: 'bg-gradient-to-r from-primary via-accent to-accent-light',
    rainbow: 'bg-gradient-to-r from-primary via-accent to-warning',
  };

  return (
    <span
      className={cn(
        'bg-clip-text text-transparent',
        variants[variant],
        'bg-[length:200%_auto] animate-gradient-shift',
        className
      )}
      {...props}
    />
  );
}