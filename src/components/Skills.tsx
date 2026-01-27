"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { skills } from "@/lib/data";

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

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
      },
   },
};

const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0 },
};

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
   ];

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
               <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  {text.subtitle}
               </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {skillCategories.map(({ key, items }) => (
                  <motion.div
                     key={key}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                     className="glass p-6 rounded-2xl"
                  >
                     <h3 className="text-lg font-semibold mb-4 text-primary-400">
                        {text.categories[key as keyof typeof text.categories]}
                     </h3>
                     <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2"
                     >
                        {items.map((skill) => (
                           <motion.span
                              key={skill}
                              variants={itemVariants}
                              className="skill-badge"
                           >
                              {skill}
                           </motion.span>
                        ))}
                     </motion.div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
