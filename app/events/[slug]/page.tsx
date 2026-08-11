import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { board, event, events } from "@/lib/content";
import { Arrow, ContactCard, Eyebrow, PageTransition } from "../../ui";

export function generateStaticParams() {
  return events.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/events/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = events.find((e) => e.slug === slug);
  if (!item) return {};

  return {
    title: `${item.name} — ${event.name} ${event.year}`,
    description: `${item.tagline}. ${item.day}, ${item.venue}. ${item.teamSize}, ${item.fee}.`,
  };
}

export default async function EventPage({ params }: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  const item = events.find((e) => e.slug === slug);
  if (!item) notFound();

  const facts = [
    { label: "When", value: item.time },
    { label: "Where", value: item.venue },
    { label: "Team size", value: item.teamSize },
    { label: "Entry", value: item.fee },
    { label: "Prize pool", value: item.prize },
  ];

  return (
    <PageTransition>
      {/* Same name as the card on the events grid, so the tile grows into this
          hero instead of the page blinking over. */}
      <ViewTransition name={`event-${item.slug}`} share="morph" default="none">
        <section className="grain relative flex min-h-[70svh] flex-col justify-end overflow-hidden bg-[radial-gradient(110%_90%_at_30%_10%,#2b3bff_0%,#141a6b_45%,#05060f_80%)] px-4 pt-40 pb-12 sm:px-8">
          <div className="relative mx-auto flex w-full max-w-[1400px] flex-col gap-4">
            <Eyebrow>
              {item.category} · {item.day}
            </Eyebrow>
            <h1 className="max-w-4xl font-display text-4xl leading-[1.05] font-black tracking-tight sm:text-6xl lg:text-7xl">
              {item.name}
            </h1>
            <p className="max-w-2xl text-xl text-white/70">{item.tagline}</p>
          </div>
        </section>
      </ViewTransition>

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8">
        <dl className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1 bg-ink p-6">
              <dt className="text-sm text-white/50">{fact.label}</dt>
              <dd className="font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_22rem]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-white/70">
              {item.about.map((paragraph) => (
                <p key={paragraph} className="max-w-2xl leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-medium">Rules</h2>
              <ul className="flex flex-col gap-3">
                {item.rules.map((rule) => (
                  <li
                    key={rule}
                    className="border-l-2 border-white/25 pl-3 text-white/70"
                  >
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <Link
              href="/register"
              transitionTypes={["nav-forward"]}
              className="flex items-center justify-between rounded-2xl bg-white px-6 py-5 font-semibold text-ink transition hover:bg-white/90"
            >
              Register for {item.name}
              <Arrow />
            </Link>

            <div className="flex flex-col gap-3">
              <h2 className="text-sm tracking-[0.25em] text-white/50 uppercase">
                Event SPOC
              </h2>
              <ContactCard
                name={item.spoc.name}
                role={`SPOC · ${item.name}`}
                email={item.spoc.email}
                phone={item.spoc.phone}
              />
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-sm tracking-[0.25em] text-white/50 uppercase">
                Organising board
              </h2>
              {board.slice(0, 2).map((member) => (
                <ContactCard key={member.email} {...member} />
              ))}
              <Link
                href="/contact"
                transitionTypes={["nav-forward"]}
                className="flex items-center gap-2 text-sm text-electric-soft hover:text-white"
              >
                All board contacts
                <Arrow />
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-20 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
          <Link
            href="/events"
            transitionTypes={["nav-back"]}
            className="flex items-center gap-3 text-white/70 hover:text-white"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
              <Arrow className="rotate-180" />
            </span>
            All events
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
