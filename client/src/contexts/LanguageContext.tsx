import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Language } from '@shared/schema';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language labels for UI
const languageLabels: Record<Language, string> = {
  ru: 'Русский',
  en: 'English',
  cn: '中文',
};

// UI translations
const uiTranslations: Record<string, Record<Language, string>> = {
  'nav.home': {
    ru: 'Главная',
    en: 'Home',
    cn: '首页',
  },
  'nav.manifest': {
    ru: 'Манифест',
    en: 'Manifest',
    cn: '宣言',
  },
  'nav.codex': {
    ru: 'Кодекс',
    en: 'Codex',
    cn: '法典',
  },
  'nav.institute': {
    ru: 'Институт',
    en: 'Institute',
    cn: '研究院',
  },
  'nav.journal': {
    ru: 'Журнал',
    en: 'Journal',
    cn: '期刊',
  },
  'nav.news': {
    ru: 'Новости',
    en: 'News',
    cn: '新闻',
  },
  'nav.forum': {
    ru: 'Форум',
    en: 'Forum',
    cn: '论坛',
  },
  'nav.projects': {
    ru: 'Проекты',
    en: 'Projects',
    cn: '项目',
  },
  'nav.library': {
    ru: 'Библиотека',
    en: 'Library',
    cn: '图书馆',
  },
  'nav.dictionary': {
    ru: 'Словарь',
    en: 'Dictionary',
    cn: '词典',
  },
  'common.search': {
    ru: 'Поиск...',
    en: 'Search...',
    cn: '搜索...',
  },
  'common.loading': {
    ru: 'Загрузка...',
    en: 'Loading...',
    cn: '加载中...',
  },
  'common.readMore': {
    ru: 'Читать далее',
    en: 'Read more',
    cn: '阅读更多',
  },
  'common.learnMore': {
    ru: 'Узнать больше',
    en: 'Learn more',
    cn: '了解更多',
  },
  'common.author': {
    ru: 'Автор',
    en: 'Author',
    cn: '作者',
  },
  'common.date': {
    ru: 'Дата',
    en: 'Date',
    cn: '日期',
  },
  
  // Home page specific translations
  'home.hero.title': {
    ru: 'Интегральное сообщество',
    en: 'Integral Community',
    cn: '整体社区',
  },
  'home.hero.subtitle': {
    ru: 'Консолидация всех конструктивных сил на основе принципов интегральной философии',
    en: 'Consolidation of all constructive forces based on the principles of integral philosophy',
    cn: '基于整体哲学原则整合所有建设性力量',
  },
  'home.hero.manifestButton': {
    ru: 'Манифест',
    en: 'Manifest',
    cn: '宣言',
  },
  'home.hero.codexButton': {
    ru: 'Кодекс',
    en: 'Codex',
    cn: '法典',
  },
  'home.hero.instituteButton': {
    ru: 'Институт',
    en: 'Institute',
    cn: '研究院',
  },
  'home.community.title': {
    ru: 'Разделы сообщества',
    en: 'Community Sections',
    cn: '社区部分',
  },
  'home.institute.title': {
    ru: 'Институт интегрального знания',
    en: 'Institute of Integral Knowledge',
    cn: '整体知识研究院',
  },
  'home.institute.subtitle': {
    ru: 'Академические дисциплины и исследовательские направления в области интегральной философии',
    en: 'Academic disciplines and research directions in the field of integral philosophy',
    cn: '整体哲学领域的学术学科和研究方向',
  },
  'home.projects.title': {
    ru: 'Основные проекты',
    en: 'Main Projects',
    cn: '主要项目',
  },
  'home.projects.subtitle': {
    ru: 'Философские инициативы и исследовательские направления интегрального сообщества',
    en: 'Philosophical initiatives and research directions of the integral community',
    cn: '整体社区的哲学倡议和研究方向',
  },
  'home.news.title': {
    ru: 'Последние новости',
    en: 'Latest News',
    cn: '最新新闻',
  },
  'home.forum.title': {
    ru: 'Активность форума',
    en: 'Forum Activity',
    cn: '论坛活动',
  },
  'common.allNews': {
    ru: 'Все новости',
    en: 'All news',
    cn: '所有新闻',
  },
  'common.allForum': {
    ru: 'Перейти к форуму',
    en: 'Go to forum',
    cn: '前往论坛',
  },
  'footer.copyright': {
    ru: '© 2024 Интегральное сообщество AllUnity. Все права защищены.',
    en: '© 2024 AllUnity Integral Community. All rights reserved.',
    cn: '© 2024 AllUnity 整体社区。保留所有权利。',
  },
  'footer.philosophy': {
    ru: 'Основано на принципах интегральной философии',
    en: 'Based on integral philosophy principles',
    cn: '基于整体哲学原则',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    // Get language from localStorage or default to Russian
    const saved = localStorage.getItem('allunity-language');
    return (saved as Language) || 'ru';
  });

  useEffect(() => {
    localStorage.setItem('allunity-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, fallback?: string): string => {
    const translation = uiTranslations[key];
    if (translation && translation[language]) {
      return translation[language];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { languageLabels };