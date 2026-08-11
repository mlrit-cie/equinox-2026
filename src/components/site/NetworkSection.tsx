import { motion } from "motion/react";

const rows = [
  { verb: "Meet", noun: "Builders.", note: "Students shipping products at the Startup Expo." },
  { verb: "Meet", noun: "Mentors.", note: "Industry leaders in Spotlight sessions and on the floor." },
  { verb: "Meet", noun: "Investors.", note: "VCs and investors judging Ideathon and Pitch Deck." },
  { verb: "Meet", noun: "Opportunity.", note: "Internship Drive desks and inter-college E-Cell collaboration." },
];

export function NetworkSection() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-24 text-cream md:py-36">
      <div className="gridlines pointer-events-none absolute inset-0 text-cream opacity-[0.06]" />
      <div className="relative mx-auto max-w-[1600px] px-4 md:px-8">
        <span className="stamp">Network</span>

        <div className="mt-10 divide-y divide-cream/20 border-y border-cream/20">
          {rows.map((r, i) => (
            <motion.div
              key={r.noun}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-10"
            >
              <h3 className="display text-[clamp(2.6rem,10vw,8rem)]">
                <span className="outline-type">{r.verb}</span>{" "}
                <span className="transition-colors group-hover:text-yellow">{r.noun}</span>
              </h3>
              <p className="max-w-sm text-sm opacity-70 md:ml-auto md:text-base">{r.note}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {["E-Cell networking", "Industry interaction", "Mentorship", "Collaboration"].map((t) => (
            <span key={t} className="stamp border-cream/50">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
