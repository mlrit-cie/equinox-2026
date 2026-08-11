import { events } from "@/data/events";

export function EventMarquee({
  tone = "yellow",
}: {
  tone?: "yellow" | "violet" | "blue" | "cream";
}) {
  const bg = {
    yellow: "bg-yellow text-ink",
    violet: "bg-violet text-cream",
    blue: "bg-blue text-cream",
    cream: "bg-cream text-ink",
  }[tone];

  const items = [...events.map((e) => e.title), "CIE × EQUINOX", "MLRIT Hyderabad"];

  return (
    <div className={`relative overflow-hidden border-y-2 border-ink/20 py-3 ${bg}`}>
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex gap-8">
            {items.map((t, i) => (
              <span key={`${dup}-${i}`} className="display flex items-center gap-8 text-2xl md:text-4xl">
                {t}
                <span className="text-base opacity-60">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
