import { Skill } from '../types';

// スキルデータ - Pavel's actual skills
export const skills: Skill[] = [
  // フロントエンド
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Vue', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'HTML', level: 95, category: 'frontend' },
  { name: 'CSS', level: 90, category: 'frontend' },
  { name: 'TailwindCSS', level: 85, category: 'frontend' },
  
  // バックエンド
  { name: 'Rails', level: 80, category: 'backend' },
  { name: 'Python', level: 85, category: 'backend' },
  { name: 'Node.js', level: 75, category: 'backend' },
  
  // データベース
  { name: 'MySQL', level: 80, category: 'database' },
  
  // ツール
  { name: 'Git', level: 85, category: 'tool' },
  { name: 'Docker', level: 70, category: 'tool' },
  { name: 'VS Code', level: 90, category: 'tool' },
  { name: 'Figma', level: 75, category: 'tool' },
];