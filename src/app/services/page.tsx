"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Workflow, Link2, BellRing, Bot, Globe, LifeBuoy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Workflow Automation",
      promise: "Stop wasting hours on repetitive busywork.",
      desc: "We automate client intake, notifications, invoice creation, and data entry across your apps.",
      icon: Workflow,
      category: "Operations",
    },
    {
      title: "Tool & CRM Connections",
      promise: "Keep all your software speaking the same language.",
      desc: "We link your email, CRM, spreadsheets, and calendar so you never have to re-type information.",
      icon: Link2,
      category: "Integration",
    },
    {
      title: "Instant Lead Follow-Up",
      promise: "Never lose a customer to slow response times.",
      desc: "Inquiries are captured, qualified, and followed up within 60 seconds via automated email and SMS.",
      icon: BellRing,
      category: "Response",
    },
    {
      title: "Smart Business Assistants",
      promise: "Answers questions using your real company knowledge.",
      desc: "Custom assistants that help your team answer client questions and extract information from documents.",
      icon: Bot,
      category: "Intelligence",
    },
    {
      title: "Fast Web Solutions",
      promise: "A clean digital presence built for speed and results.",
      desc: "Modern, high-speed websites and portals designed to turn visitors into booked clients.",
      icon: Globe,
      category: "Engineering",
    },
    {
      title: "Complete System Care",
      promise: "Full documentation and 365 days of included support.",
      desc: "Step-by-step guides for your team, plus proactive maintenance so your systems never break.",
      icon: LifeBuoy,
      category: "Support",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0d0e12] text-[#f0f2f5] flex flex-col justify-between selection:bg-[#252834] selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-32 px-4 sm:px-6 max-w-5xl mx-auto flex-1 w-full">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono text-[#6e7485] mb-2 uppercase tracking-wide">
            Capabilities
          </div>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#f0f2f5] mb-4">
            Services
          </h1>
          <p className="text-base text-[#9ba1b0] leading-relaxed">
            Practical systems designed to solve real business bottlenecks. Nothing complicated.
          </p>
        </div>

        {/* 2-column Grid with Nested Radii & Quiet Chrome */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-[#14161c] border border-white/[0.08] flex flex-col justify-between hover:border-white/[0.14] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#1e2029] border border-white/[0.06] flex items-center justify-center text-[#9ba1b0]">
                      <Icon className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <span className="text-[11px] font-mono text-[#6e7485]">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-[#f0f2f5] mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs text-[#3b82f6] font-medium mb-3">
                    {item.promise}
                  </div>
                  <p className="text-sm text-[#9ba1b0] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quiet Callout */}
        <div className="p-8 rounded-xl bg-[#121318] border border-white/[0.06] text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-medium text-[#f0f2f5] mb-2">
            Have a specific workflow in mind?
          </h3>
          <p className="text-sm text-[#9ba1b0] mb-6">
            Tell us what daily tasks or tools feel slow, disconnected, or repetitive.
          </p>
          <Link
            href="/contact"
            className="btn-press inline-flex items-center justify-center h-9 px-5 rounded-lg bg-[#f0f2f5] hover:bg-white text-[#0d0e12] text-xs font-medium transition-colors"
          >
            <span>Talk to us</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-80" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
