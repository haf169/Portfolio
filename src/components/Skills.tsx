"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { skills } from "@/lib/data";

// ─── Skill color map (same as before) ────────────────────────────────────────
type SkillStyle = {
   bg: string; hoverBg: string; text: string; glow: string;
   gradient?: [string, string];
};

const skillStyles: Record<string, SkillStyle> = {
   Java: { bg: "#B71C1C", hoverBg: "#D32F2F", text: "#fff", glow: "rgba(183,28,28,0.55)" },
   JavaScript: { bg: "#F7DF1E", hoverBg: "#E6C200", text: "#1E1E1E", glow: "rgba(247,223,30,0.55)" },
   TypeScript: { bg: "#3178C6", hoverBg: "#255EA8", text: "#fff", glow: "rgba(49,120,198,0.55)" },
   Ruby: { bg: "#CC342D", hoverBg: "#A62821", text: "#fff", glow: "rgba(204,52,45,0.55)" },
   SQL: { bg: "#003B57", hoverBg: "#005C87", text: "#fff", glow: "rgba(0,59,87,0.55)" },
   ReactJS: { bg: "#1A6B7D", hoverBg: "#29A3C0", text: "#fff", glow: "rgba(97,218,251,0.5)" },
   NextJS: { bg: "#111111", hoverBg: "#222222", text: "#fff", glow: "rgba(255,255,255,0.12)" },
   "Tailwind CSS": { bg: "#0E7490", hoverBg: "#0B8BA8", text: "#fff", glow: "rgba(56,189,248,0.5)" },
   "Framer Motion": { bg: "#7928CA", hoverBg: "#9333EA", text: "#fff", glow: "rgba(121,40,202,0.6)", gradient: ["#7928CA", "#FF0080"] },
   "Ruby on Rails": { bg: "#CC0000", hoverBg: "#E60000", text: "#fff", glow: "rgba(204,0,0,0.55)" },
   "Spring Boot": { bg: "#4D8A28", hoverBg: "#5A9A30", text: "#fff", glow: "rgba(109,179,63,0.5)" },
   "NodeJS (Express)": { bg: "#276327", hoverBg: "#339933", text: "#fff", glow: "rgba(51,153,51,0.5)" },
   "RESTful API": { bg: "#1565C0", hoverBg: "#1976D2", text: "#fff", glow: "rgba(21,101,192,0.5)" },
   "ASP.NET Core": { bg: "#512BD4", hoverBg: "#6A3FDE", text: "#fff", glow: "rgba(81,43,212,0.55)" },
   PostgreSQL: { bg: "#336791", hoverBg: "#3D7EB0", text: "#fff", glow: "rgba(51,103,145,0.5)" },
   MySQL: { bg: "#00758F", hoverBg: "#0092B0", text: "#fff", glow: "rgba(0,117,143,0.5)" },
   MongoDB: { bg: "#2D7A2E", hoverBg: "#47A248", text: "#fff", glow: "rgba(71,162,72,0.5)" },
   "SQL Server": { bg: "#CC2927", hoverBg: "#E03330", text: "#fff", glow: "rgba(204,41,39,0.5)" },
   "Docker Compose": { bg: "#1A7BC4", hoverBg: "#2496ED", text: "#fff", glow: "rgba(36,150,237,0.55)" },
   "Linux Ubuntu": { bg: "#C84518", hoverBg: "#E95420", text: "#fff", glow: "rgba(233,84,32,0.55)" },
   Git: { bg: "#D43F28", hoverBg: "#F05032", text: "#fff", glow: "rgba(240,80,50,0.5)" },
   GitHub: { bg: "#181717", hoverBg: "#2D2D2D", text: "#fff", glow: "rgba(255,255,255,0.1)" },
   GitLab: { bg: "#E24329", hoverBg: "#FC6D26", text: "#fff", glow: "rgba(252,109,38,0.5)", gradient: ["#E24329", "#FC6D26"] },
   Jira: { bg: "#0052CC", hoverBg: "#0065FF", text: "#fff", glow: "rgba(0,82,204,0.55)" },
   AWS: { bg: "#232F3E", hoverBg: "#344250", text: "#fff", glow: "rgba(255,153,0,0.35)" },
   Vercel: { bg: "#0A0A0A", hoverBg: "#1A1A1A", text: "#fff", glow: "rgba(255,255,255,0.1)" },
   Agile: { bg: "#1E3A5F", hoverBg: "#254E82", text: "#fff", glow: "rgba(30,58,95,0.5)" },
   Scrum: { bg: "#1B4332", hoverBg: "#2D6A4F", text: "#fff", glow: "rgba(27,67,50,0.5)" },
   "Clean Code": { bg: "#2D2D2D", hoverBg: "#3D3D3D", text: "#fff", glow: "rgba(255,255,255,0.1)" },
   "Design Patterns": { bg: "#4A1942", hoverBg: "#6D2A63", text: "#fff", glow: "rgba(74,25,66,0.5)" },
};

const fallback: SkillStyle = { bg: "#374151", hoverBg: "#4B5563", text: "#fff", glow: "rgba(55,65,81,0.4)" };

// ─── SkillBadge ───────────────────────────────────────────────────────────────
function SkillBadge({ skill }: { skill: string }) {
   const [hovered, setHovered] = useState(false);
   const s = skillStyles[skill] ?? fallback;

   const bg = s.gradient
      ? hovered
         ? `linear-gradient(135deg, ${s.gradient[1]}, ${s.gradient[0]})`
         : `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})`
      : hovered ? s.hoverBg : s.bg;

   return (
      <motion.span
         onHoverStart={() => setHovered(true)}
         onHoverEnd={() => setHovered(false)}
         whileHover={{ scale: 1.06 }}
         transition={{ duration: 0.18, ease: "easeOut" }}
         style={{
            background: bg,
            color: s.text,
            boxShadow: hovered ? `0 0 14px 3px ${s.glow}` : "0 1px 3px rgba(0,0,0,0.3)",
            transition: "background 0.2s ease, box-shadow 0.2s ease",
         }}
         className="inline-flex items-center px-3 py-1.5 rounded-xl text-sm font-medium cursor-default select-none"
      >
         {skill}
      </motion.span>
   );
}

// ─── BentoCard ────────────────────────────────────────────────────────────────
type BentoCardProps = {
   title: string;
   items: readonly string[];
   colSpan?: string;
   rowSpan?: string;
   delay?: number;
   accent?: string;
};

function BentoCard({ title, items, colSpan = "", rowSpan = "", delay = 0, accent = "#0ea5e9" }: BentoCardProps) {
   return (
      <motion.div
         initial={{ opacity: 0, y: 24 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5, delay }}
         className={`glass rounded-2xl p-6 flex flex-col gap-4 ${colSpan} ${rowSpan}`}
         style={{ borderTop: `2px solid ${accent}33` }}
      >
         <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: accent }}>
            {title}
         </h3>
         <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
               <SkillBadge key={skill} skill={skill} />
            ))}
         </div>
      </motion.div>
   );
}

// ─── i18n ─────────────────────────────────────────────────────────────────────
const sectionText = {
   vi: {
      title: "Kỹ năng", subtitle: "Năng lực kỹ thuật",
      programming: "Ngôn ngữ lập trình", frontend: "Frontend",
      backend: "Backend", databases: "Cơ sở dữ liệu",
      tools: "Công cụ & Nền tảng", methodologies: "Phương pháp",
   },
   en: {
      title: "Skills", subtitle: "Technical Expertise",
      programming: "Programming Languages", frontend: "Frontend",
      backend: "Backend", databases: "Databases",
      tools: "Tools & Platforms", methodologies: "Methodologies",
   },
   ja: {
      title: "スキル", subtitle: "技術力",
      programming: "プログラミング言語", frontend: "フロントエンド",
      backend: "バックエンド", databases: "データベース",
      tools: "ツール＆プラットフォーム", methodologies: "方法論",
   },
};

// ─── Skills section ───────────────────────────────────────────────────────────
export default function Skills() {
   const { language } = useLanguage();
   const t = sectionText[language];

   return (
      <section id="skills" className="section bg-white/[0.02]">
         <div className="container-custom">
            {/* Header */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center mb-12"
            >
               <span className="text-primary-400 text-sm uppercase tracking-wider">{t.title}</span>
               <h2 className="text-3xl md:text-4xl font-bold mt-2">{t.subtitle}</h2>
            </motion.div>

            {/* ── Bento Grid ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">

               {/* Backend — wide (2 cols) */}
               <BentoCard
                  title={t.backend}
                  items={skills.backend}
                  colSpan="lg:col-span-2"
                  accent="#ef4444"
                  delay={0}
               />

               {/* Frontend — normal */}
               <BentoCard
                  title={t.frontend}
                  items={skills.frontend}
                  accent="#61dafb"
                  delay={0.08}
               />

               {/* Programming — normal */}
               <BentoCard
                  title={t.programming}
                  items={skills.programming}
                  accent="#f59e0b"
                  delay={0.12}
               />

               {/* Tools — wide (2 cols) */}
               <BentoCard
                  title={t.tools}
                  items={skills.tools}
                  colSpan="lg:col-span-2"
                  accent="#2496ed"
                  delay={0.16}
               />

               {/* Databases — normal */}
               <BentoCard
                  title={t.databases}
                  items={skills.databases}
                  accent="#47a248"
                  delay={0.2}
               />

               {/* Methodologies — normal */}
               <BentoCard
                  title={t.methodologies}
                  items={skills.methodologies}
                  accent="#8b5cf6"
                  delay={0.24}
               />
            </div>
         </div>
      </section>
   );
}
