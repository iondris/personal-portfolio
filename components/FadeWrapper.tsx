"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function FadeWrapper({ children }: any) {
  const { lang } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={lang} // 🔥 dil değişince tetiklenir
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}