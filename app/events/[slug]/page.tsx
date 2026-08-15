import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
      <section className="grain relative flex min-h-[70svh] flex-col justify-end overflow-hidden bg-[radial-gradient(120%_55%_at_50%_100%,#4c2a8f_0%,#170f2e_48%,#07060e_100%)] px-4 pt-40 pb-12 sm:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-[#ede9fe] shadow-[0_0_2px_1px_rgba(237,233,254,0.9),0_0_28px_5px_rgba(139,92,246,0.5)]"
        />
        <div className="relative mx-auto flex w-full max-w-[1400px] flex-col gap-4">
          <Eyebrow>
            {item.category} · {item.day}
          </Eyebrow>
          <h1 className="display max-w-4xl text-4xl sm:text-6xl lg:text-7xl">
            {item.name}
          </h1>
          <p className="max-w-2xl text-xl text-fg/75">{item.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8">
        <dl className="grid gap-px overflow-hidden rounded-2xl bg-fg/10 sm:grid-cols-2 lg:grid-cols-5">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-2 bg-ground p-6">
              <dt className="label text-accent">{fact.label}</dt>
              <dd className="data text-sm">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_22rem]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-fg/70">
              {item.about.map((paragraph) => (
                <p key={paragraph} className="max-w-2xl leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="heading text-2xl">Rules</h2>
              <ul className="flex flex-col gap-3">
                {item.rules.map((rule) => (
                  <li
                    key={rule}
                    className="border-l-2 border-beam/50 pl-3 text-fg/70"
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
              className="flex items-center justify-between rounded-2xl bg-fg px-6 py-5 font-semibold text-ground transition hover:bg-fg/90"
            >
              Register for {item.name}
              <Arrow />
            </Link>

            <div className="flex flex-col gap-3">
              <h2 className="label text-fg/70">
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
              <h2 className="label text-fg/70">
                Organising board
              </h2>
              {board.slice(0, 2).map((member) => (
                <ContactCard key={member.email} {...member} />
              ))}
              <Link
                href="/contact"
                className="flex items-center gap-2 text-sm text-accent hover:text-fg"
              >
                All board contacts
                <Arrow />
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-20 flex flex-wrap items-center gap-6 border-t border-fg/10 pt-8">
          <Link
            href="/events"
            className="flex items-center gap-3 text-fg/70 hover:text-fg"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-fg/10">
              <Arrow className="rotate-180" />
            </span>
            All events
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
