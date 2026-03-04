"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CustomCursor — dot only (no trailing ring)
 * - Small dot follows mouse instantly
 * - Grows + changes color when hovering links/buttons
 * - Squishes on click
 * - Hidden on touch devices
 */
export default function CustomCursor() {
   const dotRef = useRef<HTMLDivElement>(null);
   const [visible, setVisible] = useState(false);
   const [hovered, setHovered] = useState(false);
   const [clicked, setClicked] = useState(false);

   useEffect(() => {
      if ("ontouchstart" in window) return;

      const onMove = (e: MouseEvent) => {
         if (dotRef.current) {
            dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
         }
         if (!visible) setVisible(true);
      };

      const onLeave = () => setVisible(false);
      const onEnter = () => setVisible(true);
      const onDown = () => setClicked(true);
      const onUp = () => setClicked(false);

      const onOver = (e: MouseEvent) => {
         setHovered(!!(e.target as HTMLElement).closest("a, button, [data-cursor-hover]"));
      };

      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseleave", onLeave);
      document.addEventListener("mouseenter", onEnter);
      document.addEventListener("mousedown", onDown);
      document.addEventListener("mouseup", onUp);
      document.addEventListener("mouseover", onOver);

      return () => {
         document.removeEventListener("mousemove", onMove);
         document.removeEventListener("mouseleave", onLeave);
         document.removeEventListener("mouseenter", onEnter);
         document.removeEventListener("mousedown", onDown);
         document.removeEventListener("mouseup", onUp);
         document.removeEventListener("mouseover", onOver);
      };
   }, [visible]);

   // Size & color states
   const size = clicked ? 6 : hovered ? 16 : 10;
   const bg = hovered ? "#0ea5e9" : "#ffffff";
   const shadow = hovered
      ? "0 0 12px 4px rgba(14,165,233,0.7)"
      : "0 0 6px 2px rgba(255,255,255,0.25)";

   return (
      <div
         ref={dotRef}
         style={{
            position: "fixed",
            top: 0,
            left: 0,
            // Center on cursor tip
            marginLeft: -size / 2,
            marginTop: -size / 2,
            width: size,
            height: size,
            borderRadius: "50%",
            background: bg,
            boxShadow: shadow,
            opacity: visible ? 1 : 0,
            pointerEvents: "none",
            zIndex: 9999,
            transition: [
               "width 0.15s ease",
               "height 0.15s ease",
               "margin 0.15s ease",
               "background 0.15s ease",
               "box-shadow 0.15s ease",
               "opacity 0.2s ease",
            ].join(", "),
            willChange: "transform",
         }}
      />
   );
}
