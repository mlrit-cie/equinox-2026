"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { EVENTS_DATA, EventItem } from "../data/events";
import { 
  Megaphone, Compass, Landmark, MessageSquare, Trophy, Briefcase, 
  Lightbulb, Users, Target, Presentation, ArrowUpRight, ArrowRight, 
  Menu, X, Calendar, MapPin, ChevronRight 
} from "lucide-react";

// Map icon names to Lucide icon components
const iconMap: Record<string, React.ComponentType<any>> = {
  Megaphone,
  Compass,
  Landmark,
  MessageSquare,
  Trophy,
  Briefcase,
  Lightbulb,
  Users,
  Target,
  Presentation
};

// Event visual cards color schemes
const eventThemes = [
  { bg: "bg-[#FF6B35]", text: "text-white", border: "border-[#FF6B35]" },
  { bg: "bg-[#240046]", text: "text-white", border: "border-[#240046]" },
  { bg: "bg-[#0D1B2A]", text: "text-white", border: "border-[#0D1B2A]" },
  { bg: "bg-[#F7B267]", text: "text-[#0D1B2A]", border: "border-[#F7B267]" },
  { bg: "bg-[#F15BB5]", text: "text-white", border: "border-[#F15BB5]" }
];

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  // Mouse Parallax values for Hero abstract elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  // Scroll animations for Hero Text
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroTextScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Normalise coordinates to -30 to 30
      const x = (clientX / width - 0.5) * 60;
      const y = (clientY / height - 0.5) * 60;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white overflow-x-hidden selection:bg-[#FF6B35] selection:text-white relative">
      
      {/* 1. NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1B2A]/90 backdrop-blur-md border-b border-white/10 paper-grain">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* CIE Branding on Left */}
          <div className="flex items-center space-x-2">
            <span className="text-xs font-black tracking-widest text-[#FF6B35] bg-white/5 px-2.5 py-1 rounded border border-[#FF6B35]/20 font-mono">
              CIE
            </span>
            <span className="text-[10px] tracking-wider text-white/50 hidden md:inline-block font-mono uppercase">
              MLRIT HYDERABAD
            </span>
          </div>

          {/* EQUINOX Centered Wordmark */}
          <a href="#" className="text-xl font-black tracking-[0.25em] text-white hover:text-[#FF6B35] transition-colors uppercase font-mono pl-[0.25em]">
            EQUINOX
          </a>

          {/* Right Controls */}
          <div className="flex items-center space-x-6">
            <a 
              href="#cta"
              className="hidden sm:inline-flex items-center justify-center bg-[#FF6B35] text-white px-5 py-2 font-mono text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-[#0D1B2A] border border-transparent hover:border-[#0D1B2A] transition-all transform active:scale-95 duration-200"
            >
              REGISTER NOW
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="flex items-center space-x-2 text-white hover:text-[#FF6B35] transition-colors focus:outline-none"
            >
              <span className="font-mono text-xs tracking-widest uppercase hidden md:inline">MENU</span>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* FULLSCREEN MAXIMALIST MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#240046] text-white flex flex-col justify-between p-8 md:p-16 paper-grain"
          >
            {/* Overlay Header */}
            <div className="flex justify-between items-center w-full">
              <span className="font-mono text-xs tracking-widest uppercase text-white/50">CIE // EQUINOX 2025</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 text-white hover:text-[#FF6B35] transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <span className="font-mono text-xs tracking-widest uppercase hidden md:inline">CLOSE</span>
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="grid md:grid-cols-2 gap-12 items-center my-auto">
              <nav className="flex flex-col space-y-4 md:space-y-8">
                {[
                  { name: "HOME", href: "#" },
                  { name: "ABOUT", href: "#about" },
                  { name: "VISION", href: "#vision" },
                  { name: "EVENTS", href: "#events" },
                  { name: "SCHEDULE", href: "#schedule" }
                ].map((item, idx) => (
                  <a 
                    key={item.name} 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center text-4xl md:text-7xl font-black tracking-tight text-white hover:text-[#FF6B35] transition-colors w-fit"
                  >
                    <span className="text-xs font-mono text-[#FF6B35] mr-4 opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 1}.</span>
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Graphic Info Area inside Menu */}
              <div className="border-t-2 md:border-t-0 md:border-l-2 border-white/20 pt-8 md:pt-0 md:pl-12 flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-lg font-bold tracking-tight text-[#F7B267] mb-4 uppercase font-mono">
                    Organized by:
                  </h4>
                  <p className="text-xl font-bold leading-snug max-w-sm mb-8">
                    Centre for Innovation and Entrepreneurship, MLR Institute of Technology, Hyderabad.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs font-mono tracking-wider text-white/40">TBD 2025 // INVENT. PITCH. COMPETE.</p>
                  <a 
                    href="#cta"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center space-x-2 text-white hover:text-[#FF6B35] transition-colors group font-mono text-sm font-bold uppercase"
                  >
                    <span>Register for the experience</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Menu Footer */}
            <div className="flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-white/40 border-t border-white/15 pt-8">
              <p>© 2025 CIE MLRIT. All Rights Reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
                <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
                <a href="#" className="hover:text-white transition-colors">TWITTER</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. HERO SECTION */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D1B2A] pt-24 px-6 paper-grain"
      >
        {/* Halftone grid background texture */}
        <div className="absolute inset-0 halftone-grid-light opacity-[0.06] pointer-events-none"></div>

        {/* Abstract Graphic Composition with mouse parallax */}
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden">
          
          {/* Orbital Orbit Line 1 */}
          <motion.div 
            style={{ x: parallaxX, y: parallaxY }}
            className="absolute w-[600px] h-[600px] border border-white/5 rounded-full"
          />

          {/* Orbital Orbit Line 2 */}
          <motion.div 
            style={{ 
              x: useTransform(parallaxX, (v) => v * -0.75), 
              y: useTransform(parallaxY, (v) => v * -0.75) 
            }}
            className="absolute w-[800px] h-[800px] border border-[#FF6B35]/5 rounded-full"
          />

          {/* Solid Graphic Circle - Accent Coral */}
          <motion.div 
            style={{ 
              x: useTransform(parallaxX, (v) => v * 1.5), 
              y: useTransform(parallaxY, (v) => v * 1.2) 
            }}
            className="absolute top-[15%] right-[20%] w-32 h-32 bg-[#FF6B35] opacity-[0.25] rounded-full mix-blend-screen filter blur-md"
          />

          {/* Solid Graphic Triangle - Accent Violet */}
          <motion.div 
            style={{ 
              x: useTransform(parallaxX, (v) => v * -1.2), 
              y: useTransform(parallaxY, (v) => v * 1.4) 
            }}
            className="absolute bottom-[20%] left-[10%] w-48 h-48 border-l-[4px] border-b-[4px] border-white/10 rotate-12"
          />

          {/* Graphic Grid Overlay Component */}
          <motion.div 
            style={{ 
              x: useTransform(parallaxX, (v) => v * 0.5), 
              y: useTransform(parallaxY, (v) => v * -0.5) 
            }}
            className="absolute top-[30%] left-[15%] w-24 h-24 halftone-grid opacity-10"
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative max-w-7xl mx-auto w-full z-20 text-center flex flex-col items-center">
          
          {/* Top Eyebrow branding */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex flex-col items-center"
          >
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#FF6B35] uppercase mb-2">
              CIE — Centre for Innovation & Entrepreneurship
            </span>
            <span className="text-sm font-mono tracking-widest text-white/50 uppercase">
              MLR Institute of Technology, Hyderabad
            </span>
          </motion.div>

          {/* Giant Oversized Typography Display with Scroll scale/opacity */}
          <motion.div 
            style={{ y: heroTextY, scale: heroTextScale, opacity: heroOpacity }}
            className="mb-10 w-full"
          >
            <h1 className="text-7xl sm:text-9xl md:text-[14rem] font-black tracking-tighter leading-none select-none text-white font-mono uppercase relative inline-block">
              EQUINOX
              <span className="absolute -bottom-2 right-4 text-xs font-mono tracking-[0.4em] text-[#FF6B35] font-black">
                2025
              </span>
            </h1>
          </motion.div>

          {/* Subtext description */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <p className="text-lg md:text-2xl font-mono text-[#F7B267] mb-2 uppercase tracking-wide">
              3-Day Entrepreneurship Experience
            </p>
            <p className="text-white/60 text-sm md:text-base tracking-relaxed">
              Tackle real-world venture challenges, design high-impact pitch decks, and validate ideas alongside founders and venture capitalists.
            </p>
          </motion.div>

          {/* CTA Button Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <a 
              href="#cta"
              className="w-full sm:w-auto bg-[#FF6B35] text-white font-mono text-sm font-bold tracking-widest uppercase px-8 py-4 border-2 border-[#FF6B35] hover:bg-transparent hover:text-[#FF6B35] transition-all transform active:scale-95 duration-200"
            >
              Register Now →
            </a>
            <a 
              href="#events"
              className="w-full sm:w-auto border-2 border-white/20 hover:border-[#FF6B35] text-white hover:text-[#FF6B35] font-mono text-sm font-bold tracking-widest uppercase px-8 py-4 transition-all duration-200"
            >
              Explore Events ↓
            </a>
          </motion.div>

          {/* Bottom stats banner */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 pt-8 border-t border-white/10 w-full max-w-4xl grid grid-cols-3 gap-4 text-center text-xs font-mono uppercase tracking-widest text-white/50"
          >
            <div>
              <p className="text-white font-bold text-lg md:text-2xl font-mono mb-1">3 Days</p>
              <p className="text-[10px]">Summit Experience</p>
            </div>
            <div>
              <p className="text-[#FF6B35] font-bold text-lg md:text-2xl font-mono mb-1">11</p>
              <p className="text-[10px]">Experiences</p>
            </div>
            <div>
              <p className="text-[#F7B267] font-bold text-lg md:text-2xl font-mono mb-1">1 Universe</p>
              <p className="text-[10px]">Entrepreneurial</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT EQUINOX */}
      <section id="about" className="py-32 bg-[#F8F9FA] text-[#0D1B2A] paper-grain relative">
        <div className="absolute inset-0 halftone-grid opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Graphic Grid */}
            <div className="relative">
              <span className="text-[10rem] font-black font-mono text-[#0D1B2A]/5 leading-none absolute -top-20 -left-6 select-none">
                CIE
              </span>
              <div className="border-4 border-[#0D1B2A] p-8 relative z-10 bg-white">
                <span className="font-mono text-xs tracking-widest text-[#FF6B35] uppercase block mb-4">THE BLUEPRINT //</span>
                <h3 className="text-3xl md:text-5xl font-black font-mono tracking-tight text-[#0D1B2A] uppercase leading-none mb-6">
                  INVENT. PITCH. COMPETE.
                </h3>
                <p className="text-base text-[#0D1B2A]/70 leading-relaxed mb-6">
                  EQUINOX represents the flagship entrepreneurship festival hosted by the Centre for Innovation and Entrepreneurship (CIE) at MLR Institute of Technology.
                </p>
                <div className="border-t border-[#0D1B2A]/10 pt-6 space-y-4">
                  <div className="flex items-center space-x-3 text-sm font-mono text-[#0D1B2A]">
                    <span className="w-2.5 h-2.5 bg-[#FF6B35]"></span>
                    <span>3 Full Days of Experiential Tracks</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm font-mono text-[#0D1B2A]">
                    <span className="w-2.5 h-2.5 bg-[#240046]"></span>
                    <span>11 Major Sub-events and Exhibitions</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm font-mono text-[#0D1B2A]">
                    <span className="w-2.5 h-2.5 bg-[#F15BB5]"></span>
                    <span>Mentorship by Industry Veterans & VCs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div>
              <span className="text-xs font-mono text-[#FF6B35] tracking-widest uppercase block mb-3 font-bold">
                01 // MENTORSHIP & ACCELERATION
              </span>
              <h2 className="text-5xl md:text-7xl font-black font-mono tracking-tighter leading-none mb-8 text-[#0D1B2A] uppercase">
                WHERE IDEAS MEET ACTION
              </h2>
              <p className="text-lg text-[#0D1B2A]/80 leading-relaxed mb-6">
                Our vision is to create an inclusive and dynamic space where students, early-stage entrepreneurs, and active venture investors converge. At EQUINOX, we believe innovation shouldn't stay confined to slides.
              </p>
              <p className="text-base text-[#0D1B2A]/70 leading-relaxed mb-8">
                Tackle mock market trading challenges, showcase physical prototypes to hundreds of peers, and prepare high-stakes pitches ready for actual angel investment validation.
              </p>
              <a 
                href="#events"
                className="inline-flex items-center space-x-3 text-xs font-mono font-bold tracking-widest uppercase text-[#0D1B2A] hover:text-[#FF6B35] border-b-2 border-[#0D1B2A] hover:border-[#FF6B35] pb-1 transition-colors"
              >
                <span>VIEW EVENT CATALOGUE</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION SECTION */}
      <section id="vision" className="py-32 bg-[#240046] text-white paper-grain relative">
        <div className="absolute inset-0 halftone-grid-light opacity-[0.04] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Large Magazine-spread style statement */}
          <div className="mb-24 text-center md:text-left">
            <span className="text-xs font-mono text-[#F7B267] tracking-widest block mb-4 uppercase">
              02 // CORE OBJECTIVES
            </span>
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-black font-mono tracking-tighter leading-none uppercase mb-8 text-white">
              THINK.<br />
              BUILD.<br />
              CONNECT.<br />
              GROW.
            </h2>
            <div className="w-32 h-2 bg-[#FF6B35] mb-8"></div>
          </div>

          {/* Editorial Grid of Points */}
          <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
            <div>
              <div className="text-4xl font-black font-mono text-[#F7B267] mb-4">01</div>
              <h3 className="text-xl font-bold tracking-tight text-white mb-3 uppercase font-mono">
                DISCOVER OPPORTUNITIES
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Connect with E-Cells across major colleges, share insights, and discover startup internships or co-founder vacancies.
              </p>
            </div>
            
            <div>
              <div className="text-4xl font-black font-mono text-[#F15BB5] mb-4">02</div>
              <h3 className="text-xl font-bold tracking-tight text-white mb-3 uppercase font-mono">
                VALIDATE IN REAL-TIME
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Pitch concept decks to mock boardrooms and run live selling campaigns during peak trade hours.
              </p>
            </div>

            <div>
              <div className="text-4xl font-black font-mono text-[#FF6B35] mb-4">03</div>
              <h3 className="text-xl font-bold tracking-tight text-white mb-3 uppercase font-mono">
                SECURE RESOURCES
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Present your minimum viable products to angels, startup incubators, and corporate innovation heads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EVENTS EXPLORER */}
      <section id="events" className="py-32 bg-[#0D1B2A] text-white paper-grain relative">
        <div className="absolute inset-0 halftone-grid-light opacity-[0.05] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="mb-20 text-center md:text-left">
            <span className="text-xs font-mono text-[#FF6B35] tracking-widest block mb-2 font-semibold">
              03 // EXPERIENCE MAP
            </span>
            <h2 className="text-5xl md:text-7xl font-black font-mono tracking-tighter leading-none uppercase">
              EVENTS EXPLORER
            </h2>
            <p className="text-sm font-mono text-white/40 mt-3">
              HOVER A CARD TO DISCOVER UNIQUE GRAPHIC MOTIFS & DETAILS
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS_DATA.map((item, index) => {
              const theme = eventThemes[index % eventThemes.length];
              const Icon = iconMap[item.iconName] || Lightbulb;
              const isHovered = hoveredEvent === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  onMouseEnter={() => setHoveredEvent(item.id)}
                  onMouseLeave={() => setHoveredEvent(null)}
                  className={`border-2 ${theme.border} p-8 rounded-xl flex flex-col justify-between min-h-[320px] transition-colors relative overflow-hidden group cursor-pointer ${
                    isHovered ? `${theme.bg} ${theme.text}` : "bg-white/5 text-white"
                  }`}
                >
                  {/* Subtle Background Icon on Hover */}
                  <div className="absolute right-[-10%] bottom-[-10%] opacity-[0.03] group-hover:opacity-[0.12] transition-opacity duration-300">
                    <Icon className="w-56 h-56" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <span className={`text-xs font-mono font-bold px-2 py-1 border ${
                        isHovered ? "border-current" : "border-white/20 text-white/50"
                      }`}>
                        {item.category}
                      </span>
                      <span className="text-sm font-mono font-black opacity-40">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-3xl font-black tracking-tight mb-4 uppercase font-mono leading-none">
                      {item.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mb-6 ${
                      isHovered ? "opacity-90" : "text-white/60"
                    }`}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Expand Reveal Action */}
                  <div className="pt-4 border-t border-white/10 group-hover:border-white/20 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase">
                      LEARN MORE
                    </span>
                    <motion.div
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SCHEDULE PREVIEW */}
      <section id="schedule" className="py-32 bg-[#F8F9FA] text-[#0D1B2A] paper-grain relative">
        <div className="absolute inset-0 halftone-grid opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="mb-24 text-center">
            <span className="text-xs font-mono text-[#FF6B35] tracking-widest block mb-2 font-bold">
              04 // TIMELINE PREVIEW
            </span>
            <h2 className="text-5xl md:text-7xl font-black font-mono tracking-tighter leading-none uppercase mb-4">
              DAY STRUCTURE
            </h2>
            <p className="text-sm font-mono text-[#0D1B2A]/50">
              *REAL SCHEDULE DATA TO BE LOADED PRE-EVENT
            </p>
          </div>

          {/* Timeline columns */}
          <div className="space-y-12">
            {[
              {
                day: "01",
                title: "INAUGURATION & SUMMIT OPENING",
                desc: "Kickstart EQUINOX 2025 at MLRIT Campus. Focuses on peer networking and foundational ideation seminars.",
                tag: "DAY ONE"
              },
              {
                day: "02",
                title: "EXPOS & TRADE BATTLES",
                desc: "Peak trade hours. Startup expos go live, physical MVP demonstrations run, and rival-brand debates occur.",
                tag: "DAY TWO"
              },
              {
                day: "03",
                title: "BOARDROOM PITCHE DECK & VALEDICTORY",
                desc: "High-stakes presentation formats. Pitches to actual investor groups followed by award announcements.",
                tag: "DAY THREE"
              }
            ].map((item, idx) => (
              <div 
                key={item.day} 
                className="grid md:grid-cols-4 gap-8 items-start pb-12 border-b border-[#0D1B2A]/10 last:border-0"
              >
                <div className="text-center md:text-left">
                  <span className="text-6xl md:text-8xl font-black font-mono leading-none tracking-tighter text-[#0D1B2A]">
                    {item.day}
                  </span>
                  <span className="block text-xs font-mono text-[#FF6B35] uppercase font-bold tracking-wider mt-1">
                    {item.tag}
                  </span>
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-xl md:text-3xl font-black tracking-tight text-[#0D1B2A] uppercase mb-3 font-mono">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#0D1B2A]/70 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  
                  {/* Clearly Marked Placeholders for Times */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 font-mono text-[10px] font-bold border border-[#0D1B2A]/20 bg-[#0D1B2A]/5 uppercase">
                      TBD - MORNING TRACK
                    </span>
                    <span className="px-3 py-1 font-mono text-[10px] font-bold border border-[#0D1B2A]/20 bg-[#0D1B2A]/5 uppercase">
                      TBD - AFTERNOON CHALLENGES
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section id="cta" className="py-36 bg-[#240046] text-white paper-grain relative overflow-hidden">
        <div className="absolute inset-0 halftone-grid-light opacity-[0.05] pointer-events-none"></div>

        {/* Abstract Graphic Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] border-[2px] border-white/5 rounded-full rotate-45"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] border-l-[3px] border-[#FF6B35]/15 rotate-12"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <span className="text-xs font-mono text-[#F7B267] tracking-widest block mb-4 uppercase font-bold">
            GET INVOLVED // CIE ACCELERATOR
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black font-mono tracking-tighter leading-none uppercase mb-10">
            READY TO MAKE YOUR MOVE?
          </h2>
          <p className="text-sm md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
            Accelerate your concept, display innovations to peer groups, and get access to incubator support at MLRIT.
          </p>

          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Incubation registration placeholders are active!");
            }}
            className="inline-flex items-center space-x-3 bg-[#FF6B35] text-white font-mono text-sm font-bold tracking-widest uppercase px-10 py-5 border-2 border-[#FF6B35] hover:bg-transparent hover:text-white transition-all transform active:scale-95 duration-200"
          >
            <span>Register for EQUINOX →</span>
          </a>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#0D1B2A] text-white py-24 border-t border-white/10 paper-grain relative">
        <div className="absolute inset-0 halftone-grid-light opacity-[0.03] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            
            {/* Branding Column */}
            <div className="lg:col-span-2">
              <span className="text-xs font-mono text-[#FF6B35] tracking-widest block mb-2 font-bold">
                CIE // CENTRE FOR INNOVATION & ENTREPRENEURSHIP
              </span>
              <p className="text-lg font-bold leading-snug max-w-sm text-white/80 font-mono uppercase mb-6">
                MLR Institute of Technology, Dundigal, Hyderabad.
              </p>
              <div className="flex space-x-4">
                <Calendar className="w-5 h-5 text-white/50" />
                <span className="text-xs font-mono text-white/50 uppercase tracking-widest">TBD 2025 // HYDERABAD</span>
              </div>
            </div>

            {/* Links Column 1 */}
            <div>
              <h4 className="text-xs font-mono tracking-widest text-[#F7B267] uppercase mb-4 font-bold">
                NAVIGATION
              </h4>
              <ul className="space-y-2 text-sm font-mono text-white/60">
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">HOME</a></li>
                <li><a href="#about" className="hover:text-[#FF6B35] transition-colors">ABOUT</a></li>
                <li><a href="#vision" className="hover:text-[#FF6B35] transition-colors">VISION</a></li>
                <li><a href="#events" className="hover:text-[#FF6B35] transition-colors">EVENTS</a></li>
                <li><a href="#schedule" className="hover:text-[#FF6B35] transition-colors">SCHEDULE</a></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h4 className="text-xs font-mono tracking-widest text-[#F15BB5] uppercase mb-4 font-bold">
                RESOURCES
              </h4>
              <ul className="space-y-2 text-sm font-mono text-white/60">
                <li>
                  <a 
                    onClick={() => alert("Guidelines placeholder active.")}
                    className="hover:text-[#FF6B35] transition-colors cursor-pointer"
                  >
                    GUIDELINES
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => alert("Code of conduct placeholder.")}
                    className="hover:text-[#FF6B35] transition-colors cursor-pointer"
                  >
                    CODE OF CONDUCT
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => alert("Contact support active.")}
                    className="hover:text-[#FF6B35] transition-colors cursor-pointer"
                  >
                    CONTACT SUPPORT
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Massive Wordmark */}
          <div className="border-t border-white/10 pt-16 text-center overflow-hidden">
            <h2 className="text-[12vw] font-black font-mono leading-none tracking-[0.2em] text-white/5 select-none uppercase pl-[0.2em]">
              EQUINOX
            </h2>
          </div>
        </div>
      </footer>

    </div>
  );
}
