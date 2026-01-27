"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/lib/data";

const sectionText = {
   vi: {
      title: "Liên hệ",
      subtitle: "Kết nối với tôi",
      description:
         "Nếu bạn quan tâm đến hồ sơ của tôi hoặc muốn hợp tác trong các dự án, đừng ngần ngại liên hệ!",
      sendEmail: "Gửi email",
      callMe: "Gọi điện",
      location: "Địa điểm",
   },
   en: {
      title: "Contact",
      subtitle: "Get In Touch",
      description:
         "If you're interested in my profile or want to collaborate on projects, don't hesitate to reach out!",
      sendEmail: "Send Email",
      callMe: "Call Me",
      location: "Location",
   },
   ja: {
      title: "連絡先",
      subtitle: "お問い合わせ",
      description:
         "私のプロフィールに興味がある方、またはプロジェクトでの協力をご希望の方は、お気軽にご連絡ください！",
      sendEmail: "メールを送る",
      callMe: "電話する",
      location: "所在地",
   },
};

export default function Contact() {
   const { language } = useLanguage();
   const text = sectionText[language];

   const contactItems = [
      {
         icon: Mail,
         label: text.sendEmail,
         value: personalInfo.email,
         href: `mailto:${personalInfo.email}`,
         color: "bg-primary-500/20 text-primary-400",
      },
      {
         icon: Phone,
         label: text.callMe,
         value: personalInfo.phone,
         href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
         color: "bg-accent/20 text-accent",
      },
      {
         icon: MapPin,
         label: text.location,
         value: personalInfo.location,
         href: null,
         color: "bg-yellow-500/20 text-yellow-400",
      },
   ];

   return (
      <section id="contact" className="section">
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
               <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                  {text.description}
               </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
               {contactItems.map((item, index) => (
                  <motion.div
                     key={item.label}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                     {item.href ? (
                        <a
                           href={item.href}
                           className="block glass p-6 rounded-2xl text-center hover:border-primary-500/30 transition-all duration-300 group"
                        >
                           <div
                              className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                           >
                              <item.icon size={24} />
                           </div>
                           <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                           <div className="font-medium text-sm">{item.value}</div>
                        </a>
                     ) : (
                        <div className="glass p-6 rounded-2xl text-center">
                           <div
                              className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                           >
                              <item.icon size={24} />
                           </div>
                           <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                           <div className="font-medium text-sm">{item.value}</div>
                        </div>
                     )}
                  </motion.div>
               ))}
            </div>

            {/* Social links */}
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="flex justify-center gap-4 mt-12"
            >
               <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl hover:border-primary-500/30 transition-all duration-300 hover:scale-110"
               >
                  <Github size={24} />
               </a>
               <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-6 py-4 bg-primary-500 hover:bg-primary-600 rounded-xl flex items-center gap-2 font-medium transition-all duration-300 hover:scale-105"
               >
                  <Send size={18} />
                  {text.sendEmail}
               </a>
            </motion.div>
         </div>
      </section>
   );
}
