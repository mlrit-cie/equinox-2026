import Link from "next/link";
import { event, nav, socials } from "@/lib/content";

export function Footer() {
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
                <Link href={item.href} className="text-white/70 hover:text-white">
                  {item.label}
                </Link>
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
