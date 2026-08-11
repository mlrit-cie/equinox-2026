import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { StarGlyph } from "./Motifs";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/", hash: "about" },
  { label: "Events", to: "/events" },
  { label: "Schedule", to: "/", hash: "schedule" },
  { label: "Experiences", to: "/", hash: "vision" },
  { label: "Register", to: "/register" },
  { label: "Payment", to: "/payment" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-ink/90 text-cream backdrop-blur-sm" : "text-cream"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between gap-4 px-4 md:h-20 md:px-8">
          <Link to="/" className="flex items-center gap-2 leading-none">
            <span className="display text-xl md:text-2xl">CIE</span>
            <span className="label-tag hidden max-w-[9rem] leading-tight opacity-70 lg:block">
              Centre for Innovation &amp; Entrepreneurship
            </span>
          </Link>

          <Link
            to="/"
            className="display absolute left-1/2 hidden -translate-x-1/2 text-2xl tracking-[0.35em] md:block"
          >
            EQUINOX
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            <Link
              to="/register"
              className="label-tag hidden bg-yellow px-4 py-2.5 text-ink transition-transform hover:-translate-y-0.5 sm:block"
            >
              Register Now
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="label-tag border-2 border-current px-4 py-2 transition-colors hover:bg-cream hover:text-ink"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="grain fixed inset-0 z-60 overflow-y-auto bg-violet-deep text-cream"
          >
            <div className="halftone pointer-events-none absolute inset-0 text-cream opacity-10" />
            <div className="relative mx-auto flex min-h-full max-w-[1600px] flex-col px-4 py-5 md:px-8">
              <div className="flex items-center justify-between">
                <span className="display text-xl">CIE × EQUINOX</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="label-tag border-2 border-current px-4 py-2 transition-colors hover:bg-yellow hover:text-ink"
                >
                  Close
                </button>
              </div>

              <nav className="mt-10 flex flex-1 flex-col justify-center gap-1 md:mt-16">
                {links.map((l, i) => (
                  <motion.div
                    key={l.label}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.12 + i * 0.045, duration: 0.4 }}
                  >
                    <Link
                      to={l.to}
                      {...("hash" in l ? { hash: l.hash } : {})}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-cream/20 py-2 md:py-3"
                    >
                      <span className="label-tag w-8 opacity-50">0{i + 1}</span>
                      <span className="display text-[clamp(2.4rem,8vw,6rem)] transition-colors group-hover:text-yellow">
                        {l.label}
                      </span>
                      <StarGlyph className="ml-auto hidden h-6 w-6 text-yellow opacity-0 transition-opacity group-hover:opacity-100 md:block" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pb-6">
                <p className="label-tag opacity-60">MLR Institute of Technology · Hyderabad</p>
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="label-tag bg-yellow px-6 py-3 text-ink"
                >
                  Register Now →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
