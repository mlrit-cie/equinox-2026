import { createFileRoute, Link } from "@tanstack/react-router";
import { events } from "@/data/events";
import { EventCard } from "@/components/site/EventExplorer";
import { EventMarquee } from "@/components/site/EventMarquee";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "11 Experiences at EQUINOX — Events by CIE, MLRIT" },
      {
        name: "description",
        content:
          "Explore all eleven EQUINOX experiences: Spotlight, Crossroads, Startup Expo, Brand Battles, IPL Auction, Hustle Mania, Ideathon, Internship Drive, Startup Poly, E-Cell Meet and Pitch Deck.",
      },
      { property: "og:title", content: "11 Experiences at EQUINOX" },
      {
        property: "og:description",
        content: "Talks, simulations, auctions, expos and pitches across three days.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <main className="bg-blue-deep text-cream">
      <section className="grain relative px-4 pb-16 pt-32 md:px-8 md:pt-44">
        <div className="mx-auto max-w-[1600px]">
          <span className="stamp">Equinox · Experiences</span>
          <h1 className="display mt-6 text-[clamp(3rem,14vw,12rem)]">
            Eleven
            <br />
            <span className="text-yellow">arenas.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base opacity-75 md:text-lg">
            Every experience has its own rules, its own room and its own kind of pressure. Pick the
            one that fits how you think — or take on all of them.
          </p>
          <Link to="/register" className="label-tag mt-8 inline-block bg-yellow px-6 py-4 text-ink">
            Register Now →
          </Link>
        </div>
      </section>

      <EventMarquee tone="violet" />

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-4">
          {events.map((e, i) => (
            <EventCard key={e.id} event={e} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
