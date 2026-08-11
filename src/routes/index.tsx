import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { EventMarquee } from "@/components/site/EventMarquee";
import { AboutSection } from "@/components/site/AboutSection";
import { VisionSection } from "@/components/site/VisionSection";
import { EventExplorer } from "@/components/site/EventExplorer";
import { ScheduleSection } from "@/components/site/ScheduleSection";
import { CIESection } from "@/components/site/CIESection";
import { NetworkSection } from "@/components/site/NetworkSection";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EQUINOX — 3-Day Entrepreneurship Event by CIE, MLRIT" },
      {
        name: "description",
        content:
          "EQUINOX by the Centre for Innovation and Entrepreneurship, MLR Institute of Technology Hyderabad — three days, eleven experiences in innovation and entrepreneurship.",
      },
      { property: "og:title", content: "EQUINOX — CIE, MLR Institute of Technology" },
      {
        property: "og:description",
        content: "Three days. Eleven experiences. One entrepreneurial universe.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <h1 className="sr-only">
        EQUINOX — 3-day entrepreneurship and innovation event by CIE, MLR Institute of Technology,
        Hyderabad
      </h1>
      <Hero />
      <EventMarquee tone="yellow" />
      <AboutSection />
      <VisionSection />
      <EventExplorer />
      <EventMarquee tone="cream" />
      <ScheduleSection />
      <CIESection />
      <NetworkSection />
      <CTASection />
    </main>
  );
}
