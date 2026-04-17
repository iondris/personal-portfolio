"use client";

import { translations } from "@/data/Translations";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang as "tr" | "en"];

  return (
    <section id="skills" className="max-w-6xl mx-auto mt-32 px-4">
      
      <h2 className="text-3xl font-bold text-center mb-12">
        {t.skills.title}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* TECH */}
        <SkillBox title={t.skills.techTitle} data={t.skills.tech} />

        {/* SOFT */}
        <SkillBox title={t.skills.softTitle} data={t.skills.soft} />

        {/* LANGUAGES */}
        <SkillBox title={t.skills.languagesTitle} data={t.skills.languages} />

      </div>

    </section>
  );
}

function SkillBox({ title, data }: any) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-md">
      
      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      <div className="space-y-3">
        {data.map((item: any, i: number) => (
          <div key={i}>
            <div className="flex justify-between text-sm">
              <span>{item.name}</span>
              <span>{item.level}</span>
            </div>

            {item.percent && (
              <div className="w-full h-2 bg-white/10 rounded mt-1">
                <div
                  className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}