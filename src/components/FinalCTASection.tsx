import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-24 sm:py-32 bg-black border-t border-[#1f1f1f] relative overflow-hidden bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#262626] text-xs font-mono text-neutral-300">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span>System Audits Open for Q1/Q2</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          Your business deserves <br />
          <span className="bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            better systems.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Let’s pinpoint the repetitive manual friction holding your business back and engineer a custom operational backbone that works for you.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-black bg-white hover:bg-neutral-200 rounded-md transition-all shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:shadow-[0_0_45px_rgba(255,255,255,0.35)]"
          >
            <span>Let’s Build Your System</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-neutral-300 bg-[#101010] hover:bg-[#161616] border border-[#262626] hover:border-neutral-500 rounded-md transition-all"
          >
            <span>See How It Works</span>
          </Link>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            No obligation initial consultation
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            Technical architecture review
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            Clear operational roadmap
          </span>
        </div>
      </div>
    </section>
  );
}
