"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Exact outline icons matching the reference dock image
function DockHomeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10.5z" />
    </svg>
  );
}

function DockServicesIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function DockProcessIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function DockAboutIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </svg>
  );
}

function DockContactIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2H2v10l9.29 9.29a2.41 2.41 0 0 0 3.42 0l6.58-6.58a2.41 2.41 0 0 0 0-3.42L12 2Z" />
      <circle cx="7" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );
}

function DockMoreIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close "More" popover on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMoreOpen(false);
      }
    }
    if (moreOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [moreOpen]);

  // Close "More" on route change
  useEffect(() => {
    setMoreOpen(false);
  }, [pathname]);

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: DockHomeIcon,
      isActive: pathname === "/",
    },
    {
      name: "Services",
      href: "/services",
      icon: DockServicesIcon,
      isActive: pathname.startsWith("/services"),
    },
    {
      name: "Process",
      href: "/how-it-works",
      icon: DockProcessIcon,
      isActive: pathname.startsWith("/how-it-works"),
    },
    {
      name: "About",
      href: "/about",
      icon: DockAboutIcon,
      isActive: pathname.startsWith("/about"),
    },
    {
      name: "Contact",
      href: "/contact",
      icon: DockContactIcon,
      isActive: pathname.startsWith("/contact"),
    },
  ];

  return (
    <>
      {/* Top Header: Prominent Brand Logo on Left, Quiet CTA Button on Right */}
      <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none p-4 sm:p-6 bg-gradient-to-b from-[#0d0e12]/90 via-[#0d0e12]/60 to-transparent">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* KYRO Standalone Logo (Enlarged per user instruction, no text beside it) */}
          <div className="pointer-events-auto">
            <Link
              href="/"
              aria-label="KYRO Home"
              className="btn-press block group hover:opacity-90 transition-opacity"
            >
              <Image
                src="/brand/kyro-logo-white.png"
                alt="KYRO"
                width={54}
                height={63}
                className="w-12 sm:w-14 h-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity drop-shadow-[0_2px_12px_rgba(255,255,255,0.06)]"
                priority
              />
            </Link>
          </div>

          {/* Right Action Button - Quiet craft */}
          <div className="pointer-events-auto flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-press inline-flex items-center justify-center h-8 sm:h-9 px-3.5 sm:px-4 rounded-lg bg-[#f0f2f5] hover:bg-white text-[#0d0e12] font-medium text-xs transition-colors shadow-xs"
            >
              Start a project
            </Link>
          </div>
        </div>
      </header>

      {/* Bottom Floating Navigation Dock (matching reference dock image) */}
      <aside
        aria-label="Bottom Navigation Dock"
        className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-[9999] flex justify-center px-3 sm:px-4 pointer-events-none"
      >
        <div className="pointer-events-auto">
          <nav
            aria-label="Primary Navigation"
            className="relative flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-[#121318]/95 border border-white/[0.08] backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.85)]"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = item.isActive;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`btn-press group relative flex flex-col items-center justify-center min-w-[52px] sm:min-w-[64px] h-[52px] sm:h-[54px] px-2.5 sm:px-3 rounded-2xl transition-colors duration-150 select-none ${
                    active
                      ? "bg-[#252834] text-[#f0f2f5] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                      : "text-[#8a90a0] hover:text-[#f0f2f5] hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon
                    className={`w-[18px] h-[18px] transition-transform duration-150 ${
                      active
                        ? "text-[#f0f2f5]"
                        : "text-[#8a90a0] group-hover:text-[#f0f2f5]"
                    }`}
                  />
                  <span
                    className={`text-[11px] font-sans font-normal tracking-tight leading-none mt-1 transition-colors ${
                      active
                        ? "text-[#f0f2f5] font-medium"
                        : "text-[#8a90a0] group-hover:text-[#f0f2f5]"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}

            {/* More Button */}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen(!moreOpen)}
                aria-label="More navigation options"
                aria-expanded={moreOpen}
                className={`btn-press group relative flex flex-col items-center justify-center min-w-[52px] sm:min-w-[64px] h-[52px] sm:h-[54px] px-2.5 sm:px-3 rounded-2xl transition-colors duration-150 select-none ${
                  moreOpen
                    ? "bg-[#252834] text-[#f0f2f5] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    : "text-[#8a90a0] hover:text-[#f0f2f5] hover:bg-white/[0.04]"
                }`}
              >
                <DockMoreIcon
                  className={`w-[18px] h-[18px] transition-transform duration-150 ${
                    moreOpen
                      ? "text-[#f0f2f5]"
                      : "text-[#8a90a0] group-hover:text-[#f0f2f5]"
                  }`}
                />
                <span
                  className={`text-[11px] font-sans font-normal tracking-tight leading-none mt-1 transition-colors ${
                    moreOpen
                      ? "text-[#f0f2f5] font-medium"
                      : "text-[#8a90a0] group-hover:text-[#f0f2f5]"
                  }`}
                >
                  More
                </span>
              </button>

              {/* Popover Dropdown Opening UPWARDS */}
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-full mb-3 right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 w-[270px] p-3 rounded-xl bg-[#14161c] border border-white/[0.08] backdrop-blur-xl shadow-[0_-12px_40px_rgba(0,0,0,0.85)] z-50"
                  >
                    {/* Status header with static status dot */}
                    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.06] px-1">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/brand/kyro-logo-white.png"
                          alt="KYRO"
                          width={16}
                          height={19}
                          className="object-contain"
                        />
                        <span className="text-xs font-medium text-[#f0f2f5] tracking-tight">
                          KYRO Systems
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#6e7485]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        SYS:ONLINE
                      </span>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-1 mb-2.5">
                      <Link
                        href="/services"
                        onClick={() => setMoreOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-[#9ba1b0] hover:text-[#f0f2f5] hover:bg-white/[0.04] transition-colors"
                      >
                        <span>Workflow Automation</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                      </Link>
                      <Link
                        href="/how-it-works"
                        onClick={() => setMoreOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-[#9ba1b0] hover:text-[#f0f2f5] hover:bg-white/[0.04] transition-colors"
                      >
                        <span>Engineering Process</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                      </Link>
                      <Link
                        href="/about"
                        onClick={() => setMoreOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-[#9ba1b0] hover:text-[#f0f2f5] hover:bg-white/[0.04] transition-colors"
                      >
                        <span>Company & Philosophy</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                      </Link>
                    </div>

                    {/* Primary CTA button */}
                    <Link
                      href="/contact"
                      onClick={() => setMoreOpen(false)}
                      className="btn-press flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-[#f0f2f5] hover:bg-white text-[#0d0e12] font-medium text-xs transition-colors"
                    >
                      <span>Start a project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
