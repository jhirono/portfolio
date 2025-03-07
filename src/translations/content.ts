// Define TypeScript interfaces for our translations
interface Footer {
  copyright: string;
  built: string;
}

interface AwesomeClimbingSearch {
  name: string;
  description: string;
  demo: string;
  repo: string;
  repoUrl: string;
  demoUrl: string;
}

interface Projects {
  title: string;
  awesomeClimbingSearch: AwesomeClimbingSearch;
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
        description: 'An AI-powered search tool for finding climbing routes.',
        demo: 'Live Service',
        repo: 'GitHub Repo',
        repoUrl: 'https://github.com/jhirono/mtnpj',
        demoUrl: 'https://mtnpj.fly.dev'
      }
    },
    footer: {
      copyright: '© 2025 Jumpei Hirono',
      built: 'Built with Next.js & Tailwind CSS'
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
        description: 'クライミングルートを検索するためのAIツール',
        repo: 'GitHub リポジトリ',
        demo: 'ライブサービス',
        repoUrl: 'https://github.com/jhirono/mtnpj',
        demoUrl: 'https://mtnpj.fly.dev'
      }
    },
    footer: {
      copyright: '© 2025 Jumpei Hirono',
      built: 'Built with Next.js & Tailwind CSS'
    },
    languageToggle: '日本語に切り替える'
  }
}; 