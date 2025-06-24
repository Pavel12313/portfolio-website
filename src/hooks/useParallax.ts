import { useEffect, useState } from 'react';

/**
 * パララックス効果用のカスタムフック
 * スクロール位置に基づいて要素を動かす
 */
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setOffset(scrolled * speed);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
}