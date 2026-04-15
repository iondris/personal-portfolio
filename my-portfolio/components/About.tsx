"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/Translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="max-w-4xl mx-auto mt-32">
      
      <div className="rounded-2xl p-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
        
        <div className="rounded-2xl p-8 bg-black/70 backdrop-blur-xl border border-white/10">
          
          <h2 className="text-3xl font-semibold mb-4">
            {t.aboutTitle}
          </h2>

          <p className="text-gray-300 leading-relaxed">
            {t.aboutText}
          </p>

        </div>

      </div>

    </section>
  );
}