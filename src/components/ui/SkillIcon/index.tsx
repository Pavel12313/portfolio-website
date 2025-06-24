import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';

export interface SkillIconProps {
  name: string;
  icon: React.ReactNode;
  category?: 'frontend' | 'backend' | 'database' | 'tool';
  className?: string;
}

/**
 * スキルアイコンコンポーネント
 * ホバー時にアニメーション効果
 */
export function SkillIcon({ icon, category = 'frontend', className }: SkillIconProps) {
  const categoryColors = {
    frontend: 'from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30',
    backend: 'from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30',
    database: 'from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30',
    tool: 'from-orange-500/20 to-red-500/20 hover:from-orange-500/30 hover:to-red-500/30',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'group relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br p-4 transition-all duration-300',
        categoryColors[category],
        'backdrop-blur-sm border border-white/10',
        className
      )}
    >
      <div className="flex h-full w-full items-center justify-center text-neutral-700 dark:text-neutral-200">
        {icon}
      </div>
    </motion.div>
  );
}