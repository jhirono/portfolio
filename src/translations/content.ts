// Define TypeScript interfaces for our translations
interface Footer {
  copyright: string;
}

// Generic Project interface that can handle both public and private projects
export interface Project {
  name: string;
  description: string;
  status: 'active' | 'maintenance';
  isPrivate?: boolean;
  privateLabel?: string;
  demo?: string;
  repo?: string;
  repoUrl?: string;
  demoUrl?: string;
  demo2?: string;
  demoUrl2?: string;
  comingSoon?: boolean;
  comingSoonText?: string;
}

// Blog post interface
export interface BlogPost {
  title: string;
  description: string;
  date: string;
  url: string;
}

// Projects collection with string index signature to allow for any number of projects
interface Projects {
  title: string;
  activeTitle: string;
  maintenanceTitle: string;
  [key: string]: string | Project;
}

// Blog posts collection
interface BlogPosts {
  title: string;
  [key: string]: string | BlogPost;
}

interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

interface Header {
  name: string;
  subtitle: string;
  tagline: string;
}

interface Translation {
  header: Header;
  socialLinks: SocialLinks;
  blogPosts: BlogPosts;
  projects: Projects;
  footer: Footer;
  languageToggle: string;
}

export const translations: Record<'en' | 'ja', Translation> = {
  en: {
    header: {
      name: 'Jumpei Hirono',
      subtitle: 'Product Builder | ex-AI Product Manager | Climbing Enthusiast',
      tagline: "Having an adventure grounded in deep connections with people, embedding my personal sensitivity, aesthetics, and values into products; discovering beauty and synergy; enjoying the challenge of exploring the unknown; and sharing this journey with the world and others"
    },
    socialLinks: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter'
    },
    blogPosts: {
      title: 'Blog Posts',
      post2: {
        title: 'Clarifying My Vision',
        description: 'Reflections on defining my personal vision and the journey of aligning my work with my values and aspirations.',
        date: 'Apr 1, 2025',
        url: 'https://medium.com/@jhirono/clarifying-my-vision-b1ba953142ae'
      },
      post1: {
        title: 'Sobaya Day 0',
        description: 'A man passionate about soba — a metaphor for product-building — rose from finance to product design. Reaching his dream, he realized he craved not scale, but hands-on creation. Still driven, he set out to build on his own terms.',
        date: 'Jan 30, 2025',
        url: 'https://medium.com/@jhirono/sobaya-day-0-a2097703ece6'
      }
    },
    projects: {
      title: 'Projects',
      activeTitle: 'Active Projects',
      maintenanceTitle: 'Maintenance Mode',
      mcpProductManager: {
        name: 'MCP for Product Managers',
        description: 'Model Context Protocol service to help Product Managers clarify Jobs-to-be-Done and user scenarios from various user feedback.',
        status: 'active',
        comingSoon: true,
        comingSoonText: 'Coming Soon',
        repo: 'GitHub Repo',
        repoUrl: 'https://github.com/jhirono/pdm-ai'
      },
      productConsulting: {
        name: 'Series B Startup in Retail',
        description: 'Helping a Series B startup shape product strategy and establish scalable product management frameworks — for my growth, their growth, and the fun of building together.',
        status: 'active',
        isPrivate: true,
        privateLabel: 'Private Project'
      },
      pairfecto: {
        name: 'Pairfecto',
        description: 'Instantly scan, compare, and manage your wines with smart food pairings and beautiful cellar tracking — perfect for wine lovers everywhere.',
        status: 'active',
        demo: 'Learn More',
        demoUrl: '/pairfecto',
      },
      todoMCP: {
        name: 'Microsoft Todo MCP for Claude',
        description: 'A Model Context Protocol service enabling Claude to interact with Microsoft Todo tasks using natural language.',
        status: 'active',
        repo: 'GitHub Repo',
        repoUrl: 'https://github.com/jhirono/todoMCP',
        demo: 'Glama.ai',
        demoUrl: 'https://glama.ai/mcp/servers/@jhirono/todoMCP',
        demo2: 'Smithery.ai',
        demoUrl2: 'https://smithery.ai/server/@jhirono/todomcp'
      },
      llmAuditHelper: {
        name: 'LLM Audit Helper',
        description: 'An AI-powered tool for auditing.',
        status: 'maintenance',
        isPrivate: true,
        privateLabel: 'Private Project'
      },
      retirementPlanningTool: {
        name: 'Simple Retirement Planning Tool',
        description: 'A straightforward tool to help plan for retirement finances. (Parental use 😆)',
        status: 'maintenance',
        demo: 'Website',
        repo: 'GitHub Repo',
        repoUrl: 'https://github.com/jhirono/retirementplanningtool',
        demoUrl: 'https://retirementplanningtool.vercel.app'
      },
      awesomeClimbingSearch: {
        name: 'Awesome Climbing Search',
        description: 'An AI-powered search tool for finding climbing routes in north America.',
        status: 'active',
        demo: 'Website',
        repo: 'GitHub Repo',
        repoUrl: 'https://github.com/jhirono/mtnpj',
        demoUrl: 'https://mtnpj.fly.dev'
      }
// Add more projects here easily:
      // newProject: {
      //   name: 'New Project',
      //   description: 'Description of new project',
      //   status: 'active',
      //   isPrivate: false,
      //   demo: 'Demo Link',
      //   repo: 'GitHub Repo',
      //   repoUrl: 'https://github.com/...',
      //   demoUrl: 'https://...'
      // }
    },
    footer: {
      copyright: '© 2026 Jumpei Hirono'
    },
    languageToggle: 'Switch to Japanese'
  },
  ja: {
    header: {
      name: 'Jumpei Hirono',
      subtitle: 'Product Builder | ex-AI Product Manager | Climbing Enthusiast',
      tagline: "人との深いつながりを軸に、自分の感性や美意識、価値観をプロダクトに込め、美しさや相乗効果を発見し、未知なる挑戦を楽しみながら世界や人々と分かち合う冒険中"
    },
    socialLinks: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter'
    },
    blogPosts: {
      title: 'ブログ投稿',
      post3: {
        title: '私のビジョンを明確にする',
        description: '個人的なビジョンを定義し、自分の価値観や願望に仕事を合わせていく旅についての考察。',
        date: '2025年4月1日',
        url: 'https://note.com/jhirono/n/n2023a92a8d86'
      },
      post1: {
        title: '第0話：シリーズイントロダクション – ビジネス現場からプロダクト創造への挑戦',
        description: 'エンタープライズ領域のプロダクトマネージャ（PdM）の経験と、世の中を変える製品を作りたいという想いについて。8回シリーズ',
        date: '2025年3月21日',
        url: 'https://note.com/jhirono/n/ncfafad6fd1b6'
      },
      post2: {
        title: 'そば屋 Day 0',
        description: 'そば作りに情熱を注ぐ男の物語—製品開発の比喩として、ファイナンスからプロダクトデザインへと成長する過程。夢を実現した彼は、規模ではなく自らの手で創造することに憧れていたことに気づきます。その情熱は今も続き、自分の条件で新たな挑戦を始めます。',
        date: '2025年1月30日',
        url: 'https://medium.com/@jhirono/sobaya-day-0-a2097703ece6'
      }
    },
    projects: {
      title: 'プロジェクト',
      activeTitle: '開発中のプロジェクト',
      maintenanceTitle: 'メンテナンスモード',
      mcpProductManager: {
        name: 'MCP for Product Managers',
        description: 'プロダクトマネージャーがさまざまなユーザーフィードバックからJTBD（Jobs-to-be-Done）やユーザーシナリオを明確化するためのModel Context Protocolサービス。',
        status: 'active',
        comingSoon: true,
        comingSoonText: '近日公開',
        repo: 'GitHub リポジトリ',
        repoUrl: 'https://github.com/jhirono/pdm-ai'
      },
      productConsulting: {
        name: 'シリーズBスタートアップコンサルティング',
        description: 'シリーズBスタートアップの製品戦略の形成と製品管理フレームワークの確立を支援',
        status: 'active',
        isPrivate: true,
        privateLabel: 'プライベートプロジェクト'
      },
      pairfecto: {
        name: 'Pairfecto',
        description: 'ワインラベルを瞬時にスキャンし、比較、管理。スマートなフードペアリングと美しいセラー管理機能を備え、ワイン愛好家に最適なアプリ。',
        status: 'active',
        demo: '詳細を見る',
        demoUrl: '/pairfecto',
      },
      todoMCP: {
        name: 'Microsoft Todo MCP for Claude',
        description: '自然言語を使用してMicrosoft Todoタスクを操作できるようにするClaude用のモデルコンテキストプロトコル（MCP）サービス。',
        status: 'active',
        repo: 'GitHub リポジトリ',
        repoUrl: 'https://github.com/jhirono/todoMCP',
        demo: 'Glama.ai',
        demoUrl: 'https://glama.ai/mcp/servers/@jhirono/todoMCP',
        demo2: 'Smithery.ai',
        demoUrl2: 'https://smithery.ai/server/@jhirono/todomcp'
      },
      llmAuditHelper: {
        name: 'LLM Audit Helper',
        description: 'AIを活用した監査ツール',
        status: 'maintenance',
        isPrivate: true,
        privateLabel: 'プライベートプロジェクト'
      },
      retirementPlanningTool: {
        name: 'シンプル退職シミュレーター',
        description: '退職後の資金計画をサポートするシンプルなツール（親用😆）',
        status: 'maintenance',
        demo: 'ウェブサイト',
        repo: 'GitHub リポジトリ',
        repoUrl: 'https://github.com/jhirono/retirementplanningtool',
        demoUrl: 'https://retirementplanningtool.vercel.app'
      },
      awesomeClimbingSearch: {
        name: 'Awesome Climbing Search',
        description: '北米のクライミングルートを検索するためのAIツール',
        status: 'active',
        repo: 'GitHub リポジトリ',
        demo: 'ウェブサイト',
        repoUrl: 'https://github.com/jhirono/mtnpj',
        demoUrl: 'https://mtnpj.fly.dev'
      }
    },
    footer: {
      copyright: '© 2026 Jumpei Hirono'
    },
    languageToggle: '日本語に切り替える'
  }
};
