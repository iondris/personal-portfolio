"use client";

import { translations } from "@/data/Translations";
import { useLanguage } from "@/context/LanguageContext";

export default function Timeline() {
  const { lang } = useLanguage();
  const t = translations[lang as "tr" | "en"];

  return (
    <section id="journey" className="max-w-4xl mx-auto mt-32 px-4">
      
      <h2 className="text-3xl font-bold text-center mb-12">
        {t.journey.title}
      </h2>

      <div className="space-y-6">
        {t.journey.items.map((item: any, i: number) => (
          <div
            key={i}
            className="border border-white/10 p-6 rounded-xl bg-white/5 backdrop-blur-md"
          >
            <div className="text-sm text-gray-400">
              {item.year}
            </div>

            <h3 className="text-lg font-semibold mt-1">
              {item.title}
            </h3>

            <p className="text-gray-300 mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}