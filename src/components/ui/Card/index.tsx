import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../../utils/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
  gradient?: boolean;
}

/**
 * モダンなカードコンポーネント
 * グラスモーフィズム、グラデーション対応
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, glass = false, gradient = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative overflow-hidden rounded-2xl p-6',
          {
            'bg-white dark:bg-neutral-200 shadow-lg dark:shadow-2xl border border-neutral-200 dark:border-neutral-300': !glass && !gradient,
            'glass backdrop-blur-md bg-white/10 dark:bg-white/10 border border-white/20 dark:border-white/20': glass,
            'bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 backdrop-blur-md': gradient,
            'transition-all duration-300 hover:scale-[1.02]': hover,
          },
          className
        )}
        {...props}
      >
        {/* ノイズテクスチャオーバーレイ */}
        {!glass && <div className="noise pointer-events-none absolute inset-0" />}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mb-4 space-y-1.5', className)} {...props} />
  )
);

CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight text-neutral-900 dark:text-neutral-950', className)}
      {...props}
    />
  )
);

CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-neutral-600 dark:text-neutral-700', className)} {...props} />
  )
);

CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
);

CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('mt-6 flex items-center gap-4', className)} {...props} />
  )
);

CardFooter.displayName = 'CardFooter';