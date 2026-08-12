/* Per-character stroke-then-fill, driven entirely by CSS so it plays on first
   paint (no client JS, no hydration wait).

   Drawn as SVG rather than HTML text because the wordmark must fit its column
   at every window aspect. A viewBox scales to the box it is given and keeps its
   own proportions doing it, so there is no font-size to tune per breakpoint and
   no way for the letters to run off the edge. `textLength` pins the text to the
   viewBox width, so the em estimate below only has to be close. */

import "./StrokeText.css";

/* Syne caps average ~1.09em of advance. Only used to pick a font-size that
   makes `textLength` a nudge rather than a stretch. */
const EM_PER_CAP = 1.09;
const VB_WIDTH = 1000;

export default function StrokeText({
  text,
  strokeColor = "#4b5cff",
  fillColor = "#ffffff",
  drawDuration = 0.7,
  fillDelay = 0.1,
  stagger = 0.03,
  ease = "cubic-bezier(0.33, 1, 0.68, 1)",
  className = "",
}: {
  text: string;
  strokeColor?: string;
  fillColor?: string;
  drawDuration?: number;
  fillDelay?: number;
  stagger?: number;
  ease?: string;
  className?: string;
}) {
  const chars = [...text];
  const fontSize = VB_WIDTH / (EM_PER_CAP * chars.length);
  const baseline = fontSize * 0.67; /* cap height */
  const height = Math.round(baseline + fontSize * 0.21); /* Q's tail */

  return (
    <svg
      role="img"
      aria-label={text}
      viewBox={`0 0 ${VB_WIDTH} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      className={`stroke-text ${className}`}
      style={
        {
          "--stroke-color": strokeColor,
          "--fill-color": fillColor,
          "--draw-dur": `${drawDuration}s`,
          "--fill-delay": `${fillDelay}s`,
          "--stagger": `${stagger}s`,
          "--stroke-ease": ease,
        } as React.CSSProperties
      }
    >
      <text
        x={VB_WIDTH / 2}
        y={baseline}
        fontSize={fontSize}
        textAnchor="middle"
        textLength={VB_WIDTH}
        lengthAdjust="spacing"
      >
        {chars.map((char, i) => (
          <tspan key={i} style={{ "--i": i } as React.CSSProperties}>
            {char}
          </tspan>
        ))}
      </text>
    </svg>
  );
}
