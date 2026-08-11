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
        <p className="mt-8 max-w-2xl leading-relaxed text-white/70">
          {registration.body}
        </p>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {registration.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3 bg-ink p-6">
              <span className="text-sm text-electric-soft">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-xl font-medium">{step.title}</h2>
              <p className="leading-relaxed text-white/60">{step.body}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-20 text-2xl font-medium">Passes</h2>
        <div className="mt-6 flex flex-col gap-6">
          {tickets.map((ticket) => (
            <div
              key={ticket.name}
              className="grid overflow-hidden rounded-3xl lg:grid-cols-[1fr_22rem]"
            >
              <div className="flex flex-col gap-6 bg-panel p-8">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-medium">{ticket.name}</h3>
                  <p className="max-w-xl leading-relaxed text-white/60">
                    {ticket.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  {ticket.perks.map((perk) => (
                    <li key={perk} className="border-l-2 border-white/25 pl-3">
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grain relative flex flex-col justify-between gap-10 bg-gradient-to-br from-electric to-panel-2 p-8">
                <div className="relative flex flex-col gap-4">
                  <span className="w-max rounded-full bg-white/15 px-3 py-1 text-sm">
                    {ticket.badge}
                  </span>
                  <div>
                    <p className="text-5xl font-medium">{ticket.price}</p>
                    <p className="text-white/70">{ticket.unit}</p>
                  </div>
                </div>
                {/* Points at registration.formUrl until the real form exists. */}
                <a
                  href={registration.formUrl}
                  className="relative flex items-center justify-between rounded-xl bg-white/15 px-5 py-4 font-semibold backdrop-blur-md transition hover:bg-white/25"
                >
                  Get this pass
                  <Arrow />
                </a>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-20 text-2xl font-medium">Register for an event</h2>
        <p className="mt-2 max-w-2xl text-white/60">
          Each event takes its own team registration. Open the event and write to
          its SPOC to hold a slot.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((item) => (
            <Link
              key={item.slug}
              href={`/events/${item.slug}`}
              transitionTypes={["nav-forward"]}
              className="flex items-center justify-between gap-4 rounded-2xl bg-panel p-6 transition hover:bg-panel-2"
            >
              <span>
                <span className="block font-medium">{item.name}</span>
                <span className="block text-sm text-white/50">
                  {item.fee} · {item.teamSize}
                </span>
              </span>
              <Arrow />
            </Link>
          ))}
        </div>

        <h2 className="mt-20 text-2xl font-medium">Stuck on registration?</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {board.slice(0, 3).map((member) => (
            <ContactCard key={member.email} {...member} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
