import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import { cn } from '../../../utils/cn';

/**
 * モダンなダークモード切替ボタン
 * スムーズなアニメーション付き
 */
export const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className={cn(
        'group relative flex h-12 w-12 items-center justify-center rounded-xl',
        'bg-neutral-100 dark:bg-neutral-800',
        'transition-all duration-300',
        'hover:bg-neutral-200 dark:hover:bg-neutral-700',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
      )}
      aria-label={isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative h-6 w-6">
        {/* 太陽アイコン */}
        <motion.div
          initial={false}
          animate={{
            scale: isDarkMode ? 0 : 1,
            rotate: isDarkMode ? 180 : 0,
            opacity: isDarkMode ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Sun className="h-6 w-6 text-orange-500" />
        </motion.div>

        {/* 月アイコン */}
        <motion.div
          initial={false}
          animate={{
            scale: isDarkMode ? 1 : 0,
            rotate: isDarkMode ? 0 : -180,
            opacity: isDarkMode ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Moon className="h-6 w-6 text-blue-500" />
        </motion.div>
      </div>

      {/* 背景グロー効果 */}
      <div
        className={cn(
          'absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100',
          isDarkMode ? 'bg-blue-500/20' : 'bg-orange-500/20'
        )}
      />
    </motion.button>
  );
};