"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, Trophy, X, MapPin, Download, Share2, Target, Award, Users, Briefcase, Lightbulb, Presentation, Landmark, Compass, TrendingUp, MessageSquare, Megaphone } from "lucide-react"
import Head from "next/head"
import LiquidEther from "@/components/LiquidEther"
import SubEventCarousel from "@/components/SubEventCarousel"
import ScrollRevealGallery from "@/components/ScrollRevealGallery"

const hackathonImages = [
  "Sub-event Photo 1",
  "Sub-event Photo 2",
  "Sub-event Photo 3",
  "Sub-event Photo 4",
  "Sub-event Photo 5",
  "Sub-event Photo 6",
  "Sub-event Photo 7",
  "Sub-event Photo 8",
]

const partyImages = [
  "Team Photo 1",
  "Team Photo 2",
  "Team Photo 3",
  "Team Photo 4",
  "Team Photo 5",
  "Team Photo 6",
  "Team Photo 7",
  "Team Photo 8",
]

const sundayImages = [
  "Faculty Photo 1",
  "Faculty Photo 2",
  "Faculty Photo 3",
  "Faculty Photo 4",
  "Faculty Photo 5",
  "Faculty Photo 6",
]

const videos = [
  "Event Highlight Video 1",
  "Event Highlight Video 2",
]

export default function Equinox2025Event() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState("fredag")

  const shareEvent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "EQUINOX 2025 - MLR Institute of Technology",
          text: "Discover EQUINOX 2025, the premier 3-day entrepreneurship summit organized by CIE, MLRIT!",
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <>
      <Head>
        <title>EQUINOX 2025 | Centre for Innovation and Entrepreneurship - MLRIT</title>
        <meta name="description" content="A 3-day entrepreneurship summit where students tackle real-world challenges and ignite their entrepreneurial spirit." />
      </Head>

      <div className="min-h-screen bg-[#030712] text-[#EAF2FF]">
        {/* Header - EQUINOX Space Style */}
        <header className="bg-[#0B132B] border-b border-[#38BDF8]/15 text-[#EAF2FF]" role="banner">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-black tracking-wider text-[#EAF2FF] uppercase">EQUINOX 2025</h1>
                <div
                  className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-[#38BDF8] rotate-90"
                  aria-hidden="true"
                ></div>
                <span className="text-xs font-semibold text-[#8CA3C4] hidden md:inline-block font-mono tracking-wider">CIE, MLR Institute of Technology</span>
              </div>
              <div className="flex items-center space-x-6 text-[#8CA3C4] font-mono text-xs">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
                  <span>MLRIT, Hyderabad</span>
                </div>
                <div className="flex items-center space-x-1 text-[#38BDF8]">
                  <Calendar className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
                  <span>TBD 2025</span>
                </div>
                <Button
                  onClick={shareEvent}
                  variant="ghost"
                  size="sm"
                  className="text-[#EAF2FF] hover:bg-[#38BDF8]/10 hover:text-white"
                  aria-label="Share event"
                >
                  <Share2 className="w-4 h-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="bg-[#030712] border-t border-b border-[#38BDF8]/10" role="navigation" aria-label="Main Navigation">
            <div className="max-w-7xl mx-auto px-4 py-2">
              <ul className="flex space-x-8 text-xs font-mono tracking-widest">
                <li>
                  <a
                    href="#about"
                    className="text-[#8CA3C4] hover:text-[#7DD3FC] font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7DD3FC]"
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href="#sub-events"
                    className="text-[#8CA3C4] hover:text-[#7DD3FC] font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7DD3FC]"
                  >
                    SUB-EVENTS
                  </a>
                </li>
                <li>
                  <a
                    href="#program"
                    className="text-[#8CA3C4] hover:text-[#7DD3FC] font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7DD3FC]"
                  >
                    SCHEDULE
                  </a>
                </li>
                <li>
                  <a
                    href="#bilder"
                    className="text-[#8CA3C4] hover:text-[#7DD3FC] font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7DD3FC]"
                  >
                    GALLERY
                  </a>
                </li>
                <li>
                  <a
                    href="#coordinators"
                    className="text-[#8CA3C4] hover:text-[#7DD3FC] font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#7DD3FC]"
                  >
                    COORDINATORS
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Hero Section - LiquidEther Interactive Background */}
        <section
          className="relative min-h-[600px] flex items-center overflow-hidden bg-[#050A14] border-b border-[#38BDF8]/10"
          role="main"
        >
          {/* LiquidEther background wrapper */}
          <div className="absolute inset-0 z-0 opacity-75">
            <LiquidEther
              colors={['#2563EB', '#38BDF8', '#7DD3FC']}
              mouseForce={20}
              cursorSize={110}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={27}
              resolution={0.5}
              isBounce
              autoDemo={true}
              autoSpeed={0.4}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 py-16 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest block mb-2 font-semibold">
                  TBD 2025 // MLRIT CIE
                </span>
                <h2 className="text-7xl font-extrabold text-[#EAF2FF] leading-none mb-4 tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#EAF2FF] via-[#7DD3FC] to-[#38BDF8]">
                  EQUINOX 2025
                </h2>
                <p className="text-xl font-mono text-[#7DD3FC] mb-4">Innovate. Pitch. Compete.</p>
                <p className="text-lg text-[#8CA3C4] mb-8 max-w-lg leading-relaxed">
                  A 3-day event where students tackle real-world challenges and ignite their entrepreneurial spirit. Organized by Centre for Innovation and Entrepreneurship (CIE), MLRIT.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] text-white font-bold text-lg px-6 py-3 rounded-md transition-all duration-300 border-none transform active:scale-95">
                    Register Interest
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#8CA3C4]/30 text-[#EAF2FF] hover:bg-[#EAF2FF]/5 hover:border-white font-bold text-lg px-6 py-3 rounded-md transition-all duration-200"
                  >
                    Get Details
                  </Button>
                </div>
              </div>
              <div className="relative h-[420px] w-full max-w-[440px] mx-auto flex items-center justify-center">
                {/* Background glow sphere */}
                <div className="absolute w-72 h-72 bg-[#2563EB]/15 rounded-full filter blur-3xl pointer-events-none"></div>

                {/* Sub-Card 1 (Left Offset) */}
                <div className="absolute left-2 top-8 w-40 h-40 bg-[#0B132B]/80 border border-[#2563EB]/35 backdrop-blur-sm rounded-xl p-4 shadow-xl -rotate-6 transform hover:rotate-0 hover:z-20 transition-all duration-300 flex flex-col justify-between select-none">
                  <span className="text-[10px] font-mono text-[#38BDF8]">[Image]</span>
                  <span className="text-xs font-bold text-[#EAF2FF]">IPL Auction</span>
                  <span className="text-[9px] text-[#8CA3C4]">Bidding Strategy</span>
                </div>

                {/* Sub-Card 2 (Right Offset) */}
                <div className="absolute right-2 bottom-8 w-40 h-40 bg-[#0B132B]/80 border border-[#2563EB]/35 backdrop-blur-sm rounded-xl p-4 shadow-xl rotate-6 transform hover:rotate-0 hover:z-20 transition-all duration-300 flex flex-col justify-between select-none">
                  <span className="text-[10px] font-mono text-[#38BDF8]">[Image]</span>
                  <span className="text-xs font-bold text-[#EAF2FF]">Ideathon Arena</span>
                  <span className="text-[9px] text-[#8CA3C4]">Pitch to VCs</span>
                </div>

                {/* Main Featured Card (Centered & Elevated) */}
                <div className="absolute z-10 w-60 h-60 bg-[#0B1526] border-2 border-[#38BDF8] rounded-2xl p-6 shadow-2xl flex flex-col justify-between transform hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(56,189,248,0.2)] select-none">
                  <div>
                    <span className="text-xs font-mono text-[#38BDF8] block mb-1">[Main Showcase]</span>
                    <h3 className="text-lg font-bold text-[#EAF2FF] tracking-tight">Venture Pitches</h3>
                  </div>
                  <div className="w-full h-24 border border-[#38BDF8]/10 rounded-lg flex items-center justify-center bg-[#050A14] text-[10px] text-[#8CA3C4] font-mono">
                    [Image Placeholder]
                  </div>
                  <span className="text-[10px] text-[#8CA3C4]/60 font-mono">EQUINOX 2025 MLRIT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-[#0B1526]/40 border-b border-[#38BDF8]/10" aria-labelledby="about-heading">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 id="about-heading" className="text-xs font-mono text-[#7DD3FC] uppercase tracking-widest mb-3">Our Vision</h2>
            <h3 className="text-3xl font-bold text-[#EAF2FF] mb-6">About EQUINOX</h3>
            <p className="text-xl text-[#8CA3C4] leading-relaxed">
              We envision creating an inclusive space where students, entrepreneurs, and investors come together to collaborate, learn, and shape impactful ideas.
            </p>
          </div>
        </section>

        {/* Event Stats - Full Bleed Strip */}
        <section className="bg-gradient-to-r from-[#030712] via-[#0B132B] to-[#030712] border-y border-[#38BDF8]/10 py-12 relative overflow-hidden" aria-labelledby="stats-heading">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h2 id="stats-heading" className="sr-only">Event Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#38BDF8]/10">
              <div className="text-center px-4">
                <div className="text-5xl font-black text-[#7DD3FC] tracking-tight mb-1">3 Days</div>
                <div className="text-[#8CA3C4] font-mono text-[10px] uppercase tracking-widest">Summit & Challenges</div>
              </div>
              <div className="text-center px-4 pt-4 md:pt-0">
                <div className="text-5xl font-black text-[#EAF2FF] tracking-tight mb-1">1000+</div>
                <div className="text-[#8CA3C4] font-mono text-[10px] uppercase tracking-widest">Participants</div>
              </div>
              <div className="text-center px-4 pt-4 md:pt-0">
                <div className="text-5xl font-black text-[#7DD3FC] tracking-tight mb-1">11</div>
                <div className="text-[#8CA3C4] font-mono text-[10px] uppercase tracking-widest">Sub-Events</div>
              </div>
              <div className="text-center px-4 pt-4 md:pt-0">
                <div className="text-5xl font-black text-[#EAF2FF] tracking-tight mb-1">₹ Lakhs</div>
                <div className="text-[#8CA3C4] font-mono text-[10px] uppercase tracking-widest">Prize Pool & VC</div>
              </div>
            </div>
          </div>
        </section>

        {/* Program / Schedule Section */}
        <section id="program" className="py-24 bg-[#030712] border-b border-[#38BDF8]/10 relative overflow-hidden" aria-labelledby="program-heading">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#2563EB]/5 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <span className="text-xs font-mono text-[#38BDF8] tracking-widest text-center block mb-2 font-semibold">TBD 2025 // HYDERABAD</span>
            <h2 id="program-heading" className="text-4xl font-extrabold text-[#EAF2FF] mb-2 text-center tracking-tight uppercase">
              EVENT SCHEDULE
            </h2>
            <p className="text-sm font-mono text-[#8CA3C4] text-center mb-16">THREE DAYS OF ENTREPRENEURIAL EXCELLENCE</p>

            <div className="relative">
              {/* Vertical Glowing Connector Line */}
              <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2563EB] via-[#38BDF8] to-transparent transform -translate-x-[50%] hidden md:block opacity-35"></div>

              {/* Day 1 (Left Text, Right Card) */}
              <div className="relative grid md:grid-cols-2 gap-8 mb-16 items-center">
                <div className="md:text-right pr-8 md:block flex flex-col md:items-end">
                  <span className="px-2.5 py-1 text-[10px] font-mono text-[#38BDF8] border border-[#38BDF8]/20 bg-[#38BDF8]/10 rounded-md mb-3 block w-fit">DAY 1</span>
                  <h3 className="text-2xl font-bold text-[#EAF2FF] mb-2 tracking-tight">Inauguration & Networking</h3>
                  <p className="text-sm text-[#8CA3C4] max-w-sm md:text-right leading-relaxed">
                    Set up your workspace, check in at MLRIT Campus, and engage in startup foundations seminars.
                  </p>
                </div>
                <div className="relative bg-[#0B132B] border border-[#2563EB]/15 rounded-xl p-6 shadow-xl hover:border-[#38BDF8]/40 transition-colors">
                  {/* Glowing timeline node */}
                  <div className="absolute left-[-17px] top-[50%] w-8 h-8 rounded-full bg-[#030712] border-2 border-[#38BDF8] hidden md:flex items-center justify-center transform -translate-y-[50%] z-10 shadow-[0_0_15px_rgba(56,189,248,0.35)]">
                    <div className="w-3 h-3 rounded-full bg-[#38BDF8]"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 border-l-2 border-[#2563EB]/35 pl-4 py-0.5">
                      <time className="text-[#38BDF8] font-bold font-mono text-sm min-w-[70px]">09:00 AM</time>
                      <div>
                        <p className="font-bold text-[#EAF2FF] text-sm">Registrations Open</p>
                        <p className="text-xs text-[#8CA3C4]">MLRIT CIE Lobby</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 border-l-2 border-[#2563EB]/35 pl-4 py-0.5">
                      <time className="text-[#38BDF8] font-bold font-mono text-sm min-w-[70px]">10:00 AM</time>
                      <div>
                        <p className="font-bold text-[#EAF2FF] text-sm">Opening Ceremony</p>
                        <p className="text-xs text-[#8CA3C4]">MLRIT Main Auditorium</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 border-l-2 border-[#2563EB]/35 pl-4 py-0.5">
                      <time className="text-[#38BDF8] font-bold font-mono text-sm min-w-[70px]">11:30 AM</time>
                      <div>
                        <p className="font-bold text-[#EAF2FF] text-sm">Spotlight (Expert Talks)</p>
                        <p className="text-xs text-[#8CA3C4]">Seminars on Startup Foundations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 border-l-2 border-[#2563EB]/35 pl-4 py-0.5">
                      <time className="text-[#38BDF8] font-bold font-mono text-sm min-w-[70px]">02:00 PM</time>
                      <div>
                        <p className="font-bold text-[#EAF2FF] text-sm">E-Cell Meet</p>
                        <p className="text-xs text-[#8CA3C4]">Networking & Collaboration Rooms</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 border-l-2 border-[#2563EB]/35 pl-4 py-0.5">
                      <time className="text-[#38BDF8] font-bold font-mono text-sm min-w-[70px]">03:30 PM</time>
                      <div>
                        <p className="font-bold text-[#EAF2FF] text-sm">Crossroads Briefing</p>
                        <p className="text-xs text-[#8CA3C4]">CEO/CTO Simulation Kickoff</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 2 (Left Card, Right Text) */}
              <div className="relative grid md:grid-cols-2 gap-8 mb-16 items-center">
                <div className="relative bg-[#0B132B] border border-[#38BDF8]/15 rounded-xl p-6 shadow-xl hover:border-[#38BDF8]/40 transition-colors order-2 md:order-1">
                  {/* Glowing timeline node */}
                  <div className="absolute right-[-17px] top-[50%] w-8 h-8 rounded-full bg-[#030712] border-2 border-[#38BDF8] hidden md:flex items-center justify-center transform -translate-y-[50%] z-10 shadow-[0_0_15px_rgba(56,189,248,0.35)]">
                    <div className="w-3 h-3 rounded-full bg-[#38BDF8]"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 border-l-2 border-[#38BDF8]/35 pl-4 py-0.5">
                      <time className="text-[#38BDF8] font-bold font-mono text-sm min-w-[70px]">09:30 AM</time>
                      <div>
                        <p className="font-bold text-[#EAF2FF] text-sm">Startup Expo</p>
                        <p className="text-xs text-[#8CA3C4]">Product Showcases & Exhibitions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 border-l-2 border-[#38BDF8]/35 pl-4 py-0.5">
                      <time className="text-[#38BDF8] font-bold font-mono text-sm min-w-[70px]">11:00 AM</time>
                      <div>
                        <p className="font-bold text-[#EAF2FF] text-sm">Hustle Mania Stalls Open</p>
                        <p className="text-xs text-[#8CA3C4]">Live Trade & Real Selling Challenge</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 border-l-2 border-[#38BDF8]/35 pl-4 py-0.5">
                      <time className="text-[#38BDF8] font-bold font-mono text-sm min-w-[70px]">02:00 PM</time>
                      <div>
                        <p className="font-bold text-[#EAF2FF] text-sm">IPL Auction Room</p>
                        <p className="text-xs text-[#8CA3C4]">Bidding & Strategy Bidding Rooms</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 border-l-2 border-[#38BDF8]/35 pl-4 py-0.5">
                      <time className="text-[#38BDF8] font-bold font-mono text-sm min-w-[70px]">03:30 PM</time>
                      <div>
                        <p className="font-bold text-[#EAF2FF] text-sm">Brand Battles & Poly</p>
                        <p className="text-xs text-[#8CA3C4]">Rival-brand Debate & Strategy Game</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pl-8 order-1 md:order-2">
                  <span className="px-2.5 py-1 text-[10px] font-mono text-[#38BDF8] border border-[#38BDF8]/20 bg-[#38BDF8]/10 rounded-md mb-3 block w-fit">DAY 2</span>
                  <h3 className="text-2xl font-bold text-[#EAF2FF] mb-2 tracking-tight">Expos & Trade Action</h3>
                  <p className="text-sm text-[#8CA3C4] max-w-sm leading-relaxed">
                    Pitch to campus crowds at Startup Expo, trade mock products, and enter strategy board game challenges.
                  </p>
                </div>
              </div>

              {/* Day 3 (Left Text, Right Card) */}
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right pr-8 md:block flex flex-col md:items-end">
                  <span className="px-2.5 py-1 text-[10px] font-mono text-[#38BDF8] border border-[#38BDF8]/20 bg-[#38BDF8]/10 rounded-md mb-3 block w-fit">DAY 3</span>
                  <h3 className="text-2xl font-bold text-[#EAF2FF] mb-2 tracking-tight">Pitches & Recruitment</h3>
                  <p className="text-sm text-[#8CA3C4] max-w-sm md:text-right leading-relaxed">
                    Present structured pitch decks to actual venture capital judges, and recruit top-tier college talents.
                  </p>
                </div>
                <div className="relative bg-[#0B132B] border border-[#2563EB]/15 rounded-xl p-6 shadow-xl hover:border-[#38BDF8]/40 transition-colors">
                  {/* Glowing timeline node */}
                  <div className="absolute left-[-17px] top-[50%] w-8 h-8 rounded-full bg-[#030712] border-2 border-[#38BDF8] hidden md:flex items-center justify-center transform -translate-y-[50%] z-10 shadow-[0_0_15px_rgba(56,189,248,0.35)]">
                    <div className="w-3 h-3 rounded-full bg-[#38BDF8]"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 border-l-2 border-[#2563EB]/35 pl-4 py-0.5">
                      <time className="text-[#38BDF8] font-bold font-mono text-sm min-w-[70px]">09:00 AM</time>
                      <div>
                        <p className="font-bold text-[#EAF2FF] text-sm">Internship Recruitment</p>
                        <p className="text-xs text-[#8CA3C4]">Startup Recruiting & Interviews</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 border-l-2 border-[#2563EB]/35 pl-4 py-0.5">
                      <time className="text-[#38BDF8] font-bold font-mono text-sm min-w-[70px]">10:30 AM</time>
                      <div>
                        <p className="font-bold text-[#EAF2FF] text-sm">Pitch Deck Presentations</p>
                        <p className="text-xs text-[#8CA3C4]">Investor Pitches & Mock Rounds</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 border-l-2 border-[#2563EB]/35 pl-4 py-0.5">
                      <time className="text-[#38BDF8] font-bold font-mono text-sm min-w-[70px]">01:30 PM</time>
                      <div>
                        <p className="font-bold text-[#EAF2FF] text-sm">Ideathon Stage VCs</p>
                        <p className="text-xs text-[#8CA3C4]">Pitching Finalists showcase</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 border-l-2 border-[#2563EB]/35 pl-4 py-0.5">
                      <time className="text-[#38BDF8] font-bold font-mono text-sm min-w-[70px]">03:30 PM</time>
                      <div>
                        <p className="font-bold text-[#EAF2FF] text-sm">Valedictory & Awards</p>
                        <p className="text-xs text-[#8CA3C4]">CIE MLRIT Main Hall</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Events Section */}
        <section id="sub-events" className="py-16 bg-[#050A14] border-b border-[#38BDF8]/10" aria-labelledby="sub-events-heading">
          <div className="max-w-6xl mx-auto px-4">
            <span className="text-xs font-mono text-[#38BDF8] tracking-widest text-center block mb-2 font-semibold">THE HEART OF EQUINOX 2025</span>
            <h2 id="sub-events-heading" className="text-5xl font-extrabold text-[#EAF2FF] mb-8 text-center tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#EAF2FF] via-[#7DD3FC] to-[#38BDF8]">
              11 MAJOR SUB-EVENTS
            </h2>

            <SubEventCarousel
              events={[
                {
                  title: "Spotlight",
                  desc: "Expert talks from industry pioneers and veteran entrepreneurs.",
                  icon: Megaphone,
                },
                {
                  title: "Crossroads",
                  desc: "A premium CEO/CTO business simulation and strategy challenge.",
                  icon: Compass,
                },
                {
                  title: "Startup Expo",
                  desc: "A platform for product showcases and startup exhibitions.",
                  icon: Landmark,
                },
                {
                  title: "Brand Battles",
                  desc: "A fierce rival-brand debate and marketing strategy battle.",
                  icon: MessageSquare,
                },
                {
                  title: "IPL Auction",
                  desc: "A thrilling cricket-draft bidding and strategy challenge.",
                  icon: Trophy,
                },
                {
                  title: "Hustle Mania",
                  desc: "A live selling and trade stall execution challenge.",
                  icon: Briefcase,
                },
                {
                  title: "Ideathon",
                  desc: "A structured pitch of innovative ideas to venture capitalists.",
                  icon: Lightbulb,
                },
                {
                  title: "Internship Drive",
                  desc: "Startup recruitment drive for top-tier internships.",
                  icon: Users,
                },
                {
                  title: "Startup Poly",
                  desc: "A Monopoly-style board game challenge focused on business strategy.",
                  icon: Target,
                },
                {
                  title: "E-Cell Meet",
                  desc: "A collaborative networking meet for E-Cells across multiple colleges.",
                  icon: Users,
                },
                {
                  title: "Pitch Deck",
                  desc: "A structured, high-stakes investor pitch deck presentation.",
                  icon: Presentation,
                },
              ]}
            />
          </div>
        </section>

        {/* Gallery Section */}
        <section id="bilder" className="bg-[#0B1526]/30 py-16 border-b border-[#38BDF8]/10" aria-labelledby="gallery-heading">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="gallery-heading" className="text-4xl font-black text-[#EAF2FF] text-center mb-2 tracking-tight">
              EQUINOX GALLERY
            </h2>
            <p className="text-sm font-mono text-[#38BDF8] text-center mb-12">REPLAYING THE HIGHLIGHTS</p>

            {/* Gallery Navigation */}
            <nav className="flex justify-center mb-8" aria-label="Gallery Category Selection">
              <div className="bg-[#0B1526] border border-[#2563EB]/20 rounded-md p-1 shadow-lg flex flex-wrap gap-1">
                <Button
                  variant={activeSection === "fredag" ? "default" : "ghost"}
                  className={`font-mono font-bold text-xs ${
                    activeSection === "fredag"
                      ? "bg-[#2563EB] text-white"
                      : "text-[#8CA3C4] hover:text-[#7DD3FC] hover:bg-[#050A14]"
                  }`}
                  onClick={() => setActiveSection("fredag")}
                  aria-pressed={activeSection === "fredag"}
                >
                  SUB-EVENTS
                </Button>
                <Button
                  variant={activeSection === "lordag" ? "default" : "ghost"}
                  className={`font-mono font-bold text-xs ${
                    activeSection === "lordag"
                      ? "bg-[#2563EB] text-white"
                      : "text-[#8CA3C4] hover:text-[#7DD3FC] hover:bg-[#050A14]"
                  }`}
                  onClick={() => setActiveSection("lordag")}
                  aria-pressed={activeSection === "lordag"}
                >
                  TEAM LABS
                </Button>
                <Button
                  variant={activeSection === "sondag" ? "default" : "ghost"}
                  className={`font-mono font-bold text-xs ${
                    activeSection === "sondag"
                      ? "bg-[#2563EB] text-white"
                      : "text-[#8CA3C4] hover:text-[#7DD3FC] hover:bg-[#050A14]"
                  }`}
                  onClick={() => setActiveSection("sondag")}
                  aria-pressed={activeSection === "sondag"}
                >
                  FACULTY LABS
                </Button>
                <Button
                  variant={activeSection === "videos" ? "default" : "ghost"}
                  className={`font-mono font-bold text-xs ${
                    activeSection === "videos"
                      ? "bg-[#2563EB] text-white"
                      : "text-[#8CA3C4] hover:text-[#7DD3FC] hover:bg-[#050A14]"
                  }`}
                  onClick={() => setActiveSection("videos")}
                  aria-pressed={activeSection === "videos"}
                >
                  CLIPS
                </Button>
              </div>
            </nav>

            {/* Image Gallery */}
            {activeSection === "fredag" && (
              <ScrollRevealGallery
                category="Sub-events"
                items={hackathonImages}
                onSelectImage={setSelectedImage}
              />
            )}

            {activeSection === "lordag" && (
              <ScrollRevealGallery
                category="Team Labs"
                items={partyImages}
                onSelectImage={setSelectedImage}
              />
            )}

            {activeSection === "sondag" && (
              <ScrollRevealGallery
                category="Faculty Labs"
                items={sundayImages}
                onSelectImage={setSelectedImage}
              />
            )}

            {activeSection === "videos" && (
              <ScrollRevealGallery
                category="Clips"
                items={videos}
                onSelectImage={setSelectedImage}
              />
            )}
          </div>
        </section>

        {/* Faculty Coordinators Section */}
        <section id="coordinators" className="bg-[#0B132B]/40 py-24 text-[#EAF2FF] border-b border-[#38BDF8]/10" aria-labelledby="coordinators-heading">
          <div className="max-w-6xl mx-auto px-4">
            <span className="text-xs font-mono text-[#38BDF8] tracking-widest text-center block mb-2 font-semibold">FACULTY LEADERSHIP</span>
            <h2 id="coordinators-heading" className="text-4xl font-extrabold text-[#EAF2FF] mb-2 text-center tracking-tight uppercase">
              FACULTY COORDINATORS
            </h2>
            <p className="text-sm font-mono text-[#8CA3C4] text-center mb-16">MLRIT CENTRE FOR INNOVATION AND ENTREPRENEURSHIP</p>

            <div className="grid md:grid-cols-3 gap-8 items-start md:pb-12">
              <article className="bg-[#050A14]/85 border border-[#2563EB]/15 rounded-2xl p-6 hover:border-[#38BDF8]/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(56,189,248,0.08)] flex flex-col justify-between h-full">
                <div className="w-full aspect-[3/4] border border-[#38BDF8]/15 bg-[#0B1526] rounded-xl flex flex-col items-center justify-center mb-6 text-[#8CA3C4] shadow-inner relative overflow-hidden">
                  <span className="text-xs font-mono text-[#38BDF8]/70">[Photo Placeholder]</span>
                  <span className="text-[10px] font-mono text-[#8CA3C4]/60 mt-1">Dr. A. Kiran Kumar</span>
                </div>
                <div>
                  <span className="px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-[#38BDF8] border border-[#38BDF8]/20 bg-[#38BDF8]/10 rounded-md inline-block mb-3">Director, CIE</span>
                  <h3 className="text-xl font-bold mb-1 text-[#EAF2FF]">Dr. A. Kiran Kumar</h3>
                  <p className="text-xs text-[#8CA3C4] font-mono">MLR Institute of Technology</p>
                </div>
              </article>

              <article className="bg-[#050A14]/85 border border-[#2563EB]/15 rounded-2xl p-6 hover:border-[#38BDF8]/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(56,189,248,0.08)] flex flex-col justify-between h-full md:translate-y-6">
                <div className="w-full aspect-[3/4] border border-[#38BDF8]/15 bg-[#0B1526] rounded-xl flex flex-col items-center justify-center mb-6 text-[#8CA3C4] shadow-inner relative overflow-hidden">
                  <span className="text-xs font-mono text-[#38BDF8]/70">[Photo Placeholder]</span>
                  <span className="text-[10px] font-mono text-[#8CA3C4]/60 mt-1">Dr. P. Bhaskar</span>
                </div>
                <div>
                  <span className="px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-[#38BDF8] border border-[#38BDF8]/20 bg-[#38BDF8]/10 rounded-md inline-block mb-3">CIE Coordinator</span>
                  <h3 className="text-xl font-bold mb-1 text-[#EAF2FF]">Dr. P. Bhaskar</h3>
                  <p className="text-xs text-[#8CA3C4] font-mono">MLR Institute of Technology</p>
                </div>
              </article>

              <article className="bg-[#050A14]/85 border border-[#2563EB]/15 rounded-2xl p-6 hover:border-[#38BDF8]/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(56,189,248,0.08)] flex flex-col justify-between h-full">
                <div className="w-full aspect-[3/4] border border-[#38BDF8]/15 bg-[#0B1526] rounded-xl flex flex-col items-center justify-center mb-6 text-[#8CA3C4] shadow-inner relative overflow-hidden">
                  <span className="text-xs font-mono text-[#38BDF8]/70">[Photo Placeholder]</span>
                  <span className="text-[10px] font-mono text-[#8CA3C4]/60 mt-1">Prof. S. Madhav</span>
                </div>
                <div>
                  <span className="px-2.5 py-1 text-xs font-mono font-bold tracking-wider text-[#38BDF8] border border-[#38BDF8]/20 bg-[#38BDF8]/10 rounded-md inline-block mb-3">Incubation Lead</span>
                  <h3 className="text-xl font-bold mb-1 text-[#EAF2FF]">Prof. S. Madhav</h3>
                  <p className="text-xs text-[#8CA3C4] font-mono">MLR Institute of Technology</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Next Event / Incubation Support CTA */}
        <section id="neste" className="bg-[#030712] py-24 border-b border-[#38BDF8]/10 relative overflow-hidden" aria-labelledby="next-event-heading">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
            <span className="text-xs font-mono text-[#38BDF8] tracking-widest block mb-2 font-semibold">GET FUNDED</span>
            <h2 id="next-event-heading" className="text-4xl font-extrabold text-[#EAF2FF] mb-4 tracking-tight uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#EAF2FF] via-[#7DD3FC] to-[#38BDF8]">
              READY TO ACCELERATE YOUR STARTUP?
            </h2>
            <p className="text-sm text-[#8CA3C4] mb-8 max-w-2xl mx-auto leading-relaxed">
              Join EQUINOX 2025 at MLR Institute of Technology to turn your ideas into functional products, pitch to real investors, and secure incubation opportunities.
            </p>
            <article className="bg-[#0B132B]/85 border border-[#38BDF8]/20 p-8 rounded-2xl mb-8 shadow-2xl hover:border-[#38BDF8]/40 transition-colors">
              <div className="flex items-center justify-center space-x-2 mb-4 font-mono text-[#38BDF8]">
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <time dateTime="2025-10-24" className="text-lg font-bold">
                  TBD 2025
                </time>
              </div>
              <h3 className="text-2xl font-bold text-[#EAF2FF] mb-2 tracking-tight">INCUBATION REGISTRATION</h3>
              <p className="text-sm text-[#8CA3C4] mb-6">
                Venue: Centre for Innovation and Entrepreneurship, MLRIT Campus, Dundigal, Hyderabad.
              </p>
              <Button className="bg-gradient-to-r from-[#2563EB] to-[#38BDF8] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] text-white font-bold text-lg px-8 py-3 rounded-md transition-all duration-300 border-none transform active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Register for Incubation
              </Button>
            </article>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0B1526] py-12 text-[#EAF2FF] border-t border-[#38BDF8]/10 font-mono text-sm" role="contentinfo">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-[#EAF2FF]">EQUINOX 2025</span>
                <div
                  className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-[#38BDF8] rotate-90"
                  aria-hidden="true"
                ></div>
                <span className="text-xs text-[#8CA3C4]">CIE, MLRIT</span>
              </div>
              <div className="text-[#8CA3C4] text-xs space-y-1">
                <p>Centre for Innovation and Entrepreneurship (CIE)</p>
                <p>MLR Institute of Technology, Dundigal, Hyderabad, 500043.</p>
                <p className="pt-2">
                  Email:{" "}
                  <a href="mailto:cie@mlrinstitutions.ac.in" className="text-[#38BDF8] hover:underline">
                    cie@mlrinstitutions.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="relative max-w-4xl max-h-full">
              <h2 id="modal-title" className="sr-only">
                Fullscreen view
              </h2>
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/10"
                onClick={() => setSelectedImage(null)}
                aria-label="Close fullscreen modal"
              >
                <X className="w-6 h-6" />
              </Button>
              {selectedImage.startsWith("http") ? (
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Full view"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              ) : (
                <div className="bg-[#0B1526] border border-[#38BDF8]/40 p-12 rounded-xl text-center shadow-2xl flex flex-col justify-center items-center">
                  <span className="text-[#38BDF8] font-mono text-lg mb-2">[Photo Placeholder]</span>
                  <span className="text-xl text-[#EAF2FF]">{selectedImage}</span>
                  <span className="text-[#8CA3C4] mt-4 max-w-sm text-sm">
                    This is a placeholder for the actual event photograph. Real photos can be uploaded and swapped in later.
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
