import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { events } from "@/data/events";
import { createRegistration, getPaymentConfig } from "@/lib/registration.functions";
import { loadDraft, saveConfirmation, type RegistrationDraft } from "@/lib/registration-draft";
import { OrbitalMarks } from "@/components/site/Motifs";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Complete Your EQUINOX Registration — Payment" },
      {
        name: "description",
        content:
          "Review your EQUINOX registration summary and complete payment. Fees are configured by CIE and shown here once published.",
      },
      { property: "og:title", content: "Complete Your EQUINOX Registration" },
      { property: "og:description", content: "Your idea has a place here." },
    ],
  }),
  component: PaymentPage,
});

function PaymentPage() {
  const navigate = useNavigate();
  const fetchConfig = useServerFn(getPaymentConfig);
  const submit = useServerFn(createRegistration);
  const { data: config, isLoading } = useQuery({
    queryKey: ["payment-config"],
    queryFn: () => fetchConfig(),
  });

  const [draft, setDraft] = useState<RegistrationDraft | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "error">("idle");

  useEffect(() => {
    setDraft(loadDraft());
  }, []);

  const event = events.find((e) => e.id === draft?.eventId);

  const pay = async () => {
    if (!draft) return;
    setStatus("processing");
    try {
      const result = await submit({
        data: {
          eventId: draft.eventId,
          name: draft.name,
          email: draft.email,
          phone: draft.phone,
          college: draft.college,
          participation: draft.participation,
          ...(draft.participation === "team"
            ? { teamName: draft.teamName, teamSize: draft.teamSize }
            : {}),
        },
      });
      saveConfirmation({
        ...draft,
        registrationId: result.registrationId,
        amountInr: result.amountInr,
        paymentStatus: config?.configured ? "paid" : "awaiting_configuration",
        createdAt: result.createdAt,
      });
      navigate({ to: "/success" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="grain relative min-h-screen overflow-hidden bg-ink text-cream">
      <OrbitalMarks className="spin-slow pointer-events-none absolute -right-40 top-20 h-[40rem] w-[40rem] text-cream/15" />
      <section className="relative px-4 pb-24 pt-28 md:px-8 md:pt-40">
        <div className="mx-auto max-w-[1200px]">
          <span className="stamp">04 · Payment</span>
          <h1 className="display mt-6 text-[clamp(2.8rem,11vw,9rem)]">
            Your idea
            <br />
            <span className="text-yellow">has a place here.</span>
          </h1>

          {!draft ? (
            <div className="mt-14 border-2 border-cream/30 p-8">
              <p className="display text-3xl">No registration in progress.</p>
              <p className="mt-3 text-sm opacity-70">
                Start a registration to see your summary and complete payment.
              </p>
              <Link to="/register" className="label-tag mt-6 inline-block bg-yellow px-6 py-4 text-ink">
                Start registration →
              </Link>
            </div>
          ) : (
            <div className="mt-14 grid gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="label-tag opacity-60">Registration summary</p>
                <dl className="mt-4">
                  {[
                    ["Event", event ? `${event.number} · ${event.title}` : draft.eventId],
                    ["Participant", draft.name],
                    ["College", draft.college],
                    ["Contact", `${draft.email} · ${draft.phone}`],
                    [
                      "Participation",
                      draft.participation === "team"
                        ? `Team · ${draft.teamName} (${draft.teamSize})`
                        : "Individual",
                    ],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex flex-wrap items-baseline justify-between gap-2 border-b border-cream/20 py-4 first:border-t"
                    >
                      <dt className="label-tag opacity-60">{k}</dt>
                      <dd className="display text-xl md:text-2xl">{v}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-6 text-xs opacity-60">
                  Payment methods will be enabled once CIE configures the gateway — Razorpay, UPI,
                  card and net banking are all supported by this component.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:col-span-5"
              >
                <div className="border-2 border-cream/40 bg-violet-deep/60 p-7">
                  <p className="label-tag opacity-60">Registration fee</p>
                  <p className="display mt-2 text-[clamp(3rem,9vw,6rem)] text-yellow">
                    {isLoading
                      ? "…"
                      : config?.amountInr != null
                        ? `₹${config.amountInr}`
                        : "₹ TBA"}
                  </p>
                  <p className="mt-2 text-xs opacity-70">
                    {config?.configured
                      ? `Gateway: ${config.gateway.toUpperCase()}`
                      : "Amount is configured server-side and is not published yet."}
                  </p>

                  <button
                    type="button"
                    onClick={pay}
                    disabled={status === "processing"}
                    className="label-tag mt-8 w-full bg-yellow px-6 py-5 text-ink disabled:opacity-60"
                  >
                    {status === "processing"
                      ? "Processing…"
                      : config?.configured
                        ? "Pay Now →"
                        : "Reserve my place →"}
                  </button>

                  {status === "error" && (
                    <p className="mt-3 text-xs text-coral">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <div className="mt-6 space-y-2 border-t border-cream/20 pt-4 text-xs opacity-70">
                    <p className="flex justify-between">
                      <span>Secure channel</span>
                      <span>Active</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Gateway</span>
                      <span>{config?.configured ? "Connected" : "Pending configuration"}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Confirmation</span>
                      <span>Registration ID on completion</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
