import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  GitBranch, 
  Bot, 
  UserCheck, 
  Share2, 
  MessageSquare, 
  Layers, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Terminal
} from "lucide-react";

export const metadata = {
  title: "Services & Systems Architecture — KYRO",
  description:
    "Explore KYRO's core business systems: workflow automation, AI assistants, lead pipelines, CRM integrations, and digital infrastructure.",
};

export default function ServicesPage() {
  const serviceCatalog = [
    {
      id: "automation",
      title: "Business Workflow Automation",
      category: "CORE ENGINE",
      headline: "Eliminate repetitive manual operations forever",
      desc: "We analyze your recurring administrative tasks and build deterministic, automated pipelines connecting your existing tools. Workflows execute asynchronously in milliseconds with complete audit logging and automatic retry mechanisms.",
      techStack: ["Node.js / Python Engine", "Custom Webhook Listeners", "Stripe, Airtable & Postgres Sync"],
      outcomes: [
        "Saves 15-30 operational team hours every week",
        "Eliminates 100% of human copy-pasting data errors",
        "Deterministic audit trail of all business events",
      ],
    },
    {
      id: "assistants",
      title: "AI Business Assistants",
      category: "INTELLIGENCE",
      headline: "Context-aware intelligence grounded strictly on your data",
      desc: "Unlike off-the-shelf chatbots that hallucinate, our assistants are strictly bounded by your business documentation, knowledge bases, and operational policies. They handle customer FAQs, triage support tickets, draft proposals, and parse invoices.",
      techStack: ["Retrieval-Augmented Generation (RAG)", "Vector Embeddings", "Strict Guardrails & Human Escalation"],
      outcomes: [
        "Instant, accurate 24/7 client response handling",
        "Automated extraction of unstructured documents and PDFs",
        "Seamless escalation to human specialists when required",
      ],
    },
    {
      id: "lead-systems",
      title: "Lead Capture & Follow-Up Systems",
      category: "REVENUE PIPELINE",
      headline: "Sub-60 second speed to lead across every channel",
      desc: "A prospect's intent decays exponentially with every passing minute. KYRO's revenue pipelines intercept form submits, inbound calls, emails, and direct messages, enrich lead data, and trigger instant customized outreach while notifying sales reps.",
      techStack: ["Multi-source Webhook Gateway", "Clearbit / Apollo Data Enrichment", "Twilio SMS & Calendar Sync"],
      outcomes: [
        "Guaranteed < 60-second response to new inquiries",
        "Automatic qualification and round-robin scheduling",
        "Zero dropped leads or missed sales opportunities",
      ],
    },
    {
      id: "integrations",
      title: "CRM & Business Tool Integrations",
      category: "DATA BACKBONE",
      headline: "Make your 8 separate tools behave like one unified machine",
      desc: "Stop manually syncing data between HubSpot, Notion, Google Sheets, QuickBooks, and project boards. We architect bidirectional integrations with idempotency keys and error-resilient queues to ensure data integrity.",
      techStack: ["REST & GraphQL APIs", "PostgreSQL / Redis Queues", "Bi-directional Reconciliation"],
      outcomes: [
        "Single source of operational truth across all tools",
        "Automatic contact, deal, and payment reconciliation",
        "No duplicate records or corrupted customer histories",
      ],
    },
    {
      id: "communications",
      title: "Customer Communication Systems",
      category: "RETENTION & CARE",
      headline: "Lifecycle messaging that keeps customers engaged and informed",
      desc: "Deliver personalized, timely communication across SMS, email, and WhatsApp triggered by real customer actions. From automated onboarding sequences to appointment reminders and renewal notices, keep customers informed automatically.",
      techStack: ["SendGrid / Postmark / Twilio", "Event-Driven Message Queues", "Dynamic Template Personalization"],
      outcomes: [
        "85% reduction in appointment no-shows with smart reminders",
        "Standardized customer onboarding experience",
        "Proactive client milestone updates without staff burden",
      ],
    },
    {
      id: "infrastructure",
      title: "Digital Infrastructure & Web Solutions",
      category: "WEB ARCHITECTURE",
      headline: "Ultra-fast modern web applications engineered for conversion",
      desc: "Your digital storefront should reflect the quality of your operational engineering. We design and build modern Next.js web applications, client portals, and internal dashboards with sub-second page loads, tight security, and high conversion UX.",
      techStack: ["Next.js App Router", "Tailwind CSS & TypeScript", "Edge Network CDN Deployment"],
      outcomes: [
        "100/100 Lighthouse performance and SEO scores",
        "Mobile-first responsive design tailored to high conversion",
        "Bank-grade SSL security and zero maintenance headache",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-grid-pattern border-b border-[#1f1f1f] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#262626] text-xs font-mono text-neutral-300">
            <span className="text-blue-400">KYRO Capabilities & Services</span>
            <span className="text-neutral-600">/</span>
            <span>Engineered Systems</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto">
            Operational systems engineered to scale your business.
          </h1>

          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Every service we offer is designed to solve concrete operational friction. We deliver working systems with documented playbooks and 1 year of continuous maintenance.
          </p>
        </div>
      </section>

      {/* Service Catalog */}
      <section className="py-20 sm:py-28 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {serviceCatalog.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 rounded-2xl border border-[#262626] bg-[#0c0c0c] p-8 sm:p-12 hover:border-neutral-500 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Header */}
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest px-2.5 py-1 bg-blue-950/40 rounded border border-blue-900/40 inline-block">
                    {service.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {service.title}
                  </h2>
                  <p className="text-sm font-semibold text-neutral-300">
                    {service.headline}
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold text-black bg-white hover:bg-neutral-200 rounded-md transition-all"
                    >
                      <span>Inquire About This System</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Specs & Outcomes */}
                <div className="lg:col-span-7 space-y-6 bg-[#121212] p-6 sm:p-8 rounded-xl border border-[#1f1f1f]">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      Architecture & Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-mono text-neutral-300 bg-[#181818] px-3 py-1.5 rounded border border-[#262626]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#1f1f1f]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                      Measurable Business Outcomes
                    </h4>
                    <ul className="space-y-2.5">
                      {service.outcomes.map((outcome, oIdx) => (
                        <li
                          key={oIdx}
                          className="text-sm text-neutral-300 flex items-start gap-2.5"
                        >
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#1f1f1f] flex items-center gap-2 text-xs font-mono text-neutral-500">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    <span>Includes documented playbooks & 1 year guaranteed maintenance</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
