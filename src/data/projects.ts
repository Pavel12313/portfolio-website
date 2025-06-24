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
  }
];