import React from "react";
import { Compass, FileCode2, Wrench, Unplug, ShieldCheck } from "lucide-react";

export default function ProcessTimeline() {
  const stages = [
    {
      num: "01",
      title: "Discover",
      icon: Compass,
      headline: "Operational Deep Dive",
      desc: "We analyze your existing workflows, shadow team routines, and pinpoint every repetitive manual bottleneck draining your business.",
      deliverable: "Operational Friction Matrix & ROI Target",
    },
    {
      num: "02",
      title: "Design",
      icon: FileCode2,
      headline: "Architecture Blueprint",
      desc: "We map the exact technical schemas, webhooks, database relations, and AI logic before writing a single line of production code.",
      deliverable: "Complete Architecture Specification",
    },
    {
      num: "03",
      title: "Build",
      icon: Wrench,
      headline: "Custom Engineering",
      desc: "Our engineers build the deterministic backend integrations, custom automations, and AI assistant prompt pipelines.",
      deliverable: "Tested Production-Grade Code",
    },
    {
      num: "04",
      title: "Connect",
      icon: Unplug,
      headline: "Unified System Launch",
      desc: "We link your CRM, billing, communications, and database apps. We stress-test edge cases in a staging sandbox before live deployment.",
      deliverable: "Live Synchronization & Fail-Safe Alerts",
    },
    {
      num: "05",
      title: "Support",
      icon: ShieldCheck,
      headline: "Playbooks & 1-Year Maintenance",
      desc: "We provide complete documented playbooks for your team and back every deployment with 1 full year of continuous maintenance at zero extra charge.",
      deliverable: "365 Days Guaranteed Operational Care",
    },
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#080808] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
            04 / Client Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            How KYRO delivers better systems.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            A structured, engineering-first methodology that turns chaotic daily processes into reliable automated infrastructure.
          </p>
        </div>

        {/* 5-Stage Timeline */}
        <div className="space-y-6">
          {stages.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="group rounded-xl border border-[#262626] bg-[#101010] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-neutral-500 transition-all duration-300"
              >
                <div className="flex items-start sm:items-center gap-6">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-neutral-600 group-hover:text-blue-400 transition-colors">
                    {st.num}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#161616] border border-[#262626] flex items-center justify-center text-white shrink-0 group-hover:border-blue-500/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {st.title}
                      </h3>
                      <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        — {st.headline}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>

                <div className="md:text-right shrink-0 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-[#1f1f1f]">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-1">
                    Deliverable
                  </div>
                  <div className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-950/30 px-2.5 py-1 rounded border border-emerald-900/40 inline-block">
                    {st.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
