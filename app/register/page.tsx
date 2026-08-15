import type { Metadata } from "next";
import Link from "next/link";
import { board, event, events, registration, tickets } from "@/lib/content";
import { Arrow, ContactCard, PageTransition, SectionHeading } from "../ui";

export const metadata: Metadata = {
  title: `Register — ${event.name} ${event.year}`,
  description: registration.body,
};

export default function RegisterPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-[1400px] px-4 pt-40 pb-24 sm:px-8">
        <SectionHeading
          eyebrow={registration.eyebrow}
          heading={registration.heading}
        />
        <p className="mt-8 max-w-2xl leading-relaxed text-fg/70">
          {registration.body}
        </p>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-fg/10 sm:grid-cols-2 lg:grid-cols-4">
          {registration.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3 bg-ground p-6">
              <span className="text-sm text-accent">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="heading text-xl">{step.title}</h2>
              <p className="leading-relaxed text-fg/70">{step.body}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-20 heading text-2xl">Passes</h2>
        <div className="mt-6 flex flex-col gap-6">
          {tickets.map((ticket) => (
            <div
              key={ticket.name}
              className="grid overflow-hidden rounded-3xl lg:grid-cols-[1fr_22rem]"
            >
              <div className="flex flex-col gap-6 bg-surface p-8">
                <div className="flex flex-col gap-3">
                  <h3 className="heading text-2xl">{ticket.name}</h3>
                  <p className="max-w-xl leading-relaxed text-fg/70">
                    {ticket.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  {ticket.perks.map((perk) => (
                    <li key={perk} className="border-l-2 border-beam/50 pl-3">
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
              {/* The lit face of the card: deep purple, so the type stays
                  light and the price is the brightest thing on it. */}
              <div className="relative flex flex-col justify-between gap-10 bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#3b1580] p-8 text-day">
                <div className="flex flex-col gap-4">
                  <span className="label w-max rounded-full border border-day/40 px-3 py-1">
                    {ticket.badge}
                  </span>
                  <div>
                    <p className="data text-5xl">{ticket.price}</p>
                    <p className="label mt-1 text-day/80">{ticket.unit}</p>
                  </div>
                </div>
                {/* Points at registration.formUrl until the real form exists. */}
                <a
                  href={registration.formUrl}
                  className="press flex items-center justify-between rounded-xl bg-day px-5 py-4 font-semibold text-night transition-colors hover:bg-day/90"
                >
                  Get this pass
                  <Arrow />
                </a>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-20 heading text-2xl">Register for an event</h2>
        <p className="mt-2 max-w-2xl text-fg/70">
          Each event takes its own team registration. Open the event and write to
          its SPOC to hold a slot.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((item) => (
            <Link
              key={item.slug}
              href={`/events/${item.slug}`}
              className="flex items-center justify-between gap-4 rounded-2xl bg-surface p-6 transition hover:bg-surface-2"
            >
              <span>
                <span className="block font-medium">{item.name}</span>
                <span className="block text-sm text-fg/70">
                  {item.fee} · {item.teamSize}
                </span>
              </span>
              <Arrow />
            </Link>
          ))}
        </div>

        <h2 className="mt-20 heading text-2xl">Stuck on registration?</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {board.slice(0, 3).map((member) => (
            <ContactCard key={member.email} {...member} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
