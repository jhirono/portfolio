'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations/content';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function PairfectoPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeImage, setActiveImage] = useState(0);
  
  // Screenshots for carousel
  const screenshots = [
    '/pairfecto/Simulator Screenshot - iPhone 16 Pro Max - 2025-04-02 at 15.08.31.png',
    '/pairfecto/Simulator Screenshot - iPhone 16 Pro Max - 2025-04-02 at 15.08.49.png',
    '/pairfecto/Simulator Screenshot - iPhone 16 Pro Max - 2025-04-02 at 15.08.58.png',
    '/pairfecto/Simulator Screenshot - iPhone 16 Pro Max - 2025-04-02 at 15.09.05.png',
    '/pairfecto/Simulator Screenshot - iPhone 16 Pro Max - 2025-04-02 at 15.09.24.png',
    '/pairfecto/Simulator Screenshot - iPhone 16 Pro Max - 2025-04-02 at 15.09.29.png',
    '/pairfecto/Simulator Screenshot - iPhone 16 Pro Max - 2025-04-02 at 15.10.06.png',
    '/pairfecto/Simulator Screenshot - iPhone 16 Pro Max - 2025-04-02 at 15.10.18.png',
    '/pairfecto/Simulator Screenshot - iPhone 16 Pro Max - 2025-04-02 at 15.10.29.png',
  ];

  // App features
  const features = language === 'en' 
    ? [
        "Instant wine label scanning",
        "Rich wine details including region, style, and tasting notes",
        "Personalized food pairing suggestions",
        "Side-by-side wine comparisons",
        "Smart cellar management with 'Drink Now' and 'Ready Later' indicators",
        "Graphical overview of your cellar"
      ]
    : [
        "ワインラベルを瞬時にスキャン",
        "産地、スタイル、テイスティングノートなどの詳細情報",
        "パーソナライズされたフードペアリング提案",
        "ワインの横並び比較",
        "'今飲む'と'熟成させる'を示すスマートなセラー管理",
        "セラーのグラフィカルな概要表示"
      ];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8">
      <main className="max-w-6xl w-full mx-auto flex flex-col gap-10 py-10">
        {/* Back to home link */}
        <Link 
          href="/" 
          className="text-blue-500 hover:text-blue-700 transition-colors flex items-center mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {language === 'en' ? 'Back to Home' : 'ホームに戻る'}
        </Link>

        {/* App Title */}
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Pairfecto</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Instantly scan, compare, and manage your wines. Smart food pairings and beautiful cellar tracking — perfect for wine lovers everywhere.'
              : 'ワインラベルを瞬時にスキャンし、比較、管理。スマートなフードペアリングと美しいセラー管理機能を備え、ワイン愛好家に最適なアプリ。'}
          </p>
        </header>

        {/* App screenshots carousel */}
        <section className="mb-12 relative">
          <div className="relative h-[600px] w-full max-w-[300px] mx-auto overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={screenshots[activeImage]}
              alt={`Pairfecto app screenshot ${activeImage + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-3xl"
              priority
            />
            {/* Navigation arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center mt-4">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-2 h-2 mx-1 rounded-full ${
                  index === activeImage ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* App description */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-2xl font-bold mb-4">{language === 'en' ? 'About Pairfecto' : 'Pairfectoについて'}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {language === 'en' 
              ? "Discover your perfect bottle with ease. Our wine app lets you scan wine labels in seconds to access detailed information and tailored food pairings. Whether you're browsing in-store or planning a dinner at home, quickly compare wines to find the best match for your taste and budget. Keep track of your wine collection with an intuitive digital cellar. Know what to drink now and what to save for later — all visualized beautifully."
              : "完璧なワインを簡単に見つけることができます。このアプリでは、ワインラベルを数秒でスキャンし、詳細情報やカスタマイズされたフードペアリングにアクセスできます。お店で選んでいる時や自宅でディナーを計画している時に、ワインを素早く比較して、あなたの好みや予算に最適なものを見つけられます。直感的なデジタルセラーでワインコレクションを管理し、今飲むべきワインと後で楽しむためのワインを美しく視覚化します。"}
          </p>
          <h3 className="text-xl font-semibold mb-3">{language === 'en' ? 'Key Features:' : '主な機能:'}</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-300">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <p className="text-gray-600 dark:text-gray-300 italic mb-6">
            {language === 'en' 
              ? "Coming soon: advanced food pairing recommendations tailored to your unique taste."
              : "近日公開: あなた独自の味覚に合わせた高度なフードペアリングレコメンデーション。"}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {language === 'en' 
              ? "Ideal for wine lovers, collectors, and casual sippers alike."
              : "ワイン愛好家、コレクター、カジュアルな愛飲家に最適です。"}
          </p>
        </section>

        {/* Privacy Policy */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">{language === 'en' ? 'Privacy Policy' : 'プライバシーポリシー'}</h2>
          <div className="text-gray-600 dark:text-gray-300 text-sm space-y-4">
            <p>
              {language === 'en' 
                ? "At Pairfecto, we take your privacy seriously. Here's how we handle your data:"
                : "Pairfectoでは、お客様のプライバシーを重視しています。以下は、データの取り扱い方法です："}
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold text-base">{language === 'en' ? 'Data Collection' : 'データ収集'}</h3>
              <p>
                {language === 'en' 
                  ? "We collect information needed to provide our services, including wine preferences, scanning history, cellar inventory, and app usage statistics to improve your experience."
                  : "サービス提供に必要な情報（ワインの好み、スキャン履歴、セラーインベントリ、アプリ使用統計など）を収集し、ユーザー体験の向上に役立てています。"}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-base">{language === 'en' ? 'Data Storage' : 'データの保存'}</h3>
              <p>
                {language === 'en' 
                  ? "Your cellar data is stored securely in the cloud with industry-standard encryption to ensure the privacy and security of your wine collection information."
                  : "お客様のセラーデータは、業界標準の暗号化を使用してクラウドに安全に保存され、ワインコレクション情報のプライバシーとセキュリティを確保しています。"}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-base">{language === 'en' ? 'Data Usage' : 'データの使用'}</h3>
              <p>
                {language === 'en' 
                  ? "We use your data to provide personalized wine recommendations, food pairings, and cellar management insights. We do not sell your personal information to third parties."
                  : "お客様のデータは、パーソナライズされたワインの推奨、フードペアリング、セラー管理のインサイトを提供するために使用されます。お客様の個人情報を第三者に販売することはありません。"}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-base">{language === 'en' ? 'User Control' : 'ユーザーコントロール'}</h3>
              <p>
                {language === 'en' 
                  ? "You can view, edit, or delete your data from within the app at any time. You can also adjust your privacy settings to control what information is shared."
                  : "アプリ内からいつでもデータの閲覧、編集、削除が可能です。また、プライバシー設定を調整して、共有される情報をコントロールすることもできます。"}
              </p>
            </div>
            <p className="mt-4 italic text-xs">
              {language === 'en' 
                ? "For complete details, please refer to our full privacy policy when the app launches."
                : "詳細については、アプリ起動時に完全なプライバシーポリシーをご確認ください。"}
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto w-full max-w-6xl mx-auto text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        <p>{t.footer.copyright}</p>
      </footer>
    </div>
  );
} 