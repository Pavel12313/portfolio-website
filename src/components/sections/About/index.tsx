import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Rocket, Users } from 'lucide-react';
import { AnimatedSection } from '../../ui/AnimatedSection';
import { Card } from '../../ui/Card';
import { GradientText } from '../../ui/GradientText';

const features = [
  {
    icon: Code2,
    title: 'フロントエンド専門',
    description: 'React, Vue, TypeScript',
  },
  {
    icon: Globe,
    title: '多言語対応',
    description: '英語・日本語・露語・ヘブライ語',
  },
  {
    icon: Rocket,
    title: 'フルスタック経験',
    description: 'Rails, Python, MySQL',
  },
  {
    icon: Users,
    title: '国際的協働',
    description: 'グローバルチームでの開発',
  },
];

/**
 * モダンなアバウトセクション
 * ダークモード対応とアニメーション
 */
export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black">
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection animation="fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <GradientText variant="primary">私について</GradientText>
          </h2>
          <p className="text-center text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
            フロントエンド開発者として、モダンなWebアプリケーションを構築しています
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左側：テキストコンテンツ */}
          <AnimatedSection animation="slideInLeft" delay={0.2}>
            <div className="space-y-6">
              <p className="text-lg text-neutral-700 dark:text-neutral-400 leading-relaxed">
                こんにちは！私はPavelです。日本を拠点とする
                <span className="font-semibold text-primary dark:text-primary-light">
                  フロントエンドデベロッパー
                </span>
                として、React、Vue、TypeScriptを使用して魅力的なユーザー体験を創造しています。
              </p>
              
              <p className="text-lg text-neutral-700 dark:text-neutral-400 leading-relaxed">
                <span className="font-semibold">4カ国語</span>（英語、日本語、ロシア語、ヘブライ語）を話し、
                国際的なチームでの協働経験を活かして、多様な視点からプロジェクトに貢献しています。
              </p>
              
              <p className="text-lg text-neutral-700 dark:text-neutral-400 leading-relaxed">
                フロントエンドの専門知識に加えて、Rails、Python、MySQLなどの
                バックエンド技術の経験も持ち、フルスタックの視点から
                最適なソリューションを提供できます。
              </p>
            </div>
          </AnimatedSection>

          {/* 右側：特徴カード */}
          <AnimatedSection animation="slideInRight" delay={0.4}>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      hover
                      className="h-full p-6 bg-white/80 dark:bg-neutral-200 backdrop-blur-sm"
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/80 dark:to-accent/80">
                          <Icon className="h-6 w-6 text-primary dark:text-white" />
                        </div>
                        <h3 className="font-semibold text-neutral-900 dark:text-neutral-900">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-800">
                          {feature.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        {/* 追加の情報 */}
        <AnimatedSection animation="fadeIn" delay={0.6}>
          <Card glass className="mt-12 p-8 text-center dark:bg-neutral-200/90">
            <p className="text-lg text-neutral-700 dark:text-neutral-900">
              常に最新の技術トレンドを追求し、スキルを磨き続けています。
              <span className="block mt-2 font-semibold text-primary dark:text-primary-dark">
                品質とユーザー体験を第一に考えた開発を心がけています
              </span>
            </p>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};