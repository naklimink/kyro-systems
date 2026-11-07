import React from "react";
import { Check, ShieldCheck, Wrench, Code2, Clock, Users } from "lucide-react";

export default function WhyKyroSection() {
  const pillars = [
    {
      title: "Real Engineering, Not AI Gimmicks",
      desc: "We build deterministic, resilient software architectures. AI is applied where it genuinely speeds work—not as marketing decoration.",
      icon: Code2,
    },
    {
      title: "Zero Disruption to Your Stack",
      desc: "We do not ask you to change your CRM or rewrite your tools. We connect directly into your existing software via secure APIs and webhooks.",
      icon: Wrench,
    },
    {
      title: "Documented Playbooks Included",
      desc: "Every system we deploy is thoroughly documented with operational SOPs so your leadership and staff understand how every workflow executes.",
      icon: Users,
    },
    {
      title: "1 Full Year of Maintenance",
      desc: "We provide 365 days of included system maintenance and monitoring with zero surprise upkeep retainers. We stand behind what we engineer.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#080808] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400">
              06 / Philosophy & Trust
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Why business leaders choose KYRO.
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed">
              Most automation projects fail because they are built as fragile, unmaintained hacks. At KYRO, we treat your business processes with the rigour of mission-critical software engineering.
            </p>

            <div className="p-6 rounded-xl border border-[#262626] bg-[#101010] space-y-4">
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                The KYRO Standard
              </div>
              <ul className="space-y-3 text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No proprietary vendor lock-in</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict data confidentiality & security</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Documented code & visual architectures</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1-year continuous support included</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#262626] bg-[#0c0c0c] p-6 space-y-3 hover:border-neutral-500 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
