"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * SmoothScrollProvider — powered by Lenis
 * Butter-smooth wheel + touch scroll with easeInOutCubic easing.
 * Synced with requestAnimationFrame for 60/120fps consistency.
 */
export default function SmoothScrollProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   const lenisRef = useRef<Lenis | null>(null);

   useEffect(() => {
      const lenis = new Lenis({
         duration: 1.4,
         easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
         smoothWheel: true,
         wheelMultiplier: 0.9,
         touchMultiplier: 1.8,
         infinite: false,
      });

      lenisRef.current = lenis;

      // rAF loop
      let rafId: number;
      function raf(time: number) {
         lenis.raf(time);
         rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      // Smooth anchor click — offset for fixed navbar
      const handleAnchorClick = (e: MouseEvent) => {
         const anchor = (e.target as HTMLElement).closest(
            "a[href^='#']"
         ) as HTMLAnchorElement | null;
         if (!anchor) return;

         const href = anchor.getAttribute("href");
         if (!href || href === "#") return;

         const target = document.querySelector(href);
         if (!target) return;

         e.preventDefault();
         lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.4 });
      };

      document.addEventListener("click", handleAnchorClick);

      return () => {
         cancelAnimationFrame(rafId);
         document.removeEventListener("click", handleAnchorClick);
         lenis.destroy();
      };
   }, []);

   return <>{children}</>;
}
