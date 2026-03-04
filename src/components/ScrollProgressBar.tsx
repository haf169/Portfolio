"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgressBar
 * Thin gradient bar at top of page showing scroll progress.
 * Uses Framer Motion spring for smooth fill animation.
 */
export default function ScrollProgressBar() {
   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
   });

   return (
      <motion.div
         style={{
            scaleX,
            transformOrigin: "left",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            zIndex: 9999,
            pointerEvents: "none",
            background: "linear-gradient(90deg, #0ea5e9, #14b8a6, #06b6d4)",
            boxShadow: "0 0 10px rgba(14,165,233,0.8), 0 0 20px rgba(14,165,233,0.4)",
         }}
      />
   );
}
