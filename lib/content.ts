// Placeholder content — swap these values for the real Equinox 2026 details.

export const event = {
  name: "Equinox",
  year: "2026",
  tagline: "Nexgen Innovation Summit for every",
  rotatingWords: ["Builder", "Founder", "Developer", "Designer"],
  date: "12–14 March 2026",
  venue: "MLR Institute of Technology, Hyderabad",
  host: "Centre for Innovation & Entrepreneurship, MLRIT",
  ticketUrl: "/register",
};

/* Hash entries are absolute (`/#agenda`) so they still resolve from a
   sub-route like /events/hackathon. */
export const nav = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Agenda", href: "/#agenda" },
  { label: "Register", href: "/register" },
  { label: "Contact", href: "/contact" },
];

export const about = {
  eyebrow: "About",
  heading: "Built, not presented",
  body: [
    "Equinox is the flagship innovation summit of CIE MLRIT — three days where students, founders, engineers and investors gather to build, demo and argue about what comes next. Expect keynotes from people shipping real products, hands-on workshops, and a hackathon that runs straight through the night.",
    "You'll see working demos rather than slide decks, meet teams hiring for their first ten roles, and leave with a network that outlasts the weekend. Come to build something, not just to watch.",
  ],
};

export const audience = {
  eyebrow: "Audience",
  heading: "Who it's for",
  note: "Whether you're shipping your first side project or your third company, Equinox is built to give you the room, the people and the momentum to go further.",
  /* Each group names what is actually on the floor for them — a label with no
     substance behind it is decoration. */
  groups: [
    {
      name: "Students",
      what: "Six events to enter, a hackathon that runs straight through the first night, and mentors on the floor all three days.",
    },
    {
      name: "Founders",
      what: "A stall at the expo on day three, investors walking that floor through the afternoon, and a hall full of people who will try what you built.",
    },
    {
      name: "Developers",
      what: "Workshop tracks across AI, embedded systems and product. Bring a laptop — the code sprint runs on the morning of day two.",
    },
    {
      name: "Investors",
      what: "Hackathon demos and the expo on day three, or the ideathon pitches on day one if you want to see teams earlier.",
    },
  ],
};

export const marquee = ["Innovation", "Networking", "Building", "Learning"];

export const speakers = [
  { name: "Speaker One", role: "Chief Technology Officer", instagram: "#", linkedin: "#" },
  { name: "Speaker Two", role: "Founder & CEO", instagram: "#", linkedin: "#" },
  { name: "Speaker Three", role: "Principal Engineer", instagram: "#", linkedin: "#" },
  { name: "Speaker Four", role: "Head of Design", instagram: "#", linkedin: "#" },
  { name: "Speaker Five", role: "Partner, Seed Fund", instagram: "#", linkedin: "#" },
  { name: "Speaker Six", role: "Director of Research", instagram: "#", linkedin: "#" },
];

export const speakerCount = "20+ Speakers";

export const agenda = [
  {
    tag: "Kickoff",
    title: "Day 1 : Main Conference",
    sessions: [
      {
        time: "09.30–10.30 AM",
        title: "Opening Remarks",
        body: "Welcome to Equinox 2026. Kick off the day with an introduction from the organizers and a look at what's in store across the three days.",
      },
      {
        time: "10.30–11.30 AM",
        title: "Keynote: Building in Public",
        body: "A founder's account of taking a product from a dorm-room prototype to a company, and what they'd do differently.",
        speaker: { name: "Speaker One", role: "Chief Technology Officer" },
      },
      {
        time: "12.30–01.30 PM",
        title: "Panel: Campus to Cap Table",
        body: "Investors and student founders on what actually gets a college-stage idea funded.",
        panel: [
          { name: "Speaker Five", role: "Partner, Seed Fund" },
          { name: "Speaker Two", role: "Founder & CEO" },
          { name: "Speaker Four", role: "Head of Design" },
          { name: "Speaker Six", role: "Director of Research" },
        ],
      },
    ],
  },
  {
    tag: "Main Day",
    title: "Day 2 : Deep Dive Sessions",
    sessions: [
      {
        time: "09.30–10.30 AM",
        title: "Morning Networking Coffee",
        body: "Catch up with fellow attendees over coffee before another day of workshops and demos.",
      },
      {
        time: "11.30–12.30 PM",
        title: "Keynote: Systems That Scale",
        body: "What breaks first when your side project meets its ten-thousandth user, and how to see it coming.",
        speaker: { name: "Speaker Three", role: "Principal Engineer" },
      },
      {
        time: "02.30–04.30 PM",
        title: "Workshop Track",
        body: "Parallel hands-on sessions across AI, embedded systems, product design and growth. Bring a laptop.",
        panel: [
          { name: "Speaker One", role: "Chief Technology Officer" },
          { name: "Speaker Three", role: "Principal Engineer" },
          { name: "Speaker Four", role: "Head of Design" },
          { name: "Speaker Six", role: "Director of Research" },
        ],
      },
    ],
  },
  {
    tag: "Sumup",
    title: "Day 3 : Demo & Networking Day",
    sessions: [
      {
        time: "09.30–11.30 AM",
        title: "Hackathon Demos",
        body: "Teams present what they built overnight to a panel of judges and the full summit floor.",
      },
      {
        time: "02.30–03.30 PM",
        title: "Fireside Chat: The Next Ten Years",
        body: "A candid conversation on where technology, teams and careers are heading — and how to place your bets.",
        speaker: { name: "Speaker Two", role: "Founder & CEO" },
      },
      {
        time: "04.30–05.30 PM",
        title: "Closing Remarks & Awards",
        body: "Prizes, acknowledgments to every speaker, sponsor and volunteer, and a first look at Equinox 2027.",
      },
    ],
  },
];

export const sponsors = [
  "Sponsor 01",
  "Sponsor 02",
  "Sponsor 03",
  "Sponsor 04",
  "Sponsor 05",
  "Sponsor 06",
  "Sponsor 07",
  "Sponsor 08",
];

export const faqs = [
  {
    q: "How can I register for Equinox 2026?",
    a: "Registration opens through the ticket section on this page. Pick a pass, complete checkout, and your confirmation and QR code arrive by email within a few minutes.",
  },
  {
    q: "Will the summit be available online for remote attendees?",
    a: "Keynotes and main-stage panels are live-streamed. Workshops, the hackathon and networking sessions are in person only.",
  },
  {
    q: "What is the dress code for the event?",
    a: "Smart casual. Comfortable shoes matter more than a blazer — you'll be moving between halls all day.",
  },
  {
    q: "Can I submit my project or research for the summit?",
    a: "Yes. The demo track and hackathon both accept submissions. Details and the submission form go live alongside registration.",
  },
  {
    q: "How can I become a sponsor or exhibitor at the event?",
    a: "Write to the organizing team with your company and what you'd like to do on the floor, and we'll send the sponsorship deck.",
  },
  {
    q: "Will there be opportunities for networking at the summit?",
    a: "Every day has dedicated networking blocks, plus an open lounge that runs the length of the summit and a speaker dinner for VIP pass holders.",
  },
];

export const hosts = {
  eyebrow: "Organisers",
  heading: "Run by CIE MLRIT",
  body: "Equinox is run by the Centre for Innovation & Entrepreneurship at MLR Institute of Technology — a student-led team of builders, designers and organizers who spend the year turning a campus into a place where things get made.",
};

export const contact = {
  eyebrow: "Contact",
  heading: "Get in touch",
  body: "Have questions about Equinox 2026? Reach out to the organizing board or the specific event coordinators. We're here to help you make the most of the summit.",
  email: "equinox2026@gmail.com",
};

export const tickets = [
  {
    name: "General Admission",
    description: "Access to the main stage, exhibitions, and standard networking sessions throughout the summit.",
    perks: [
      "Entry to keynote sessions",
      "Access to tech expo floor",
      "Standard networking lounge",
      "Summit welcome kit",
    ],
    badge: "Early Bird",
    price: "₹499",
    unit: "Single admission",
    href: "#",
  },
  {
    name: "VIP Pass",
    description: "Premium experience with priority access, exclusive sessions, and VIP-only networking opportunities.",
    perks: [
      "Priority seating at all sessions",
      "Access to VIP lounge",
      "Invitation to speaker dinner",
      "Premium summit kit",
    ],
    badge: "Early Bird",
    price: "₹1,499",
    unit: "Single admission",
    href: "#",
  },
  {
    name: "Team Pass",
    description: "Built for teams attending together. Includes access for 5 members and group perks.",
    perks: [
      "5 full-access passes",
      "Reserved group seating",
      "Team branding opportunities",
      "Group photo with keynote speakers",
    ],
    badge: "Early Bird",
    price: "₹1,999",
    unit: "5 Members",
    href: "#",
  },
];

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/mlritcie/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/cie-center-for-innovation-and-entrepreneurship-mlrit/" },
  { label: "X", href: "https://x.com/ciemlrit" },
  { label: "GitHub", href: "#" },
];

/* One entry per sub-event. `spoc` is the student point of contact printed on
   the event's own page — swap the placeholder gmails for the real ones. */
export const events = [
  {
    slug: "hackathon",
    name: "Hack the Equinox",
    tagline: "24 hours, one working demo",
    category: "Flagship",
    day: "Day 1–2",
    time: "12 Mar, 06.00 PM → 13 Mar, 06.00 PM",
    venue: "Innovation Block, Ground Floor",
    teamSize: "2–4 members",
    fee: "₹400 per team",
    prize: "₹50,000 pool",
    about: [
      "An overnight build sprint that runs straight through the first night of the summit. Problem statements drop at kickoff across AI, health, campus infrastructure and open track.",
      "Mentors from the speaker lineup float through the hall all night. Judging is on a working demo, not a slide deck.",
    ],
    rules: [
      "Teams of 2 to 4, at least one member must attend in person",
      "All code written during the event; libraries and boilerplate are fine",
      "Push to a public repo before the submission cutoff",
      "Demos are 5 minutes plus 3 minutes of questions",
    ],
    spoc: { name: "Event SPOC One", email: "hackathon.equinox@gmail.com", phone: "+91 90000 00001" },
  },
  {
    slug: "ideathon",
    name: "Ideathon",
    tagline: "Pitch the idea before you build it",
    category: "Flagship",
    day: "Day 1",
    time: "12 Mar, 10.00 AM – 04.00 PM",
    venue: "Seminar Hall A",
    teamSize: "1–3 members",
    fee: "₹200 per team",
    prize: "₹20,000 pool",
    about: [
      "A single-day sprint from a blank page to a defensible pitch. Teams pick a track in the morning, work with mentors through the afternoon and pitch to a panel by evening.",
      "No prototype required — the panel scores the problem, the insight and the plan.",
    ],
    rules: [
      "Teams of 1 to 3",
      "Idea must be original and unfunded",
      "6-minute pitch, 4 minutes of questions",
      "Deck template is shared at kickoff",
    ],
    spoc: { name: "Event SPOC Two", email: "ideathon.equinox@gmail.com", phone: "+91 90000 00002" },
  },
  {
    slug: "robo-race",
    name: "Robo Race",
    tagline: "Fastest bot around the track wins",
    category: "Technical",
    day: "Day 2",
    time: "13 Mar, 11.00 AM – 04.00 PM",
    venue: "Mechanical Block Arena",
    teamSize: "2–4 members",
    fee: "₹300 per team",
    prize: "₹15,000 pool",
    about: [
      "Wired or wireless bots run a timed obstacle track with ramps, gravel and a narrow bridge. Two qualifying heats, then knockouts.",
      "Bring spares. Repairs between heats are allowed inside the pit window.",
    ],
    rules: [
      "Bot must fit within 30 x 30 x 30 cm",
      "Maximum 12V supply, no IC engines",
      "One re-run allowed per team across the heats",
      "Track walkthrough is 30 minutes before the first heat",
    ],
    spoc: { name: "Event SPOC Three", email: "roborace.equinox@gmail.com", phone: "+91 90000 00003" },
  },
  {
    slug: "code-sprint",
    name: "Code Sprint",
    tagline: "Three hours, seven problems",
    category: "Technical",
    day: "Day 2",
    time: "13 Mar, 10.00 AM – 01.00 PM",
    venue: "Computer Lab 3",
    teamSize: "Individual",
    fee: "₹100",
    prize: "₹10,000 pool",
    about: [
      "A timed competitive programming round of seven problems that ramp from warm-up to genuinely hard. Any language supported by the judge is allowed.",
      "Leaderboard freezes for the last twenty minutes, so the ending is worth watching.",
    ],
    rules: [
      "Individual participation only",
      "Bring your own laptop; lab machines are backup",
      "No internet beyond documentation mirrors",
      "Ties broken by total submission time",
    ],
    spoc: { name: "Event SPOC Four", email: "codesprint.equinox@gmail.com", phone: "+91 90000 00004" },
  },
  {
    slug: "design-jam",
    name: "Design Jam",
    tagline: "Redesign something people actually use",
    category: "Design",
    day: "Day 2",
    time: "13 Mar, 02.00 PM – 06.00 PM",
    venue: "Design Studio, Second Floor",
    teamSize: "1–2 members",
    fee: "₹150 per team",
    prize: "₹10,000 pool",
    about: [
      "A four-hour jam on a real interface problem released at the start. Work in Figma, on paper, or anything in between.",
      "Judged on the reasoning behind the flow as much as the final screens.",
    ],
    rules: [
      "Teams of 1 or 2",
      "Any tool, but the file must be shareable at submission",
      "Present three screens and the reasoning in 5 minutes",
      "Stock components allowed, stolen layouts are not",
    ],
    spoc: { name: "Event SPOC Five", email: "designjam.equinox@gmail.com", phone: "+91 90000 00005" },
  },
  {
    slug: "startup-expo",
    name: "Startup Expo",
    tagline: "Take a stall, meet the floor",
    category: "Showcase",
    day: "Day 3",
    time: "14 Mar, 10.00 AM – 05.00 PM",
    venue: "Central Atrium",
    teamSize: "Team or solo founder",
    fee: "Free for exhibitors",
    prize: "Best stall award",
    about: [
      "Student teams and early-stage startups get a stall for the day in the busiest corridor of the summit. Investors and recruiters walk the floor through the afternoon.",
      "Stalls are allotted on application; bring whatever you have running.",
    ],
    rules: [
      "Apply with a one-paragraph description of what you'll demo",
      "One table and power point provided per stall",
      "At least one team member present through the day",
      "Setup closes 30 minutes before doors open",
    ],
    spoc: { name: "Event SPOC Six", email: "expo.equinox@gmail.com", phone: "+91 90000 00006" },
  },
];

/* Organising board — printed on every event page and the contact page. */
export const board = [
  { name: "Board Member One", role: "Convenor, Equinox 2026", email: "convenor.equinox@gmail.com", phone: "+91 90000 10001" },
  { name: "Board Member Two", role: "Student Lead, CIE", email: "lead.equinox@gmail.com", phone: "+91 90000 10002" },
];

export const partners = [
  "Partner 01",
  "Partner 02",
  "Partner 03",
  "Partner 04",
  "Partner 05",
  "Partner 06",
];

export const communities = [
  "Community 01",
  "Community 02",
  "Community 03",
  "Community 04",
  "Community 05",
  "Community 06",
];

export const registration = {
  eyebrow: "Registration",
  heading: `Register for ${event.name} ${event.year}`,
  body: "One pass covers entry to the summit floor, keynotes and the expo. Individual events take their own team registration on top of the pass — pick the event page and write to its SPOC to hold a slot.",
  /* Swap for the real form once it exists. */
  formUrl: "#",
  steps: [
    { title: "Pick your pass", body: "General, VIP or a team pass for five. Passes are per person and cover all three days." },
    { title: "Register your team", body: "For hackathon, ideathon, robo race and the rest, register the team on the event's page and confirm with its SPOC." },
    { title: "Pay and confirm", body: "Complete payment through the registration form. Your confirmation and QR code arrive by email." },
    { title: "Collect your kit", body: "Show the QR at the registration desk on 12 March from 08.30 AM to pick up your badge and kit." },
  ],
};
