"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/lib/data";
import Image from "next/image";
import LangFade from "@/components/LangFade";

const sectionText = {
   vi: {
      title: "Giới thiệu",
      subtitle: "Về tôi",
   },
   en: {
      title: "About",
      subtitle: "About Me",
   },
   ja: {
      title: "紹介",
      subtitle: "私について",
   },
};

export default function About() {
   const { language } = useLanguage();
   const text = sectionText[language];

   return (
      <section id="about" className="section">
         <div className="container-custom">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center mb-12"
            >
               <span className="text-primary-400 text-sm uppercase tracking-wider">
                  <LangFade>{text.title}</LangFade>
               </span>
               <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  <LangFade>{text.subtitle}</LangFade>
               </h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
               {/* Image */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0"
               >
                  <div className="relative w-72 h-72 md:w-96 md:h-96">
                     {/* Background decoration */}
                     <div className="absolute inset-4 bg-gradient-to-br from-primary-500/20 to-accent/20 rounded-2xl -rotate-6" />
                     <div className="absolute inset-0 glass rounded-2xl overflow-hidden">
                        <Image
                           src="/images/Tranha Profile.png"
                           alt={personalInfo.name.full}
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
               </motion.div>

               {/* Content */}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-1"
               >
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                     <LangFade>{personalInfo.bio[language]}</LangFade>
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="glass p-4 rounded-xl">
                        <div className="text-2xl font-bold gradient-text">2+</div>
                        <div className="text-gray-400 text-sm">
                           {language === "vi"
                              ? "Năm kinh nghiệm"
                              : language === "en"
                                 ? "Years Experience"
                                 : "年の経験"}
                        </div>
                     </div>
                     <div className="glass p-4 rounded-xl">
                        <div className="text-2xl font-bold gradient-text">5+</div>
                        <div className="text-gray-400 text-sm">
                           {language === "vi"
                              ? "Dự án hoàn thành"
                              : language === "en"
                                 ? "Projects Completed"
                                 : "完了したプロジェクト"}
                        </div>
                     </div>
                     <div className="glass p-4 rounded-xl">
                        <div className="text-2xl font-bold gradient-text">Rikai</div>
                        <div className="text-gray-400 text-sm">
                           {language === "vi"
                              ? "Full-stack Dev"
                              : language === "en"
                                 ? "Full-stack Dev"
                                 : "フルスタック開発"}
                        </div>
                     </div>
                     <div className="glass p-4 rounded-xl">
                        <div className="text-2xl font-bold gradient-text">7.3</div>
                        <div className="text-gray-400 text-sm">
                           {language === "vi" ? "GPA" : language === "en" ? "GPA" : "GPA"}
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
