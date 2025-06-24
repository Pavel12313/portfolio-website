import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { AnimatedSection } from '../../ui/AnimatedSection';
import { GradientText } from '../../ui/GradientText';
import { Button } from '../../ui/Button';

/**
 * シンプルなコンタクトセクション
 * メールのみ
 */
export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl dark:from-primary/5 dark:to-accent/5" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-accent/10 to-purple-500/10 blur-3xl dark:from-accent/5 dark:to-purple-500/5" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection animation="fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText variant="accent">連絡先</GradientText>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
            ご質問やフィードバックがございましたら、お気軽にご連絡ください
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeInUp" delay={0.2}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              variant="gradient"
              size="lg"
              className="group shadow-xl hover:shadow-2xl"
              onClick={() => window.location.href = 'mailto:your.email@example.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              メールで連絡
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>
        </AnimatedSection>

        {/* フッター */}
        <AnimatedSection animation="fadeIn" delay={0.4}>
          <div className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-neutral-500 dark:text-neutral-400">
              © {new Date().getFullYear()} Pavel. All rights reserved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};