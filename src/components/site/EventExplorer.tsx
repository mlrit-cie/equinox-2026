import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { events, type EquinoxEvent } from "@/data/events";
import { EventMotif } from "./Motifs";

const themeMap: Record<EquinoxEvent["theme"], string> = {
  blue: "bg-blue text-cream",
  violet: "bg-violet text-cream",
  cream: "bg-cream-deep text-ink",
  ink: "bg-ink text-cream",
};

const accentMap: Record<EquinoxEvent["accent"], string> = {
  orange: "text-orange",
  coral: "text-coral",
  yellow: "text-yellow",
  pink: "text-pink",
};

export function EventCard({ event, index }: { event: EquinoxEvent; index: number }) {
  const span =
    index % 5 === 0
      ? "md:col-span-7"
      : index % 5 === 1
        ? "md:col-span-5"
        : index % 5 === 2
          ? "md:col-span-4"
          : index % 5 === 3
            ? "md:col-span-4"
            : "md:col-span-4";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`col-span-12 ${span}`}
    >
      <Link
        to="/events/$eventId"
        params={{ eventId: event.id }}
        className={`group relative flex h-full min-h-[19rem] flex-col justify-between overflow-hidden border-2 border-ink/20 p-6 transition-transform duration-300 hover:-translate-y-2 md:min-h-[23rem] ${themeMap[event.theme]}`}
      >
        <EventMotif
          motif={event.motif}
          className="pointer-events-none absolute -right-10 -top-8 h-56 w-56 opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:opacity-40"
        />
        <div className="relative flex items-start justify-between gap-4">
          <span className={`display text-6xl md:text-8xl ${accentMap[event.accent]}`}>
            {event.number}
          </span>
          <span className="label-tag border-2 border-current px-2 py-1 opacity-70">
            {event.category}
          </span>
        </div>

        <div className="relative mt-8">
          <h3 className="display text-[clamp(2rem,5vw,4rem)]">{event.title}</h3>
          <p className="display mt-1 text-lg opacity-70 md:text-2xl">{event.tagline}</p>

          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mt-4 max-w-lg text-sm leading-relaxed opacity-80">
                {event.description}
              </p>
            </div>
          </div>

          <span className="label-tag mt-5 inline-flex items-center gap-2 border-b-2 border-current pb-1">
            Explore Event →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function EventExplorer() {
  return (
    <section id="events" className="grain relative bg-blue-deep py-24 text-cream md:py-36">
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="stamp">11 Experiences</span>
            <h2 className="display mt-6 text-[clamp(2.6rem,10vw,9rem)]">
              The <span className="text-yellow">line</span>
              <br />
              up.
            </h2>
          </div>
          <p className="max-w-sm text-sm opacity-70 md:text-base">
            Eleven distinct formats across three days — talks, simulations, auctions, expos and
            pitches. Hover to open a card, click to enter the event.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-4">
          {events.map((e, i) => (
            <EventCard key={e.id} event={e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
