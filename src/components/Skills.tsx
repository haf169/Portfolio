"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { skills } from "@/lib/data";

// ─── Skill color map ───────────────────────────────────────────────────────────
type SkillStyle = {
   bg: string;
   hoverBg: string;
   text: string;
   glow: string;
   gradient?: [string, string]; // [from, hoverFrom] → always ends at second stop
};

const skillStyles: Record<string, SkillStyle> = {
   // Programming
   Java: { bg: "#B71C1C", hoverBg: "#D32F2F", text: "#fff", glow: "rgba(183,28,28,0.55)" },
   JavaScript: { bg: "#F7DF1E", hoverBg: "#E6C200", text: "#1E1E1E", glow: "rgba(247,223,30,0.55)" },
   TypeScript: { bg: "#3178C6", hoverBg: "#255EA8", text: "#fff", glow: "rgba(49,120,198,0.55)" },
   Ruby: { bg: "#CC342D", hoverBg: "#A62821", text: "#fff", glow: "rgba(204,52,45,0.55)" },
   SQL: { bg: "#003B57", hoverBg: "#005C87", text: "#fff", glow: "rgba(0,59,87,0.55)" },
   // Frontend
   ReactJS: { bg: "#1A6B7D", hoverBg: "#29A3C0", text: "#fff", glow: "rgba(97,218,251,0.5)" },
   NextJS: { bg: "#111111", hoverBg: "#222222", text: "#fff", glow: "rgba(255,255,255,0.12)" },
   "Tailwind CSS": { bg: "#0E7490", hoverBg: "#0B8BA8", text: "#fff", glow: "rgba(56,189,248,0.5)" },
   "Framer Motion": { bg: "#7928CA", hoverBg: "#9333EA", text: "#fff", glow: "rgba(121,40,202,0.6)", gradient: ["#7928CA", "#FF0080"] },
   // Backend
   "Ruby on Rails": { bg: "#CC0000", hoverBg: "#E60000", text: "#fff", glow: "rgba(204,0,0,0.55)" },
   "Spring Boot": { bg: "#4D8A28", hoverBg: "#5A9A30", text: "#fff", glow: "rgba(109,179,63,0.5)" },
   "NodeJS (Express)": { bg: "#276327", hoverBg: "#339933", text: "#fff", glow: "rgba(51,153,51,0.5)" },
   "RESTful API": { bg: "#1565C0", hoverBg: "#1976D2", text: "#fff", glow: "rgba(21,101,192,0.5)" },
   "ASP.NET Core": { bg: "#512BD4", hoverBg: "#6A3FDE", text: "#fff", glow: "rgba(81,43,212,0.55)" },
   // Databases
   PostgreSQL: { bg: "#336791", hoverBg: "#3D7EB0", text: "#fff", glow: "rgba(51,103,145,0.5)" },
   MySQL: { bg: "#00758F", hoverBg: "#0092B0", text: "#fff", glow: "rgba(0,117,143,0.5)" },
   MongoDB: { bg: "#2D7A2E", hoverBg: "#47A248", text: "#fff", glow: "rgba(71,162,72,0.5)" },
   "SQL Server": { bg: "#CC2927", hoverBg: "#E03330", text: "#fff", glow: "rgba(204,41,39,0.5)" },
   // Tools
   "Docker Compose": { bg: "#1A7BC4", hoverBg: "#2496ED", text: "#fff", glow: "rgba(36,150,237,0.55)" },
   "Linux Ubuntu": { bg: "#C84518", hoverBg: "#E95420", text: "#fff", glow: "rgba(233,84,32,0.55)" },
   Git: { bg: "#D43F28", hoverBg: "#F05032", text: "#fff", glow: "rgba(240,80,50,0.5)" },
   GitHub: { bg: "#181717", hoverBg: "#2D2D2D", text: "#fff", glow: "rgba(255,255,255,0.1)" },
   GitLab: { bg: "#E24329", hoverBg: "#FC6D26", text: "#fff", glow: "rgba(252,109,38,0.5)", gradient: ["#E24329", "#FC6D26"] },
   Jira: { bg: "#0052CC", hoverBg: "#0065FF", text: "#fff", glow: "rgba(0,82,204,0.55)" },
   AWS: { bg: "#232F3E", hoverBg: "#344250", text: "#fff", glow: "rgba(255,153,0,0.35)" },
   Vercel: { bg: "#0A0A0A", hoverBg: "#1A1A1A", text: "#fff", glow: "rgba(255,255,255,0.1)" },
};

const fallbackStyle: SkillStyle = {
   bg: "#374151", hoverBg: "#4B5563", text: "#fff", glow: "rgba(55,65,81,0.4)",
};

// ─── SkillBadge ───────────────────────────────────────────────────────────────
function SkillBadge({ skill }: { skill: string }) {
   const [hovered, setHovered] = useState(false);
   const s = skillStyles[skill] ?? fallbackStyle;

   const getBackground = () => {
      if (!s.gradient) return hovered ? s.hoverBg : s.bg;
      const [a, b] = s.gradient;
      return hovered
         ? `linear-gradient(135deg, ${b}, ${a})`
         : `linear-gradient(135deg, ${a}, ${b})`;
   };

   return (
      <motion.span
         onHoverStart={() => setHovered(true)}
         onHoverEnd={() => setHovered(false)}
         whileHover={{ scale: 1.05 }}
         transition={{ duration: 0.2, ease: "easeOut" }}
         style={{
            background: getBackground(),
            color: s.text,
            boxShadow: hovered ? `0 0 14px 3px ${s.glow}` : "0 1px 3px rgba(0,0,0,0.3)",
            transition: "background 0.2s ease, box-shadow 0.2s ease",
         }}
         className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium cursor-default select-none"
      >
         {skill}
      </motion.span>
   );
}

// ─── i18n ─────────────────────────────────────────────────────────────────────
const sectionText = {
   vi: {
      title: "Kỹ năng",
      subtitle: "Năng lực kỹ thuật",
      categories: {
         programming: "Ngôn ngữ lập trình",
         frontend: "Frontend",
         backend: "Backend",
         databases: "Cơ sở dữ liệu",
         tools: "Công cụ & Nền tảng",
         methodologies: "Phương pháp",
      },
   },
   en: {
      title: "Skills",
      subtitle: "Technical Expertise",
      categories: {
         programming: "Programming Languages",
         frontend: "Frontend",
         backend: "Backend",
         databases: "Databases",
         tools: "Tools & Platforms",
         methodologies: "Methodologies",
      },
   },
   ja: {
      title: "スキル",
      subtitle: "技術力",
      categories: {
         programming: "プログラミング言語",
         frontend: "フロントエンド",
         backend: "バックエンド",
         databases: "データベース",
         tools: "ツール＆プラットフォーム",
         methodologies: "方法論",
      },
   },
};

// ─── Skills section ───────────────────────────────────────────────────────────
export default function Skills() {
   const { language } = useLanguage();
   const text = sectionText[language];

   const skillCategories = [
      { key: "programming", items: skills.programming },
      { key: "frontend", items: skills.frontend },
      { key: "backend", items: skills.backend },
      { key: "databases", items: skills.databases },
      { key: "tools", items: skills.tools },
      { key: "methodologies", items: skills.methodologies },
   ] as const;

   return (
      <section id="skills" className="section bg-white/[0.02]">
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
               <h2 className="text-3xl md:text-4xl font-bold mt-2">{text.subtitle}</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {skillCategories.map(({ key, items }, cardIdx) => (
                  <motion.div
                     key={key}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: cardIdx * 0.08 }}
                     className="glass p-6 rounded-2xl"
                  >
                     <h3 className="text-lg font-semibold mb-4 text-primary-400">
                        {text.categories[key]}
                     </h3>

                     <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                           <SkillBadge key={skill} skill={skill} />
                        ))}
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
