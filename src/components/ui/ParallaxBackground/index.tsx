import { motion } from 'framer-motion';
import { useParallax } from '../../../hooks/useParallax';

/**
 * パララックス背景コンポーネント
 * 動的でモダンな背景効果
 */
export function ParallaxBackground() {
  const offset1 = useParallax(0.5);
  const offset2 = useParallax(0.3);
  const offset3 = useParallax(0.7);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* グラデーションメッシュ背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-white dark:from-black dark:via-primary/5 dark:to-black" />
      
      {/* 動的なオーブ */}
      <motion.div
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl dark:from-primary/10 dark:to-accent/10"
        style={{ transform: `translateY(${offset1}px)` }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -right-40 top-60 h-80 w-80 rounded-full bg-gradient-to-r from-accent/20 to-purple-500/20 blur-3xl dark:from-accent/10 dark:to-purple-500/10"
        style={{ transform: `translateY(${offset2}px)` }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/10 to-primary/10 blur-3xl dark:from-blue-500/5 dark:to-primary/5"
        style={{ transform: `translate(-50%, ${-offset3}px)` }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* ノイズオーバーレイ */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.01]">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}