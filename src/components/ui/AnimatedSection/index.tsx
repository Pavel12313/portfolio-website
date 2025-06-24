import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { cn } from '../../../utils/cn';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'scaleIn' | 'slideInLeft' | 'slideInRight';
  delay?: number;
}

/* アニメーションバリアント定義 */
const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
};

/**
 * スクロールアニメーション付きセクションコンポーネント
 * Intersection Observerで可視判定
 */
export function AnimatedSection({
  children,
  className,
  animation = 'fadeInUp',
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <motion.section
      ref={ref as any}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={animations[animation]}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}