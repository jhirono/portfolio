// Define TypeScript interfaces for our translations
interface Footer {
  copyright: string;
}

// Generic Project interface that can handle both public and private projects
export interface Project {
  name: string;
  description: string;
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
  [key: string]: string | Project; // This allows both the title string and any number of projects
}

// Blog posts collection
interface BlogPosts {
  title: string;
  [key: string]: string | BlogPost; // This allows both the title string and any number of blog posts
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
      subtitle: 'Ex AI Product Manager | Climbing Enthusiast(trad, sport, boulder)',
      tagline: "I'm diving into an experiment to see what a product manager can build with LLMs. Let's go! 🤘"
    },
    socialLinks: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter'
    },
    blogPosts: {
      title: 'Blog Posts',
      post1: {
        title: 'Sobaya Day 0',
        description: 'A man passionate about soba — a metaphor for product-building — rose from finance to product design. Reaching his dream, he realized he craved not scale, but hands-on creation. Still driven, he set out to build on his own terms.',
        date: 'Jan 30, 2025',
        url: 'https://medium.com/@jhirono/sobaya-day-0-a2097703ece6'
      }
    },
    projects: {
      title: 'Projects',
      todoMCP: {
        name: 'Microsoft Todo MCP for Claude',
        description: 'A Model Context Protocol service enabling Claude to interact with Microsoft Todo tasks using natural language.',
        repo: 'GitHub Repo',
        repoUrl: 'https://github.com/jhirono/todoMCP',
        demo: 'Glama.ai',
        demoUrl: 'https://glama.ai/mcp/servers/@jhirono/todoMCP',
        demo2: 'Smithery.ai',
        demoUrl2: 'https://smithery.ai/server/@jhirono/todomcp'
      },
      wineApp: {
        name: 'Wine Cellar App',
        description: 'A mobile app for wine details, cellar management, and wine pairing community.',
        comingSoon: true,
        comingSoonText: 'Coming Soon'
      },
      llmAuditHelper: {
        name: 'LLM Audit Helper',
        description: 'An AI-powered tool for auditing.',
        isPrivate: true,
        privateLabel: 'Private Project'
      },
      retirementPlanningTool: {
        name: 'Simple Retirement Planning Tool',
        description: 'A straightforward tool to help plan for retirement finances. (Parental use 😆)',
        demo: 'Website',
        repo: 'GitHub Repo',
        repoUrl: 'https://github.com/jhirono/retirementplanningtool',
        demoUrl: 'https://retirementplanningtool.vercel.app'
      },
      awesomeClimbingSearch: {
        name: 'Awesome Climbing Search',
        description: 'An AI-powered search tool for finding climbing routes in north America.',
        demo: 'Website',
        repo: 'GitHub Repo',
        repoUrl: 'https://github.com/jhirono/mtnpj',
        demoUrl: 'https://mtnpj.fly.dev'
      }
      // Add more projects here easily:
      // newProject: {
      //   name: 'New Project',
      //   description: 'Description of new project',
      //   isPrivate: false, // or true for private projects
      //   demo: 'Demo Link',
      //   repo: 'GitHub Repo',
      //   repoUrl: 'https://github.com/...',
      //   demoUrl: 'https://...'
      // }
    },
    footer: {
      copyright: '© 2025 Jumpei Hirono'
    },
    languageToggle: 'Switch to Japanese'
  },
  ja: {
    header: {
      name: 'Jumpei Hirono',
      subtitle: 'Ex AI Product Manager | Climbing Enthusiast(trad, sport, boulder)',
      tagline: "Product Manager と LLM で何が作れるのか挑戦中です 🤘"
    },
    socialLinks: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter'
    },
    blogPosts: {
      title: 'ブログ投稿',
      post1: {
        title: '第3話：フィードバックループを回せ！',
        description: '激しい市場競争の中で、生の顧客の声をどう製品に活かすか挑んだフィードバック活用の仕組み作り。',
        date: '2025年3月24日',
        url: 'https://note.com/jhirono/n/n3aa462f81809'
      },
      post2: {
        title: '第2話：ユーザーシナリオを定義せよ！',
        description: '世界中のお客さんとの会議で必死に学びながら、フィードバックをまとめていく過程。',
        date: '2025年3月23日',
        url: 'https://note.com/jhirono/n/n0a06a663f467'
      },
      post3: {
        title: '第1話：最初の仕事はボタンの実装？',
        description: 'アメリカ移住直後、PdMとして任された一見シンプルな「チェックボックス」の設計から学んだこと。',
        date: '2025年3月22日',
        url: 'https://note.com/jhirono/n/na6f9ccf5df2a'
      },
      post4: {
        title: '第0話：シリーズイントロダクション – ビジネス現場からプロダクト創造への挑戦',
        description: 'エンタープライズ領域のプロダクトマネージャ（PdM）の経験と、世の中を変える製品を作りたいという想いについて。',
        date: '2025年3月21日',
        url: 'https://note.com/jhirono/n/ncfafad6fd1b6'
      },
      post5: {
        title: 'そば屋 Day 0',
        description: 'そば作りに情熱を注ぐ男の物語—製品開発の比喩として、ファイナンスからプロダクトデザインへと成長する過程。夢を実現した彼は、規模ではなく自らの手で創造することに憧れていたことに気づきます。その情熱は今も続き、自分の条件で新たな挑戦を始めます。',
        date: '2025年1月30日',
        url: 'https://medium.com/@jhirono/sobaya-day-0-a2097703ece6'
      }
    },
    projects: {
      title: 'プロジェクト',
      todoMCP: {
        name: 'Microsoft Todo MCP for Claude',
        description: '自然言語を使用してMicrosoft Todoタスクを操作できるようにするClaude用のモデルコンテキストプロトコル（MCP）サービス。',
        repo: 'GitHub リポジトリ',
        repoUrl: 'https://github.com/jhirono/todoMCP',
        demo: 'Glama.ai',
        demoUrl: 'https://glama.ai/mcp/servers/@jhirono/todoMCP',
        demo2: 'Smithery.ai',
        demoUrl2: 'https://smithery.ai/server/@jhirono/todomcp'
      },
      wineApp: {
        name: 'ワインセラーアプリ',
        description: 'ワインの詳細情報、セラー管理、ペアリングコミュニティ機能を持つモバイルアプリ。',
        repo: 'GitHub リポジトリ',
        repoUrl: 'https://github.com/jhirono/wine',
        comingSoon: true,
        comingSoonText: '公開予定'
      },
      llmAuditHelper: {
        name: 'LLM Audit Helper',
        description: 'AIを活用した監査ツール',
        isPrivate: true,
        privateLabel: 'プライベートプロジェクト'
      },
      retirementPlanningTool: {
        name: 'シンプル退職シミュレーター',
        description: '退職後の資金計画をサポートするシンプルなツール（親用😆）',
        demo: 'ウェブサイト',
        repo: 'GitHub リポジトリ',
        repoUrl: 'https://github.com/jhirono/retirementplanningtool',
        demoUrl: 'https://retirementplanningtool.vercel.app'
      },
      awesomeClimbingSearch: {
        name: 'Awesome Climbing Search',
        description: '北米のクライミングルートを検索するためのAIツール',
        repo: 'GitHub リポジトリ',
        demo: 'ウェブサイト',
        repoUrl: 'https://github.com/jhirono/mtnpj',
        demoUrl: 'https://mtnpj.fly.dev'
      }
      // Add more projects in Japanese here
    },
    footer: {
      copyright: '© 2025 Jumpei Hirono'
    },
    languageToggle: '日本語に切り替える'
  }
}; 