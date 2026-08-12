/* Shared page furniture. Everything here is used by two or more routes. */

import { ViewTransition } from "react";
import Link from "next/link";

export function Arrow({ className = "" }: { className?: string }) {
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

/* A disc lit on one side — the terminator drawn on a sphere. The site's mark.
   Used as the nav's active marker and as the eyebrow's rule cap. */
export function Disc({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block shrink-0 rounded-full border border-current bg-[linear-gradient(90deg,currentColor_50%,transparent_50%)] ${className}`}
    />
  );
}

/* The crossing between the two grounds. `into` names which half comes next, so
   the glow bleeds off the night side either way. The label carries the fact the
   whole design is built on, not decoration. */
export function Terminator({
  into,
  label,
}: {
  into: "day" | "night";
  label: string;
}) {
  return (
    <div
      className={`terminator ${
        into === "day" ? "terminator--rising day" : "terminator--setting night"
      }`}
    >
      <p className="label data text-center text-fg/70">{label}</p>
    </div>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* Placeholder portrait: gradient tile with initials. Drop an <Image> in here
   once real photos exist. */
export function Avatar({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      className={`grid place-items-center bg-gradient-to-br from-fg/20 to-fg/5 text-fg/70 ${className}`}
    >
      <span className="display text-[0.6em] tracking-normal">
        {initials(name)}
      </span>
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="label flex items-center gap-3 text-accent">
      <Disc className="h-2.5 w-2.5" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  heading,
}: {
  eyebrow: string;
  heading: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="heading max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
        {heading}
      </h2>
    </div>
  );
}

export function Person({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar name={name} className="h-11 w-11 shrink-0 rounded-full text-lg" />
      <div className="min-w-0">
        <p className="truncate font-medium">{name}</p>
        <p className="truncate text-sm text-fg/70">{role}</p>
      </div>
    </div>
  );
}

/* SPOC / board contact card — the gmail and phone are meant to be tapped. */
export function ContactCard({
  name,
  role,
  email,
  phone,
}: {
  name: string;
  role: string;
  email: string;
  phone?: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-surface p-6">
      <Person name={name} role={role} />
      <div className="data flex flex-col gap-1 text-sm">
        <a href={`mailto:${email}`} className="text-accent hover:text-fg">
          {email}
        </a>
        {phone && (
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="text-fg/70 hover:text-fg"
          >
            {phone}
          </a>
        )}
      </div>
    </div>
  );
}

export function EventCard({
  event,
}: {
  event: {
    slug: string;
    name: string;
    tagline: string;
    category: string;
    day: string;
  };
}) {
  return (
    <Link
      href={`/events/${event.slug}`}
      transitionTypes={["nav-forward"]}
      className="press group flex flex-col gap-4"
    >
      {/* The tile is the morph target: it grows into the event page's hero. */}
      <ViewTransition name={`event-${event.slug}`} share="morph" default="none">
        <div className="grain relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-surface-2 via-surface to-ground transition duration-200 group-hover:from-accent/45">
          <span className="label absolute top-4 left-4 rounded-full border border-fg/15 bg-ground/50 px-3 py-1 backdrop-blur-md">
            {event.category}
          </span>
          <span className="absolute right-4 bottom-4 grid h-10 w-10 place-items-center rounded-full bg-fg text-ground opacity-0 transition duration-200 group-hover:opacity-100">
            <Arrow />
          </span>
        </div>
      </ViewTransition>
      <div>
        <h3 className="heading text-xl">{event.name}</h3>
        <p className="text-fg/70">{event.tagline}</p>
        <p className="label mt-2 text-fg/70">{event.day}</p>
      </div>
    </Link>
  );
}

/* Wraps a route's content so forward/back navigations slide in the matching
   direction. Untyped navigations (back button, refresh) get no slide. */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const directions = {
    "nav-forward": "nav-forward",
    "nav-back": "nav-back",
    "nav-fade": "nav-fade",
    default: "none",
  };

  return (
    <ViewTransition enter={directions} exit={directions} default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
