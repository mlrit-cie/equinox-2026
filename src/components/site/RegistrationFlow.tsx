import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { z } from "zod";
import { events } from "@/data/events";
import { getPaymentConfig } from "@/lib/registration.functions";
import { saveDraft, type RegistrationDraft } from "@/lib/registration-draft";

const steps = ["01 Details", "02 Event", "03 Review", "04 Payment", "05 Confirmed"];

const detailsSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(20),
  college: z.string().trim().min(2, "Enter your college").max(140),
});

const field =
  "w-full border-2 border-ink/30 bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-blue focus:bg-cream-deep/40";

export function RegistrationFlow({ initialEventId }: { initialEventId?: string }) {
  const navigate = useNavigate();
  const fetchConfig = useServerFn(getPaymentConfig);
  const { data: config } = useQuery({ queryKey: ["payment-config"], queryFn: () => fetchConfig() });

  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<RegistrationDraft>({
    eventId: initialEventId ?? "",
    name: "",
    email: "",
    phone: "",
    college: "",
    participation: "individual",
    teamName: "",
    teamSize: 2,
  });

  const set = <K extends keyof RegistrationDraft>(k: K, v: RegistrationDraft[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const selected = events.find((e) => e.id === form.eventId);

  const next = () => {
    if (step === 0) {
      const parsed = detailsSchema.safeParse(form);
      if (!parsed.success) {
        const e: Record<string, string> = {};
        for (const issue of parsed.error.issues) e[String(issue.path[0])] = issue.message;
        setErrors(e);
        return;
      }
      setErrors({});
    }
    if (step === 1 && !form.eventId) {
      setErrors({ eventId: "Select an event to continue" });
      return;
    }
    if (step === 1 && form.participation === "team" && form.teamName.trim().length < 2) {
      setErrors({ teamName: "Enter your team name" });
      return;
    }
    setErrors({});
    if (step === 2) {
      saveDraft(form);
      navigate({ to: "/payment" });
      return;
    }
    setStep((s) => Math.min(s + 1, 2));
  };

  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-8">
      {/* step indicator */}
      <ol className="grid grid-cols-2 gap-2 border-y-2 border-ink/20 py-4 sm:grid-cols-5">
        {steps.map((s, i) => (
          <li
            key={s}
            className={`label-tag flex items-center gap-2 ${
              i === step ? "text-blue" : i < step ? "text-ink" : "opacity-40"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${i <= step ? "bg-coral" : "bg-ink/30"}`} />
            {s}
          </li>
        ))}
      </ol>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.3 }}
          className="py-10"
        >
          {step === 0 && (
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <h3 className="display text-4xl md:text-6xl">Who's
                  <br />
                  coming?
                </h3>
                <p className="mt-3 text-sm opacity-70">
                  Participant details. Used for your registration record and confirmation.
                </p>
              </div>
              <div className="grid gap-4 md:col-span-8">
                {(
                  [
                    ["name", "Full name", "text"],
                    ["email", "Email", "email"],
                    ["phone", "Phone", "tel"],
                    ["college", "College / Institution", "text"],
                  ] as const
                ).map(([key, label, type]) => (
                  <label key={key} className="block">
                    <span className="label-tag opacity-60">{label}</span>
                    <input
                      type={type}
                      value={form[key] as string}
                      maxLength={255}
                      onChange={(e) => set(key, e.target.value)}
                      className={`${field} mt-2`}
                    />
                    {errors[key] && <span className="text-xs text-destructive">{errors[key]}</span>}
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <h3 className="display text-4xl md:text-6xl">Pick your
                  <br />
                  arena.
                </h3>
                {errors["eventId"] && (
                  <p className="mt-3 text-xs text-destructive">{errors["eventId"]}</p>
                )}
              </div>
              <div className="md:col-span-8">
                <div className="grid gap-2 sm:grid-cols-2">
                  {events.map((e) => (
                    <button
                      key={e.id}
                      type="button"
                      onClick={() => set("eventId", e.id)}
                      className={`flex items-baseline gap-3 border-2 p-4 text-left transition-colors ${
                        form.eventId === e.id
                          ? "border-blue bg-blue text-cream"
                          : "border-ink/25 hover:bg-cream-deep"
                      }`}
                    >
                      <span className="display text-2xl opacity-70">{e.number}</span>
                      <span>
                        <span className="display block text-xl">{e.title}</span>
                        <span className="label-tag opacity-60">{e.category}</span>
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-8">
                  <span className="label-tag opacity-60">Participation</span>
                  <div className="mt-2 flex gap-2">
                    {(["individual", "team"] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => set("participation", p)}
                        className={`label-tag border-2 px-5 py-3 ${
                          form.participation === p
                            ? "border-ink bg-ink text-cream"
                            : "border-ink/30"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  {form.participation === "team" && (
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="label-tag opacity-60">Team name</span>
                        <input
                          value={form.teamName}
                          maxLength={100}
                          onChange={(e) => set("teamName", e.target.value)}
                          className={`${field} mt-2`}
                        />
                        {errors["teamName"] && (
                          <span className="text-xs text-destructive">{errors["teamName"]}</span>
                        )}
                      </label>
                      <label className="block">
                        <span className="label-tag opacity-60">Team size</span>
                        <input
                          type="number"
                          min={1}
                          max={10}
                          value={form.teamSize}
                          onChange={(e) => set("teamSize", Number(e.target.value))}
                          className={`${field} mt-2`}
                        />
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <h3 className="display text-4xl md:text-6xl">Check it
                  <br />
                  twice.
                </h3>
              </div>
              <dl className="md:col-span-8">
                {[
                  ["Event", selected ? `${selected.number} · ${selected.title}` : "—"],
                  ["Participant", form.name],
                  ["Email", form.email],
                  ["Phone", form.phone],
                  ["College", form.college],
                  [
                    "Participation",
                    form.participation === "team"
                      ? `Team · ${form.teamName} (${form.teamSize})`
                      : "Individual",
                  ],
                  [
                    "Registration fee",
                    config?.amountInr != null ? `₹${config.amountInr}` : "To be announced",
                  ],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-ink/20 py-4 first:border-t-2"
                  >
                    <dt className="label-tag opacity-60">{k}</dt>
                    <dd className="display text-xl md:text-2xl">{v || "—"}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-ink/20 py-6">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="label-tag border-2 border-ink/40 px-6 py-3 disabled:opacity-30"
        >
          ← Back
        </button>
        <button type="button" onClick={next} className="label-tag bg-ink px-8 py-4 text-cream">
          {step === 2 ? "Proceed to payment →" : "Continue →"}
        </button>
      </div>
    </div>
  );
}
