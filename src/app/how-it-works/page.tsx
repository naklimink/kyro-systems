"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, PencilRuler, Blocks, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We look at how your business runs today and spot the repetitive tasks eating up your time.",
      icon: Compass,
      timeframe: "Week 1",
    },
    {
      num: "02",
      title: "Design",
      desc: "We map out a simple blueprint showing exactly what we will automate and connect.",
      icon: PencilRuler,
      timeframe: "Week 2",
    },
    {
      num: "03",
      title: "Build & Connect",
      desc: "We set up the automations, test everything carefully, and link your existing tools together.",
      icon: Blocks,
      timeframe: "Weeks 3–4",
    },
    {
      num: "04",
      title: "Support",
      desc: "We give you easy guides for your team and look after the system for 1 full year at no extra charge.",
      icon: HeartHandshake,
      timeframe: "365 Days",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0d0e12] text-[#f0f2f5] flex flex-col justify-between selection:bg-[#252834] selection:text-white">
      <Navbar />

      <main className="pt-36 sm:pt-44 pb-36 sm:pb-44 px-4 sm:px-6 max-w-4xl mx-auto flex-1 w-full">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="text-xs font-mono text-[#6e7485] mb-2 uppercase tracking-wide">
            Process
          </div>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#f0f2f5] mb-4">
            How it works
          </h1>
          <p className="text-base text-[#9ba1b0] leading-relaxed">
            Four simple steps. Clear timelines. Zero surprises.
          </p>
        </div>

        {/* 4-Step Engineering Timeline */}
        <div className="space-y-3 mb-16">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="p-6 sm:p-7 rounded-xl bg-[#14161c] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center gap-5 hover:border-white/[0.14] transition-colors"
              >
                <div className="flex items-center gap-4 sm:w-24 shrink-0">
                  <span className="font-mono text-2xl font-light text-[#6e7485]">
                    {st.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#1e2029] border border-white/[0.06] flex items-center justify-center text-[#9ba1b0]">
                    <Icon className="w-4 h-4 stroke-[1.5]" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-medium text-[#f0f2f5]">
                      {st.title}
                    </h3>
                    <span className="text-[10px] font-mono text-[#6e7485] border border-white/[0.06] px-2 py-0.5 rounded">
                      {st.timeframe}
                    </span>
                  </div>
                  <p className="text-sm text-[#9ba1b0] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="p-8 rounded-xl bg-[#121318] border border-white/[0.06] text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-medium text-[#f0f2f5] mb-2">
            Ready to simplify your everyday work?
          </h3>
          <p className="text-sm text-[#9ba1b0] mb-6">
            Let&apos;s start with a friendly, no-pressure chat about your operations.
          </p>
          <Link
            href="/contact"
            className="btn-press inline-flex items-center justify-center h-9 px-5 rounded-lg bg-[#f0f2f5] hover:bg-white text-[#0d0e12] text-xs font-medium transition-colors"
          >
            <span>Get started</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-80" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
