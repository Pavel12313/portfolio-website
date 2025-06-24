import { useState, useEffect, useRef } from 'react';
import { cn } from '../../../utils/cn';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
  onLoad?: () => void;
}

/**
 * 遅延読み込み対応の画像コンポーネント
 * Intersection Observerを使用
 */
export function LazyImage({
  src,
  alt,
  className,
  placeholderClassName,
  onLoad,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* プレースホルダー */}
      {!isLoaded && (
        <div
          className={cn(
            'absolute inset-0 animate-pulse bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700',
            placeholderClassName
          )}
        />
      )}

      {/* 実際の画像 */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-500',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
        />
      )}
    </div>
  );
}