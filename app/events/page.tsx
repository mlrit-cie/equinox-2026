import type { Metadata } from "next";
import { event, events } from "@/lib/content";
import { PageTransition, SectionHeading, EventCard } from "../ui";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Events — ${event.name} ${event.year}`,
  description: `Every event at ${event.name} ${event.year}: hackathon, ideathon, robo race, code sprint, design jam and the startup expo.`,
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
          {events.map((eventItem) => (
            <EventCard key={eventItem.slug} event={eventItem} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
