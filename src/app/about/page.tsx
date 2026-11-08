"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Wrench, Layers, FileText, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const values = [
    {
      title: "Practicality over hype",
      desc: "We don't sell experimental buzzwords. We build useful tools that save you actual hours every day.",
      icon: Wrench,
    },
    {
      title: "Use what you have",
      desc: "You don't need to throw away your current software. We make your existing tools work better together.",
      icon: Layers,
    },
    {
      title: "Clear and documented",
      desc: "You always own your systems. We leave behind easy guides so anyone on your team can understand them.",
      icon: FileText,
    },
    {
      title: "Long-term commitment",
      desc: "We don't build and run away. Every project includes a full year of maintenance to keep everything running.",
      icon: Clock,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0d0e12] text-[#f0f2f5] flex flex-col justify-between selection:bg-[#252834] selection:text-white">
      <Navbar />

      <main className="pt-36 sm:pt-44 pb-36 sm:pb-44 px-4 sm:px-6 max-w-4xl mx-auto flex-1 w-full">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="text-xs font-mono text-[#6e7485] mb-2 uppercase tracking-wide">
            Company
          </div>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#f0f2f5] mb-4">
            About KYRO
          </h1>
          <p className="text-base text-[#9ba1b0] leading-relaxed">
            We help business owners take back their time by replacing manual tasks with dependable systems.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="p-7 sm:p-8 rounded-xl bg-[#14161c] border border-white/[0.08] mb-12 space-y-4 text-sm text-[#9ba1b0] leading-relaxed">
          <p className="text-[#f0f2f5] font-medium text-base sm:text-lg tracking-tight">
            Most businesses don&apos;t need complicated tech. They need their everyday tools to just work together.
          </p>
          <p>
            When inquiries fall through the cracks or employees spend hours manually typing the same data into multiple apps, growth feels exhausting.
          </p>
          <p>
            KYRO was built to fix that. We engineer quiet, dependable systems that operate in the background so you can focus on serving your clients and leading your team.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#14161c] border border-white/[0.08] hover:border-white/[0.14] transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1e2029] border border-white/[0.06] flex items-center justify-center text-[#9ba1b0] mb-4">
                  <Icon className="w-4 h-4 stroke-[1.5]" />
                </div>
                <h3 className="text-base font-medium text-[#f0f2f5] mb-1.5">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9ba1b0] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="p-8 rounded-xl bg-[#121318] border border-white/[0.06] text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-medium text-[#f0f2f5] mb-2">
            Want to see how KYRO can help your business?
          </h3>
          <p className="text-sm text-[#9ba1b0] mb-6">
            We&apos;d love to learn about what you&apos;re building.
          </p>
          <Link
            href="/contact"
            className="btn-press inline-flex items-center justify-center h-9 px-5 rounded-lg bg-[#f0f2f5] hover:bg-white text-[#0d0e12] text-xs font-medium transition-colors"
          >
            <span>Say hello</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-80" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
