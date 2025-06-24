import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, Code2, Globe } from 'lucide-react';
import { Card } from '../Card';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { LazyImage } from '../LazyImage';
import { Project } from '../../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * モダンなプロジェクトカードコンポーネント
 * ホバー効果とアニメーション付き
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card hover className="group h-full flex flex-col overflow-hidden">
        {/* プロジェクト画像 */}
        <div className="relative h-56 -mx-6 -mt-6 overflow-hidden">
          {project.imageUrl && !project.imageUrl.includes('placeholder') ? (
            <LazyImage
              src={project.imageUrl}
              alt={project.title}
              className="transition-all duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-black flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              <div className="text-center p-6">
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <div key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/50 dark:bg-white/10 text-neutral-600 dark:text-neutral-300">
                      {tech}
                    </div>
                  ))}
                </div>
                <Code2 className="w-12 h-12 text-neutral-400 dark:text-neutral-700" />
              </div>
            </div>
          )}
          
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          {/* 注目バッジ */}
          {project.featured && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="absolute right-4 top-4"
            >
              <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 text-sm font-medium text-white shadow-lg">
                <Star className="h-3 w-3" fill="currentColor" />
                注目
              </div>
            </motion.div>
          )}
        </div>

        {/* プロジェクト情報 */}
        <div className="flex flex-grow flex-col p-6">
          <h3 className="mb-3 text-xl font-bold text-neutral-900 dark:text-neutral-950">
            {project.title}
          </h3>
          
          <p className="mb-4 line-clamp-3 text-neutral-600 dark:text-neutral-700">
            {project.description}
          </p>
          
          {/* 使用技術 */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="primary" size="sm">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 5 && (
              <Badge variant="default" size="sm">
                +{project.technologies.length - 5}
              </Badge>
            )}
          </div>
          
          {/* アクションボタン */}
          <div className="mt-auto flex gap-3">
            {project.githubUrl && (
              <Button
                variant="gradient"
                size="sm"
                className={project.liveUrl ? 'flex-1' : 'w-full'}
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="mr-1 h-3 w-3" />
                GitHubで見る
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <Globe className="mr-1 h-3 w-3" />
                ライブデモ
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};