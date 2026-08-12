import Link from "next/link";
import { event, nav, socials } from "@/lib/content";

export function Footer() {
  return (
    <footer
      id="contact"
      className="grain relative overflow-hidden bg-[radial-gradient(90%_130%_at_50%_130%,#2e1b54_0%,#150f2b_45%,#07060e_80%)] px-4 pt-24 pb-10 sm:px-8"
    >
      <div className="@container relative mx-auto flex max-w-[1400px] flex-col gap-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="flex flex-col gap-3">
            <p className="label text-fg/70">Social</p>
            <ul className="flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  {/* Spelled out — a two-letter abbreviation made GitHub read
                      as "GI" and LinkedIn as "LI". */}
                  <a
                    href={social.href}
                    className="press label rounded-full border border-fg/15 px-4 py-2.5 transition-colors hover:border-beam hover:text-beam"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ul className="label flex flex-wrap gap-6">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-fg/70 hover:text-beam">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* The sign-off restates the thesis: one wordmark, lit on top, dark
            below, split on a hard line. */}
        {/* Sized in cqw, not vw — past 1400px the container stops growing and a
            vw-sized wordmark ran off the right edge. */}
        <p className="display bg-[linear-gradient(to_bottom,#edeaf5_0_50%,#3a2d63_50%_100%)] bg-clip-text text-[13cqw] text-transparent">
          {event.name.toUpperCase()}
        </p>

        <div className="label flex flex-col justify-between gap-2 border-t border-fg/15 pt-6 text-fg/70 sm:flex-row">
          <p>
            © {event.year} {event.name}. All rights reserved.
          </p>
          <p>{event.host}</p>
        </div>
      </div>
    </footer>
  );
}
