import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowGlyph, OrbitalMarks, StarGlyph } from "./Motifs";

export function CIESection() {
  return (
    <section className="grain relative overflow-hidden bg-blue py-24 text-cream md:py-36">
      <div className="halftone pointer-events-none absolute inset-0 text-cream opacity-10" />
      <div className="relative mx-auto max-w-[1600px] px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="stamp">The Organisers</span>
            <h2 className="display mt-6 text-[clamp(2.2rem,7.5vw,6.5rem)]">
              Centre for
              <br />
              <span className="text-yellow">Innovation &amp;</span>
              <br />
              Entrepreneurship
            </h2>
            <p className="label-tag mt-6 opacity-70">
              MLR Institute of Technology · Hyderabad
            </p>
            <p className="mt-8 max-w-xl text-lg leading-relaxed opacity-85 md:text-2xl">
              CIE is the entrepreneurship engine of MLR Institute of Technology — and EQUINOX is its
              flagship three-day expression of it.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed opacity-70 md:text-base">
              CIE designs and runs the entire EQUINOX programme: the eleven experiences, the
              industry sessions, the investor rooms, the inter-college E-Cell meet and the
              internship drive that connects students with startups and companies.
            </p>
            <Link
              to="/register"
              className="group mt-10 inline-flex items-center gap-3 bg-cream px-6 py-4 text-ink"
            >
              <span className="display text-xl md:text-2xl">Join Equinox</span>
              <ArrowGlyph className="h-3 w-10 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative md:col-span-5">
            <OrbitalMarks className="spin-slow absolute -top-10 right-0 h-[26rem] w-[26rem] text-cream/25" />
            <div className="relative space-y-3">
              {[
                ["Programme design", "Eleven formats, one entrepreneurial system."],
                ["Industry access", "Experts, VCs and companies brought on campus."],
                ["Student platform", "Expo tables, stalls, pitches and decks."],
                ["Network building", "E-Cells across colleges in one room."],
              ].map(([t, d], i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex gap-4 border-2 border-cream/40 bg-blue-deep/40 p-5 backdrop-blur-[1px]"
                >
                  <StarGlyph className="mt-1 h-4 w-4 shrink-0 text-yellow" />
                  <div>
                    <p className="display text-xl">{t}</p>
                    <p className="mt-1 text-sm opacity-70">{d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
