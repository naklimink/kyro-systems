import React from "react";
import { 
  Building2, 
  Briefcase, 
  Stethoscope, 
  Dumbbell, 
  Truck, 
  Users 
} from "lucide-react";

export default function AudienceSection() {
  const industries = [
    {
      name: "Agencies & Consultancies",
      icon: Briefcase,
      desc: "Automated client onboarding, scope logging, dynamic reporting dashboards, and invoice reconciliation.",
    },
    {
      name: "Local Service Businesses",
      icon: Building2,
      desc: "Instant text-back for missed calls, dynamic scheduling, automated route dispatching, and review capture.",
    },
    {
      name: "Clinics & Healthcare Practices",
      icon: Stethoscope,
      desc: "Intake form digitisation, automated appointment reminders, EHR data synchronization, and cancellation backfilling.",
    },
    {
      name: "Gyms, Studios & Fitness",
      icon: Dumbbell,
      desc: "Trial sign-up follow-up, membership renewal workflows, check-in tracking, and automated retention alerts.",
    },
    {
      name: "Logistics & Field Operations",
      icon: Truck,
      desc: "Real-time dispatch coordination, status alerts to customers, driver tracking, and digital proof-of-delivery sync.",
    },
    {
      name: "Growing Teams & Startups",
      icon: Users,
      desc: "Cross-platform data pipelines connecting Notion, Slack, Stripe, HubSpot, and Postgres with zero manual intervention.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-black border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
            05 / Target Sectors
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Engineered for high-volume operational teams.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Whether you manage client accounts, patient schedules, or field technicians, KYRO eliminates the operational friction standing in the way of growth.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#262626] bg-[#0c0c0c] p-6 hover:border-neutral-500 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-center text-white mb-4">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{ind.name}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{ind.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
