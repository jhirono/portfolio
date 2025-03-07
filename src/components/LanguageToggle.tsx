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
      className="absolute top-4 right-4 px-3 py-1.5 text-sm rounded-full bg-white/10 
                border border-gray-200 hover:bg-gray-100 transition-colors 
                dark:border-gray-700 dark:hover:bg-gray-800"
      aria-label={translations[language].languageToggle}
    >
      {language === 'en' ? '🇯🇵' : '🇺🇸'}
    </button>
  );
} 