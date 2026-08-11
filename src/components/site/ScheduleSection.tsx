import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { schedule } from "@/data/schedule";

export function ScheduleSection() {
  return (
    <section id="schedule" className="grain relative bg-cream py-24 text-ink md:py-36">
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="stamp">Three Days</span>
            <h2 className="display mt-6 text-[clamp(2.6rem,10vw,9rem)]">
              The <span className="text-violet">run</span>
              <br />
              of show.
            </h2>
          </div>
          <p className="max-w-sm border-l-4 border-coral pl-4 text-sm opacity-75 md:text-base">
            Dates and timings are not published yet. Every slot below is a live placeholder — exact
            times will appear here once CIE releases the final schedule.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {schedule.map((day) => (
            <div key={day.day} className="grid gap-6 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="sticky top-28">
                  <p className="display text-[clamp(5rem,18vw,13rem)] leading-[0.75] text-blue">
                    {day.day}
                  </p>
                  <p className="display mt-2 text-2xl md:text-4xl">{day.label}</p>
                  <p className="label-tag mt-3 border-2 border-ink/30 px-3 py-2 inline-block">
                    Date: TBA
                  </p>
                </div>
              </div>

              <ul className="md:col-span-8">
                {day.slots.map((slot, i) => {
                  const row = (
                    <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 py-5 transition-colors">
                      <span className="label-tag w-20 text-coral">
                        {slot.time ?? "TIME TBA"}
                      </span>
                      <span className="display text-3xl md:text-5xl">{slot.title}</span>
                      <span className="label-tag ml-auto opacity-50">{slot.note}</span>
                    </div>
                  );
                  return (
                    <motion.li
                      key={`${day.day}-${i}`}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="group border-b-2 border-ink/20 first:border-t-2 hover:bg-yellow"
                    >
                      {slot.eventId ? (
                        <Link to="/events/$eventId" params={{ eventId: slot.eventId }} className="block px-2">
                          {row}
                        </Link>
                      ) : (
                        <div className="px-2">{row}</div>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
