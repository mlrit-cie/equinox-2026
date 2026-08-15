export interface EventItem {
  id: string;
  number: string;
  title: string;
  desc: string;
  category: string;
  iconName: string;
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: "spotlight",
    number: "01",
    title: "Spotlight",
    desc: "Expert talks from industry pioneers and veteran entrepreneurs.",
    category: "Keynotes",
    iconName: "Megaphone"
  },
  {
    id: "crossroads",
    number: "02",
    title: "Crossroads",
    desc: "A premium CEO/CTO business simulation and strategy challenge.",
    category: "Simulation",
    iconName: "Compass"
  },
  {
    id: "startup-expo",
    number: "03",
    title: "Startup Expo",
    desc: "A platform for product showcases and startup exhibitions.",
    category: "Exhibition",
    iconName: "Landmark"
  },
  {
    id: "brand-battles",
    number: "04",
    title: "Brand Battles",
    desc: "A fierce rival-brand debate and marketing strategy battle.",
    category: "Marketing",
    iconName: "MessageSquare"
  },
  {
    id: "ipl-auction",
    number: "05",
    title: "IPL Auction",
    desc: "A thrilling cricket-draft bidding and strategy challenge.",
    category: "Strategy",
    iconName: "Trophy"
  },
  {
    id: "hustle-mania",
    number: "06",
    title: "Hustle Mania",
    desc: "A live selling and trade stall execution challenge.",
    category: "Operations",
    iconName: "Briefcase"
  },
  {
    id: "ideathon",
    number: "07",
    title: "Ideathon",
    desc: "A structured pitch of innovative ideas to venture capitalists.",
    category: "Pitching",
    iconName: "Lightbulb"
  },
  {
    id: "internship-drive",
    number: "08",
    title: "Internship Drive",
    desc: "Startup recruitment drive for top-tier internships.",
    category: "Recruitment",
    iconName: "Users"
  },
  {
    id: "startup-poly",
    number: "09",
    title: "Startup Poly",
    desc: "A Monopoly-style board game challenge focused on business strategy.",
    category: "Gaming",
    iconName: "Target"
  },
  {
    id: "e-cell-meet",
    number: "10",
    title: "E-Cell Meet",
    desc: "A collaborative networking meet for E-Cells across multiple colleges.",
    category: "Networking",
    iconName: "Users"
  },
  {
    id: "pitch-deck",
    number: "11",
    title: "Pitch Deck",
    desc: "A structured, high-stakes investor pitch deck presentation.",
    category: "Pitching",
    iconName: "Presentation"
  }
];
