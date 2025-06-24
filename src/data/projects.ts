import { Project } from '../types';

// プロジェクトデータ
export const projects: Project[] = [
  {
    id: '1',
    title: 'QuickDraw-Screenshot',
    description: '軽量・高速Windowsスクリーンショットツール。効率的なコード設計で、注釈、アンドゥ/リドゥ、システムトレイ統合など豊富な機能を実現。',
    technologies: ['Python', 'Tkinter', 'Win32 API', 'Pillow', 'Command Pattern'],
    imageUrl: '/api/placeholder/600/400',
    githubUrl: 'https://github.com/Pavel12313/QuickDraw-Screenshot',
    featured: true
  },
  {
    id: '2',
    title: 'ポートフォリオWebサイト',
    description: 'React 19とTypeScriptで構築したモダンなポートフォリオサイト。ダークモード、スムーズなアニメーション、レスポンシブデザインを実装。',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    imageUrl: '/api/placeholder/600/400',
    githubUrl: 'https://github.com/Pavel12313/portfolio-website',
    // liveUrl を削除 - ユーザーは既にこのサイトにいるため
    featured: false
  }
];