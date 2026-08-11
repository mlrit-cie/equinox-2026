import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowGlyph, OrbitalMarks, StarGlyph } from "./Motifs";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.35, 0.62]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const wordOpacity = useTransform(scrollYProgress, [0, 0.45, 0.7], [1, 1, 0]);
  const nextOpacity = useTransform(scrollYProgress, [0.55, 0.85], [0, 1]);
  const nextY = useTransform(scrollYProgress, [0.55, 0.95], [60, 0]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPointer({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const p = (depth: number) => ({
    transform: `translate3d(${pointer.x * depth}px, ${pointer.y * depth}px, 0)`,
  });

  return (
    <section ref={ref} className="grain relative min-h-[190vh] bg-ink text-cream">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="gridlines pointer-events-none absolute inset-0 text-cream opacity-[0.07]" />

        {/* abstract composition */}
        <div
          className="pointer-events-none absolute -left-32 top-10 h-[42rem] w-[42rem] rounded-full bg-violet/70 blur-[2px]"
          style={p(-34)}
        />
        <div
          className="halftone pointer-events-none absolute -right-24 top-1/4 h-[30rem] w-[30rem] rounded-full text-cream opacity-25"
          style={p(26)}
        />
        <div
          className="pointer-events-none absolute bottom-[-8rem] right-[-6rem] h-[26rem] w-[26rem] rotate-12 bg-blue"
          style={p(-18)}
        />
        <OrbitalMarks
          className="spin-slow pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 text-cream/25"
        />
        <StarGlyph
          className="pointer-events-none absolute left-[8%] bottom-[18%] h-16 w-16 text-yellow"
        />
        <div
          className="pointer-events-none absolute right-[12%] top-[16%] h-24 w-24 rounded-full border-4 border-coral"
          style={p(40)}
        />

        <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-4 pt-24 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <div>
              <p className="label-tag text-yellow">Centre for Innovation &amp; Entrepreneurship</p>
              <p className="label-tag mt-1 opacity-60">
                MLR Institute of Technology · Hyderabad
              </p>
            </div>
            <p className="label-tag rotate-[-2deg] border-2 border-cream/40 px-3 py-2">
              3-Day Entrepreneurship Experience
            </p>
          </div>

          <div className="relative mt-6 md:mt-4">
            <motion.h1
              style={{ scale, y, opacity: wordOpacity }}
              className="display origin-center text-center text-[clamp(4rem,20vw,17rem)]"
            >
              {"EQUINOX".split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                  style={{ color: i === 3 ? "var(--color-yellow)" : undefined }}
                >
                  {ch}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              style={{ opacity: nextOpacity, y: nextY }}
              className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <span className="display text-[clamp(2.2rem,9vw,7rem)]">Ideas</span>
              <span className="display text-[clamp(2.2rem,9vw,7rem)] text-coral">Meet</span>
              <span className="display outline-type text-[clamp(2.2rem,9vw,7rem)]">
                Opportunity
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ opacity: wordOpacity }}
            className="mt-8 flex flex-col gap-6 md:mt-10"
          >
            <div className="grid grid-cols-3 gap-3 border-y-2 border-cream/25 py-4 text-center">
              {[
                ["3", "Days"],
                ["11", "Experiences"],
                ["1", "Entrepreneurial Universe"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="display text-3xl text-yellow md:text-5xl">{n}</p>
                  <p className="label-tag mt-1 opacity-70">{l}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/register"
                className="group flex items-center gap-3 bg-yellow px-6 py-4 text-ink transition-transform hover:-translate-y-1 md:px-10 md:py-5"
              >
                <span className="display text-xl md:text-3xl">Register Now</span>
                <ArrowGlyph className="h-4 w-10 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/events"
                className="label-tag border-2 border-cream px-6 py-4 transition-colors hover:bg-cream hover:text-ink"
              >
                Explore Events ↓
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
