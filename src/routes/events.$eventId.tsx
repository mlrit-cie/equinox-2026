import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { events, getEvent, type EquinoxEvent } from "@/data/events";
import { EventMotif, ArrowGlyph } from "@/components/site/Motifs";

export const Route = createFileRoute("/events/$eventId")({
  loader: ({ params }) => {
    const event = getEvent(params.eventId);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Event not found — EQUINOX" }, { name: "robots", content: "noindex" }],
      };
    }
    const { event } = loaderData;
    const title = `${event.title} — EQUINOX by CIE, MLRIT`;
    return {
      meta: [
        { title },
        { name: "description", content: event.description },
        { property: "og:title", content: title },
        { property: "og:description", content: event.description },
      ],
    };
  },
  component: EventDetail,
});

const themeMap = {
  blue: "bg-blue text-cream",
  violet: "bg-violet text-cream",
  cream: "bg-cream text-ink",
  ink: "bg-ink text-cream",
} as const;

function EventDetail() {
  const { event } = Route.useLoaderData() as { event: EquinoxEvent };
  const index = events.findIndex((e) => e.id === event.id);
  const nextEvent = events[(index + 1) % events.length]!;

  return (
    <main className={`grain min-h-screen ${themeMap[event.theme]}`}>
      <section className="relative overflow-hidden px-4 pb-16 pt-28 md:px-8 md:pt-40">
        <EventMotif
          motif={event.motif}
          className="pointer-events-none absolute -right-24 top-10 h-[34rem] w-[34rem] opacity-20"
        />
        <div className="relative mx-auto max-w-[1600px]">
          <Link to="/events" className="label-tag opacity-70 hover:opacity-100">
            ← All experiences
          </Link>

          <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-3">
            <span className="display text-[clamp(4rem,16vw,14rem)] leading-[0.75] opacity-30">
              {event.number}
            </span>
            <span className="stamp mb-4">{event.category}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="display text-[clamp(3rem,13vw,11rem)]"
          >
            {event.title}
          </motion.h1>
          <p className="display mt-3 text-[clamp(1.5rem,4vw,3rem)] opacity-70">{event.tagline}</p>

          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-lg leading-relaxed md:text-2xl">{event.description}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {event.highlights.map((h) => (
                  <span key={h} className="stamp">
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <dl className="md:col-span-5">
              {[
                ["Format", event.format],
                ["Category", event.category],
                ["Day", "To be announced"],
                ["Timing", "To be announced"],
                ["Registration fee", "To be announced"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-4 border-b border-current/25 py-3 first:border-t"
                >
                  <dt className="label-tag opacity-60">{k}</dt>
                  <dd className="display text-xl">{v}</dd>
                </div>
              ))}
              <Link
                to="/register"
                search={{ event: event.id }}
                className="group mt-8 flex items-center justify-between gap-3 bg-yellow px-6 py-5 text-ink"
              >
                <span className="display text-2xl">Register for {event.title}</span>
                <ArrowGlyph className="h-3 w-10 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-current/20 px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">
          <span className="label-tag opacity-60">Next experience</span>
          <Link
            to="/events/$eventId"
            params={{ eventId: nextEvent.id }}
            className="display text-3xl hover:opacity-70 md:text-6xl"
          >
            {nextEvent.number} {nextEvent.title} →
          </Link>
        </div>
      </section>
    </main>
  );
}
