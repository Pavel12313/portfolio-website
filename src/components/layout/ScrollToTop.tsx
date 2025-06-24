import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { IconButton } from '../ui/IconButton';

/**
 * スクロールトップボタンコンポーネント
 * スクロール位置に応じて表示/非表示
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <IconButton
            icon={ArrowUp}
            label="ページトップへ"
            onClick={scrollToTop}
            className="bg-neutral-100 dark:bg-neutral-200 text-neutral-700 dark:text-neutral-900 shadow-lg hover:bg-neutral-200 dark:hover:bg-neutral-300 hover:shadow-xl border border-transparent dark:border-neutral-400"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}