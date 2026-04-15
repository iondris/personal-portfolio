"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2">
      
      <button
        onClick={() => setLang("tr")}
        className={`px-3 py-1 rounded ${
          lang === "tr" ? "bg-white text-black" : "bg-white/10 text-white"
        }`}
      >
        TR
      </button>

      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded ${
          lang === "en" ? "bg-white text-black" : "bg-white/10 text-white"
        }`}
      >
        EN
      </button>

    </div>
  );
}