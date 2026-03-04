"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

/**
 * LangFade
 * Wraps any text content. Re-mounts children when language changes,
 * producing a smooth fade + slight upward slide transition.
 *
 * Usage:
 *   <LangFade><p>{text.someField}</p></LangFade>
 */
export default function LangFade({ children }: { children: React.ReactNode }) {
   const { language } = useLanguage();

   return (
      <AnimatePresence mode="wait" initial={false}>
         <motion.span
            key={language}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{ display: "contents" }}
         >
            {children}
         </motion.span>
      </AnimatePresence>
   );
}
