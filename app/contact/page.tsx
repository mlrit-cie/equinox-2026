import {
  Arrow,
  ContactCard,
  PageTransition,
  SectionHeading,
} from "../ui";
import { board, contact, event } from "@/lib/content";

/* Same shape as About(): eyebrow/heading up top, an editorial lead paragraph,
   then the particulars — here the particulars are people instead of facts,
   so ContactCard (already built, previously unused) carries that row. */
function ContactHero() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pt-40 pb-24 sm:px-8 sm:pt-48">
      <SectionHeading eyebrow={contact.eyebrow} heading={contact.heading} />
      <p className="mt-10 max-w-2xl text-xl leading-relaxed text-fg/85 sm:text-2xl sm:leading-relaxed">
        {contact.body}
      </p>
    </section>
  );
}

function Board() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pb-24 sm:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {board.map((person) => (
          <ContactCard key={person.email} {...person} />
        ))}
      </div>
    </section>
  );
}

/* Venue + general email as a ruled row, matching Audience()/Backers() rather
   than another card grid — two facts don't need tiles. */
function Particulars() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pb-28 sm:px-8">
      <dl className="flex flex-col">
        <div className="grid gap-2 border-t border-fg/12 py-7 sm:grid-cols-[14rem_1fr] sm:gap-10">
          <dt className="heading text-2xl">General enquiries</dt>
          <dd className="data max-w-2xl text-fg/75">
            <a href={`mailto:${contact.email}`} className="text-accent hover:text-fg">
              {contact.email}
            </a>
          </dd>
        </div>
        <div className="grid gap-2 border-t border-b border-fg/12 py-7 sm:grid-cols-[14rem_1fr] sm:gap-10">
          <dt className="heading text-2xl">Venue</dt>
          <dd className="max-w-2xl leading-relaxed text-fg/75">{event.venue}</dd>
        </div>
      </dl>

      <a
        href="/register"
        className="press mt-12 flex w-max items-center gap-2 rounded-full bg-fg py-1.5 pr-1.5 pl-6 font-semibold text-ground"
      >
        Register instead
        <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-ground">
          <Arrow />
        </span>
      </a>
    </section>
  );
}

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactHero />
      <Board />
      <Particulars />
    </PageTransition>
  );
}
