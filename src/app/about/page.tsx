import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — KYRO",
  description: "Why we believe in practical systems over gimmicks.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Practicality over hype",
      desc: "We don't sell experimental buzzwords. We build useful tools that save you actual hours every day.",
    },
    {
      title: "Use what you have",
      desc: "You don't need to throw away your current software. We make your existing tools work better together.",
    },
    {
      title: "Clear and documented",
      desc: "You always own your systems. We leave behind easy guides so anyone on your team can understand them.",
    },
    {
      title: "Long-term commitment",
      desc: "We don't build and run away. Every project includes a full year of maintenance to keep everything running.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto flex-1">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#f5f5f7] mb-4">
            About KYRO
          </h1>
          <p className="text-base sm:text-lg text-[#86868b] leading-relaxed max-w-xl mx-auto">
            We help business owners take back their time by replacing manual tasks with dependable systems.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="apple-card p-8 sm:p-10 mb-12 space-y-4 text-sm sm:text-base text-[#86868b] leading-relaxed">
          <p className="text-[#f5f5f7] font-medium text-lg">
            Most businesses don't need complicated tech. They need their everyday tools to just work together.
          </p>
          <p>
            When inquiries fall through the cracks or employees spend hours manually typing the same data into multiple apps, growth feels exhausting.
          </p>
          <p>
            KYRO was built to fix that. We engineer clear, quiet systems that operate in the background so you can focus on serving your clients and leading your team.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {values.map((val, idx) => (
            <div key={idx} className="apple-card p-6">
              <h3 className="text-base font-medium text-[#f5f5f7] mb-2">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-white/[0.06]">
          <h3 className="text-xl font-medium text-[#f5f5f7] mb-3">
            Want to see how KYRO can help your business?
          </h3>
          <p className="text-sm text-[#86868b] mb-6">
            We’d love to learn about what you're building.
          </p>
          <Link
            href="/contact"
            className="btn-press px-6 py-2.5 rounded-full bg-[#f5f5f7] hover:bg-white text-black font-medium text-xs inline-flex items-center gap-2"
          >
            <span>Say hello</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
