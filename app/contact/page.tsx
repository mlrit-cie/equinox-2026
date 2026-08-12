import type { Metadata } from "next";
import Link from "next/link";
import { board, event, events, socials } from "@/lib/content";
import { Arrow, ContactCard, PageTransition, SectionHeading } from "../ui";

export const metadata: Metadata = {
  title: `Contact — ${event.name} ${event.year}`,
  description: `Reach the ${event.name} ${event.year} organising board and every event SPOC.`,
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-[1400px] px-4 pt-40 pb-24 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          heading="Who to Write to, and About What"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-2xl bg-surface p-6">
            <p className="text-sm text-fg/70">Venue</p>
            <p className="font-medium">{event.venue}</p>
            <p className="text-fg/70">{event.date}</p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl bg-surface p-6">
            <p className="text-sm text-fg/70">Hosted by</p>
            <p className="font-medium">{event.host}</p>
          </div>
          <div className="flex flex-col gap-3 rounded-2xl bg-surface p-6">
            <p className="text-sm text-fg/70">Social</p>
            <ul className="flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="grid h-10 w-10 place-items-center rounded-full bg-fg/10 text-xs transition hover:bg-fg/20"
                  >
                    {social.label.slice(0, 2)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="mt-20 heading text-2xl">Organising board</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((member) => (
            <ContactCard key={member.email} {...member} />
          ))}
        </div>

        <h2 className="mt-20 heading text-2xl">Event SPOCs</h2>
        <p className="mt-2 max-w-2xl text-fg/70">
          For anything specific to an event — slots, rules, team changes — write
          to its SPOC directly.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((item) => (
            <div key={item.slug} className="flex flex-col gap-3">
              <ContactCard
                name={item.spoc.name}
                role={`SPOC · ${item.name}`}
                email={item.spoc.email}
                phone={item.spoc.phone}
              />
              <Link
                href={`/events/${item.slug}`}
                transitionTypes={["nav-forward"]}
                className="flex items-center gap-2 text-sm text-accent hover:text-fg"
              >
                {item.name}
                <Arrow />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
