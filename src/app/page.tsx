'use client';

import Link from 'next/link';

import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';

const content = {
  en: {
    brand: 'Atelier Hirono LLC',
    name: 'Jumpei Hirono',
    role: 'Enterprise Platform Builder for B2B Startups',
    intro:
      'I help B2B platform services, data platform, and AI startups turn early products into scalable product platforms, working directly with founders to align product, engineering, and go-to-market.',
    credibility:
      'Current product leader for a Series B startup in retail. Former Microsoft Azure AI business development leader.',
    primaryCta: 'LinkedIn',
    sections: {
      problem: {
        title: 'The Problem',
        body: 'Many startups ship a first product, then hit a wall. Sales asks for features. Engineering responds ticket by ticket. Product direction becomes fragmented. The company keeps shipping, but the product system itself does not scale.',
      },
      build: {
        title: 'What I Build',
        body: 'I help founders move from feature delivery to product platform thinking by connecting strategy, execution, customer value, and GTM into a system that can scale.',
        points: [
          'Platform strategy beyond reactive roadmap work',
          'Alignment across product, engineering, sales, and support',
          'Operating rhythms that improve prioritization and learning',
        ],
      },
      work: {
        title: 'How I Work',
        points: [
          'Fractional VP of Product for teams that need part-time product leadership and platform thinking',
          'Product / platform strategy engagements for clarifying ICP, value proposition, packaging, and the next stage of growth',
        ],
      },
      background: {
        title: 'Why Me',
        body: 'My background spans finance, marketing, sales, business development, and product management. That lets me work across functions and help founders align the company, not just manage a backlog.',
        points: [
          'Product leader for a Series B startup in retail',
          'Microsoft Azure AI',
          'Built Microsoft AI business development in Japan from scratch, including partner ecosystem, training programs, community growth, and go-to-market evangelism',
        ],
      },
      ai: {
        title: 'AI-Native Product Development',
        body: 'I actively use LLM-enabled workflows to accelerate product development and decision-making. The goal is not AI theater, but helping teams ship and learn faster.',
      },
      writing: {
        title: 'Selected Writing',
        items: [
          {
            title: 'LinkedIn essay',
            description: 'On product building and operator thinking.',
            href: 'https://www.linkedin.com/posts/activity-7435058552957923328-18fO',
          },
          {
            title: 'LinkedIn essay',
            description: 'On building, judgment, and how I think about the work.',
            href: 'https://www.linkedin.com/posts/activity-7389139268352471040-ro_H',
          },
        ],
      },
      contact: {
        title: 'Contact',
        body: 'If you are building a B2B platform services, data, or AI company and want to talk, reach out on LinkedIn.',
      },
    },
  },
  ja: {
    brand: 'Atelier Hirono LLC',
    name: 'Jumpei Hirono',
    role: 'B2Bスタートアップ向け エンタープライズ・プラットフォームビルダー',
    intro:
      'B2Bプラットフォームサービス、データ基盤、AIスタートアップに対して、初期プロダクトをスケーラブルなプロダクトプラットフォームへ進化させる支援をしています。創業者と直接並走しながら、プロダクト、エンジニアリング、GTMをつなぎます。',
    credibility:
      '現在はリテール領域のシリーズBスタートアップでプロダクトをリード。以前は Microsoft Azure AI の事業開発リーダー。',
    primaryCta: 'LinkedIn',
    sections: {
      problem: {
        title: 'よくある壁',
        body: '多くのスタートアップは最初のプロダクトを作った後に壁にぶつかります。営業は機能追加を求め、開発はチケット単位で対応し、プロダクトの方向性は分断されていく。出荷は続いても、プロダクトを支える仕組み自体はスケールしません。',
      },
      build: {
        title: 'つくるもの',
        body: '私は、場当たり的な機能開発からプロダクトプラットフォーム思考へ移るために、戦略、実行、顧客価値、GTMをつないでいきます。',
        points: [
          '受け身のロードマップ運用を超えるプラットフォーム戦略',
          'プロダクト、開発、営業、サポートの連携',
          '優先順位付けと学習を前に進める運営リズム',
        ],
      },
      work: {
        title: '関わり方',
        points: [
          'Fractional VP of Product: パートタイムでプロダクトリーダーシップとプラットフォーム思考を担う形',
          'Product / Platform Strategy: ICP、価値提案、パッケージング、次の成長段階を整理する支援',
        ],
      },
      background: {
        title: 'なぜ私か',
        body: 'ファイナンス、マーケティング、営業、事業開発、プロダクトマネジメントをまたいだ経験があるため、PMの言葉だけでなく、創業者、エンジニア、事業側それぞれの視点で会話できます。',
        points: [
          'リテール領域のシリーズBスタートアップでプロダクトをリード',
          'Microsoft Azure AI',
          '日本での Microsoft AI 事業立ち上げをゼロから推進し、パートナーエコシステム、研修事業、コミュニティ、普及活動を構築',
        ],
      },
      ai: {
        title: 'AIネイティブな進め方',
        body: 'LLMを活用したワークフローを日常的に使い、プロダクト開発と意思決定を加速させています。目的はAIを見せることではなく、チームがより速く学び、より速く届けられる状態をつくることです。',
      },
      writing: {
        title: 'Selected Writing',
        items: [
          {
            title: 'LinkedIn essay',
            description: 'プロダクトづくりとオペレーターとしての考え方。',
            href: 'https://www.linkedin.com/posts/activity-7435058552957923328-18fO',
          },
          {
            title: 'LinkedIn essay',
            description: '判断軸や、どう仕事に向き合っているかについて。',
            href: 'https://www.linkedin.com/posts/activity-7389139268352471040-ro_H',
          },
        ],
      },
      contact: {
        title: 'Contact',
        body: 'B2Bプラットフォームサービス、データ、AI領域で話したいことがあれば、LinkedInからご連絡ください。',
      },
    },
  },
} as const;

export default function Home() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="atelier-page">
      <LanguageToggle />

      <main className="atelier-container">
        <header className="atelier-header">
          <p className="atelier-brand">{t.brand}</p>
          <h1 className="atelier-name">{t.name}</h1>
          <p className="atelier-role">{t.role}</p>
          <p className="atelier-intro">{t.intro}</p>
          <p className="atelier-credibility">{t.credibility}</p>
          <div className="atelier-actions">
            <Link
              href="https://www.linkedin.com/in/jhirono/"
              target="_blank"
              rel="noreferrer"
              className="atelier-link-button"
            >
              {t.primaryCta}
            </Link>
          </div>
        </header>

        <section className="atelier-section">
          <h2>{t.sections.problem.title}</h2>
          <p>{t.sections.problem.body}</p>
        </section>

        <section className="atelier-section">
          <h2>{t.sections.build.title}</h2>
          <p>{t.sections.build.body}</p>
          <ul className="atelier-list">
            {t.sections.build.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="atelier-section">
          <h2>{t.sections.work.title}</h2>
          <ul className="atelier-list">
            {t.sections.work.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="atelier-section">
          <h2>{t.sections.background.title}</h2>
          <p>{t.sections.background.body}</p>
          <ul className="atelier-list">
            {t.sections.background.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="atelier-section">
          <h2>{t.sections.ai.title}</h2>
          <p>{t.sections.ai.body}</p>
        </section>

        <section className="atelier-section">
          <h2>{t.sections.writing.title}</h2>
          <div className="atelier-writing">
            {t.sections.writing.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="atelier-writing-link"
              >
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="atelier-section atelier-contact">
          <h2>{t.sections.contact.title}</h2>
          <p>{t.sections.contact.body}</p>
          <div className="atelier-footer-links">
            <Link href="https://www.linkedin.com/in/jhirono/" target="_blank" rel="noreferrer">
              LinkedIn
            </Link>
            <Link href="https://github.com/jhirono" target="_blank" rel="noreferrer">
              GitHub
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
