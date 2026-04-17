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
      
      {/* BAŞLIK */}
      <h2 className="text-3xl font-bold text-center mb-12">
        {t.projectsTitle}
      </h2>

      <div className="space-y-6">
        {projects.map((project, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="cursor-pointer rounded-2xl border border-white/10 p-6 
              bg-white/5 backdrop-blur-md 
              hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20 
              transition-all duration-300"
            >
              
              {/* TITLE */}
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              {/* SHORT DESC */}
              <p className="text-gray-400 mt-2">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-white/10 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* DETAILS */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300 mt-2">
                  {project.details}
                </p>

                {/* LINKS */}
                <div className="flex gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-sm 
                      px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}