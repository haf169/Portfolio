"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, MapPin, Briefcase } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/lib/data";
import Image from "next/image";
import LangFade from "@/components/LangFade";

// ─── Typing strings per language ──────────────────────────────────────────────
const typingStrings = {
   vi: ["Software Engineer", "Ruby on Rails Dev", "Full-stack Developer", "Docker Enthusiast"],
   en: ["Software Engineer", "Ruby on Rails Dev", "Full-stack Developer", "Docker Enthusiast"],
   ja: ["ソフトウェアエンジニア", "Ruby on Rails 開発者", "フルスタック開発者"],
};

const heroText = {
   vi: { greeting: "Xin chào, mình là", cta1: "Xem dự án", cta2: "Liên hệ", scroll: "Cuộn xuống" },
   en: { greeting: "Hi, I'm", cta1: "View Projects", cta2: "Contact Me", scroll: "Scroll down" },
   ja: { greeting: "こんにちは、", cta1: "プロジェクトを見る", cta2: "連絡する", scroll: "スクロール" },
};

// ─── Typing hook ─────────────────────────────────────────────────────────────
function useTypingEffect(strings: string[], typingSpeed = 80, erasingSpeed = 40, pauseMs = 2000) {
   const [displayed, setDisplayed] = useState("");
   const [strIdx, setStrIdx] = useState(0);
   const [charIdx, setCharIdx] = useState(0);
   const [erasing, setErasing] = useState(false);

   useEffect(() => {
      setDisplayed("");
      setStrIdx(0);
      setCharIdx(0);
      setErasing(false);
   }, [strings]);

   useEffect(() => {
      const current = strings[strIdx] ?? "";

      if (!erasing && charIdx < current.length) {
         const t = setTimeout(() => {
            setDisplayed(current.slice(0, charIdx + 1));
            setCharIdx((i) => i + 1);
         }, typingSpeed);
         return () => clearTimeout(t);
      }

      if (!erasing && charIdx === current.length) {
         const t = setTimeout(() => setErasing(true), pauseMs);
         return () => clearTimeout(t);
      }

      if (erasing && charIdx > 0) {
         const t = setTimeout(() => {
            setDisplayed(current.slice(0, charIdx - 1));
            setCharIdx((i) => i - 1);
         }, erasingSpeed);
         return () => clearTimeout(t);
      }

      if (erasing && charIdx === 0) {
         setErasing(false);
         setStrIdx((i) => (i + 1) % strings.length);
      }
   }, [charIdx, erasing, strings, strIdx, typingSpeed, erasingSpeed, pauseMs]);

   return displayed;
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Hero() {
   const { language } = useLanguage();
   const text = heroText[language];
   const strings = typingStrings[language];
   const typed = useTypingEffect(strings);

   return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
         {/* Background gradient */}
         <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent/10" />

         {/* Ambient blobs */}
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
         <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
         />

         <div className="container-custom relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

               {/* ── Text col ── */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 text-center lg:text-left"
               >
                  {/* 🟢 Rikai badge */}
                  <motion.div
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.1 }}
                     className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 backdrop-blur"
                  >
                     <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                     </span>
                     <Briefcase size={13} className="text-primary-400" />
                     Working at <span className="text-primary-400 font-medium">Rikai Technology</span>
                  </motion.div>

                  {/* Greeting */}
                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2 }}
                     className="text-primary-400 text-lg mb-4"
                  >
                     <LangFade>{text.greeting}</LangFade>
                  </motion.p>

                  {/* Name */}
                  <motion.h1
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 }}
                     className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                  >
                     <span className="gradient-text">{personalInfo.name.full}</span>
                  </motion.h1>

                  {/* Typing animation */}
                  <motion.h2
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.4 }}
                     className="text-2xl md:text-3xl text-gray-400 mb-6 h-10 flex items-center justify-center lg:justify-start"
                  >
                     <span>{typed}</span>
                     <span className="ml-0.5 inline-block w-[2px] h-7 bg-primary-400 animate-pulse" />
                  </motion.h2>

                  {/* Location */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5 }}
                     className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 mb-8"
                  >
                     <MapPin size={18} />
                     <span>{personalInfo.location}</span>
                  </motion.div>

                  {/* CTAs */}
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
                        <LangFade>{text.cta1}</LangFade>
                     </a>
                     <a
                        href="#contact"
                        className="px-6 py-3 border border-white/20 hover:border-primary-500/50 rounded-xl font-medium transition-all duration-300 hover:bg-white/5"
                     >
                        <LangFade>{text.cta2}</LangFade>
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

               {/* ── Avatar col ── */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex-shrink-0"
               >
                  <div className="relative">
                     <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent rounded-full blur-2xl opacity-30" />
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
               <span className="text-sm"><LangFade>{text.scroll}</LangFade></span>
               <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <ArrowDown size={20} />
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}
