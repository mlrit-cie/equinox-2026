import { motion } from "motion/react";
import { ArrowGlyph, OrbitalMarks } from "./Motifs";

const pillars = [
  {
    word: "Think.",
    note: "Frame the problem before the product. Ideathon and Crossroads push participants to reason like operators.",
    accent: "text-yellow",
  },
  {
    word: "Build.",
    note: "Turn thinking into something people can see — expo tables, stalls, decks, prototypes.",
    accent: "text-coral",
  },
  {
    word: "Connect.",
    note: "E-Cells, startups, mentors and investors in the same corridors for three straight days.",
    accent: "text-pink",
  },
  {
    word: "Grow.",
    note: "Feedback from people who have done it, and the opportunities that follow it.",
    accent: "text-cream",
  },
];

export function VisionSection() {
  return (
    <section id="vision" className="grain relative overflow-hidden bg-violet-deep py-24 text-cream md:py-36">
      <OrbitalMarks className="spin-slow pointer-events-none absolute -right-40 top-10 h-[38rem] w-[38rem] text-cream/20" />
      <div className="gridlines pointer-events-none absolute inset-0 text-cream opacity-[0.06]" />

      <div className="relative mx-auto max-w-[1600px] px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <span className="stamp">The Vision</span>
          <p className="label-tag max-w-xs text-right opacity-60">
            A magazine spread for an entrepreneurial universe
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-2 md:grid-cols-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.word}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`col-span-12 grid grid-cols-12 items-baseline gap-4 border-b border-cream/20 py-4 ${
                i % 2 ? "md:pl-[12%]" : ""
              }`}
            >
              <span className="label-tag col-span-2 opacity-50 md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className={`display col-span-10 text-[clamp(3rem,12vw,9rem)] md:col-span-6 ${p.accent}`}
              >
                {p.word}
              </h3>
              <p className="col-span-12 max-w-md text-sm leading-relaxed opacity-75 md:col-span-5 md:text-base">
                {p.note}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            ["Real scenarios", "Simulations, auctions and stalls that behave like the market does."],
            ["Real audiences", "Investors, VCs and industry experts in the judging seats."],
            ["Real outcomes", "Internships, mentorship and collaborations that outlive the event."],
          ].map(([t, d], i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border-2 border-cream/30 p-6"
            >
              <ArrowGlyph className="h-3 w-14 text-yellow" />
              <h4 className="display mt-4 text-2xl">{t}</h4>
              <p className="mt-2 text-sm opacity-70">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
