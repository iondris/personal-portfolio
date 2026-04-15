"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Lang = "tr" | "en";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>("tr");

  // 🔥 Sayfa açılınca localStorage'dan al
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang;
    if (saved) {
      setLangState(saved);
    }
  }, []);

  // 🔥 Dil değişince kaydet
  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 🔥 Custom hook (güvenli)
export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}