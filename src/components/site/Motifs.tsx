import type { EquinoxEvent } from "@/data/events";

export function EventMotif({
  motif,
  className = "",
}: {
  motif: EquinoxEvent["motif"];
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 200 200",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": true,
  } as const;

  switch (motif) {
    case "spotlight":
      return (
        <svg {...common}>
          <circle cx="100" cy="60" r="26" />
          <path d="M74 60 L20 190 H180 L126 60" />
          <circle cx="100" cy="60" r="52" opacity="0.4" />
          <circle cx="100" cy="60" r="78" opacity="0.2" />
        </svg>
      );
    case "crossroads":
      return (
        <svg {...common}>
          <path d="M0 140 L200 60" />
          <path d="M0 60 L200 140" />
          <path d="M100 0 V200" opacity="0.4" />
          <circle cx="100" cy="100" r="14" />
          <circle cx="30" cy="128" r="6" />
          <circle cx="170" cy="128" r="6" />
        </svg>
      );
    case "expo":
      return (
        <svg {...common}>
          {[0, 1, 2].map((r) =>
            [0, 1, 2].map((c) => (
              <rect key={`${r}-${c}`} x={20 + c * 58} y={20 + r * 58} width="44" height="44" />
            )),
          )}
          <rect x="78" y="78" width="44" height="44" fill="currentColor" opacity="0.25" />
        </svg>
      );
    case "battles":
      return (
        <svg {...common}>
          <path d="M100 0 V200" strokeDasharray="8 8" />
          <path d="M10 100 L80 60 L80 140 Z" />
          <path d="M190 100 L120 60 L120 140 Z" />
          <circle cx="100" cy="100" r="22" />
        </svg>
      );
    case "auction":
      return (
        <svg {...common}>
          <rect x="24" y="120" width="152" height="56" />
          <path d="M40 120 V70 H160 V120" />
          <path d="M60 40 L140 40" strokeWidth="8" />
          <path d="M100 40 V70" />
          <text x="100" y="160" textAnchor="middle" fontSize="34" stroke="none" fill="currentColor">
            ₹
          </text>
        </svg>
      );
    case "hustle":
      return (
        <svg {...common}>
          <path d="M20 80 L40 30 H160 L180 80 Z" />
          <path d="M30 80 V180 H170 V80" />
          <path d="M20 80 Q40 100 60 80 Q80 100 100 80 Q120 100 140 80 Q160 100 180 80" />
          <rect x="80" y="120" width="40" height="60" />
        </svg>
      );
    case "ideathon":
      return (
        <svg {...common}>
          <circle cx="100" cy="100" r="30" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            const r2 = i % 2 ? 88 : 66;
            const p = (n: number) => n.toFixed(3);
            return (
              <path
                key={i}
                d={`M${p(100 + Math.cos(a) * 42)} ${p(100 + Math.sin(a) * 42)} L${p(100 + Math.cos(a) * r2)} ${p(100 + Math.sin(a) * r2)}`}
              />
            );
          })}
        </svg>
      );
    case "internship":
      return (
        <svg {...common}>
          <path d="M10 150 H150 l-24 -24 M150 150 l-24 24" />
          <path d="M10 100 H120 l-24 -24 M120 100 l-24 24" opacity="0.6" />
          <path d="M10 50 H190 l-24 -24 M190 50 l-24 24" opacity="0.35" />
        </svg>
      );
    case "poly":
      return (
        <svg {...common}>
          <rect x="20" y="20" width="160" height="160" />
          <rect x="52" y="52" width="96" height="96" strokeDasharray="6 8" />
          {[20, 60, 100, 140].map((v) => (
            <rect key={v} x={v} y="20" width="40" height="32" />
          ))}
          {[20, 60, 100, 140].map((v) => (
            <rect key={`b${v}`} x={v} y="148" width="40" height="32" />
          ))}
        </svg>
      );
    case "network":
      return (
        <svg {...common}>
          {[
            [40, 50],
            [150, 40],
            [100, 110],
            [50, 160],
            [165, 150],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="10" />
          ))}
          <path d="M40 50 L100 110 L150 40 M100 110 L50 160 M100 110 L165 150 M40 50 L50 160" />
        </svg>
      );
    case "pitch":
      return (
        <svg {...common}>
          <rect x="20" y="30" width="160" height="110" />
          <path d="M40 120 L75 85 L105 105 L160 55" />
          <path d="M100 140 V170 M60 178 H140" />
          <circle cx="160" cy="55" r="7" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export function OrbitalMarks({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="190" strokeDasharray="2 10" />
      <circle cx="200" cy="200" r="140" strokeDasharray="14 10" opacity="0.6" />
      <circle cx="200" cy="200" r="92" opacity="0.35" />
      <circle cx="200" cy="10" r="6" fill="currentColor" />
      <circle cx="340" cy="300" r="4" fill="currentColor" />
    </svg>
  );
}

export function ArrowGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      aria-hidden="true"
    >
      <path d="M0 20 H92 l-16 -14 M92 20 l-16 14" />
    </svg>
  );
}

export function StarGlyph({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <path d="M50 0 C54 34 66 46 100 50 C66 54 54 66 50 100 C46 66 34 54 0 50 C34 46 46 34 50 0 Z" />
    </svg>
  );
}
