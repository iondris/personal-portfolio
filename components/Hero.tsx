"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/Translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang as "tr" | "en"];
  
  return (
    <section className="max-w-6xl mx-auto mt-24 mb-32 grid md:grid-cols-2 gap-10 items-center">
      
      {/* SOL TARAF */}
      <div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
            {t.heroTitle}
          </span>
        </h1>

        <p className="...">
          {t.heroDesc}
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/20 transition">
            {t.heroButton1}
          </button>

          <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
            GitHub
          </button>
        </div>
      </div>

      {/* SAĞ TARAF (FOTO) */}
      <div className="flex justify-center">
        <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-white/10">
          
          {/* GLOW ARKA PLAN */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-xl opacity-30 -z-10"></div>

          {/* FOTO */}
          <Image
            src="/me.jpg"
            alt="Yunus Emre"
            fill
            className="object-cover transition duration-500 hover:scale-110"
          />

          {/* ÜST IŞIK */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20" />
        </div>
      </div>

    </section>
  );
}