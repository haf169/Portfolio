"use client";

import { motion } from "framer-motion";
import { ExternalLink, Users, Calendar, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/lib/data";

const sectionText = {
   vi: {
      title: "Dự án",
      subtitle: "Dự án nổi bật",
      viewLive: "Xem demo trực tiếp",
      teamSize: "Thành viên",
      keyFeatures: "Tính năng chính",
   },
   en: {
      title: "Projects",
      subtitle: "Featured Project",
      viewLive: "View Live Demo",
      teamSize: "Team members",
      keyFeatures: "Key Features",
   },
   ja: {
      title: "プロジェクト",
      subtitle: "注目のプロジェクト",
      viewLive: "デモを見る",
      teamSize: "チームメンバー",
      keyFeatures: "主な機能",
   },
};

export default function Projects() {
   const { language } = useLanguage();
   const text = sectionText[language];
   const project = projects[0]; // Single featured project

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

            {/* Featured Project - Full Width Showcase */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="glass rounded-3xl overflow-hidden"
            >
               <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left - GIF/Image Preview */}
                  <div className="relative h-64 lg:h-auto lg:min-h-[400px] bg-gradient-to-br from-primary-900/50 to-accent/30 overflow-hidden">
                     {project.image ? (
                        <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-full object-cover"
                        />
                     ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                           <span className="text-6xl font-bold text-white/10">
                              {project.title}
                           </span>
                        </div>
                     )}
                     {/* Play indicator for GIF */}
                     <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-full text-xs text-white/80">
                        <Play size={12} className="fill-white/80" />
                        Live Preview
                     </div>
                  </div>

                  {/* Right - Project Details */}
                  <div className="p-8 lg:p-10 flex flex-col">
                     {/* Header */}
                     <div className="flex items-start justify-between mb-4">
                        <div>
                           <h3 className="text-2xl lg:text-3xl font-bold gradient-text">
                              {project.title}
                           </h3>
                           <p className="text-primary-400 mt-1">
                              {project.subtitle[language]}
                           </p>
                        </div>
                        {project.liveUrl && (
                           <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-primary-500 hover:bg-primary-600 rounded-xl transition-all duration-300 hover:scale-110"
                           >
                              <ExternalLink size={20} />
                           </a>
                        )}
                     </div>

                     {/* Description */}
                     <p className="text-gray-300 leading-relaxed mb-6">
                        {project.description[language]}
                     </p>

                     {/* Meta Info */}
                     <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                           <Calendar size={16} className="text-primary-400" />
                           <span>{project.period}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg">
                           <Users size={16} className="text-primary-400" />
                           <span>{project.teamSize} {text.teamSize}</span>
                        </div>
                     </div>

                     {/* Technologies */}
                     <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                           <span
                              key={tech}
                              className="px-3 py-1.5 text-sm rounded-lg bg-primary-500/10 text-primary-400 border border-primary-500/20"
                           >
                              {tech}
                           </span>
                        ))}
                     </div>

                     {/* Key Features */}
                     <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                           {text.keyFeatures}
                        </h4>
                        <ul className="space-y-2">
                           {project.highlights[language].map((item, i) => (
                              <li
                                 key={i}
                                 className="flex items-start gap-3 text-gray-300"
                              >
                                 <span className="text-primary-400 mt-1">▸</span>
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </div>

                     {/* Test Accounts */}
                     <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                           {language === "vi" ? "Tài khoản Demo" : language === "en" ? "Demo Accounts" : "デモアカウント"}
                        </h4>
                        <div className="grid sm:grid-cols-3 gap-3 text-sm">
                           {/* Admin */}
                           <div className="bg-white/5 p-3 rounded-lg">
                              <div className="text-primary-400 font-medium mb-1">Admin</div>
                              <div className="text-gray-400 text-xs space-y-1">
                                 <p>admin@example.com</p>
                                 <p>Pass: 123</p>
                              </div>
                           </div>
                           {/* Student */}
                           <div className="bg-white/5 p-3 rounded-lg">
                              <div className="text-primary-400 font-medium mb-1">
                                 {language === "vi" ? "Học sinh" : language === "en" ? "Student" : "学生"}
                              </div>
                              <div className="text-gray-400 text-xs space-y-1">
                                 <p>anhs2030@example.com</p>
                                 <p>Pass: 123</p>
                              </div>
                           </div>
                           {/* Teacher */}
                           <div className="bg-white/5 p-3 rounded-lg">
                              <div className="text-primary-400 font-medium mb-1">
                                 {language === "vi" ? "Giáo viên" : language === "en" ? "Teacher" : "教師"}
                              </div>
                              <div className="text-gray-400 text-xs space-y-1">
                                 <p>thanhphuong12a1@gmail.com</p>
                                 <p>Pass: 123</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* CTA Button */}
                     {project.liveUrl && (
                        <a
                           href={project.liveUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
                        >
                           <ExternalLink size={18} />
                           {text.viewLive}
                        </a>
                     )}
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
