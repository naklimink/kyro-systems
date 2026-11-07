import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How It Works — KYRO",
  description: "A clean, predictable 4-step process to get your business running on better systems.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We look at how your business runs today and spot the repetitive tasks eating up your time.",
    },
    {
      num: "02",
      title: "Design",
      desc: "We map out a simple blueprint showing exactly what we will automate and connect.",
    },
    {
      num: "03",
      title: "Build & Connect",
      desc: "We set up the automations, test everything carefully, and link your existing tools together.",
    },
    {
      num: "04",
      title: "Support",
      desc: "We give you easy guides for your team and look after the system for 1 full year at no extra charge.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto flex-1">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#f5f5f7] mb-4">
            How It Works
          </h1>
          <p className="text-base sm:text-lg text-[#86868b] leading-relaxed">
            Four simple steps. Clear timelines. Zero surprises.
          </p>
        </div>

        {/* Clean minimal timeline */}
        <div className="space-y-4 mb-16">
          {steps.map((st) => (
            <div
              key={st.num}
              className="apple-card p-6 flex flex-col sm:flex-row sm:items-center gap-5"
            >
              <span className="font-mono text-2xl font-light text-[#86868b] sm:w-12">
                {st.num}
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-[#f5f5f7] mb-1">
                  {st.title}
                </h3>
                <p className="text-sm text-[#86868b] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-white/[0.06]">
          <h3 className="text-xl font-medium text-[#f5f5f7] mb-3">
            Ready to simplify your everyday work?
          </h3>
          <p className="text-sm text-[#86868b] mb-6">
            Let's start with a friendly, no-pressure chat about your operations.
          </p>
          <Link
            href="/contact"
            className="btn-press px-6 py-2.5 rounded-full bg-[#f5f5f7] hover:bg-white text-black font-medium text-xs inline-flex items-center gap-2"
          >
            <span>Get started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
