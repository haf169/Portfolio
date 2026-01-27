"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, Mail, Phone } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/lib/data";

const navItems = {
   vi: ["Giới thiệu", "Kỹ năng", "Dự án", "Kinh nghiệm", "Liên hệ"],
   en: ["About", "Skills", "Projects", "Experience", "Contact"],
   ja: ["紹介", "スキル", "プロジェクト", "経験", "連絡先"],
};

const navIds = ["about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const { language } = useLanguage();

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <nav
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3" : "py-5"
            }`}
      >
         <div className="container-custom flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-xl font-bold gradient-text">
               {personalInfo.name.last}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
               {navItems[language].map((item, index) => (
                  <a
                     key={navIds[index]}
                     href={`#${navIds[index]}`}
                     className="text-sm text-gray-400 hover:text-white animated-underline transition-colors"
                  >
                     {item}
                  </a>
               ))}
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-4">
               <LanguageSwitcher />
               <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white transition-colors"
               >
                  <Github size={20} />
               </a>
               <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
               >
                  <Mail size={20} />
               </a>
            </div>

            {/* Mobile menu button */}
            <button
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="md:hidden p-2 text-gray-400 hover:text-white"
            >
               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
         </div>

         {/* Mobile menu */}
         {isMobileMenuOpen && (
            <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-4">
               <div className="flex flex-col gap-4">
                  {navItems[language].map((item, index) => (
                     <a
                        key={navIds[index]}
                        href={`#${navIds[index]}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                     >
                        {item}
                     </a>
                  ))}
                  <div className="pt-4 border-t border-white/10">
                     <LanguageSwitcher />
                  </div>
                  <div className="flex gap-4">
                     <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white"
                     >
                        <Github size={20} />
                     </a>
                     <a
                        href={`mailto:${personalInfo.email}`}
                        className="p-2 text-gray-400 hover:text-white"
                     >
                        <Mail size={20} />
                     </a>
                     <a
                        href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                        className="p-2 text-gray-400 hover:text-white"
                     >
                        <Phone size={20} />
                     </a>
                  </div>
               </div>
            </div>
         )}
      </nav>
   );
}
