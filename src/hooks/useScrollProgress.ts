import { useEffect, useState } from 'react';

/**
 * スクロール進行状況を追跡するカスタムフック
 * プログレスバーやスクロールインジケーターに使用
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return progress;
}