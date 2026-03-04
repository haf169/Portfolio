"use client";

import {
   createContext, useContext, useState, useCallback,
   useRef, ReactNode,
} from "react";
import { Language } from "@/lib/data";

interface LanguageContextType {
   language: Language;
   isChanging: boolean;
   setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * LanguageProvider
 * Adds `isChanging` flag (true for 350ms) when language switches.
 * Components can use this flag for exit animations.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
   const [language, setLang] = useState<Language>("vi");
   const [isChanging, setChanging] = useState(false);
   const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

   const setLanguage = useCallback((lang: Language) => {
      if (lang === language) return;
      setChanging(true);

      // Small delay so overlay appears before text swaps
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
         setLang(lang);
         setChanging(false);
      }, 320);
   }, [language]);

   return (
      <LanguageContext.Provider value={{ language, isChanging, setLanguage }}>
         {children}
      </LanguageContext.Provider>
   );
}

export function useLanguage() {
   const ctx = useContext(LanguageContext);
   if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
   return ctx;
}
