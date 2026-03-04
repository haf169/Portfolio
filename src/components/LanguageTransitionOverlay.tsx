"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const flagMap = {
   vi: { flag: "🇻🇳", label: "Tiếng Việt" },
   en: { flag: "🇬🇧", label: "English" },
   ja: { flag: "🇯🇵", label: "日本語" },
};

/**
 * LanguageTransitionOverlay
 * Renders a full-screen flash + flag indicator when language changes.
 * Mount this once at the app root level.
 */
export default function LanguageTransitionOverlay() {
   const { isChanging, language } = useLanguage();
   const info = flagMap[language];

   return (
      <AnimatePresence>
         {isChanging && (
            <>
               {/* Full-screen flash */}
               <motion.div
                  key="lang-flash"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="fixed inset-0 z-[8000] pointer-events-none"
                  style={{
                     background:
                        "radial-gradient(ellipse at center, rgba(14,165,233,0.12) 0%, transparent 70%)",
                  }}
               />

               {/* Scan line — sweeps top→bottom */}
               <motion.div
                  key="lang-scanline"
                  initial={{ top: 0, opacity: 0.6 }}
                  animate={{ top: "100%", opacity: 0 }}
                  transition={{ duration: 0.32, ease: "easeIn" }}
                  className="fixed left-0 right-0 h-[2px] z-[8001] pointer-events-none"
                  style={{
                     background:
                        "linear-gradient(90deg, transparent, #0ea5e9, #14b8a6, transparent)",
                     boxShadow: "0 0 12px rgba(14,165,233,0.8)",
                  }}
               />

               {/* Center flag badge */}
               <motion.div
                  key="lang-badge"
                  initial={{ opacity: 0, scale: 0.7, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="fixed inset-0 z-[8002] pointer-events-none flex items-center justify-center"
               >
                  <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-black/70 border border-white/15 backdrop-blur-xl shadow-2xl">
                     <span className="text-3xl">{info.flag}</span>
                     <span className="text-white font-medium text-lg">{info.label}</span>
                  </div>
               </motion.div>
            </>
         )}
      </AnimatePresence>
   );
}
