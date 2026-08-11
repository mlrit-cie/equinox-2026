import { Link } from "@tanstack/react-router";
import { events } from "@/data/events";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-violet-deep pt-20 text-cream">
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="display text-4xl">CIE</p>
            <p className="mt-2 max-w-xs text-sm opacity-70">
              Centre for Innovation and Entrepreneurship
              <br />
              MLR Institute of Technology
              <br />
              Hyderabad
            </p>
            <p className="label-tag mt-6 border-2 border-cream/40 px-3 py-2 inline-block">
              Contact details: TBA
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="label-tag opacity-60">Navigate</p>
            <ul className="mt-4 space-y-2">
              {[
                { label: "Home", to: "/" as const },
                { label: "Events", to: "/events" as const },
                { label: "Register", to: "/register" as const },
                { label: "Payment", to: "/payment" as const },
                { label: "Contact", to: "/contact" as const },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="display text-2xl hover:text-yellow">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="label-tag opacity-60">Experiences</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1">
              {events.map((e) => (
                <li key={e.id}>
                  <Link
                    to="/events/$eventId"
                    params={{ eventId: e.id }}
                    className="text-sm opacity-75 hover:text-yellow hover:opacity-100"
                  >
                    {e.number} {e.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Instagram", "LinkedIn", "X"].map((s) => (
                <span key={s} className="stamp border-cream/40 opacity-60">
                  {s}: TBA
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-cream/20 py-5 text-xs opacity-60">
          <p>© {new Date().getFullYear()} CIE · MLR Institute of Technology</p>
          <p>Dates, fees and schedule to be announced.</p>
        </div>
      </div>

      <p className="display w-full select-none text-center text-[19vw] leading-[0.75] text-cream/90">
        EQUINOX
      </p>
    </footer>
  );
}
