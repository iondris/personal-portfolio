"use client";
import SpotlightCard from "./SpotlightCard";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/Translations";

export default function Timeline() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="journey" className="max-w-4xl mx-auto mt-32">
      
      <h2 className="text-3xl font-semibold text-center mb-12">
        {t.journeyTitle}
      </h2>

      <div className="relative border-l border-white/10 pl-6 space-y-12">
        
        {t.journey.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2, // 🔥 sırayla gelsin
            }}
            viewport={{ once: true }}
            className="relative"
          >
            
            {/* DOT */}
            <div className="absolute -left-[10px] top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />

            {/* CARD */}
            <SpotlightCard>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-xl p-6 bg-black/70 border border-white/10 backdrop-blur-xl hover:border-white/20 transition"
            >
              
              <p className="text-sm text-gray-400 mb-1">
                {item.year}
              </p>

              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                {item.title}
              </h3>

              <p className="text-gray-300">
                {item.desc}
              </p>

              </motion.div>
            </SpotlightCard>
          </motion.div>
        ))}

      </div>
    </section>
  );
}