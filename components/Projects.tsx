"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { translations } from "@/data/Translations";
import { useLanguage } from "@/context/LanguageContext";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang as "tr" | "en"];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="max-w-5xl mx-auto mt-32 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        {t.projects.title}
      </h2>

      <div className="space-y-6">
        {projects.map((project, index) => {
          const content = t.projects[project.id as keyof typeof t.projects];
          const isOpen = openIndex === index;

          if (typeof content === "string") return null;

          return (
            <div
              key={project.id}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="cursor-pointer rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold">
                {content.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {content.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* DETAILS */}
              {isOpen && (
                <div className="mt-4">
                  <p className="text-gray-300">
                    {content.details}
                  </p>

                  <div className="mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}