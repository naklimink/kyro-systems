"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  PixelHome,
  PixelServices,
  PixelProcess,
  PixelAbout,
  PixelContact,
  PixelMore,
} from "./icons/PixelIcons";
import { Button } from "@/components/ui/button";

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
      {/* Top Header: Balanced Brand Logo on Left, Axis CTA Button on Right */}
      <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none p-4 sm:p-6 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* KYRO Logo without text */}
          <div className="pointer-events-auto">
            <Link
              href="/"
              aria-label="KYRO Home"
              className="block group transition-transform active:scale-95 duration-150"
            >
              <Image
                src="/brand/kyro-logo-white.png"
                alt="KYRO"
                width={38}
                height={45}
                className="w-8 sm:w-9 h-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity drop-shadow-[0_2px_12px_rgba(255,255,255,0.14)]"
                priority
              />
            </Link>
          </div>

          {/* Right Header Action Button */}
          <div className="pointer-events-auto flex items-center gap-3">
            <Link href="/contact">
              <Button
                size="sm"
                className="rounded-full px-4 h-9 bg-white text-black font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-all shadow-sm active:scale-95"
              >
                Start a project
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Bottom Floating Navigation Dock (matching the provided dock reference) */}
      <aside
        aria-label="Bottom Navigation Dock"
        className="fixed bottom-4 sm:bottom-7 left-0 right-0 z-[9999] flex justify-center px-3 sm:px-4 pointer-events-none"
      >
        <div className="pointer-events-auto">
          <nav
            aria-label="Primary Navigation"
            className="relative flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-2xl sm:rounded-[22px] bg-[#121215]/95 border border-white/[0.1] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.04]"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = item.isActive;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative flex flex-col items-center justify-center min-w-[56px] sm:min-w-[64px] h-[52px] sm:h-[54px] px-2.5 sm:px-3 rounded-xl transition-all duration-150 select-none ${
                    active
                      ? "bg-[#2c2d33] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]"
                      : "text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon
                    className={`w-[18px] h-[18px] transition-transform duration-150 ${
                      active
                        ? "text-white scale-100"
                        : "text-[#9ca3af] group-hover:text-white group-hover:scale-105"
                    }`}
                  />
                  <span
                    className={`text-[11px] font-sans font-normal tracking-tight leading-none mt-1 transition-colors ${
                      active
                        ? "text-white font-medium"
                        : "text-[#9ca3af] group-hover:text-white"
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
                className={`group relative flex flex-col items-center justify-center min-w-[56px] sm:min-w-[64px] h-[52px] sm:h-[54px] px-2.5 sm:px-3 rounded-xl transition-all duration-150 select-none ${
                  moreOpen
                    ? "bg-[#2c2d33] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]"
                    : "text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-white/[0.05]"
                }`}
              >
                <PixelMore
                  className={`w-[18px] h-[18px] transition-transform duration-150 ${
                    moreOpen
                      ? "text-white scale-100"
                      : "text-[#9ca3af] group-hover:text-white group-hover:scale-105"
                  }`}
                />
                <span
                  className={`text-[11px] font-sans font-normal tracking-tight leading-none mt-1 transition-colors ${
                    moreOpen
                      ? "text-white font-medium"
                      : "text-[#9ca3af] group-hover:text-white"
                  }`}
                >
                  More
                </span>
              </button>

              {/* Popover Dropdown Opening UPWARDS */}
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-full mb-3 right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 w-[280px] p-3.5 rounded-2xl bg-[#141417]/98 border border-white/[0.12] backdrop-blur-2xl shadow-[0_-16px_50px_rgba(0,0,0,0.85)] z-50 ring-1 ring-white/[0.05]"
                  >
                    {/* Status header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] px-1">
                      <div className="flex items-center gap-2.5">
                        <Image
                          src="/brand/kyro-logo-white.png"
                          alt="KYRO"
                          width={18}
                          height={21}
                          className="object-contain"
                        />
                        <span className="text-xs font-semibold text-white tracking-tight">
                          KYRO Systems
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Operational
                      </span>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-1 mb-3">
                      <Link
                        href="/services"
                        onClick={() => setMoreOpen(false)}
                        className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs text-[#9ca3af] hover:text-white hover:bg-white/[0.06] transition-colors"
                      >
                        <span>Workflow Automation</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                      </Link>
                      <Link
                        href="/how-it-works"
                        onClick={() => setMoreOpen(false)}
                        className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs text-[#9ca3af] hover:text-white hover:bg-white/[0.06] transition-colors"
                      >
                        <span>Engineering Process</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                      </Link>
                      <Link
                        href="/about"
                        onClick={() => setMoreOpen(false)}
                        className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs text-[#9ca3af] hover:text-white hover:bg-white/[0.06] transition-colors"
                      >
                        <span>Company & Philosophy</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                      </Link>
                    </div>

                    {/* Primary CTA button */}
                    <Link
                      href="/contact"
                      onClick={() => setMoreOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-medium text-xs shadow-md transition-all active:scale-[0.98]"
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
