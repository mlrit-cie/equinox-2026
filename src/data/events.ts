export type EventTheme = "blue" | "violet" | "cream" | "ink";

export type EquinoxEvent = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  format: string;
  description: string;
  highlights: string[];
  motif:
    | "spotlight"
    | "crossroads"
    | "expo"
    | "battles"
    | "auction"
    | "hustle"
    | "ideathon"
    | "internship"
    | "poly"
    | "network"
    | "pitch";
  theme: EventTheme;
  accent: "orange" | "coral" | "yellow" | "pink";
};

export const events: EquinoxEvent[] = [
  {
    id: "spotlight",
    number: "01",
    title: "Spotlight",
    tagline: "Voices that shape what's next.",
    category: "Talks & Insights",
    format: "Speaker sessions",
    description:
      "Industry experts share insights on technology, entrepreneurship and the future of work — an opening lens on where opportunity is moving next.",
    highlights: ["Industry experts", "Technology", "Entrepreneurship", "Future of work"],
    motif: "spotlight",
    theme: "blue",
    accent: "yellow",
  },
  {
    id: "crossroads",
    number: "02",
    title: "Crossroads",
    tagline: "Run the company for a day.",
    category: "Business Simulation",
    format: "Role-based simulation",
    description:
      "A business simulation where participants take on roles such as CEO, CTO and Marketing Manager, and make the decisions those roles demand.",
    highlights: ["CEO", "CTO", "Marketing Manager", "Decision making"],
    motif: "crossroads",
    theme: "cream",
    accent: "coral",
  },
  {
    id: "startup-expo",
    number: "03",
    title: "Startup Expo",
    tagline: "Put the product on the table.",
    category: "Showcase",
    format: "Exhibition",
    description:
      "Students showcase innovative products and business ideas to visitors, peers and industry guests across the expo floor.",
    highlights: ["Product showcase", "Business ideas", "Student innovators"],
    motif: "expo",
    theme: "violet",
    accent: "yellow",
  },
  {
    id: "brand-battles",
    number: "04",
    title: "Brand Battles",
    tagline: "Two brands. One argument.",
    category: "Debate",
    format: "Head-to-head",
    description:
      "A competitive debate between rival brands where teams defend positioning, strategy and market claims under pressure.",
    highlights: ["Rival brands", "Competitive debate", "Positioning"],
    motif: "battles",
    theme: "blue",
    accent: "orange",
  },
  {
    id: "ipl-auction",
    number: "05",
    title: "IPL Auction",
    tagline: "Build your dream team.",
    category: "Strategy Game",
    format: "Live auction",
    description:
      "A fast-paced cricket team-building auction experience where budgets, nerve and strategy decide who walks away with the squad.",
    highlights: ["Live bidding", "Budget strategy", "Team building"],
    motif: "auction",
    theme: "cream",
    accent: "coral",
  },
  {
    id: "hustle-mania",
    number: "06",
    title: "Hustle Mania",
    tagline: "Sell something. Prove it works.",
    category: "Business Challenge",
    format: "On-ground stalls",
    description:
      "A hands-on business and marketing challenge built around stalls, pricing, revenue and profit — real selling, real numbers.",
    highlights: ["Stalls", "Pricing", "Revenue", "Profit"],
    motif: "hustle",
    theme: "violet",
    accent: "yellow",
  },
  {
    id: "ideathon",
    number: "07",
    title: "Ideathon",
    tagline: "From notebook to investor.",
    category: "Pitch Competition",
    format: "Idea pitching",
    description:
      "Participants pitch their ideas to venture capitalists and investors, defending the thinking behind them in the room.",
    highlights: ["Idea pitching", "Venture capitalists", "Investor feedback"],
    motif: "ideathon",
    theme: "blue",
    accent: "pink",
  },
  {
    id: "internship-drive",
    number: "08",
    title: "Internship Drive",
    tagline: "The shortest path to a start.",
    category: "Careers",
    format: "Recruitment drive",
    description:
      "Students connect directly with startups and companies for internship opportunities across roles and domains.",
    highlights: ["Startups", "Companies", "Internship opportunities"],
    motif: "internship",
    theme: "cream",
    accent: "orange",
  },
  {
    id: "startup-poly",
    number: "09",
    title: "Startup Poly",
    tagline: "Roll. Build. Acquire.",
    category: "Game Challenge",
    format: "Board-game format",
    description:
      "A Monopoly-inspired entrepreneurship challenge where teams build, trade and grow ventures across the board.",
    highlights: ["Monopoly-inspired", "Venture building", "Trading"],
    motif: "poly",
    theme: "violet",
    accent: "coral",
  },
  {
    id: "e-cell-meet",
    number: "10",
    title: "E-Cell Meet",
    tagline: "Campuses in one room.",
    category: "Networking",
    format: "Inter-college meet",
    description:
      "Networking and collaboration between E-Cells from different colleges — shared playbooks, shared ambition.",
    highlights: ["Inter-college", "E-Cell networks", "Collaboration"],
    motif: "network",
    theme: "blue",
    accent: "yellow",
  },
  {
    id: "pitch-deck",
    number: "11",
    title: "Pitch Deck",
    tagline: "Twelve slides. One shot.",
    category: "Pitch Competition",
    format: "Deck presentation",
    description:
      "Startup concepts presented to investors, VCs and industry experts through a full pitch deck and live questioning.",
    highlights: ["Investors", "VCs", "Industry experts", "Live Q&A"],
    motif: "pitch",
    theme: "ink",
    accent: "pink",
  },
];

export const getEvent = (id: string) => events.find((e) => e.id === id);
