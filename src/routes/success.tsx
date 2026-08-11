import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { events } from "@/data/events";
import { loadConfirmation, type ConfirmedRegistration } from "@/lib/registration-draft";
import { StarGlyph } from "@/components/site/Motifs";

export const Route = createFileRoute("/success")({
  head: () => ({
    meta: [
      { title: "Registration Complete — EQUINOX" },
      {
        name: "description",
        content: "Your EQUINOX registration is recorded. View your registration ID and details.",
      },
      { property: "og:title", content: "Registration Complete — EQUINOX" },
      { property: "og:description", content: "You're in. See you at EQUINOX." },
    ],
  }),
  component: SuccessPage,
});

function SuccessPage() {
  const [reg, setReg] = useState<ConfirmedRegistration | null>(null);

  useEffect(() => {
    setReg(loadConfirmation());
  }, []);

  const event = events.find((e) => e.id === reg?.eventId);

  const downloadReceipt = () => {
    if (!reg) return;
    const lines = [
      "EQUINOX — CIE, MLR Institute of Technology, Hyderabad",
      "REGISTRATION RECEIPT",
      "",
      `Registration ID : ${reg.registrationId}`,
      `Participant     : ${reg.name}`,
      `College         : ${reg.college}`,
      `Contact         : ${reg.email} / ${reg.phone}`,
      `Event           : ${event ? `${event.number} ${event.title}` : reg.eventId}`,
      `Participation   : ${reg.participation === "team" ? `Team ${reg.teamName} (${reg.teamSize})` : "Individual"}`,
      `Amount          : ${reg.amountInr != null ? `INR ${reg.amountInr}` : "To be announced"}`,
      `Payment status  : ${reg.paymentStatus.replace(/_/g, " ")}`,
      `Issued          : ${new Date(reg.createdAt).toLocaleString()}`,
    ].join("\n");
    const url = URL.createObjectURL(new Blob([lines], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `${reg.registrationId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="grain min-h-screen bg-violet text-cream">
      <section className="relative px-4 pb-24 pt-28 md:px-8 md:pt-40">
        <StarGlyph className="pointer-events-none absolute right-10 top-28 h-24 w-24 text-yellow" />
        <div className="mx-auto max-w-[1100px]">
          <span className="stamp">05 · Confirmed</span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="display mt-6 text-[clamp(2.8rem,12vw,10rem)]"
          >
            Registration
            <br />
            <span className="text-yellow">complete.</span>
          </motion.h1>

          {!reg ? (
            <div className="mt-12 border-2 border-cream/30 p-8">
              <p className="display text-3xl">Nothing to confirm yet.</p>
              <Link to="/register" className="label-tag mt-6 inline-block bg-yellow px-6 py-4 text-ink">
                Register now →
              </Link>
            </div>
          ) : (
            <>
              <dl className="mt-12 border-t-2 border-cream/30">
                {[
                  ["Registration ID", reg.registrationId],
                  ["Participant", reg.name],
                  ["Event", event ? `${event.number} · ${event.title}` : reg.eventId],
                  [
                    "Payment status",
                    reg.paymentStatus === "paid"
                      ? "Paid"
                      : reg.paymentStatus === "pending"
                        ? "Pending"
                        : "Awaiting fee configuration",
                  ],
                  ["Amount", reg.amountInr != null ? `₹${reg.amountInr}` : "To be announced"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-cream/30 py-4"
                  >
                    <dt className="label-tag opacity-60">{k}</dt>
                    <dd className="display text-2xl md:text-4xl">{v}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-6 max-w-2xl text-sm opacity-75">
                Save your registration ID. Confirmation details, venue and timing will be shared by
                CIE once the EQUINOX schedule is published.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={downloadReceipt}
                  className="label-tag bg-yellow px-6 py-4 text-ink"
                >
                  Download Receipt
                </button>
                <Link
                  to="/"
                  className="label-tag border-2 border-cream px-6 py-4 hover:bg-cream hover:text-ink"
                >
                  Back to Equinox
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
