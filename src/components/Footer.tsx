"use client";

import { Github, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/lib/data";

const footerText = {
   vi: {
      madeWith: "Được tạo với",
      by: "bởi",
      rights: "Tất cả quyền được bảo lưu.",
   },
   en: {
      madeWith: "Made with",
      by: "by",
      rights: "All rights reserved.",
   },
   ja: {
      madeWith: "",
      by: "が",
      rights: "全著作権所有。",
   },
};

export default function Footer() {
   const { language } = useLanguage();
   const text = footerText[language];
   const currentYear = new Date().getFullYear();

   return (
      <footer className="py-8 border-t border-white/10">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
               {/* Left - Copyright */}
               <div className="text-sm text-gray-500">
                  © {currentYear} {personalInfo.name.full}. {text.rights}
               </div>

               {/* Center - Made with */}
               <div className="flex items-center gap-1 text-sm text-gray-500">
                  {text.madeWith}
                  <Heart size={14} className="text-red-500 fill-red-500" />
                  {text.by} {personalInfo.name.last}
               </div>

               {/* Right - Social links */}
               <div className="flex items-center gap-4">
                  <a
                     href={personalInfo.github}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-500 hover:text-white transition-colors"
                  >
                     <Github size={18} />
                  </a>
                  <a
                     href={`mailto:${personalInfo.email}`}
                     className="text-gray-500 hover:text-white transition-colors"
                  >
                     <Mail size={18} />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
}
