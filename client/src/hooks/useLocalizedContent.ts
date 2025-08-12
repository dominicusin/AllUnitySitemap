import { useLanguage } from '@/contexts/LanguageContext';
import type { MultilingualContent } from '@shared/schema';

export function useLocalizedContent() {
  const { language } = useLanguage();

  const getLocalizedContent = (content: MultilingualContent | string): string => {
    if (typeof content === 'string') {
      return content;
    }
    return content[language] || content.ru || '';
  };

  return { getLocalizedContent, language };
}