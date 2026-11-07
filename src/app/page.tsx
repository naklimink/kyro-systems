import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto flex-1 flex flex-col justify-center text-center">
        {/* Subtle pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-[#86868b] mx-auto mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
          <span>Simple, reliable business systems</span>
        </div>

        {/* Hero headline - Apple large confident scale */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#f5f5f7] leading-[1.08] mb-6">
          Work less. <br />
          <span className="text-[#86868b]">Run smoother.</span>
        </h1>

        {/* Crisp promise */}
        <p className="text-lg sm:text-xl text-[#86868b] max-w-xl mx-auto font-normal leading-relaxed mb-10">
          KYRO removes repetitive tasks, connects your everyday tools, and builds systems that keep your business running smoothly without the headache.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="/contact"
            className="btn-press w-full sm:w-auto px-7 py-3 rounded-full bg-[#f5f5f7] hover:bg-white text-black font-medium text-sm inline-flex items-center justify-center gap-2"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="btn-press w-full sm:w-auto px-7 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.08] text-[#f5f5f7] border border-white/[0.1] text-sm font-medium"
          >
            Explore services
          </Link>
        </div>

        {/* 3 Apple-style feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          <div className="apple-card p-6">
            <div className="text-xs font-mono text-[#86868b] uppercase mb-2">01 / Automate</div>
            <h3 className="text-lg font-medium text-[#f5f5f7] mb-2">Save 15+ hours a week</h3>
            <p className="text-sm text-[#86868b] leading-relaxed">
              We turn daily copy-pasting, lead tracking, and status emails into automatic actions.
            </p>
          </div>

          <div className="apple-card p-6">
            <div className="text-xs font-mono text-[#86868b] uppercase mb-2">02 / Connect</div>
            <h3 className="text-lg font-medium text-[#f5f5f7] mb-2">All your tools in sync</h3>
            <p className="text-sm text-[#86868b] leading-relaxed">
              Your CRM, email, calendar, and sheets update together in real time with zero errors.
            </p>
          </div>

          <div className="apple-card p-6">
            <div className="text-xs font-mono text-[#86868b] uppercase mb-2">03 / Peace of Mind</div>
            <h3 className="text-lg font-medium text-[#f5f5f7] mb-2">1 year of care included</h3>
            <p className="text-sm text-[#86868b] leading-relaxed">
              Every system comes with clear guides and 365 days of maintenance at no extra cost.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
