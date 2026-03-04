"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import TerminalEasterEgg from "@/components/TerminalEasterEgg";
import LanguageTransitionOverlay from "@/components/LanguageTransitionOverlay";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Game2048 from "@/components/Game2048";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
   return (
      <SmoothScrollProvider>
         <LanguageProvider>
            {/* Global UI overlays */}
            <CustomCursor />
            <ScrollProgressBar />
            <TerminalEasterEgg />
            <LanguageTransitionOverlay />

            <main className="min-h-screen">
               <Navbar />
               <Hero />
               <About />
               <Skills />
               <Projects />
               <Game2048 />
               <Experience />
               <Contact />
               <Footer />
            </main>
         </LanguageProvider>
      </SmoothScrollProvider>
   );
}
