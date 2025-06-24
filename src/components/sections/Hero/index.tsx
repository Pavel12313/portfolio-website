import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Button } from '../../ui/Button';
import { IconButton } from '../../ui/IconButton';
import { GradientText } from '../../ui/GradientText';
import { ParallaxBackground } from '../../ui/ParallaxBackground';

/**
 * 新しいヒーローセクション
 * パララックス効果とモダンデザイン
 */
export const Hero: React.FC = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* パララックス背景 */}
      <ParallaxBackground />
      
      {/* コンテンツ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        {/* ターミナルプロンプト風の装飾 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-neutral-100/80 dark:bg-neutral-200 backdrop-blur-md rounded-full border border-neutral-200 dark:border-neutral-400"
        >
          <Terminal className="w-4 h-4 text-primary dark:text-primary-dark" />
          <span className="text-sm font-mono text-neutral-700 dark:text-neutral-900">
            Front-End Developer | Japan
          </span>
        </motion.div>

        {/* 名前 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
        >
          <span className="block text-neutral-900 dark:text-white">
            こんにちは、私は
          </span>
          <GradientText variant="accent" className="block mt-2">
            Pavel
          </GradientText>
        </motion.h1>

        {/* 説明 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed"
        >
          美しく直感的な
          <span className="text-primary dark:text-primary-light font-semibold">
            {" "}ユーザーインターフェース{" "}
          </span>
          を構築し、日本でフロントエンド開発に情熱を注いでいます
        </motion.p>

        {/* CTA ボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            variant="gradient"
            className="group shadow-xl hover:shadow-2xl"
            onClick={() => handleScroll('projects')}
          >
            作品を見る
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2"
            onClick={() => handleScroll('about')}
          >
            私について
          </Button>
        </motion.div>

        {/* ソーシャルリンク */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center gap-4 mb-20"
        >
          <IconButton
            icon={Github}
            label="GitHub"
            variant="ghost"
            className="bg-neutral-100/50 dark:bg-neutral-200 backdrop-blur-sm hover:bg-neutral-200/80 dark:hover:bg-neutral-300 border border-transparent dark:border-neutral-400"
            onClick={() => window.open('https://github.com', '_blank')}
          />
          <IconButton
            icon={Linkedin}
            label="LinkedIn"
            variant="ghost"
            className="bg-neutral-100/50 dark:bg-neutral-200 backdrop-blur-sm hover:bg-neutral-200/80 dark:hover:bg-neutral-300 border border-transparent dark:border-neutral-400"
            onClick={() => window.open('https://linkedin.com', '_blank')}
          />
          <IconButton
            icon={Mail}
            label="Email"
            variant="ghost"
            className="bg-neutral-100/50 dark:bg-neutral-200 backdrop-blur-sm hover:bg-neutral-200/80 dark:hover:bg-neutral-300 border border-transparent dark:border-neutral-400"
            onClick={() => window.location.href = 'mailto:example@email.com'}
          />
        </motion.div>

        {/* スクロールインジケーター */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => handleScroll('about')}
            className="p-2 rounded-full bg-neutral-100/50 dark:bg-neutral-200 backdrop-blur-sm hover:bg-neutral-200/80 dark:hover:bg-neutral-300 transition-all border border-transparent dark:border-neutral-400"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 text-neutral-600 dark:text-neutral-900" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};