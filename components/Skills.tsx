"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/Translations";
import SpotlightCard from "./SpotlightCard";

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);
  const { lang } = useLanguage();
  const t = translations[lang];

  const toggle = (type: string) => {
    setActive(active === type ? null : type);
  };

  return (
    <section className="max-w-6xl mx-auto mt-32">
      
      <h2 className="text-3xl font-semibold text-center mb-12">
        {t.skillsTitle}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* TECH */}
        <SkillCard
          title={t.techSkillsTitle}
          type="tech"
          active={active}
          toggle={toggle}
        >
          {t.techSkills.map((skill, i) => (
            <ProgressBar key={i} name={skill.name} value={skill.level} />
          ))}
        </SkillCard>

        {/* SOFT */}
        <SkillCard
          title={t.softSkillsTitle}
          type="soft"
          active={active}
          toggle={toggle}
        >
          {t.softSkills.map((skill, i) => (
            <ProgressBar key={i} name={skill.name} value={skill.level} />
          ))}
        </SkillCard>

        {/* LANGUAGES */}
        <SkillCard
          title={t.languagesTitle}
          type="lang"
          active={active}
          toggle={toggle}
        >
          {t.languages.map((langItem, i) => (
            <div key={i} className="mb-4">
              
              <div className="flex justify-between text-sm mb-1">
                <span>{langItem.name}</span>
                <span>{langItem.level}</span>
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${langItem.percent}%` }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                />
              </div>

            </div>
          ))}
        </SkillCard>

      </div>
    </section>
  );
}

function SkillCard({
  title,
  children,
  type,
  active,
  toggle,
}: any) {
  const isOpen = active === type;

  return (
    <SpotlightCard>
    <motion.div
      onClick={() => toggle(type)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`relative cursor-pointer rounded-2xl p-[1px] transition-all duration-500 hover:scale-[1.03] ${
        isOpen
          ? "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
          : "bg-white/10 hover:bg-gradient-to-r hover:from-purple-500/50 hover:via-pink-500/50 hover:to-blue-500/50"
      }`}
    >
      {/* GLOW */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-2xl -z-10"></div>

      <div className="rounded-2xl p-6 bg-black/70 backdrop-blur-xl border border-white/10 transition duration-300 hover:border-white/20">
        
        <h3 className="text-xl font-semibold mb-4">
          {title}
        </h3>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          {children}
        </div>

      </div>
    </motion.div>
    </SpotlightCard>
  );
}

function ProgressBar({ name, value }: any) {
  return (
    <div className="mb-4">
      
      <div className="flex justify-between text-sm mb-1">
        <span>{name}</span>
        <span>{value}%</span>
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
        />
      </div>

    </div>
  );
}