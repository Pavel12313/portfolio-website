// スキルのタイプ定義
export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'language' | 'tool';
}

// プロジェクトのタイプ定義
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// 連絡先リンクのタイプ定義
export interface ContactLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'email';
}