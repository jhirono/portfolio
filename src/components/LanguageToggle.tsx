import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/translations/content';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="absolute right-4 top-4 z-20 rounded-full border px-3 py-1.5 text-sm font-semibold text-[var(--foreground)] backdrop-blur-sm transition-colors hover:border-[rgba(22,93,82,0.28)] hover:bg-white/60 sm:right-8 sm:top-8"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--card)',
      }}
      aria-label={translations[language].languageToggle}
    >
      {language === 'en' ? '🇯🇵' : '🇺🇸'}
    </button>
  );
} 
