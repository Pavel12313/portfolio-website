import React from 'react';

// セクションのプロパティ定義
interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

// 再利用可能なセクションコンポーネント
export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  fullHeight = false
}) => {
  return (
    <section
      id={id}
      className={`
        ${fullHeight ? 'min-h-screen' : ''}
        ${fullHeight ? 'py-8' : 'py-16 md:py-24'} px-4 md:px-6 lg:px-8
        ${!className.includes('bg-') ? 'bg-white dark:bg-black' : ''}
        ${className}
      `}
    >
      <div className={`${fullHeight ? 'h-full' : ''} max-w-7xl mx-auto`}>
        {children}
      </div>
    </section>
  );
};