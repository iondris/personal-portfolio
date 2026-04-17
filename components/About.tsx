"use client";

import { translations } from "@/data/Translations";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang as "tr" | "en"];

  return (
    <section id="about" className="max-w-4xl mx-auto mt-32 px-4 text-center">
      
      <h2 className="text-3xl font-bold mb-6">
        {t.about.title}
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed">
        {t.about.text}
      </p>

    </section>
  );
}