"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Play, Calendar, Trophy, X, MapPin, Download, Share2, Target, Award, Users, Briefcase, Lightbulb, Presentation, Landmark, Compass, TrendingUp, MessageSquare, Megaphone } from "lucide-react";

const PERSPECTIVE = 1200;
const SCALE_STEP = 0.15;
const MAX_VISIBLE = 2;
const DEPTH = 200;
const GAP = 12; // spacing step
const TILT = 10; // degrees rotation Y
const SIDE_TILT = 6; // degrees rotation Z

export default function SubEventCarousel({ events }) {
  const n = events.length;
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const lockRef = useRef(false);
  const touchStartRef = useRef(null);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const listener = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Lock input to prevent spam jitter
  const lock = useCallback(() => {
    lockRef.current = true;
    window.setTimeout(() => {
      lockRef.current = false;
    }, 400);
  }, []);

  const step = useCallback(
    (dir) => {
      if (lockRef.current) return;
      lock();
      setActive((a) => (((a + dir) % n) + n) % n);
    },
    [n, lock]
  );

  const handleCardClick = useCallback(
    (i) => {
      if (lockRef.current) return;
      lock();
      setActive(i);
    },
    [lock]
  );

  // Keyboard navigation
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    },
    [step]
  );

  // Swipe / Drag Support
  const onTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartRef.current === null) return;
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        step(1); // swipe left -> next
      } else {
        step(-1); // swipe right -> prev
      }
    }
    touchStartRef.current = null;
  };

  // Mouse drag support
  const onMouseDown = (e) => {
    touchStartRef.current = e.clientX;
  };

  const onMouseUp = (e) => {
    if (touchStartRef.current === null) return;
    const diff = touchStartRef.current - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        step(1);
      } else {
        step(-1);
      }
    }
    touchStartRef.current = null;
  };

  const transitionCss = reducedMotion 
    ? "opacity 0.4s ease-in-out" 
    : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease-in-out, z-index 0.4s ease-in-out";

  return (
    <div
      className="relative w-full min-h-[580px] flex flex-col items-center justify-center outline-none select-none overflow-hidden"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={{ perspective: `${PERSPECTIVE}px` }}
    >
      {/* 3D Stack Container */}
      <div 
        className="relative w-full max-w-[420px] h-[480px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {events.map((evt, i) => {
          let rel = i - active;
          // Loop calculations
          if (rel > n / 2) rel -= n;
          if (rel < -n / 2) rel += n;

          const ax = Math.abs(rel);
          const visible = ax <= MAX_VISIBLE;
          const isActive = rel === 0;
          
          // CSS Transforms
          const sc = Math.max(0.65, 1 - ax * SCALE_STEP);
          const tx = rel * (GAP * 22);
          const tz = -ax * DEPTH;
          const ry = -rel * TILT;
          const rz = rel * SIDE_TILT;

          // 3D Matrix vs simple crossfade fallback
          const transformString = reducedMotion
            ? `translate(-50%, -50%) scale(${isActive ? 1 : 0.85})`
            : `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`;

          const Icon = evt.icon;

          const cardStyle = {
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "100%",
            height: "100%",
            transform: transformString,
            transition: transitionCss,
            opacity: visible ? (isActive ? 1 : 0.35) : 0,
            zIndex: visible ? 10 - ax : 0,
            pointerEvents: visible ? "auto" : "none",
            transformStyle: "preserve-3d",
          };

          return (
            <div
              key={i}
              style={cardStyle}
              onClick={() => handleCardClick(i)}
              className={`bg-[#0B1526] border rounded-2xl p-6 shadow-2xl transition-colors duration-300 flex flex-col justify-between cursor-pointer ${
                isActive 
                  ? "border-[#38BDF8] shadow-[0_0_30px_rgba(56,189,248,0.2)]" 
                  : "border-[#2563EB]/20 hover:border-[#38BDF8]/40"
              }`}
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg border transition-colors ${
                    isActive 
                      ? "bg-[#2563EB]/20 text-[#7DD3FC] border-[#38BDF8]/20" 
                      : "bg-[#2563EB]/5 text-[#7DD3FC]/60 border-[#2563EB]/10"
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#EAF2FF] tracking-tight">{evt.title}</h3>
                </div>
                <p className="text-[#8CA3C4] text-sm leading-relaxed mb-6">{evt.desc}</p>
              </div>

              {/* Placeholder image slot for the sub-event */}
              <div className="w-full h-44 border border-[#38BDF8]/10 rounded-lg flex flex-col items-center justify-center bg-[#050A14]/50 text-center text-[#8CA3C4] text-xs font-mono">
                <span>[Image Placeholder]</span>
                <span>{evt.title} Event Photo</span>
              </div>

              {/* Muted/Dark Tint Overlay for adjacent cards */}
              {!isActive && (
                <div className="absolute inset-0 bg-[#050A14]/60 rounded-2xl pointer-events-none transition-opacity duration-300" />
              )}
            </div>
          );
        })}
      </div>

      {/* Nav dots */}
      <div className="flex justify-center items-center space-x-2 mt-8 z-20">
        {events.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleCardClick(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === active 
                ? "bg-[#7DD3FC] w-6" 
                : "bg-[#8CA3C4]/30 hover:bg-[#8CA3C4]/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Desktop Helper Instructions */}
      <p className="text-xs font-mono text-[#8CA3C4]/40 mt-4 hidden md:block">
        Use Left/Right arrow keys or drag to slide
      </p>
    </div>
  );
}
