import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../../ui/Section';
import { AnimatedSection } from '../../ui/AnimatedSection';
import { ProjectCard } from '../../ui/ProjectCard';
import { Button } from '../../ui/Button';
import { GradientText } from '../../ui/GradientText';
import { projects } from '../../../data/projects';

/**
 * プロジェクトセクションコンポーネント
 * フィルター機能付きのモダンなプロジェクトギャラリー
 */
export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  /* フィルタリングとソート */
  const filteredProjects = projects
    .filter(project => filter === 'all' || project.featured)
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

  return (
    <Section id="projects" className="relative overflow-hidden bg-white dark:bg-black">
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(#374151_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10">
        {/* セクションタイトル */}
        <AnimatedSection animation="fadeInDown">
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
            <GradientText variant="accent">作品ポートフォリオ</GradientText>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-neutral-600 dark:text-neutral-300">
            問題解決とユーザー体験の向上に焦点を当てたプロジェクト集
          </p>
        </AnimatedSection>

        {/* フィルターボタン */}
        <AnimatedSection animation="fadeIn" delay={0.2}>
          <div className="mb-12 flex justify-center gap-4">
            <Button
              variant={filter === 'all' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              すべて
            </Button>
            <Button
              variant={filter === 'featured' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter('featured')}
            >
              注目プロジェクト
            </Button>
          </div>
        </AnimatedSection>

        {/* プロジェクトグリッド */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* 追加プロジェクトへのリンク */}
        <AnimatedSection animation="fadeIn" delay={0.4}>
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              GitHubでさらに見る
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
};