"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Box,
  Workflow,
  BookOpen,
  Mail,
  MoreHorizontal,
  ArrowRight,
} from "lucide-react";

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
      icon: Home,
      isActive: pathname === "/",
    },
    {
      name: "Services",
      href: "/services",
      icon: Box,
      isActive: pathname.startsWith("/services"),
    },
    {
      name: "Process",
      href: "/how-it-works",
      icon: Workflow,
      isActive: pathname.startsWith("/how-it-works"),
    },
    {
      name: "About",
      href: "/about",
      icon: BookOpen,
      isActive: pathname.startsWith("/about"),
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Mail,
      isActive: pathname.startsWith("/contact"),
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none p-3 sm:p-5">
      <div className="max-w-6xl mx-auto flex items-center justify-center md:justify-between relative">
        {/* Left Brand Badge (Desktop) */}
        <div className="pointer-events-auto hidden md:flex items-center">
          <Link
            href="/"
            className="btn-press flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#0f0f11]/85 border border-white/[0.08] backdrop-blur-xl hover:border-white/20 transition-all shadow-lg"
          >
            <Image
              src="/brand/kyro-logo-white.png"
              alt="KYRO"
              width={16}
              height={19}
              className="object-contain opacity-95"
              priority
            />
            <span className="font-semibold text-xs tracking-tight text-[#f5f5f7]">
              KYRO
            </span>
          </Link>
        </div>

        {/* Center: The Floating Deck / Dock */}
        <div className="pointer-events-auto mx-auto md:absolute md:left-1/2 md:-translate-x-1/2">
          <nav
            aria-label="Primary Navigation"
            className="relative flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-2xl bg-[#0f0f11]/92 border border-white/[0.08] backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = item.isActive;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`btn-press group relative flex flex-col items-center justify-center min-w-[50px] sm:min-w-[62px] h-[48px] sm:h-[52px] px-2 rounded-xl transition-all duration-150 select-none ${
                    active
                      ? "bg-[#333336] text-white shadow-sm"
                      : "text-[#8e8e93] hover:text-[#f5f5f7] hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-150 ${
                      active
                        ? "text-white"
                        : "text-[#8e8e93] group-hover:text-[#f5f5f7] group-hover:scale-105"
                    }`}
                    strokeWidth={1.8}
                  />
                  <span
                    className={`text-[10px] sm:text-[11px] font-medium tracking-tight leading-none mt-1 transition-colors ${
                      active
                        ? "text-white"
                        : "text-[#8e8e93] group-hover:text-[#f5f5f7]"
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
                className={`btn-press group relative flex flex-col items-center justify-center min-w-[50px] sm:min-w-[62px] h-[48px] sm:h-[52px] px-2 rounded-xl transition-all duration-150 select-none ${
                  moreOpen
                    ? "bg-[#333336] text-white shadow-sm"
                    : "text-[#8e8e93] hover:text-[#f5f5f7] hover:bg-white/[0.05]"
                }`}
              >
                <MoreHorizontal
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-150 ${
                    moreOpen
                      ? "text-white"
                      : "text-[#8e8e93] group-hover:text-[#f5f5f7] group-hover:scale-105"
                  }`}
                  strokeWidth={1.8}
                />
                <span
                  className={`text-[10px] sm:text-[11px] font-medium tracking-tight leading-none mt-1 transition-colors ${
                    moreOpen
                      ? "text-white"
                      : "text-[#8e8e93] group-hover:text-[#f5f5f7]"
                  }`}
                >
                  More
                </span>
              </button>

              {/* Popover Dropdown */}
              {moreOpen && (
                <div className="absolute top-full mt-2.5 right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 w-[270px] p-3 rounded-2xl bg-[#121214]/95 border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] z-50">
                  {/* Status header */}
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.06] px-1">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/brand/kyro-logo-white.png"
                        alt="KYRO"
                        width={14}
                        height={16}
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
                  <div className="space-y-1 mb-2.5">
                    <Link
                      href="/services"
                      onClick={() => setMoreOpen(false)}
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-[#86868b] hover:text-white hover:bg-white/[0.05] transition-colors"
                    >
                      <span>Workflow Automation</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                    </Link>
                    <Link
                      href="/how-it-works"
                      onClick={() => setMoreOpen(false)}
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-[#86868b] hover:text-white hover:bg-white/[0.05] transition-colors"
                    >
                      <span>Engineering Process</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setMoreOpen(false)}
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-[#86868b] hover:text-white hover:bg-white/[0.05] transition-colors"
                    >
                      <span>Company & Philosophy</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                    </Link>
                  </div>

                  {/* Primary CTA button */}
                  <Link
                    href="/contact"
                    onClick={() => setMoreOpen(false)}
                    className="btn-press flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-white hover:bg-[#f5f5f7] text-black font-medium text-xs shadow-md transition-all"
                  >
                    <span>Start a project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {/* Email contact */}
                  <div className="mt-2 pt-2 border-t border-white/[0.06] text-center">
                    <a
                      href="mailto:contact@kyrosystems.com"
                      className="text-[11px] text-[#86868b] hover:text-white transition-colors"
                    >
                      contact@kyrosystems.com
                    </a>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Right CTA (Desktop) */}
        <div className="pointer-events-auto hidden md:flex items-center">
          <Link
            href="/contact"
            className="btn-press text-xs font-medium text-black bg-[#f5f5f7] hover:bg-white px-3.5 py-1.5 rounded-full transition-all shadow-sm"
          >
            Start a project
          </Link>
        </div>
      </div>
    </header>
  );
}
