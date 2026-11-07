import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  Compass, 
  FileCode2, 
  Wrench, 
  Unplug, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "How It Works — The KYRO Client Journey",
  description:
    "Learn the 5-stage engineering methodology KYRO uses to discover friction, design architectures, build systems, connect tools, and provide 1-year maintenance.",
};

export default function HowItWorksPage() {
  const journey = [
    {
      step: "01",
      name: "Discover & Friction Audit",
      timeframe: "Days 1–3",
      icon: Compass,
      summary:
        "We conduct a deep operational review of your daily workflows, shadowing your team to identify where hours are lost to repetitive manual tasks.",
      activities: [
        "Audit existing tool stack (CRM, email, database, accounting)",
        "Map manual data hand-offs and error bottlenecks",
        "Calculate potential operational hours saved",
        "Define concrete ROI target and project boundaries",
      ],
      output: "Friction Diagnostic Report & System Scope",
    },
    {
      step: "02",
      name: "Architecture & System Design",
      timeframe: "Days 4–7",
      icon: FileCode2,
      summary:
        "Before writing any code, we draft the complete engineering blueprint. Every webhook endpoint, data payload schema, fail-safe trigger, and fallback is designed upfront.",
      activities: [
        "Data schema definition and field mappings",
        "Visual flowchart of conditional branches and logic",
        "Selection of reliable API connectors and webhooks",
        "Security, permissions, and credential architecture",
      ],
      output: "Approved Technical Architecture Specification",
    },
    {
      step: "03",
      name: "Custom Engineering & Implementation",
      timeframe: "Weeks 2–3",
      icon: Wrench,
      summary:
        "Our engineers build your custom automation pipelines, AI assistant prompt frameworks, database synchronization scripts, and error-handling routines in an isolated staging environment.",
      activities: [
        "Development of deterministic webhook listeners",
        "AI assistant knowledge base retrieval indexing",
        "Custom integration middleware and queue workers",
        "Staging tests with simulated edge-case inputs",
      ],
      output: "Fully Functional Tested Staging System",
    },
    {
      step: "04",
      name: "Live Tool Connection & Deployment",
      timeframe: "Week 4",
      icon: Unplug,
      summary:
        "We carefully connect the system to your live business tools during low-traffic periods. We run side-by-side verification tests to ensure data flows without interruption.",
      activities: [
        "Production environment provisioning & credentials lock",
        "Live bi-directional synchronization activation",
        "Simulated lead capture and live end-to-end audit",
        "Real-time logging and alerting configuration",
      ],
      output: "Live Operational System Deployed to Production",
    },
    {
      step: "05",
      name: "Playbooks & 1 Full Year of Maintenance",
      timeframe: "Ongoing (365 Days)",
      icon: ShieldCheck,
      summary:
        "We hand over clear, plain-English SOPs and video walkthroughs for your staff. More importantly, we actively monitor and maintain the system for 1 full year at zero additional charge.",
      activities: [
        "Standard operating procedure (SOP) playbooks delivered",
        "Team onboarding session to walk through workflows",
        "24/7 automated uptime and error webhook monitoring",
        "Proactive API version upgrades and maintenance",
      ],
      output: "Documented Playbooks + 1 Year Guaranteed Care",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-grid-pattern border-b border-[#1f1f1f] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#262626] text-xs font-mono text-neutral-300">
            <span className="text-blue-400">Engineering Process</span>
            <span className="text-neutral-600">/</span>
            <span>Structured Client Journey</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto">
            From operational chaos to reliable infrastructure.
          </h1>

          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Here is the transparent 5-stage engineering methodology we use to build, deploy, and guarantee your business systems.
          </p>
        </div>
      </section>

      {/* 5-Step Deep Dive */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {journey.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.step}
                className="rounded-2xl border border-[#262626] bg-[#0c0c0c] p-8 sm:p-12 space-y-8 hover:border-neutral-500 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1f1f1f]">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-neutral-600">
                      {phase.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">
                        {phase.name}
                      </h2>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-neutral-400 bg-[#161616] px-3 py-1.5 rounded border border-[#262626] w-fit">
                    Timeline: {phase.timeframe}
                  </span>
                </div>

                <p className="text-base text-neutral-300 leading-relaxed">
                  {phase.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                      Key Activities
                    </h4>
                    <ul className="space-y-2.5">
                      {phase.activities.map((act, aIdx) => (
                        <li
                          key={aIdx}
                          className="text-sm text-neutral-400 flex items-start gap-2.5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#121212] p-6 rounded-xl border border-[#1f1f1f] flex flex-col justify-center">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-2">
                      Verified Phase Output
                    </span>
                    <span className="text-sm font-mono text-emerald-400 font-semibold">
                      {phase.output}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="pb-24 sm:pb-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#262626] bg-[#0c0c0c] p-8 sm:p-12 text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to start at Stage 01?
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
              Schedule an initial consultation to discover the repetitive friction slowing down your business.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-black bg-white hover:bg-neutral-200 rounded-md transition-all shadow-lg"
              >
                <span>Initiate Your Friction Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
