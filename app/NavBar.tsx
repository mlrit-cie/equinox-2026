"use client";

/* Floating nav with dock-style magnification and pill-style hover effects.
   The active tab carries the half-lit disc — the site's mark — and both the
   disc and the pill behind it slide between tabs on a critically damped spring.
   Dock-style magnification responds to mouse proximity, and circular hover
   effects expand from beneath each item using GSAP animations. */

import { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { gsap } from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  Circle,
  House,
  LayoutGrid,
  Mail,
  MapPin,
  Mic,
  Ticket,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* Inlined rather than imported from ui.tsx — that module would drag the whole
   set of shared cards into the client bundle for one span. */
const DISC =
  "inline-block h-2.5 w-2.5 shrink-0 rounded-full border border-current bg-[linear-gradient(90deg,currentColor_50%,transparent_50%)]";

const ICONS: Record<string, LucideIcon> = {
  Home: House,
  Events: LayoutGrid,
  Speakers: Mic,
  Agenda: CalendarDays,
  Venue: MapPin,
  Register: Ticket,
  Contact: Mail,
};

/* Individual nav item with dock-style magnification + pill hover effect */
function NavItem({
  item,
  isActive,
  onClick,
  mouseX,
  distance = 150,
}: {
  item: { name: string; url: string };
  isActive: boolean;
  onClick: () => void;
  mouseX: any;
  distance?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const hoverLabelRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const activeTweenRef = useRef<gsap.core.Tween | null>(null);

  const Icon = ICONS[item.name] ?? Circle;
  const reduce = useReducedMotion();

  const move = reduce
    ? { duration: 0 }
    : ({ type: "spring", bounce: 0, duration: 0.4 } as const);

  // Setup GSAP circular hover animation
  useEffect(() => {
    const circle = circleRef.current;
    const pill = ref.current;
    const label = labelRef.current;
    const hoverLabel = hoverLabelRef.current;

    if (!circle || !pill) return;

    const layout = () => {
      const rect = pill.getBoundingClientRect();
      const { width: w, height: h } = rect;
      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`
      });

      if (label) gsap.set(label, { y: 0 });
      if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

      tlRef.current?.kill();
      const tl = gsap.timeline({ paused: true });
      tl.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease: "power3.out", overwrite: 'auto' }, 0);

      if (label) {
        tl.to(label, { y: -(h + 8), duration: 2, ease: "power3.out", overwrite: 'auto' }, 0);
      }
      if (hoverLabel) {
        gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
        tl.to(hoverLabel, { y: 0, opacity: 1, duration: 2, ease: "power3.out", overwrite: 'auto' }, 0);
      }

      tlRef.current = tl;
    };

    layout();
    window.addEventListener('resize', layout);

    return () => {
      window.removeEventListener('resize', layout);
      tlRef.current?.kill();
      activeTweenRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease: "power3.out",
      overwrite: 'auto'
    }) as gsap.core.Tween;
  };

  const handleMouseLeave = () => {
    const tl = tlRef.current;
    if (!tl) return;
    activeTweenRef.current?.kill();
    activeTweenRef.current = tl.tweenTo(0, {
      duration: 0.2,
      ease: "power3.out",
      overwrite: 'auto'
    }) as gsap.core.Tween;
  };

  // Calculate distance from mouse to this element's center for dock magnification
  const mouseDistance = useTransform(mouseX, (val) => {
    if (!ref.current) return distance;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    return Math.abs(val - centerX);
  });

  // Scale based on distance: closer = bigger (1.0 to 1.3)
  const scale = useTransform(
    mouseDistance,
    [0, distance],
    [1.3, 1.0]
  );

  const scaleSpring = useSpring(scale, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });

  return (
    <motion.div style={{ scale: scaleSpring }}>
      <Link
        ref={ref}
        href={item.url}
        transitionTypes={["nav-fade"]}
        aria-current={isActive ? "page" : undefined}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "press relative block rounded-full px-5 py-2.5 text-sm font-medium overflow-hidden",
          "text-fg/70 hover:text-fg focus-visible:ring-2 focus-visible:ring-beam focus-visible:outline-none",
          isActive && "text-fg",
        )}
      >
        {/* Circular hover effect background */}
        <span
          ref={circleRef}
          className="absolute left-1/2 bottom-0 rounded-full bg-beam pointer-events-none"
          style={{
            zIndex: 1,
            willChange: 'transform'
          }}
          aria-hidden="true"
        />

        {isActive && (
          <>
            <motion.span
              layoutId="nav-pill"
              className="absolute inset-0 -z-10 rounded-full bg-beam/22 ring-1 ring-beam/45"
              transition={move}
            />
            {/* The mark rides the active tab. */}
            <motion.span
              layoutId="nav-mark"
              className="pointer-events-none absolute -top-3.5 left-1/2 -translate-x-1/2 text-beam"
              transition={move}
            >
              <span className={DISC} />
            </motion.span>
          </>
        )}

        <span className="relative hidden md:inline z-10" ref={labelRef}>
          {item.name}
        </span>
        <span
          className="absolute hidden md:inline z-20 left-0 top-0 px-5 py-2.5 pointer-events-none"
          ref={hoverLabelRef}
          style={{ opacity: 0 }}
          aria-hidden="true"
        >
          {item.name}
        </span>
        <span className="relative md:hidden z-10">
          <Icon size={18} strokeWidth={2} aria-hidden />
          <span className="sr-only">{item.name}</span>
        </span>
      </Link>
    </motion.div>
  );
}

export function NavBar({
  items,
  className,
  defaultActive = "Home",
}: {
  items: { name: string; url: string }[];
  className?: string;
  defaultActive?: string;
}) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const mouseX = useMotionValue(Infinity);

  /* Route decides the active tab. A click also marks the tab active right away
     — tagged with the path it happened on, so a hash link on the current page
     keeps the highlight while a real navigation hands it back to the route. */
  const [clicked, setClicked] = useState<{ path: string; name: string } | null>(
    null,
  );

  const routeTab =
    items.find((item) => {
      const path = item.url.split("#")[0];
      return path !== "/" && pathname.startsWith(path);
    })?.name ?? defaultActive;
  const activeTab = clicked?.path === pathname ? clicked.name : routeTab;

  /* Apple's move spring: critically damped, response 0.4 — no overshoot on a
     reposition. bounce is reserved for motion a gesture threw. */
  const move = reduce
    ? { duration: 0 }
    : ({ type: "spring", bounce: 0, duration: 0.4 } as const);

  return (
    /* Named for view transitions so the bar stays put while page content slides
       underneath. The name has to sit on the fixed element itself — on a
       wrapper it becomes a containing block and paint-clips the bar away. */
    <div
      className={cn("fixed top-6 right-0 left-0 z-[9999] px-4", className)}
      style={{ viewTransitionName: "site-header" }}
    >
      <div className="flex justify-center pt-6">
        <motion.nav
          aria-label="Primary"
          className="material relative flex items-center gap-1 rounded-full p-1.5"
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={move}
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
        >
          {items.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <NavItem
                key={item.name}
                item={item}
                isActive={isActive}
                onClick={() => setClicked({ path: pathname, name: item.name })}
                mouseX={mouseX}
              />
            );
          })}
        </motion.nav>
      </div>
    </div>
  );
}
