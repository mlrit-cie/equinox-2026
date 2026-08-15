import type { Metadata } from "next";
import { event, events } from "@/lib/content";
import { EventCard, PageTransition, SectionHeading } from "../ui";

export const metadata: Metadata = {
  title: `Events — ${event.name} ${event.year}`,
  description: `Every event at ${event.name} ${event.year}: hackathon, ideathon, IPL auction, code sprint, design jam and the startup expo.`,
};

export default function EventsPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-[1400px] px-4 pt-40 pb-24 sm:px-8">
        <SectionHeading
          eyebrow="Events"
          heading={`All ${events.length} events`}
        />
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((item) => (
            <EventCard key={item.slug} event={item} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
