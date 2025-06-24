import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { DarkModeToggle } from './components/ui';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { useScrollProgress } from './hooks';
import { Hero, About, Skills, Projects, Contact } from './components/sections';

function App() {
  const scrollProgress = useScrollProgress();
  
  /* スムーズスクロールの有効化と水平スクロール防止 */
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.documentElement.style.overflowX = 'auto';
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black transition-colors overflow-x-hidden">
        {/* スクロールプログレスバー */}
        <motion.div
          className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-primary to-accent"
          style={{ width: `${scrollProgress * 100}%` }}
        />
        {/* ダークモード切替ボタン */}
        <div className="fixed right-4 top-4 z-50">
          <DarkModeToggle />
        </div>
        
        {/* スクロールトップボタン */}
        <ScrollToTop />
        
        {/* メインコンテンツ */}
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;