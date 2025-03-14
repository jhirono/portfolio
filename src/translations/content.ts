// Define TypeScript interfaces for our translations
interface Footer {
  copyright: string;
}

// Generic Project interface that can handle both public and private projects
interface Project {
  name: string;
  description: string;
  isPrivate?: boolean;
  privateLabel?: string;
  demo?: string;
  repo?: string;
  repoUrl?: string;
  demoUrl?: string;
}

// Projects collection with string index signature to allow for any number of projects
interface Projects {
  title: string;
  [key: string]: string | Project; // This allows both the title string and any number of projects
}

interface SocialLinks {
  github: string;
  linkedin: string;
}

interface Header {
  name: string;
  subtitle: string;
  tagline: string;
}

interface Translation {
  header: Header;
  socialLinks: SocialLinks;
  projects: Projects;
  footer: Footer;
  languageToggle: string;
}

export const translations: Record<'en' | 'ja', Translation> = {
  en: {
    header: {
      name: 'Jumpei Hirono',
      subtitle: 'Product Manager | Biz Dev | Marketing | AI & Climbing Enthusiast',
      tagline: "I'm diving into an experiment to see what a product manager can build with LLMs. Let's go! 🤘"
    },
    socialLinks: {
      github: 'GitHub',
      linkedin: 'LinkedIn'
    },
    projects: {
      title: 'Projects',
      awesomeClimbingSearch: {
        name: 'Awesome Climbing Search',
        description: 'An AI-powered search tool for finding climbing routes in north America.',
        demo: 'Website',
        repo: 'GitHub Repo',
        repoUrl: 'https://github.com/jhirono/mtnpj',
        demoUrl: 'https://mtnpj.fly.dev'
      },
      llmAuditHelper: {
        name: 'LLM Audit Helper',
        description: 'An AI-powered tool for auditing.',
        isPrivate: true,
        privateLabel: 'Private Project'
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
      subtitle: 'Product Manager | Biz Dev | Marketing | AI & Climbing Enthusiast',
      tagline: "Product Manager と LLM で何が作れるのか挑戦中です 🤘"
    },
    socialLinks: {
      github: 'GitHub',
      linkedin: 'LinkedIn'
    },
    projects: {
      title: 'プロジェクト',
      awesomeClimbingSearch: {
        name: 'Awesome Climbing Search',
        description: '北米のクライミングルートを検索するためのAIツール',
        repo: 'GitHub リポジトリ',
        demo: 'ウェブサイト',
        repoUrl: 'https://github.com/jhirono/mtnpj',
        demoUrl: 'https://mtnpj.fly.dev'
      },
      llmAuditHelper: {
        name: 'LLM Audit Helper',
        description: 'AIを活用した監査ツール',
        isPrivate: true,
        privateLabel: 'プライベートプロジェクト'
      }
      // Add more projects in Japanese here
    },
    footer: {
      copyright: '© 2025 Jumpei Hirono'
    },
    languageToggle: '日本語に切り替える'
  }
}; 