import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowGlyph } from "@/components/site/Motifs";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CIE — EQUINOX, MLR Institute of Technology" },
      {
        name: "description",
        content:
          "Reach the Centre for Innovation and Entrepreneurship at MLR Institute of Technology, Hyderabad about EQUINOX participation, partnerships and E-Cell collaboration.",
      },
      { property: "og:title", content: "Contact CIE — EQUINOX" },
      { property: "og:description", content: "Talk to the team behind EQUINOX." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="grain min-h-screen bg-cream text-ink">
      <section className="relative px-4 pb-24 pt-28 md:px-8 md:pt-40">
        <div className="mx-auto max-w-[1200px]">
          <span className="stamp">Contact</span>
          <h1 className="display mt-6 text-[clamp(3rem,13vw,11rem)]">
            Talk to
            <br />
            <span className="text-violet">CIE.</span>
          </h1>

          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="text-lg leading-relaxed md:text-2xl">
                Centre for Innovation and Entrepreneurship
                <br />
                MLR Institute of Technology
                <br />
                Hyderabad
              </p>
              <div className="mt-8 space-y-3">
                {[
                  ["Email", "To be announced"],
                  ["Phone", "To be announced"],
                  ["Venue", "To be announced"],
                  ["Social", "To be announced"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-4 border-b-2 border-ink/20 py-3"
                  >
                    <span className="label-tag opacity-60">{k}</span>
                    <span className="display text-xl">{v}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs opacity-60">
                Official contact details will be published by CIE ahead of the event.
              </p>
            </div>

            <div className="md:col-span-6">
              <div className="border-2 border-ink/25 bg-cream-deep/60 p-7">
                <h2 className="display text-3xl">Want in?</h2>
                <p className="mt-3 text-sm opacity-75">
                  Participants, E-Cells, startups and companies interested in EQUINOX can begin with
                  the registration flow — we'll route your details to the right desk.
                </p>
                <Link
                  to="/register"
                  className="group mt-8 inline-flex items-center gap-3 bg-ink px-6 py-4 text-cream"
                >
                  <span className="display text-2xl">Register now</span>
                  <ArrowGlyph className="h-3 w-10 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
