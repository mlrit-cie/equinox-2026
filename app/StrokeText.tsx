/* Per-character stroke-then-fill, driven entirely by CSS so it plays on first
   paint (no client JS, no hydration wait). `ease` is a CSS timing function —
   the default approximates gsap's power2.out.

   ponytail: the draw is a left-to-right wipe of the outline, not a true path
   trace. Swap the spans for SVG <text> with stroke-dasharray/dashoffset if the
   letters need to look hand-drawn stroke by stroke. */

import "./StrokeText.css";

export default function StrokeText({
  text,
  splitBy = "char",
  strokeColor = "#4b5cff",
  fillColor = "#ffffff",
  strokeWidth = 1.4,
  drawDuration = 1.6,
  fillDelay = 0.2,
  stagger = 0.05,
  ease = "cubic-bezier(0.33, 1, 0.68, 1)",
  fillMode = "wipe",
  className = "",
}: {
  text: string;
  splitBy?: "char" | "word";
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
  drawDuration?: number;
  fillDelay?: number;
  stagger?: number;
  ease?: string;
  fillMode?: "wipe" | "fade";
  className?: string;
}) {
  const parts = splitBy === "word" ? text.split(/(\s+)/) : [...text];

  return (
    <span
      className={`stroke-text ${className}`}
      style={
        {
          "--stroke-color": strokeColor,
          "--fill-color": fillColor,
          "--stroke-w": `${strokeWidth}px`,
          "--draw-dur": `${drawDuration}s`,
          "--fill-delay": `${fillDelay}s`,
          "--stagger": `${stagger}s`,
          "--stroke-ease": ease,
          "--fill-anim": fillMode === "fade" ? "stroke-fade" : "stroke-wipe",
        } as React.CSSProperties
      }
    >
      <span className="sr-only">{text}</span>
      {parts.map((part, i) =>
        part.trim() === "" ? (
          <span key={i} className="stroke-space" aria-hidden="true" />
        ) : (
          <span
            key={i}
            className="stroke-piece"
            data-char={part}
            aria-hidden="true"
            style={{ "--i": i } as React.CSSProperties}
          >
            {part}
          </span>
        ),
      )}
    </span>
  );
}
