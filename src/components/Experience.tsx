"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { experience, education, languages } from "@/lib/data";

const sectionText = {
   vi: {
      title: "Kinh nghiệm",
      subtitle: "Hành trình nghề nghiệp",
      education: "Học vấn",
      languages: "Ngôn ngữ",
      achievements: "Thành tích",
   },
   en: {
      title: "Experience",
      subtitle: "Career Journey",
      education: "Education",
      languages: "Languages",
      achievements: "Achievements",
   },
   ja: {
      title: "経験",
      subtitle: "キャリアの旅",
      education: "学歴",
      languages: "言語",
      achievements: "実績",
   },
};

export default function Experience() {
   const { language } = useLanguage();
   const text = sectionText[language];

   return (
      <section id="experience" className="section bg-white/[0.02]">
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

            <div className="grid lg:grid-cols-2 gap-12">
               {/* Work Experience */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
               >
                  <div className="flex items-center gap-3 mb-8">
                     <div className="p-3 bg-primary-500/20 rounded-xl">
                        <Briefcase className="text-primary-400" size={24} />
                     </div>
                     <h3 className="text-xl font-bold">{text.title}</h3>
                  </div>

                  <div className="space-y-6">
                     {experience.map((exp) => (
                        <div key={exp.id} className="timeline-item">
                           <div className="glass p-6 rounded-xl">
                              <div className="flex items-start justify-between mb-2">
                                 <div>
                                    <h4 className="font-bold text-lg">{exp.company}</h4>
                                    <p className="text-primary-400">
                                       {exp.position[language]}
                                    </p>
                                 </div>
                                 <span className="text-sm text-gray-500 whitespace-nowrap">
                                    {exp.period}
                                 </span>
                              </div>
                              <ul className="space-y-2 mt-4">
                                 {exp.description[language].map((item, i) => (
                                    <li
                                       key={i}
                                       className="flex items-start gap-2 text-sm text-gray-400"
                                    >
                                       <span className="text-primary-400 mt-1">▸</span>
                                       {item}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     ))}
                  </div>
               </motion.div>

               {/* Education & Languages */}
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
               >
                  {/* Education */}
                  <div>
                     <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-accent/20 rounded-xl">
                           <GraduationCap className="text-accent" size={24} />
                        </div>
                        <h3 className="text-xl font-bold">{text.education}</h3>
                     </div>

                     <div className="glass p-6 rounded-xl">
                        <div className="flex items-start justify-between mb-2">
                           <div>
                              <h4 className="font-bold text-lg">{education.school}</h4>
                              <p className="text-primary-400">
                                 {education.degree[language]}
                              </p>
                           </div>
                           <span className="text-sm text-gray-500">{education.period}</span>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                           <div className="px-3 py-1 bg-primary-500/20 rounded-lg">
                              <span className="text-sm text-primary-400">
                                 GPA: {education.gpa}
                              </span>
                           </div>
                        </div>
                        {education.achievements[language].length > 0 && (
                           <div className="mt-4 pt-4 border-t border-white/10">
                              <div className="flex items-center gap-2 text-sm">
                                 <Award size={16} className="text-yellow-500" />
                                 <span className="text-gray-300">
                                    {education.achievements[language][0]}
                                 </span>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>

                  {/* Languages */}
                  <div>
                     <h3 className="text-xl font-bold mb-6">{text.languages}</h3>
                     <div className="grid grid-cols-3 gap-4">
                        {languages.map((lang) => (
                           <div key={lang.name} className="glass p-4 rounded-xl text-center">
                              <div className="text-2xl mb-2">
                                 {lang.name === "English"
                                    ? "🇬🇧"
                                    : lang.name === "Japanese"
                                       ? "🇯🇵"
                                       : "🇻🇳"}
                              </div>
                              <div className="font-medium text-sm">{lang.name}</div>
                              <div className="text-xs text-gray-500">
                                 {lang.level[language]}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
