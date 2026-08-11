import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { RegistrationFlow } from "@/components/site/RegistrationFlow";

const searchSchema = z.object({ event: z.string().optional() });

export const Route = createFileRoute("/register")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Register for EQUINOX — CIE, MLR Institute of Technology" },
      {
        name: "description",
        content:
          "Register for EQUINOX experiences: enter participant details, choose your event and participation type, review and proceed to payment.",
      },
      { property: "og:title", content: "Register for EQUINOX" },
      { property: "og:description", content: "Your move. Enter EQUINOX." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const { event } = Route.useSearch();

  return (
    <main className="grain min-h-screen bg-cream text-ink">
      <section className="relative overflow-hidden px-4 pb-10 pt-28 md:px-8 md:pt-40">
        <div className="halftone pointer-events-none absolute inset-x-0 top-0 h-48 text-ink opacity-10" />
        <div className="relative mx-auto max-w-[1200px]">
          <span className="stamp">Registration</span>
          <h1 className="display mt-6 text-[clamp(3.5rem,15vw,13rem)]">
            Your <span className="text-coral">move.</span>
          </h1>
          <p className="display mt-2 text-[clamp(1.4rem,5vw,3.5rem)] text-blue">Enter Equinox.</p>
        </div>
      </section>

      <section className="pb-24">
        <RegistrationFlow {...(event ? { initialEventId: event } : {})} />
      </section>
    </main>
  );
}
