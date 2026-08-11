import { events } from "./events";

export type ScheduleSlot = {
  time: string | null;
  eventId: string | null;
  title: string;
  note: string;
};

export type ScheduleDay = {
  day: string;
  label: string;
  date: string | null;
  slots: ScheduleSlot[];
};

/**
 * EQUINOX is confirmed as a 3-day event. Exact dates and timings are not
 * published yet, so every time/date field is an explicit null placeholder
 * and is rendered as "TBA". Fill these in when the schedule is released.
 */
export const schedule: ScheduleDay[] = [
  {
    day: "01",
    label: "Open the floor",
    date: null,
    slots: [
      { time: null, eventId: "spotlight", title: "Spotlight", note: "Opening sessions" },
      { time: null, eventId: "startup-expo", title: "Startup Expo", note: "Expo floor opens" },
      { time: null, eventId: "crossroads", title: "Crossroads", note: "Simulation round" },
      { time: null, eventId: "brand-battles", title: "Brand Battles", note: "Qualifiers" },
    ],
  },
  {
    day: "02",
    label: "Play the market",
    date: null,
    slots: [
      { time: null, eventId: "ipl-auction", title: "IPL Auction", note: "Live auction" },
      { time: null, eventId: "hustle-mania", title: "Hustle Mania", note: "Stalls live" },
      { time: null, eventId: "startup-poly", title: "Startup Poly", note: "Board rounds" },
      { time: null, eventId: "e-cell-meet", title: "E-Cell Meet", note: "Inter-college meet" },
    ],
  },
  {
    day: "03",
    label: "Face the investors",
    date: null,
    slots: [
      { time: null, eventId: "ideathon", title: "Ideathon", note: "Pitch to VCs" },
      { time: null, eventId: "pitch-deck", title: "Pitch Deck", note: "Final presentations" },
      { time: null, eventId: "internship-drive", title: "Internship Drive", note: "Company desks" },
      { time: null, eventId: null, title: "Closing", note: "Results & wrap" },
    ],
  },
];

export const scheduledEventCount = events.length;
