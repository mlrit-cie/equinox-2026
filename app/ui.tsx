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
      className={`grid place-items-center bg-gradient-to-br from-white/20 to-white/5 text-white/60 ${className}`}
    >
      <span className="font-display text-[0.65em] tracking-widest">
        {initials(name)}
      </span>
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-sm text-white/70">
      <span className="h-px w-8 bg-white/60" />
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
    <div className="flex flex-col gap-6">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="max-w-4xl text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl lg:text-6xl">
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
        <p className="truncate text-sm text-white/60">{role}</p>
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
    <div className="flex flex-col gap-4 rounded-2xl bg-panel p-6">
      <Person name={name} role={role} />
      <div className="flex flex-col gap-1 text-sm">
        <a href={`mailto:${email}`} className="text-electric-soft hover:text-white">
          {email}
        </a>
        {phone && (
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-white/60 hover:text-white">
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
      className="group flex flex-col gap-4"
    >
      {/* The tile is the morph target: it grows into the event page's hero. */}
      <ViewTransition name={`event-${event.slug}`} share="morph" default="none">
        <div className="grain relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-panel-2 via-panel to-ink transition group-hover:from-electric/50">
          <span className="absolute top-4 left-4 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-md">
            {event.category}
          </span>
          <span className="absolute right-4 bottom-4 grid h-10 w-10 place-items-center rounded-full bg-white text-ink opacity-0 transition group-hover:opacity-100">
            <Arrow />
          </span>
        </div>
      </ViewTransition>
      <div>
        <h3 className="text-xl font-medium">{event.name}</h3>
        <p className="text-white/60">{event.tagline}</p>
        <p className="mt-1 text-sm text-white/40">{event.day}</p>
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
