"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Users, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/lib/data";
import Image from "next/image";

const sectionText = {
   vi: {
      title: "Dự án",
      subtitle: "Dự án nổi bật",
      viewLive: "Xem demo",
      teamSize: "Thành viên",
      noLive: "Không có demo",
   },
   en: {
      title: "Projects",
      subtitle: "Featured Projects",
      viewLive: "View Live",
      teamSize: "Team size",
      noLive: "No live demo",
   },
   ja: {
      title: "プロジェクト",
      subtitle: "注目のプロジェクト",
      viewLive: "デモを見る",
      teamSize: "チームサイズ",
      noLive: "デモなし",
   },
};

export default function Projects() {
   const { language } = useLanguage();
   const text = sectionText[language];

   return (
      <section id="projects" className="section">
         <div className="container-custom">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center mb-12"
            >
               <span className="text-primary-400 text-sm uppercase tracking-wider">
                  {text.title}
               </span>
               <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  {text.subtitle}
               </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
               {projects.map((project, index) => (
                  <motion.div
                     key={project.id}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: index * 0.2 }}
                     className="project-card group"
                  >
                     {/* Project image placeholder */}
                     <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-primary-900/50 to-accent/30">
                        <div className="absolute inset-0 flex items-center justify-center">
                           <span className="text-4xl font-bold text-white/20">
                              {project.title}
                           </span>
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                     </div>

                     {/* Project info */}
                     <div className="space-y-4">
                        <div className="flex items-start justify-between">
                           <div>
                              <h3 className="text-xl font-bold">{project.title}</h3>
                              <p className="text-primary-400 text-sm">
                                 {project.subtitle[language]}
                              </p>
                           </div>
                           {project.liveUrl ? (
                              <a
                                 href={project.liveUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="p-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors"
                              >
                                 <ExternalLink size={18} />
                              </a>
                           ) : (
                              <span className="p-2 bg-white/10 rounded-lg text-gray-500">
                                 <ExternalLink size={18} />
                              </span>
                           )}
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                           {project.description[language]}
                        </p>

                        {/* Meta info */}
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                           <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{project.period}</span>
                           </div>
                           <div className="flex items-center gap-1">
                              <Users size={14} />
                              <span>
                                 {project.teamSize} {text.teamSize}
                              </span>
                           </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                           {project.technologies.map((tech) => (
                              <span
                                 key={tech}
                                 className="px-2 py-1 text-xs rounded-md bg-primary-500/10 text-primary-400 border border-primary-500/20"
                              >
                                 {tech}
                              </span>
                           ))}
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-2 pt-2">
                           {project.highlights[language].slice(0, 3).map((item, i) => (
                              <li
                                 key={i}
                                 className="flex items-start gap-2 text-sm text-gray-400"
                              >
                                 <span className="text-primary-400 mt-1">▸</span>
                                 {item}
                              </li>
                           ))}
                        </ul>

                        {/* CTA */}
                        {project.liveUrl && (
                           <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                           >
                              {text.viewLive}
                              <ExternalLink size={14} />
                           </a>
                        )}
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
