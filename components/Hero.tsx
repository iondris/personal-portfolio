"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/Translations";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang as "tr" | "en"];

  return (
    <section className="max-w-6xl mx-auto mt-24 mb-32 grid md:grid-cols-2 gap-16 items-center px-4">
      
      {/* SOL */}
      <div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
            {t.heroTitle}
          </span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg max-w-xl">
          {t.heroDesc}
        </p>

        {/* 🔥 BUTTON GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">

          <NavButton href="#projects">
            🚀 {lang === "tr" ? "Projelerim" : "Projects"}
          </NavButton>

          <NavButton href="#skills">
            ⚡ {lang === "tr" ? "Yeteneklerim" : "Skills"}
          </NavButton>

          <NavButton href="#about">
            👨‍💻 {lang === "tr" ? "Hakkımda" : "About"}
          </NavButton>

          <IconButton href="https://github.com/iondris">
            <FaGithub />
            GitHub
          </IconButton>

          <IconButton href="https://linkedin.com">
            <FaLinkedin />
            LinkedIn
          </IconButton>

          <IconButton href="mailto:mail@example.com">
            <FaEnvelope />
            Mail
          </IconButton>

          <a
            href="/cv.pdf"
            download
            className="col-span-2 sm:col-span-3 flex items-center justify-center gap-2 
            px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 
            hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 
            transition-all duration-300"
          >
            <HiOutlineDocumentDownload />
            {lang === "tr" ? "CV indir" : "Download CV"}
          </a>

        </div>
      </div>

      {/* SAĞ FOTO */}
      <div className="flex justify-center">
        <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-white/10 group">
          
          {/* GLOW */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-xl opacity-30 group-hover:opacity-50 transition -z-10"></div>

          <Image
            src="/me.jpg"
            alt="Yunus Emre"
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20" />
        </div>
      </div>

    </section>
  );
}

function NavButton({ href, children }: any) {
  return (
    <a
      href={href}
      className="flex items-center justify-center gap-2 h-[48px] 
      rounded-xl bg-white/10 border border-white/10 backdrop-blur-md 
      hover:bg-white/20 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 
      transition-all duration-300"
    >
      {children}
    </a>
  );
}

function IconButton({ href, children }: any) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center justify-center gap-2 h-[48px] 
      rounded-xl bg-white/10 border border-white/10 backdrop-blur-md 
      hover:bg-white/20 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 
      transition-all duration-300"
    >
      {children}
    </a>
  );
}