"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Terminal, Play, ArrowDown, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0d0e12] text-[#f0f2f5] flex flex-col justify-between selection:bg-[#252834] selection:text-white">
      <Navbar />

      <main className="pt-28 sm:pt-36 pb-32 px-4 sm:px-6 max-w-5xl mx-auto flex-1 w-full">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#f0f2f5] leading-[1.06] mb-6">
            Work less. <br />
            <span className="text-[#9ba1b0]">Run smoother.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#9ba1b0] max-w-xl mx-auto font-normal leading-relaxed mb-8">
            KYRO removes repetitive tasks, connects your everyday tools, and builds systems that keep your business running smoothly without the headache.
          </p>

          <div className="flex flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="btn-press inline-flex items-center justify-center h-10 px-5 rounded-lg bg-[#f0f2f5] hover:bg-white text-[#0d0e12] text-xs sm:text-sm font-medium transition-colors shadow-xs"
            >
              <span>Start a project</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-80" />
            </Link>
            <Link
              href="/services"
              className="btn-press inline-flex items-center justify-center h-10 px-5 rounded-lg bg-[#14161c] hover:bg-[#1e2029] text-[#f0f2f5] border border-white/[0.08] text-xs sm:text-sm font-medium transition-colors"
            >
              Explore services
            </Link>
          </div>
        </div>

        {/* Real Product Moment: Live Coded Automation Pipeline Preview */}
        <section aria-label="Automation Pipeline Preview" className="mb-20">
          <div className="surface-raised rounded-xl overflow-hidden border border-white/[0.08]">
            {/* Window Topbar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#0f1015] text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                <span className="font-mono text-[#f0f2f5] text-[11px] font-medium tracking-tight">
                  pipeline_01_lead_intake.kyro
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-mono text-[#6e7485]">
                <span>LATENCY: 42ms</span>
                <span className="hidden sm:inline">STATUS: 200 OK</span>
              </div>
            </div>

            {/* Pipeline Canvas Grid */}
            <div className="p-5 sm:p-7 bg-[#111319]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                {/* Node 1: Inbound Webhook */}
                <div className="p-4 rounded-lg bg-[#161820] border border-white/[0.06] flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#6e7485] text-[11px]">01 / TRIGGER</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      LIVE
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#f0f2f5] mb-1">Inbound Webhook</div>
                    <div className="text-xs text-[#9ba1b0]">Form submission captured from landing page</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#0d0e12] border border-white/[0.04] font-mono text-[11px] text-[#6e7485] space-y-0.5">
                    <div>lead: &quot;Aero Logistics&quot;</div>
                    <div>email: &quot;ops@aerolog.com&quot;</div>
                  </div>
                </div>

                {/* Node 2: Data Transformation */}
                <div className="p-4 rounded-lg bg-[#161820] border border-white/[0.06] flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#6e7485] text-[11px]">02 / PROCESS</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      38ms
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#f0f2f5] mb-1">Verify &amp; Enrich</div>
                    <div className="text-xs text-[#9ba1b0]">Deduplicate record and assign lead priority</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#0d0e12] border border-white/[0.04] font-mono text-[11px] text-[#6e7485] space-y-0.5">
                    <div>verified: true</div>
                    <div>score: 94 / Tier-A</div>
                  </div>
                </div>

                {/* Node 3: Multi-Tool Dispatch */}
                <div className="p-4 rounded-lg bg-[#161820] border border-white/[0.06] flex flex-col justify-between space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#6e7485] text-[11px]">03 / DISPATCH</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      SYNCED
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#f0f2f5] mb-1">CRM &amp; Team Alert</div>
                    <div className="text-xs text-[#9ba1b0]">Create deals, notify Slack, send calendar invite</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#0d0e12] border border-white/[0.04] font-mono text-[11px] text-[#6e7485] space-y-0.5">
                    <div>hubspot: #HS-9481</div>
                    <div>slack: notified #sales</div>
                  </div>
                </div>
              </div>

              {/* Execution telemetry line */}
              <div className="mt-4 pt-3 border-t border-white/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-[#6e7485]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>EXECUTION: COMPLETED IN 42ms · 0 DROPPED PACKETS</span>
                </div>
                <span>AUDIT TRAIL: ENCRYPTED &amp; LOGGED</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid with Rhythm (Varied proportions) */}
        <section aria-label="Core Capabilities" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: Wide primary focus (col-span-2) */}
            <div className="md:col-span-2 p-6 sm:p-7 rounded-xl bg-[#14161c] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-[#6e7485] mb-3">01. AUTOMATE</div>
                <h3 className="text-xl font-medium text-[#f0f2f5] mb-2">Save 15+ hours a week</h3>
                <p className="text-sm text-[#9ba1b0] leading-relaxed max-w-lg mb-6">
                  We turn daily copy-pasting, lead tracking, and status emails into automatic background actions. Everything updates in milliseconds without human friction.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/[0.04]">
                <div>
                  <div className="text-xs text-[#6e7485] mb-1">Manual operations</div>
                  <div className="text-sm font-medium text-[#9ba1b0]">6 disconnected apps · 45m/lead</div>
                </div>
                <div>
                  <div className="text-xs text-[#3b82f6] mb-1">With KYRO</div>
                  <div className="text-sm font-medium text-[#f0f2f5]">1 unified flow · &lt;60s response</div>
                </div>
              </div>
            </div>

            {/* Card 2: Tool Sync */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#14161c] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-[#6e7485] mb-3">02. CONNECT</div>
                <h3 className="text-xl font-medium text-[#f0f2f5] mb-2">All tools in sync</h3>
                <p className="text-sm text-[#9ba1b0] leading-relaxed">
                  Your CRM, email, calendar, and spreadsheets update together in real time with zero desynchronization or manual imports.
                </p>
              </div>
              <div className="pt-4 text-xs font-mono text-[#6e7485]">
                Gmail · HubSpot · Notion · Stripe · Sheets
              </div>
            </div>

            {/* Card 3: Wide Full Row: Peace of mind */}
            <div className="md:col-span-3 p-6 sm:p-7 rounded-xl bg-[#14161c] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="text-[11px] font-mono text-[#6e7485] mb-2">03. PEACE OF MIND</div>
                <h3 className="text-lg font-medium text-[#f0f2f5] mb-1">1 year of care included</h3>
                <p className="text-sm text-[#9ba1b0] leading-relaxed">
                  Every system comes with clear step-by-step guides for your team and 365 days of proactive maintenance at no extra cost.
                </p>
              </div>
              <Link
                href="/how-it-works"
                className="btn-press inline-flex items-center text-xs font-medium text-[#f0f2f5] hover:text-white px-4 py-2 rounded-lg bg-[#1e2029] border border-white/[0.06] transition-colors shrink-0"
              >
                <span>Read engineering process</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
              </Link>
            </div>
          </div>
        </section>

        {/* System Telemetry Row */}
        <section aria-label="System Metrics" className="p-6 rounded-xl bg-[#121318] border border-white/[0.06]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <div className="text-2xl font-mono text-[#f0f2f5] mb-1">99.9%</div>
              <div className="text-xs text-[#6e7485]">Automation reliability</div>
            </div>
            <div>
              <div className="text-2xl font-mono text-[#f0f2f5] mb-1">&lt;60s</div>
              <div className="text-xs text-[#6e7485]">Lead response latency</div>
            </div>
            <div>
              <div className="text-2xl font-mono text-[#f0f2f5] mb-1">0</div>
              <div className="text-xs text-[#6e7485]">Manual copy-paste errors</div>
            </div>
            <div>
              <div className="text-2xl font-mono text-[#f0f2f5] mb-1">365d</div>
              <div className="text-xs text-[#6e7485]">Included system care</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
