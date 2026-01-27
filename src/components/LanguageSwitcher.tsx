"use client";

import { useLanguage } from "@/context/LanguageContext";

const flags = {
   vi: "🇻🇳",
   en: "🇬🇧",
   ja: "🇯🇵",
};

const labels = {
   vi: "Tiếng Việt",
   en: "English",
   ja: "日本語",
};

export default function LanguageSwitcher() {
   const { language, setLanguage } = useLanguage();

   return (
      <div className="flex items-center gap-2">
         {(["vi", "en", "ja"] as const).map((lang) => (
            <button
               key={lang}
               onClick={() => setLanguage(lang)}
               className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${language === lang
                     ? "bg-primary-500 text-white"
                     : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                  }`}
               title={labels[lang]}
            >
               <span className="mr-1">{flags[lang]}</span>
               <span className="hidden sm:inline">{lang.toUpperCase()}</span>
            </button>
         ))}
      </div>
   );
}
