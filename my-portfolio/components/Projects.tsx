"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/Translations";

export default function Projects() {
  const [active, setActive] = useState<string | null>(null);

  // ✅ HOOK SADECE COMPONENT İÇİNDE
  const { lang } = useLanguage();
  const t = translations[lang];

  const toggle = (id: string) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="max-w-5xl mx-auto mt-20">
      
      <h2 className="text-3xl font-semibold text-center mb-12">
        {t.projectsTitle}
      </h2>

      <div className="space-y-10">
        {t.projects.map((project, index) => {
          const id = index.toString();
          const isOpen = active === id;

          return (
            <div
              key={id}
              className={`relative rounded-2xl p-[1px] transition-all duration-500 hover:scale-[1.02] ${
                isOpen
                  ? "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
                  : "bg-white/10 hover:bg-gradient-to-r hover:from-purple-500/50 hover:via-pink-500/50 hover:to-blue-500/50"
              }`}
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-2xl -z-10"></div>

              {/* CARD */}
              <div className="rounded-2xl p-6 backdrop-blur-xl bg-black/70 border border-white/10 transition duration-300 hover:border-white/20">
                
                {/* HEADER */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {project.short}
                    </p>
                  </div>

                  <button
                    onClick={() => toggle(id)}
                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/10"
                  >
                    {isOpen
                      ? lang === "tr"
                        ? "Kapat"
                        : "Close"
                      : lang === "tr"
                        ? "Detay"
                        : "Detail"}
                  </button>
                </div>

                {/* EXPAND */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-96 mt-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.details}
                  </p>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}