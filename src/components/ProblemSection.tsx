import React from "react";
import { AlertCircle, CheckCircle, Clock, ArrowRight } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      title: "Manual Copy-Pasting Across Apps",
      desc: "Team members waste 15+ hours weekly re-entering data between lead forms, email threads, CRM entries, and spreadsheets.",
    },
    {
      title: "Delayed Customer Follow-ups",
      desc: "Inquiries sit unanswered for hours or days. By the time a representative reaches out, the prospect has already hired someone else.",
    },
    {
      title: "Fragmented Tool Spaghetti",
      desc: "You subscribe to 8 SaaS tools, but none talk to each other. Your operational truth is scattered across disconnected silos.",
    },
    {
      title: "Key-Person Dependency & Errors",
      desc: "Critical workflows live entirely in employees' heads. When someone is out or leaves, operations bottleneck or break.",
    },
  ];

  const solutions = [
    {
      title: "Synchronous Automated Pipelines",
      desc: "Data streams instantaneously between capture, CRM, communication channels, and accounting with zero manual entry.",
    },
    {
      title: "Sub-Minute Automated Response",
      desc: "Intelligent response engines immediately acknowledge, qualify, and book meetings 24/7 with human-level context.",
    },
    {
      title: "Unified Infrastructure Backbone",
      desc: "Centralized webhooks, APIs, and micro-services ensure all your business tools operate as a single coordinated organism.",
    },
    {
      title: "Documented & Monitored Playbooks",
      desc: "Standard operating procedures are codified into deterministic software with automated logging and fail-safe alerts.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-black border-t border-[#1f1f1f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
            01 / System Contrast
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Businesses do not fail from lack of effort. They fail from friction.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            When your daily operations depend on frantic manual workarounds, growth becomes an unbearable tax. Here is how KYRO rebuilds your operational foundation.
          </p>
        </div>

        {/* Before vs After Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* The Friction (Before) */}
          <div className="rounded-xl border border-red-950/40 bg-gradient-to-b from-[#140a0a] to-[#0a0505] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-red-900/30">
              <div className="flex items-center gap-2 text-red-400 font-mono text-sm font-semibold">
                <AlertCircle className="w-4 h-4" />
                <span>FRAGMENTED OPERATIONS (BEFORE)</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Manual Overhead</span>
            </div>

            <div className="space-y-4">
              {problems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-black/50 border border-red-900/20 space-y-1"
                >
                  <div className="text-sm font-semibold text-neutral-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
                    {item.title}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed pl-3.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* The KYRO Infrastructure (After) */}
          <div className="rounded-xl border border-blue-900/40 bg-gradient-to-b from-[#0a1018] to-[#05080c] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-blue-900/30">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-sm font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>KYRO ENGINEERED SYSTEM (AFTER)</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/50">
                100% Reliable
              </span>
            </div>

            <div className="space-y-4">
              {solutions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-black/50 border border-blue-900/20 space-y-1 hover:border-blue-700/40 transition-colors"
                >
                  <div className="text-sm font-semibold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {item.title}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed pl-3.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
