import { event, socials } from "@/lib/content";
import SpecularButton from "./SpecularButton";

export function Footer() {
  return (
    <footer
      id="contact"
      className="grain relative overflow-hidden bg-[radial-gradient(90%_130%_at_50%_130%,#2e1b54_0%,#150f2b_45%,#07060e_80%)] pt-24 pb-10"
    >
      {/* Gutter inside the cap, matching every body section — with it outside,
          the footer's content edge sits 32px wider than the page above it. */}
      <div className="@container relative mx-auto flex max-w-[1400px] flex-col gap-12 px-4 sm:px-8">
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
                    className="press block"
                  >
                    <SpecularButton
                      size="sm"
                      textColor="#f5f5f5"
                      lineColor="#a78bfa"
                      baseColor="#525252"
                      radius={999}
                      className="w-full justify-center min-w-[100px]"
                      tint="#1f2937"
                      tintOpacity={0.8}
                    >
                      {social.label}
                    </SpecularButton>
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
