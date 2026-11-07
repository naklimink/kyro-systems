import React from "react";
import Link from "next/link";
import { 
  GitBranch, 
  Bot, 
  UserCheck, 
  Share2, 
  MessageSquare, 
  Layers,
  ArrowRight
} from "lucide-react";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      id: "automation",
      title: "Workflow Automation",
      subtitle: "Deterministic Pipelines",
      icon: GitBranch,
      description:
        "Automate multi-step business logic across databases, webhooks, and third-party tools. Eliminate human copy-pasting and repetitive administrative tasks.",
      features: ["Custom Webhook Hubs", "Multi-branch Logic", "Automated Auditing"],
    },
    {
      id: "assistants",
      title: "AI Business Assistants",
      subtitle: "Contextual Intelligence",
      icon: Bot,
      description:
        "Custom assistants trained strictly on your proprietary playbooks and data. They answer customer queries, extract invoices, and draft client communications.",
      features: ["Grounded Knowledge Base", "Human-in-the-Loop Safeguards", "Slack/Email Embed"],
    },
    {
      id: "lead-systems",
      title: "Lead Management Systems",
      subtitle: "Instant Capture & Speed-to-Lead",
      icon: UserCheck,
      description:
        "Capture every inbound lead across ads, websites, and calls. Automatically qualify, enrich with firmographic data, and assign to reps in under 60 seconds.",
      features: ["Instant SMS/Email Outreach", "Round-Robin Assignment", "No Dropped Inquiries"],
    },
    {
      id: "integrations",
      title: "Business Tool Integrations",
      subtitle: "Unified Data Flow",
      icon: Share2,
      description:
        "Connect your CRM, accounting software, scheduling apps, and internal databases so they talk cleanly without breaking or producing duplicate records.",
      features: ["Postgres, HubSpot & Notion", "Stripe & QuickBooks Sync", "Resilient Error Handling"],
    },
    {
      id: "communications",
      title: "Customer Communication Systems",
      subtitle: "Automated Lifecycle Messaging",
      icon: MessageSquare,
      description:
        "Automated booking confirmations, onboarding sequences, payment reminders, and proactive service updates triggered by real customer events.",
      features: ["Omnichannel Delivery", "Dynamic Token Personalization", "Self-Serve Rescheduling"],
    },
    {
      id: "infrastructure",
      title: "Digital Infrastructure & Web",
      subtitle: "Performant Architecture",
      icon: Layers,
      description:
        "High-performance marketing websites, client portals, and bespoke web interfaces engineered for maximum speed, SEO visibility, and high conversion.",
      features: ["Next.js & Edge Rendering", "Zero Latency Layouts", "Production-Grade Security"],
    },
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#080808] border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-3">
              02 / Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              What KYRO builds for your business.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
              We engineer practical, resilient systems designed for daily operations. No experimental fluff—only battle-tested operational tools.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors font-mono"
          >
            <span>View All Detailed Specs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                className="group relative rounded-xl border border-[#262626] bg-[#101010] p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-500 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
              >
                <div>
                  {/* Top Icon & Subtitle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#161616] border border-[#262626] flex items-center justify-center text-white group-hover:text-blue-400 group-hover:border-blue-500/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                      {cap.subtitle}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neutral-100 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Features & Link */}
                <div className="pt-6 border-t border-[#1a1a1a]">
                  <ul className="space-y-2 mb-6">
                    {cap.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="text-xs font-mono text-neutral-400 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-500" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services#${cap.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors"
                  >
                    <span>Read Architecture Spec</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
