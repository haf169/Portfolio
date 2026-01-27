"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

const heroText = {
   vi: {
      greeting: "Xin chào, mình là",
      cta1: "Xem dự án",
      cta2: "Liên hệ",
      scroll: "Cuộn xuống",
   },
   en: {
      greeting: "Hi, I'm",
      cta1: "View Projects",
      cta2: "Contact Me",
      scroll: "Scroll down",
   },
   ja: {
      greeting: "こんにちは、",
      cta1: "プロジェクトを見る",
      cta2: "連絡する",
      scroll: "スクロール",
   },
};

export default function Hero() {
   const { language } = useLanguage();
   const text = heroText[language];

   return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
         {/* Background gradient */}
         <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent/10" />

         {/* Animated circles */}
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
         <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
         />

         <div className="container-custom relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               {/* Text content */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 text-center lg:text-left"
               >
                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2 }}
                     className="text-primary-400 text-lg mb-4"
                  >
                     {text.greeting}
                  </motion.p>

                  <motion.h1
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 }}
                     className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                  >
                     <span className="gradient-text">{personalInfo.name.full}</span>
                  </motion.h1>

                  <motion.h2
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.4 }}
                     className="text-2xl md:text-3xl text-gray-400 mb-6"
                  >
                     {personalInfo.title}
                  </motion.h2>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5 }}
                     className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 mb-8"
                  >
                     <MapPin size={18} />
                     <span>{personalInfo.location}</span>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.6 }}
                     className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                  >
                     <a
                        href="#projects"
                        className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
                     >
                        {text.cta1}
                     </a>
                     <a
                        href="#contact"
                        className="px-6 py-3 border border-white/20 hover:border-primary-500/50 rounded-xl font-medium transition-all duration-300 hover:bg-white/5"
                     >
                        {text.cta2}
                     </a>
                     <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-white/20 hover:border-primary-500/50 rounded-xl transition-all duration-300 hover:bg-white/5"
                     >
                        <Github size={20} />
                     </a>
                  </motion.div>
               </motion.div>

               {/* Profile image */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex-shrink-0"
               >
                  <div className="relative">
                     {/* Glow effect */}
                     <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent rounded-full blur-2xl opacity-30" />

                     {/* Image container */}
                     <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10">
                        <Image
                           src="/images/DSC09440.jpg"
                           alt={personalInfo.name.full}
                           fill
                           className="object-cover object-[80%_30%]"
                           priority
                        />
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}
               className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
            >
               <span className="text-sm">{text.scroll}</span>
               <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
               >
                  <ArrowDown size={20} />
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}
