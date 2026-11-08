"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  PixelHome,
  PixelServices,
  PixelProcess,
  PixelAbout,
  PixelContact,
  PixelMore,
} from "./icons/PixelIcons";

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
      icon: PixelHome,
      isActive: pathname === "/",
    },
    {
      name: "Services",
      href: "/services",
      icon: PixelServices,
      isActive: pathname.startsWith("/services"),
    },
    {
      name: "Process",
      href: "/how-it-works",
      icon: PixelProcess,
      isActive: pathname.startsWith("/how-it-works"),
    },
    {
      name: "About",
      href: "/about",
      icon: PixelAbout,
      isActive: pathname.startsWith("/about"),
    },
    {
      name: "Contact",
      href: "/contact",
      icon: PixelContact,
      isActive: pathname.startsWith("/contact"),
    },
  ];

  return (
    <>
      {/* Top Header: Balanced Brand Logo on Left, Quiet Button on Right */}
      <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none p-4 sm:p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* KYRO Standalone Logo (no text beside it) */}
          <div className="pointer-events-auto">
            <Link
              href="/"
              aria-label="KYRO Home"
              className="btn-press block group hover:opacity-85 transition-opacity"
            >
              <Image
                src="/brand/kyro-logo-white.png"
                alt="KYRO"
                width={36}
                height={42}
                className="w-8 sm:w-9 h-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity"
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
            className="relative flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-2xl bg-[#121318]/95 border border-white/[0.08] backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.85)]"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = item.isActive;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`btn-press group relative flex flex-col items-center justify-center min-w-[56px] sm:min-w-[64px] h-[52px] sm:h-[54px] px-2.5 sm:px-3 rounded-xl transition-colors duration-150 select-none ${
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
                className={`btn-press group relative flex flex-col items-center justify-center min-w-[56px] sm:min-w-[64px] h-[52px] sm:h-[54px] px-2.5 sm:px-3 rounded-xl transition-colors duration-150 select-none ${
                  moreOpen
                    ? "bg-[#252834] text-[#f0f2f5] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    : "text-[#8a90a0] hover:text-[#f0f2f5] hover:bg-white/[0.04]"
                }`}
              >
                <PixelMore
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
