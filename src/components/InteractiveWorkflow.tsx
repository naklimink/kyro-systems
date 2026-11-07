"use client";

import React, { useState } from "react";
import { 
  Play, 
  RotateCcw, 
  Mail, 
  Cpu, 
  Database, 
  Send, 
  Bell, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function InteractiveWorkflow() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const steps = [
    {
      id: 1,
      title: "1. Inbound Lead Submitted",
      badge: "TRIGGER",
      icon: Mail,
      desc: "Prospect submits an enterprise project request with details on requirements and budget.",
      detail: "Payload received: { name: 'Sarah Chen', role: 'COO', company: 'Apex Logistics', budget: '$10k+' }",
    },
    {
      id: 2,
      title: "2. Context & AI Qualification",
      badge: "PROCESSING",
      icon: Cpu,
      desc: "System cleans the contact info, enriches company revenue from Clearbit, and classifies intent.",
      detail: "Match score: 98% · Lead Category: High-Priority Enterprise · Time: 340ms",
    },
    {
      id: 3,
      title: "3. CRM Sync & Team Allocation",
      badge: "DATABASE",
      icon: Database,
      desc: "Automatically creates deal card in CRM, assigns dedicated systems engineer, and logs timeline.",
      detail: "HubSpot Deal #4921 created · Assigned to: Alex Vance · Status: Qualified",
    },
    {
      id: 4,
      title: "4. Tailored Response Dispatched",
      badge: "OUTREACH",
      icon: Send,
      desc: "Personalized confirmation email dispatched with an executive brief and one-click calendar booking.",
      detail: "Sent via SendGrid · Open tracking: Enabled · Latency: 1.2s",
    },
    {
      id: 5,
      title: "5. Internal Stakeholder Alert",
      badge: "NOTIFICATION",
      icon: Bell,
      desc: "System sends instant Slack notification to executive team with customer dossier and scheduling link.",
      detail: "Slack #leads-high-value notified · Mobile push sent · Pipeline updated",
    },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <section className="py-24 sm:py-32 bg-black border-t border-[#1f1f1f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
            03 / Live Interactive Simulation
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            See a KYRO system in action.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Step through an end-to-end operational flow. Experience how automated triggers, intelligence, and integrations work harmoniously in real time.
          </p>
        </div>

        {/* Interactive Sandbox Container */}
        <div className="rounded-xl border border-[#262626] bg-[#0c0c0c] overflow-hidden shadow-2xl">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between p-4 bg-[#121212] border-b border-[#262626] gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs text-neutral-300">
                Interactive Pipeline Simulation · Stage {currentStep + 1} of {steps.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleNext}
                className="px-3 py-1.5 text-xs font-mono font-medium rounded bg-white text-black hover:bg-neutral-200 transition-colors flex items-center gap-1.5"
              >
                <span>{currentStep === steps.length - 1 ? "Replay From Start" : "Execute Next Step"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleReset}
                className="px-2.5 py-1.5 text-xs font-mono rounded bg-[#1f1f1f] text-neutral-400 hover:text-white transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 border-b border-[#1f1f1f] bg-[#090909]">
            {steps.map((st, idx) => {
              const isCurrent = idx === currentStep;
              const isPast = idx < currentStep;
              return (
                <button
                  key={st.id}
                  onClick={() => setCurrentStep(idx)}
                  className={`p-3 text-left transition-all border-b-2 font-mono text-xs ${
                    isCurrent
                      ? "border-blue-500 bg-[#141414] text-white"
                      : isPast
                      ? "border-emerald-500/50 text-neutral-400 hover:bg-[#101010]"
                      : "border-transparent text-neutral-600 hover:bg-[#0d0d0d]"
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    {isPast ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <span className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center text-[9px]">
                        {idx + 1}
                      </span>
                    )}
                    <span className="truncate">{st.badge}</span>
                  </div>
                  <div className="text-[11px] truncate font-sans font-medium text-neutral-300">
                    {st.title.split(". ")[1]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Display */}
          <div className="p-6 sm:p-10 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-950/50 border border-blue-800/60 flex items-center justify-center text-blue-400">
                  {React.createElement(steps[currentStep].icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                    {steps[currentStep].badge} PHASE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {steps[currentStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                {steps[currentStep].desc}
              </p>

              {/* Console Detail Output */}
              <div className="rounded-lg bg-[#000000] border border-[#262626] p-4 font-mono text-xs text-neutral-300">
                <div className="text-neutral-500 text-[10px] uppercase mb-1.5">
                  SYSTEM LOG OUTPUT
                </div>
                <div className="text-emerald-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{steps[currentStep].detail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
