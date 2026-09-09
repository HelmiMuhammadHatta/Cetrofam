import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'id' | 'en';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  id: {
    'nav.tentang': 'Tentang',
    'nav.ekosistem': 'Ekosistem',
    'nav.produk': 'Produk',
    'nav.investor': 'Investor',
    'nav.artikel': 'Artikel',
    'nav.kontak': 'Kontak',
    'cta.belanja': 'Belanja Produk',
    'cta.investor': 'Untuk Investor',
  },
  en: {
    'nav.tentang': 'About Us',
    'nav.ekosistem': 'Ecosystem',
    'nav.produk': 'Products',
    'nav.investor': 'Investors',
    'nav.artikel': 'Articles',
    'nav.kontak': 'Contact',
    'cta.belanja': 'Shop Products',
    'cta.investor': 'For Investors',
  }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'id' || saved === 'en')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within a I18nProvider');
  }
  return context;
}
