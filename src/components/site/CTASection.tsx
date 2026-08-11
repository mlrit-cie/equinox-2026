import { Link } from "@tanstack/react-router";
import { ArrowGlyph, StarGlyph } from "./Motifs";

export function CTASection() {
  return (
    <section className="grain relative overflow-hidden bg-yellow py-24 text-ink md:py-32">
      <div className="halftone pointer-events-none absolute inset-0 text-ink opacity-15" />
      <StarGlyph className="pointer-events-none absolute -left-10 top-10 h-40 w-40 text-coral" />
      <div className="pointer-events-none absolute -bottom-16 right-10 h-56 w-56 rounded-full border-8 border-blue" />

      <div className="relative mx-auto max-w-[1600px] px-4 text-center md:px-8">
        <span className="stamp">Your move</span>
        <h2 className="display mt-8 text-[clamp(3rem,13vw,12rem)]">
          Your idea
          <br />
          <span className="text-blue">starts here.</span>
        </h2>
        <Link
          to="/register"
          className="group mt-10 inline-flex items-center gap-4 bg-ink px-8 py-5 text-cream transition-transform hover:-translate-y-1 md:px-14 md:py-7"
        >
          <span className="display text-2xl md:text-5xl">Register for Equinox</span>
          <ArrowGlyph className="h-4 w-12 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </section>
  );
}
