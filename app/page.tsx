import {
  about,
  agenda,
  audience,
  event,
  faqs,
  hosts,
  marquee,
  nav,
  socials,
  speakerCount,
  speakers,
  sponsors,
  tickets,
} from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* Placeholder portrait: gradient tile with initials. Drop an <Image> in here
   once real speaker photos exist. */
function Avatar({ name, className = "" }: { name: string; className?: string }) {
  return (
    <div
      className={`grid place-items-center bg-gradient-to-br from-white/20 to-white/5 text-white/60 ${className}`}
    >
      <span className="font-display text-[0.65em] tracking-widest">
        {initials(name)}
      </span>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-sm text-white/70">
      <span className="h-px w-8 bg-white/60" />
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  heading,
}: {
  eyebrow: string;
  heading: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="max-w-4xl text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl lg:text-6xl">
        {heading}
      </h2>
    </div>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={`h-4 w-4 ${className}`}>
      <path
        d="M4 12L12 4M12 4H5.5M12 4v6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-ink/70 to-transparent px-4 py-4 backdrop-blur-[2px] sm:px-8">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
        <a
          href="#top"
          className="font-display text-xl font-black tracking-[0.2em] text-white"
        >
          {event.name.toUpperCase()}
        </a>
        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-2 md:flex">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block rounded-full bg-white/10 px-5 py-2.5 text-sm text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={event.ticketUrl}
            className="flex items-center gap-2 rounded-full bg-white py-1.5 pr-1.5 pl-5 text-sm font-semibold text-ink transition hover:bg-white/90"
          >
            Get Ticket
            <span className="grid h-8 w-8 place-items-center rounded-full bg-electric text-white">
              <Arrow />
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-svh flex-col justify-between overflow-hidden bg-[radial-gradient(120%_90%_at_50%_55%,#3140ff_0%,#141a6b_38%,#05060f_72%)] px-4 pt-32 pb-10 sm:px-8"
    >
      {/* glass shards */}
      <div className="pointer-events-none absolute -top-10 -left-16 h-56 w-56 rotate-12 rounded-3xl bg-gradient-to-br from-cyan-300/40 via-indigo-500/30 to-fuchsia-400/30 blur-[2px]" />
      <div className="pointer-events-none absolute right-[-3rem] bottom-24 h-64 w-64 -rotate-12 rounded-[3rem] bg-gradient-to-tr from-fuchsia-400/40 via-sky-300/30 to-transparent blur-[2px]" />
      <div className="pointer-events-none absolute top-24 right-1/4 h-20 w-20 rotate-45 rounded-xl bg-gradient-to-br from-white/30 to-electric/40" />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center">
        <h1 className="text-center font-display text-[clamp(3rem,15vw,13rem)] leading-none font-black tracking-[-0.02em] text-white">
          {event.name.toUpperCase()}
        </h1>
        <p className="mt-6 flex flex-wrap items-baseline justify-center gap-x-3 text-2xl text-white sm:text-3xl lg:text-4xl">
          <span>{event.tagline}</span>
          <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
            <span className="rotator flex flex-col">
              {[...event.rotatingWords, event.rotatingWords[0]].map((word, i) => (
                <span key={i} className="h-[1.2em] font-medium text-white/70">
                  {word}
                </span>
              ))}
            </span>
          </span>
        </p>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col gap-4 text-lg text-white sm:flex-row sm:items-center sm:gap-6">
        <span className="whitespace-nowrap">{event.date}</span>
        <span className="hidden h-px flex-1 bg-white/30 sm:block" />
        <span className="whitespace-nowrap">{event.venue}</span>
        <span className="hidden h-px flex-1 bg-white/30 sm:block" />
        <a
          href="#about"
          className="text-sm tracking-[0.3em] text-white/70 uppercase"
        >
          Scroll
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
      <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />
      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-panel-2 to-panel"
            />
          ))}
        </div>
        <div className="flex flex-col gap-6 text-white/70">
          {about.body.map((p) => (
            <p key={p} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = [...marquee, ...marquee, ...marquee, ...marquee];
  return (
    <div className="overflow-hidden border-y border-white/10 py-6">
      <div className="marquee-track flex w-max gap-8 pr-8">
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className="font-display text-3xl font-bold tracking-tight text-white/80 sm:text-5xl"
          >
            {word} <span className="text-electric-soft">.</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Audience() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
      <SectionHeading eyebrow={audience.eyebrow} heading={audience.heading} />
      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_20rem]">
        <div className="grid gap-4 sm:grid-cols-2">
          {audience.groups.map((group) => (
            <div
              key={group}
              className="grain relative flex h-52 items-end overflow-hidden rounded-2xl bg-gradient-to-br from-panel-2 via-panel to-ink p-6 transition hover:from-electric/40"
            >
              <h3 className="text-2xl font-medium">{group}</h3>
            </div>
          ))}
        </div>
        <p className="leading-relaxed text-white/70">{audience.note}</p>
      </div>
    </section>
  );
}

function Speakers() {
  return (
    <section
      id="speakers"
      className="grain relative overflow-hidden bg-[radial-gradient(90%_70%_at_70%_50%,#2b3bff_0%,#101541_45%,#05060f_80%)] py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <SectionHeading
          eyebrow="Speakers"
          heading="Meet Our Speakers and Industry Thought Leaders"
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
              <Avatar name={speaker.name} className="aspect-[4/5] rounded-2xl text-6xl" />
              <div className="absolute right-3 bottom-3 flex gap-2">
                <a
                  href={speaker.instagram}
                  aria-label={`${speaker.name} on Instagram`}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/90 text-xs font-semibold text-ink"
                >
                  IG
                </a>
                <a
                  href={speaker.linkedin}
                  aria-label={`${speaker.name} on LinkedIn`}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/90 text-xs font-semibold text-ink"
                >
                  in
                </a>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{speaker.name}</h3>
            <p className="text-white/60">{speaker.role}</p>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-12 flex max-w-[1400px] items-center gap-6 px-4 sm:px-8">
        <span className="whitespace-nowrap">{speakerCount}</span>
        <span className="h-px flex-1 bg-white/30" />
        <a href="#speakers" className="flex items-center gap-3 whitespace-nowrap">
          See All
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink">
            <Arrow />
          </span>
        </a>
      </div>
    </section>
  );
}

function Person({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar name={name} className="h-11 w-11 shrink-0 rounded-full text-lg" />
      <div className="min-w-0">
        <p className="truncate font-medium">{name}</p>
        <p className="truncate text-sm text-white/60">{role}</p>
      </div>
    </div>
  );
}

function Agenda() {
  return (
    <section id="agenda" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Event agenda"
        heading={`Discover the Full ${event.name} ${event.year} Event Agenda`}
      />
      <div className="mt-16 flex flex-col gap-16">
        {agenda.map((day) => (
          <div key={day.title} className="grid gap-8 lg:grid-cols-[16rem_1fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm tracking-[0.25em] text-electric-soft uppercase">
                {day.tag}
              </p>
              <h3 className="mt-2 text-2xl font-medium">{day.title}</h3>
            </div>
            <div className="flex flex-col">
              {day.sessions.map((session) => (
                <div
                  key={session.title}
                  className="grid gap-4 border-t border-white/10 py-8 sm:grid-cols-[9rem_1fr]"
                >
                  <p className="text-sm text-white/60">{session.time}</p>
                  <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-medium">{session.title}</h4>
                    <p className="max-w-2xl leading-relaxed text-white/70">
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

function Sponsors() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Sponsorship"
        heading="Meet the sponsors who help bring this to life"
      />
      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3 lg:grid-cols-4">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor}
            className="grid h-32 place-items-center bg-ink text-white/50"
          >
            {sponsor}
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Questions"
        heading={`All the Important Details Before Attending ${event.name} ${event.year}`}
      />
      <div className="mt-16 flex flex-col">
        {faqs.map((faq) => (
          <details key={faq.q} className="group border-t border-white/10">
            <summary className="flex items-center justify-between gap-6 py-6 text-lg font-medium">
              {faq.q}
              <span className="faq-plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-xl leading-none transition-transform duration-300">
                +
              </span>
            </summary>
            <p className="max-w-3xl pb-6 leading-relaxed text-white/70">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Hosts() {
  return (
    <section id="venue" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <SectionHeading eyebrow={hosts.eyebrow} heading={hosts.heading} />
        <div className="flex flex-col justify-end gap-6">
          <p className="leading-relaxed text-white/70">{hosts.body}</p>
          <p className="text-sm text-white/50">{event.host}</p>
        </div>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-panel-2 to-panel"
          />
        ))}
      </div>
    </section>
  );
}

function Tickets() {
  return (
    <section id="tickets" className="mx-auto max-w-[1400px] px-4 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Registration"
        heading={`Secure Your Spot at ${event.name} ${event.year} Today!`}
      />
      <div className="mt-16 flex flex-col gap-6">
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
              <a
                href={ticket.href}
                className="relative flex items-center justify-between rounded-xl bg-white/15 px-5 py-4 font-semibold backdrop-blur-md transition hover:bg-white/25"
              >
                Buy Ticket
                <Arrow />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="grain relative overflow-hidden bg-[radial-gradient(80%_120%_at_50%_120%,#2b3bff_0%,#0d1236_45%,#05060f_80%)] px-4 pt-24 pb-10 sm:px-8"
    >
      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="flex flex-col gap-3">
            <p className="text-white/60">Social</p>
            <ul className="flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xs transition hover:bg-white/20"
                  >
                    {social.label.slice(0, 2)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="flex flex-wrap gap-6">
            {nav.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-white/70 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-display text-[clamp(2.5rem,19vw,16rem)] leading-none font-black tracking-tight text-white/90">
          {event.name.toUpperCase()}
        </p>

        <div className="flex flex-col justify-between gap-2 border-t border-white/15 pt-6 text-sm text-white/50 sm:flex-row">
          <p>
            © {event.year} {event.name}. All rights reserved.
          </p>
          <p>{event.host}</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Marquee />
        <Audience />
        <Speakers />
        <Agenda />
        <Sponsors />
        <Faq />
        <Hosts />
        <Tickets />
      </main>
      <Footer />
    </>
  );
}
