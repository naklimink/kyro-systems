"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Layers, Cpu, Database, CheckCircle2, Terminal } from "lucide-react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"lead" | "ops" | "crm">("lead");

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#262626] text-xs font-mono text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
            <span className="text-neutral-400">KYRO Operating Engine</span>
            <span className="text-neutral-600">/</span>
            <span className="text-blue-400">Reliable Business Systems</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Make your business run on <br />
            <span className="bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              better systems.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Connect your tools. Automate repetitive work. Build intelligent systems
            that help your business operate with precision and scale without chaos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-black bg-white hover:bg-neutral-200 rounded-md transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-neutral-300 bg-[#101010] hover:bg-[#161616] border border-[#262626] hover:border-neutral-500 rounded-md transition-all"
            >
              <span>Explore Our Systems</span>
            </Link>
          </div>

          {/* Trust bullet line */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              Documented Playbooks
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              Custom Workflow Engineering
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              1 Year Included Maintenance
            </span>
          </div>
        </div>

        {/* Technical Architecture Hero Visual */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
          <div className="rounded-xl border border-[#262626] bg-[#0c0c0c] shadow-2xl overflow-hidden">
            {/* Window bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#121212] border-b border-[#262626]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#262626]" />
                <div className="w-3 h-3 rounded-full bg-[#262626]" />
                <div className="w-3 h-3 rounded-full bg-[#262626]" />
                <span className="ml-2 font-mono text-xs text-neutral-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  kyro-core-pipeline.engine
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("lead")}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                    activeTab === "lead"
                      ? "bg-blue-950/80 text-blue-300 border border-blue-800/60"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Pipeline: Lead Flow
                </button>
                <button
                  onClick={() => setActiveTab("ops")}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                    activeTab === "ops"
                      ? "bg-blue-950/80 text-blue-300 border border-blue-800/60"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Pipeline: Operations
                </button>
              </div>
            </div>

            {/* Architecture Flow Diagram */}
            <div className="p-6 sm:p-10 bg-gradient-to-b from-[#0a0a0a] to-[#040404]">
              {/* Dynamic steps grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                {/* Node 1 */}
                <div className="bg-[#121212] border border-[#262626] rounded-lg p-4 relative group hover:border-blue-500/50 transition-all">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-1">
                    01 · INGESTION
                  </div>
                  <div className="font-semibold text-sm text-white mb-1">
                    Lead Ingestion
                  </div>
                  <div className="text-xs text-neutral-400 leading-snug">
                    Webhooks, forms, phone & WhatsApp capture.
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/50 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Listener
                  </div>
                </div>

                {/* Node 2 */}
                <div className="bg-[#121212] border border-[#262626] rounded-lg p-4 relative group hover:border-blue-500/50 transition-all">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-1">
                    02 · INTELLIGENCE
                  </div>
                  <div className="font-semibold text-sm text-white mb-1">
                    AI Qualification
                  </div>
                  <div className="text-xs text-neutral-400 leading-snug">
                    Context enrichment, intent scoring & parsing.
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-blue-400 bg-blue-950/40 px-2 py-0.5 rounded border border-blue-900/50 w-fit">
                    <Cpu className="w-2.5 h-2.5" />
                    Confidence: 99.4%
                  </div>
                </div>

                {/* Node 3 */}
                <div className="bg-[#121212] border border-[#262626] rounded-lg p-4 relative group hover:border-blue-500/50 transition-all">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-1">
                    03 · ROUTING
                  </div>
                  <div className="font-semibold text-sm text-white mb-1">
                    Process Engine
                  </div>
                  <div className="text-xs text-neutral-400 leading-snug">
                    Rule verification, task allocation & validation.
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-[#262626] w-fit">
                    Latency &lt; 40ms
                  </div>
                </div>

                {/* Node 4 */}
                <div className="bg-[#121212] border border-[#262626] rounded-lg p-4 relative group hover:border-blue-500/50 transition-all">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-1">
                    04 · SYNC
                  </div>
                  <div className="font-semibold text-sm text-white mb-1">
                    CRM Integration
                  </div>
                  <div className="text-xs text-neutral-400 leading-snug">
                    HubSpot, Notion, Sheets & Postgres instant sync.
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-[#262626] w-fit">
                    <Database className="w-2.5 h-2.5" />
                    Bi-directional
                  </div>
                </div>

                {/* Node 5 */}
                <div className="bg-[#121212] border border-[#262626] rounded-lg p-4 relative group hover:border-blue-500/50 transition-all">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-1">
                    05 · EXECUTION
                  </div>
                  <div className="font-semibold text-sm text-white mb-1">
                    Instant Dispatch
                  </div>
                  <div className="text-xs text-neutral-400 leading-snug">
                    Personalized SMS/Email & calendar invite.
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/50 w-fit">
                    Follow-up: 30s
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-6 pt-4 border-t border-[#1f1f1f] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-neutral-400">Architecture: Deterministic & Scalable</span>
                  <span>·</span>
                  <span className="text-emerald-400 font-semibold">Zero Hand-offs Dropped</span>
                </div>
                <div className="text-neutral-400">
                  Engineering by <span className="text-white font-medium">KYRO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
