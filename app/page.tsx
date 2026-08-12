import Link from "next/link";
import {
  about,
  agenda,
  audience,
  communities,
  event,
  events,
  faqs,
  hosts,
  marquee,
  partners,
  speakerCount,
  speakers,
  sponsors,
  tickets,
} from "@/lib/content";
import StrokeText from "./StrokeText";
import ScrollExpand from "./ScrollExpand";
import {
  Arrow,
  Avatar,
  EventCard,
  PageTransition,
  Person,
  SectionHeading,
  Terminator,
} from "./ui";

/* The hero states the thesis: the wordmark sits on the horizon, half of it in
   the light and half in the dark, the way the day itself splits at an equinox. */
function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-svh flex-col justify-between overflow-hidden bg-[radial-gradient(110%_32%_at_50%_50%,#4c2a8f_0%,#170f2e_45%,#07060e_100%)] px-4 pt-28 pb-10 sm:px-8 sm:pt-32"
    >
      <div className="relative mx-auto flex w-full min-w-0 max-w-[1400px] flex-1 flex-col justify-center">
        <div className="relative">
          {/* The horizon. Full-bleed, clipped by the section. Near-white core
              with a purple halo — the way a bright edge actually reads. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[-100vw] top-1/2 h-[2px] bg-[#ede9fe] shadow-[0_0_2px_1px_rgba(237,233,254,0.9),0_0_28px_5px_rgba(139,92,246,0.55)]"
          />
          {/* No font-size here on purpose: the wordmark is an SVG viewBox, so it
              fills the column exactly and keeps its proportions. max-h keeps it
              off the tagline when the window is short and wide. */}
          <h1 className="relative">
            <StrokeText
              className="max-h-[26vh]"
              text={event.name.toUpperCase()}
              strokeColor="#a78bfa"
              fillColor="#edeaf5"
              drawDuration={0.7}
              fillDelay={0.1}
              stagger={0.03}
            />
          </h1>
        </div>
        <p className="mt-8 flex flex-wrap items-baseline justify-center gap-x-3 text-xl tracking-tight sm:text-2xl lg:text-3xl">
          <span>{event.tagline}</span>
          <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
            <span className="rotator flex flex-col">
              {[...event.rotatingWords, event.rotatingWords[0]].map((word, i) => (
                <span key={i} className="h-[1.2em] font-medium text-beam">
                  {word}
                </span>
              ))}
            </span>
          </span>
        </p>
      </div>

      <div className="label relative mx-auto flex w-full max-w-[1400px] flex-col gap-4 text-fg/80 sm:flex-row sm:items-center sm:gap-6">
        <span className="data whitespace-nowrap">{event.date}</span>
        <span className="hidden h-px flex-1 bg-fg/25 sm:block" />
        <span className="whitespace-nowrap">{event.venue}</span>
        <span className="hidden h-px flex-1 bg-fg/25 sm:block" />
        <a href="#about" className="whitespace-nowrap text-beam">
          Scroll
        </a>
      </div>
    </section>
  );
}

/* Set as an editorial read rather than heading-then-card-grid: the lead runs
   large, the rest sits in a second column, and the section closes on the
   event's own particulars. No placeholder tiles — an empty gradient rectangle
   says nothing that the sentence beside it doesn't say better. */
function About() {
  const facts = [
    ["Dates", event.date],
    ["Events", `${events.length} across three days`],
    ["Lineup", speakerCount],
    ["Where", event.venue],
  ];

  return (
    <section id="about" className="mx-auto max-w-[1400px] px-4 py-28 sm:px-8">
      <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />
      <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <p className="text-xl leading-relaxed text-fg/85 sm:text-2xl sm:leading-relaxed">
          {about.body[0]}
        </p>
        <p className="leading-relaxed text-fg/75 lg:mt-2">{about.body[1]}</p>
      </div>
      <dl className="mt-16 grid gap-x-10 gap-y-6 border-t border-fg/12 pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map(([term, value]) => (
          <div key={term} className="flex flex-col gap-2">
            <dt className="label text-accent">{term}</dt>
            <dd className="data text-sm text-fg/85">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Marquee() {
  const words = [...marquee, ...marquee, ...marquee, ...marquee];
  return (
    <div className="overflow-hidden border-y border-fg/12 py-6">
      <div className="marquee-track flex w-max gap-8 pr-8">
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className="display text-3xl text-fg/85 sm:text-5xl"
          >
            {word} <span className="text-beam">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* A ruled list, not four boxes with a word in the corner. Each row states what
   that group actually gets, which is the only reason the row exists. */
function Audience() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-20">
        <SectionHeading eyebrow={audience.eyebrow} heading={audience.heading} />
        <p className="leading-relaxed text-fg/75 lg:self-end">{audience.note}</p>
      </div>
      <dl className="mt-14 flex flex-col">
        {audience.groups.map((group) => (
          <div
            key={group.name}
            className="grid gap-2 border-t border-fg/12 py-7 sm:grid-cols-[14rem_1fr] sm:gap-10"
          >
            <dt className="heading text-2xl">{group.name}</dt>
            <dd className="max-w-2xl leading-relaxed text-fg/75">{group.what}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Speakers() {
  return (
    <section id="speakers" className="py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionHeading
          eyebrow="Speakers"
          heading="Who's speaking"
        />
      </div>

      {/* scroll-px keeps snapping from eating the container padding */}
      <ul className="no-scrollbar mt-16 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 pb-4 sm:scroll-px-8 sm:px-8">
        {speakers.map((speaker, i) => (
          <li
            key={speaker.name}
            className={`w-[280px] shrink-0 snap-start sm:w-[320px] ${
              i % 2 ? "sm:-mt-10" : ""
            }`}
          >
            <div className="relative">
              <Avatar
                name={speaker.name}
                className="aspect-[4/5] rounded-2xl bg-surface text-6xl"
              />
              <div className="label absolute right-3 bottom-3 flex gap-2">
                <a
                  href={speaker.instagram}
                  aria-label={`${speaker.name} on Instagram`}
                  className="press grid h-9 w-9 place-items-center rounded-lg bg-fg text-ground"
                >
                  IG
                </a>
                <a
                  href={speaker.linkedin}
                  aria-label={`${speaker.name} on LinkedIn`}
                  className="press grid h-9 w-9 place-items-center rounded-lg bg-fg text-ground"
                >
                  in
                </a>
              </div>
            </div>
            <h3 className="heading mt-4 text-xl">{speaker.name}</h3>
            <p className="text-fg/70">{speaker.role}</p>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-12 flex max-w-[1400px] items-center gap-6 px-4 sm:px-8">
        <span className="label whitespace-nowrap text-accent">{speakerCount}</span>
        <span className="h-px flex-1 bg-fg/20" />
        <a
          href="#speakers"
          className="press flex items-center gap-3 whitespace-nowrap"
        >
          See All
          <span className="grid h-10 w-10 place-items-center rounded-full bg-fg text-ground">
            <Arrow />
          </span>
        </a>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="events" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Events"
        heading={`${events.length} events across the three days`}
      />
      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {events.slice(0, 3).map((item) => (
          <EventCard key={item.slug} event={item} />
        ))}
      </div>
      <Link
        href="/events"
        transitionTypes={["nav-forward"]}
        className="press mt-12 flex w-max items-center gap-3"
      >
        See all {events.length} events
        <span className="grid h-10 w-10 place-items-center rounded-full bg-fg text-ground">
          <Arrow />
        </span>
      </Link>
    </section>
  );
}

function Agenda() {
  return (
    <section id="agenda" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Event agenda"
        heading="What happens when"
      />
      <div className="mt-16 flex flex-col gap-16">
        {agenda.map((day) => (
          <div key={day.title} className="grid gap-8 lg:grid-cols-[16rem_1fr]">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="label text-accent">{day.tag}</p>
              <h3 className="heading mt-3 text-2xl">{day.title}</h3>
            </div>
            <div className="flex flex-col">
              {day.sessions.map((session) => (
                <div
                  key={session.title}
                  className="grid gap-4 border-t border-fg/12 py-8 sm:grid-cols-[10rem_1fr]"
                >
                  <p className="data text-sm text-fg/70">{session.time}</p>
                  <div className="flex flex-col gap-4">
                    <h4 className="heading text-xl">{session.title}</h4>
                    <p className="max-w-2xl leading-relaxed text-fg/75">
                      {session.body}
                    </p>
                    {"speaker" in session && session.speaker && (
                      <Person {...session.speaker} />
                    )}
                    {"panel" in session && session.panel && (
                      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {session.panel.map((p) => (
                          <Person key={p.name} {...p} />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Only the sponsors get cells — those slots hold real logos later. Partners and
   communities are names, and names read better as a line of text than as twelve
   more empty rectangles. */
function Backers() {
  return (
    <section id="sponsors" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
      <SectionHeading eyebrow="Backers" heading="Who's backing it" />

      <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-fg/12 sm:grid-cols-4">
        {sponsors.map((name) => (
          <div
            key={name}
            className="label grid h-24 place-items-center bg-ground text-fg/70"
          >
            {name}
          </div>
        ))}
      </div>

      <dl className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-16">
        {[
          { title: "Partners", names: partners },
          { title: "Communities", names: communities },
        ].map((group) => (
          <div key={group.title} className="flex flex-col gap-3">
            <dt className="label text-accent">{group.title}</dt>
            <dd className="data max-w-xl text-sm leading-relaxed text-fg/75">
              {group.names.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Faq() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Questions"
        heading="Before you come"
      />
      <div className="mt-16 flex flex-col">
        {faqs.map((faq) => (
          <details key={faq.q} className="group border-t border-fg/12">
            <summary className="flex items-center justify-between gap-6 py-6 text-lg font-medium">
              {faq.q}
              <span className="faq-plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-fg/10 text-xl leading-none transition-transform duration-200">
                +
              </span>
            </summary>
            <p className="max-w-3xl pb-6 leading-relaxed text-fg/75">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Hosts() {
  return (
    <section id="venue" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        <SectionHeading eyebrow={hosts.eyebrow} heading={hosts.heading} />
        <div className="flex flex-col justify-end gap-6">
          <p className="leading-relaxed text-fg/75">{hosts.body}</p>
          <p className="label text-accent">{event.host}</p>
        </div>
      </div>
    </section>
  );
}

function Tickets() {
  return (
    <section id="tickets" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Registration"
        heading="Passes"
      />
      {/* Summary only — the passes and the flow live on /register. */}
      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        {tickets.map((ticket) => (
          <div
            key={ticket.name}
            className="flex flex-col gap-2 rounded-2xl bg-surface p-6"
          >
            <span className="label w-max rounded-full border border-accent/40 px-3 py-1 text-accent">
              {ticket.badge}
            </span>
            <h3 className="heading mt-1 text-xl">{ticket.name}</h3>
            <p className="data text-3xl">{ticket.price}</p>
            <p className="label text-fg/70">{ticket.unit}</p>
          </div>
        ))}
      </div>
      <Link
        href="/register"
        transitionTypes={["nav-forward"]}
        className="press mt-8 flex w-max items-center gap-2 rounded-full bg-fg py-1.5 pr-1.5 pl-6 font-semibold text-ground"
      >
        Register now
        <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-ground">
          <Arrow />
        </span>
      </Link>
    </section>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      {/* Low scrim while the panel is a gradient; raise it toward 0.45 once a
          real venue photo is passed as src. */}
      <ScrollExpand
        title={event.venue}
        scrollHint="Keep scrolling"
        overlayScrim={0.2}
        scrollDistance={0.55}
        holdDistance={0.1}
      >
        <p>
          {event.date} · {event.host}
        </p>
      </ScrollExpand>
      <About />
      <Marquee />
      <Events />

      {/* The crossing. Everything above runs in the dark half, everything
          below in the light half — equal grounds, one line between them. The
          rising crossing lives inside the day wrapper so the light ground is
          painted by one box and leaves no seam. */}
      <div className="day">
        <Terminator
          into="day"
          label="Vernal equinox · 20 March 2026 · day and night equal"
        />
        <Audience />
        <Speakers />
        <Agenda />
        <Backers />
        <Faq />
        <Hosts />
        <Tickets />
      </div>

      <Terminator
        into="night"
        label={`${event.name} ${event.year} · ${event.date} · Hyderabad`}
      />
    </PageTransition>
  );
}
