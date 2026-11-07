"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const services = [
    { name: "Workflow Automation", href: "/services#automation" },
    { name: "AI Business Assistants", href: "/services#assistants" },
    { name: "Lead Pipeline Systems", href: "/services#lead-systems" },
    { name: "CRM & Tool Integrations", href: "/services#integrations" },
    { name: "Customer Comms Automation", href: "/services#communications" },
    { name: "Digital Infrastructure", href: "/services#infrastructure" },
  ];

  const navigation = [
    { name: "Homepage", href: "/" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About KYRO", href: "/#about" },
    { name: "Start a Project", href: "/contact" },
  ];

  return (
    <footer className="border-t border-[#1f1f1f] bg-black text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#101010] border border-[#262626] rounded-lg">
                <Image
                  src="/brand/kyro-logo-white.png"
                  alt="KYRO logo mark"
                  width={20}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="font-mono text-xl font-bold tracking-tight text-white">
                KYRO<span className="text-[#3b82f6]">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-md">
              KYRO engineers reliable operational infrastructure for growing businesses.
              We eliminate repetitive manual work, connect fragmented tools, and build intelligent automation systems that operate without friction.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All Systems Operational · Engineering Better Business Flow</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-mono mb-4">
              Systems & Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture / Company Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-mono mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {currentYear} KYRO Systems Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Engineering Practical Automation</span>
            <span className="text-neutral-700">|</span>
            <Link href="/contact" className="hover:text-neutral-300 transition-colors">
              Project Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
