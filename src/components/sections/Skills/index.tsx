import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../../ui/Section';
import { AnimatedSection } from '../../ui/AnimatedSection';
import { GradientText } from '../../ui/GradientText';
import { skillIconsMap } from '../../../data/skillIcons';
import { skills } from '../../../data/skills';
import { Skill } from '../../../types';

/**
 * シンプルでモダンなスキルアイテム
 */
const SkillItem: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const iconData = skillIconsMap[skill.name as keyof typeof skillIconsMap];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.03 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-neutral-200 border border-neutral-200 dark:border-neutral-300 hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-lg dark:hover:shadow-xl">
        {/* アイコン */}
        <div className="w-16 h-16 flex items-center justify-center text-neutral-700 dark:text-neutral-900 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
          {iconData ? (
            <div className="w-full h-full flex items-center justify-center">
              {iconData.icon}
            </div>
          ) : (
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-300 dark:to-neutral-400 flex items-center justify-center">
              <span className="text-lg font-bold">{skill.name.slice(0, 2)}</span>
            </div>
          )}
        </div>
        
        {/* スキル名 */}
        <h4 className="text-sm font-medium text-neutral-900 dark:text-neutral-900 text-center">
          {skill.name}
        </h4>
        
        {/* プログレスバー */}
        <div className="w-full">
          <div className="h-1.5 bg-neutral-200 dark:bg-neutral-300 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.03 + 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * スキルカテゴリーセクション
 */
const SkillCategory: React.FC<{ title: string; skills: Skill[]; delay: number }> = ({ title, skills, delay }) => {
  return (
    <AnimatedSection animation="fadeIn" delay={delay}>
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">
          {title}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

/**
 * スキルセクション - シンプルでクリーンなデザイン
 */
export const Skills: React.FC = () => {
  // カテゴリー別にスキルを分類
  const frontendSkills = skills.filter(s => s.category === 'frontend');
  const backendSkills = skills.filter(s => s.category === 'backend');
  const databaseSkills = skills.filter(s => s.category === 'database');
  const toolSkills = skills.filter(s => s.category === 'tool');

  return (
    <Section id="skills" className="relative bg-gray-50 dark:bg-black">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-accent/5 to-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* セクションタイトル */}
        <AnimatedSection animation="fadeInDown">
          <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
            <GradientText variant="primary">技術スタック</GradientText>
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-neutral-600 dark:text-neutral-300">
            最新の技術を活用して、パフォーマンスと保守性の高いアプリケーションを構築
          </p>
        </AnimatedSection>
        
        {/* スキルカテゴリー */}
        <div className="space-y-8">
          <SkillCategory title="フロントエンド" skills={frontendSkills} delay={0.1} />
          <SkillCategory title="バックエンド" skills={backendSkills} delay={0.2} />
          <SkillCategory title="データベース & 言語" skills={databaseSkills} delay={0.3} />
          <SkillCategory title="ツール & DevOps" skills={toolSkills} delay={0.4} />
        </div>

        {/* 追加の説明 */}
        <AnimatedSection animation="fadeIn" delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              常に新しい技術を学び、ベストプラクティスを追求しています
            </p>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
};