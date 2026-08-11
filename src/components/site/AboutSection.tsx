import { motion } from "motion/react";
import { StarGlyph } from "./Motifs";

export function AboutSection() {
  return (
    <section id="about" className="grain relative bg-cream py-24 text-ink md:py-36">
      <div className="halftone pointer-events-none absolute inset-x-0 top-0 h-40 text-ink opacity-10" />
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="stamp">About Equinox</span>
          <span className="label-tag opacity-50">CIE · MLRIT · Hyderabad</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="display mt-8 text-[clamp(2.6rem,10vw,10rem)]"
        >
          Where ideas
          <br />
          <span className="text-blue">meet</span> <span className="outline-type">action.</span>
        </motion.h2>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xl leading-relaxed md:text-3xl">
              EQUINOX is a three-day entrepreneurship and innovation event organised by the Centre
              for Innovation and Entrepreneurship at MLR Institute of Technology, Hyderabad.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-75 md:text-lg">
              It brings students, entrepreneurs, investors, innovators and industry leaders into one
              space — eleven experiences built around solving real problems, testing business
              instincts and putting ideas in front of people who can move them forward.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Students", "Entrepreneurs", "Investors", "Innovators", "Industry Leaders"].map(
                (t) => (
                  <span key={t} className="stamp border-ink/40">
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="md:col-span-5">
            <ul className="border-t-2 border-ink/20">
              {[
                "Solve real-world challenges",
                "Explore entrepreneurship",
                "Showcase ideas",
                "Experience business scenarios",
                "Network across campuses",
                "Learn directly from industry",
                "Explore mentorship",
                "Discover opportunities",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group flex items-baseline gap-4 border-b-2 border-ink/20 py-3"
                >
                  <span className="label-tag w-7 text-blue">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg font-medium transition-colors group-hover:text-violet md:text-xl">
                    {item}
                  </span>
                  <StarGlyph className="ml-auto h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
