"use client";

import { useState, useEffect } from "react";
import FlyingPosters from "@/components/FlyingPosters";

export default function ScrollRevealGallery({ category, items, onSelectImage }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const listener = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center select-none">
      {reducedMotion ? (
        // Fallback to simple horizontal-scroll snap flex row
        <div 
          className="w-full overflow-x-auto flex gap-8 py-8 px-8 md:px-16 scroll-snap-x hide-scrollbar"
          style={{ height: "60vh", scrollbarWidth: "none" }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectImage(item)}
              className="flex-shrink-0 w-[420px] md:w-[500px] h-full border border-[#38BDF8]/20 bg-[#0B1526] rounded-2xl p-8 flex flex-col justify-between cursor-pointer hover:border-[#38BDF8]/50 scroll-snap-align-center"
            >
              <div>
                <span className="text-xs font-mono text-[#38BDF8] tracking-widest block mb-1">
                  {category.toUpperCase()} // PANEL {idx + 1}
                </span>
                <h3 className="text-2xl font-bold text-[#EAF2FF] tracking-tight">{item}</h3>
              </div>
              <p className="text-sm text-[#8CA3C4] leading-relaxed max-w-xs mt-4">
                Experience the moments and structured venture showcases recorded live at MLRIT Campus.
              </p>
              <div className="w-full h-56 border border-[#38BDF8]/10 rounded-lg flex flex-col items-center justify-center bg-[#050A14]/80 text-[#8CA3C4] text-xs font-mono mt-8">
                <span>[Image Placeholder]</span>
                <span>{item} Photo</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Large, immersive 3D horizontal FlyingPosters showcase
        <div 
          className="w-full relative bg-[#050A14] overflow-hidden border border-[#38BDF8]/10 rounded-2xl" 
          style={{ height: "60vh" }}
        >
          <FlyingPosters
            items={items}
            planeWidth={440}
            planeHeight={320}
            scrollEase={0.08}
            cameraFov={50}
            cameraZ={16}
            className="w-full h-full"
          />
          {/* Left/Right Edge Fades to avoid hard cropping */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050A14] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050A14] to-transparent pointer-events-none z-10" />
        </div>
      )}

      <p className="text-xs font-mono text-[#8CA3C4]/30 mt-3 hidden md:block">
        Use Mouse Wheel or Drag horizontally to glide posters in 3D WebGL space
      </p>
    </div>
  );
}
