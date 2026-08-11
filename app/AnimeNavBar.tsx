"use client";

/* Centered floating nav with a mascot that hops to the active tab.
   Adapted: icons are resolved here from the item name (a server component
   cannot hand component references across the boundary), and clicks no longer
   preventDefault so the hash links still jump to their section. */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const ICONS: Record<string, LucideIcon> = {
  Home: House,
  Events: LayoutGrid,
  Speakers: Mic,
  Agenda: CalendarDays,
  Venue: MapPin,
  Register: Ticket,
  Contact: Mail,
};

export function AnimeNavBar({
  items,
  className,
  defaultActive = "Home",
}: {
  items: { name: string; url: string }[];
  className?: string;
  defaultActive?: string;
}) {
  const pathname = usePathname();
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
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

  return (
    /* Named for view transitions so the bar stays put while page content slides
       underneath. The name has to sit on the fixed element itself — on a
       wrapper it becomes a containing block and paint-clips the bar away. */
    <div
      className={cn("fixed top-8 right-0 left-0 z-[9999]", className)}
      style={{ viewTransitionName: "site-header" }}
    >
      <div className="flex justify-center pt-6">
        <motion.div
          className="relative flex items-center gap-3 rounded-full border border-white/10 bg-black/50 px-2 py-2 shadow-lg backdrop-blur-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
          {items.map((item) => {
            const Icon = ICONS[item.name] ?? Circle;
            const isActive = activeTab === item.name;
            const isHovered = hoveredTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.url}
                transitionTypes={["nav-fade"]}
                onClick={() => setClicked({ path: pathname, name: item.name })}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative cursor-pointer rounded-full px-6 py-3 text-sm font-semibold transition-all duration-150",
                  "text-white/70 hover:text-white",
                  isActive && "text-white",
                )}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 -z-10 overflow-hidden rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.03, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-primary/25 blur-md" />
                    <div className="absolute inset-[-4px] rounded-full bg-primary/20 blur-xl" />
                    <div className="absolute inset-[-8px] rounded-full bg-primary/15 blur-2xl" />
                    <div className="absolute inset-[-12px] rounded-full bg-primary/5 blur-3xl" />
                    <div className="shine absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0" />
                  </motion.div>
                )}

                <span className="relative z-10 hidden md:inline">
                  {item.name}
                </span>
                <motion.span
                  className="relative z-10 md:hidden"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} strokeWidth={2.5} />
                </motion.span>

                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    />
                  )}
                </AnimatePresence>

                {isActive && (
                  <motion.div
                    layoutId="anime-mascot"
                    className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2"
                    initial={false}
                    transition={{ type: "spring", stiffness: 600, damping: 34 }}
                  >
                    <div className="relative h-12 w-12">
                      <motion.div
                        className="absolute left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-white"
                        animate={
                          hoveredTab
                            ? {
                                scale: [1, 1.1, 1],
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.5, ease: "easeInOut" },
                              }
                            : {
                                y: [0, -3, 0],
                                transition: {
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                },
                              }
                        }
                      >
                        <motion.div
                          className="absolute h-2 w-2 rounded-full bg-black"
                          animate={
                            hoveredTab
                              ? {
                                  scaleY: [1, 0.2, 1],
                                  transition: {
                                    duration: 0.2,
                                    times: [0, 0.5, 1],
                                  },
                                }
                              : {}
                          }
                          style={{ left: "25%", top: "40%" }}
                        />
                        <motion.div
                          className="absolute h-2 w-2 rounded-full bg-black"
                          animate={
                            hoveredTab
                              ? {
                                  scaleY: [1, 0.2, 1],
                                  transition: {
                                    duration: 0.2,
                                    times: [0, 0.5, 1],
                                  },
                                }
                              : {}
                          }
                          style={{ right: "25%", top: "40%" }}
                        />
                        <motion.div
                          className="absolute h-1.5 w-2 rounded-full bg-pink-300"
                          animate={{ opacity: hoveredTab ? 0.8 : 0.6 }}
                          style={{ left: "15%", top: "55%" }}
                        />
                        <motion.div
                          className="absolute h-1.5 w-2 rounded-full bg-pink-300"
                          animate={{ opacity: hoveredTab ? 0.8 : 0.6 }}
                          style={{ right: "15%", top: "55%" }}
                        />
                        <motion.div
                          className="absolute h-2 w-4 rounded-full border-b-2 border-black"
                          animate={
                            hoveredTab
                              ? { scaleY: 1.5, y: -1 }
                              : { scaleY: 1, y: 0 }
                          }
                          style={{ left: "30%", top: "60%" }}
                        />
                        <AnimatePresence>
                          {hoveredTab && (
                            <>
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                className="absolute -top-1 -right-1 h-2 w-2 text-yellow-300"
                              >
                                ✨
                              </motion.div>
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ delay: 0.1 }}
                                className="absolute -top-2 left-0 h-2 w-2 text-yellow-300"
                              >
                                ✨
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>
                      </motion.div>
                      <motion.div
                        className="absolute -bottom-1 left-1/2 h-4 w-4 -translate-x-1/2"
                        animate={
                          hoveredTab
                            ? {
                                y: [0, -4, 0],
                                transition: {
                                  duration: 0.3,
                                  repeat: Infinity,
                                  repeatType: "reverse" as const,
                                },
                              }
                            : {
                                y: [0, 2, 0],
                                transition: {
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: 0.5,
                                },
                              }
                        }
                      >
                        <div className="h-full w-full origin-center rotate-45 transform bg-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
