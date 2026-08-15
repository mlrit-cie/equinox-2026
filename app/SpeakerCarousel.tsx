"use client";

import { useState } from "react";
import { speakers } from "@/lib/content";
import { Avatar } from "./ui";

export default function SpeakerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = speakers.length;

  const previous = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  const getOffset = (index: number) => {
    let offset = index - activeIndex;

    if (offset > total / 2) {
      offset -= total;
    }

    if (offset < -total / 2) {
      offset += total;
    }

    return offset;
  };

  const activeSpeaker = speakers[activeIndex];

  return (
    <div className="speaker-carousel">

      {/* Speaker photos */}
      <div className="speaker-stage">
        {speakers.map((speaker, index) => {
          const offset = getOffset(index);

          if (Math.abs(offset) > 2) {
            return null;
          }

          const isActive = offset === 0;

          return (
            <button
              key={speaker.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`speaker-slide ${
                isActive ? "speaker-slide-active" : ""
              }`}
              style={
                {
                  "--speaker-offset": offset,
                } as React.CSSProperties
              }
            >
              <Avatar
                name={speaker.name}
                className="speaker-photo"
              />
            </button>
          );
        })}
      </div>

      {/* Active speaker information */}
      <div className="speaker-info">

        <p className="label text-accent">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </p>

        <h3 className="heading mt-3 text-3xl sm:text-4xl">
          {activeSpeaker.name}
        </h3>

        <p className="mt-2 text-fg/70">
          {activeSpeaker.role}
        </p>

        {/* Social links */}
        <div className="mt-5 flex justify-center gap-2">
          <a
            href={activeSpeaker.instagram}
            target="_blank"
            rel="noreferrer"
            className="label grid h-9 min-w-9 place-items-center rounded-full border border-fg/15 px-3 hover:border-accent hover:text-accent"
          >
            IG
          </a>

          <a
            href={activeSpeaker.linkedin}
            target="_blank"
            rel="noreferrer"
            className="label grid h-9 min-w-9 place-items-center rounded-full border border-fg/15 px-3 hover:border-accent hover:text-accent"
          >
            IN
          </a>
        </div>

      </div>

      {/* Controls */}
      <div className="speaker-controls">

        <button
          type="button"
          onClick={previous}
          aria-label="Previous speaker"
          className="speaker-control"
        >
          ←
        </button>

        <div className="speaker-progress">
          <span
            style={{
              width: `${((activeIndex + 1) / total) * 100}%`,
            }}
          />
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next speaker"
          className="speaker-control"
        >
          →
        </button>

      </div>

    </div>
  );
}