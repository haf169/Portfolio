"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TerminalLine =
   | { type: "input"; text: string }
   | { type: "output"; text: string | string[] }
   | { type: "error"; text: string };

const COMMANDS: Record<string, string[]> = {
   help: [
      "Available commands:",
      "  about     — Who am I?",
      "  skills    — Tech stack",
      "  contact   — Get in touch",
      "  rikai     — Current workplace",
      "  clear     — Clear terminal",
      "  exit      — Close terminal",
   ],
   about: [
      "Nguyễn Hữu Trần Hà",
      "Software Engineer @ Rikai Technology",
      "Full-stack: Ruby on Rails + NextJS",
      "Based in Da Nang, Vietnam 🇻🇳",
   ],
   skills: [
      "Languages  : Ruby, JavaScript, TypeScript, Java",
      "Backend    : Ruby on Rails, Spring Boot, NodeJS",
      "Frontend   : NextJS, ReactJS, Tailwind CSS",
      "DevOps     : Docker Compose, Linux Ubuntu",
      "Database   : PostgreSQL, MySQL, MongoDB",
   ],
   contact: [
      "📧  itsmetranha16@gmail.com",
      "📱  081 4004 777",
      "🐙  github.com/haf169",
   ],
   rikai: [
      "🏢  Rikai Technology",
      "📅  Jan 2026 – Present",
      "🛠   Full-stack Software Engineer",
      "     Ruby on Rails · NextJS · Docker",
   ],
};

const INITIAL_LINES: TerminalLine[] = [
   { type: "output", text: "Welcome to Tranha's terminal v1.0.0" },
   { type: "output", text: 'Type "help" to see available commands.' },
];

/**
 * TerminalEasterEgg
 * Opens with backtick (~) key or Ctrl+`
 * Supports: help, about, skills, contact, rikai, clear, exit
 */
export default function TerminalEasterEgg() {
   const [open, setOpen] = useState(false);
   const [input, setInput] = useState("");
   const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
   const [history, setHistory] = useState<string[]>([]);
   const [histIdx, setHistIdx] = useState(-1);

   useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
         if (e.key === "`" || (e.ctrlKey && e.key === "`")) {
            e.preventDefault();
            setOpen((v) => !v);
         }
         if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
   }, []);

   const runCommand = useCallback((raw: string) => {
      const cmd = raw.trim().toLowerCase();
      if (!cmd) return;

      setHistory((h) => [cmd, ...h]);
      setHistIdx(-1);

      const inputLine: TerminalLine = { type: "input", text: raw };

      if (cmd === "clear") {
         setLines(INITIAL_LINES);
         return;
      }
      if (cmd === "exit") {
         setOpen(false);
         return;
      }

      const result = COMMANDS[cmd];
      if (result) {
         setLines((l) => [...l, inputLine, { type: "output", text: result }]);
      } else {
         setLines((l) => [
            ...l,
            inputLine,
            { type: "error", text: `Command not found: "${cmd}". Try "help".` },
         ]);
      }
   }, []);

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
         runCommand(input);
         setInput("");
      }
      if (e.key === "ArrowUp") {
         const idx = Math.min(histIdx + 1, history.length - 1);
         setHistIdx(idx);
         setInput(history[idx] ?? "");
      }
      if (e.key === "ArrowDown") {
         const idx = Math.max(histIdx - 1, -1);
         setHistIdx(idx);
         setInput(idx === -1 ? "" : history[idx]);
      }
   };

   return (
      <>
         {/* Hint badge */}
         <AnimatePresence>
            {!open && (
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-black/70 border border-white/10 px-3 py-2 rounded-xl text-xs text-gray-400 backdrop-blur cursor-pointer select-none"
                  onClick={() => setOpen(true)}
               >
                  <span className="text-primary-400 font-mono">~</span>
                  terminal
               </motion.div>
            )}
         </AnimatePresence>

         {/* Terminal window */}
         <AnimatePresence>
            {open && (
               <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 40, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="fixed bottom-6 right-6 z-[9000] w-[420px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                  style={{ background: "rgba(10,10,10,0.96)", backdropFilter: "blur(20px)" }}
               >
                  {/* Title bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                     <button
                        onClick={() => setOpen(false)}
                        className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                     />
                     <div className="w-3 h-3 rounded-full bg-yellow-500" />
                     <div className="w-3 h-3 rounded-full bg-green-500" />
                     <span className="ml-2 text-xs text-gray-500 font-mono">
                        tranha@portfolio ~ bash
                     </span>
                  </div>

                  {/* Output */}
                  <div className="p-4 h-64 overflow-y-auto font-mono text-sm space-y-1 text-gray-300">
                     {lines.map((line, i) => {
                        if (line.type === "input") {
                           return (
                              <div key={i} className="flex gap-2">
                                 <span className="text-primary-400 shrink-0">❯</span>
                                 <span className="text-white">{line.text}</span>
                              </div>
                           );
                        }
                        if (line.type === "error") {
                           return (
                              <div key={i} className="text-red-400">{line.text}</div>
                           );
                        }
                        const texts = Array.isArray(line.text) ? line.text : [line.text];
                        return (
                           <div key={i} className="space-y-0.5">
                              {texts.map((t, j) => (
                                 <div key={j} className="text-gray-400">{t}</div>
                              ))}
                           </div>
                        );
                     })}
                  </div>

                  {/* Input */}
                  <div className="flex items-center gap-2 px-4 py-3 border-t border-white/10 bg-white/[0.02]">
                     <span className="text-primary-400 font-mono text-sm shrink-0">❯</span>
                     <input
                        autoFocus
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="type a command..."
                        className="flex-1 bg-transparent text-white text-sm font-mono outline-none placeholder:text-gray-600"
                     />
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}
