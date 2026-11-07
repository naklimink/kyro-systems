import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services — KYRO",
  description: "Simple, reliable systems to run your business smoothly.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Workflow Automation",
      promise: "Stop wasting hours on repetitive busywork.",
      desc: "We automate client intake, notifications, invoice creation, and data entry across your apps.",
    },
    {
      title: "Tool & CRM Connections",
      promise: "Keep all your software speaking the same language.",
      desc: "We link your email, CRM, spreadsheets, and calendar so you never have to re-type information.",
    },
    {
      title: "Instant Lead Follow-Up",
      promise: "Never lose a customer to slow response times.",
      desc: "Inquiries are captured, qualified, and followed up within 60 seconds via automated email and SMS.",
    },
    {
      title: "Smart Business Assistants",
      promise: "Answers questions using your real company knowledge.",
      desc: "Custom assistants that help your team answer client questions and extract information from documents.",
    },
    {
      title: "Fast Web Solutions",
      promise: "A clean digital presence built for speed and results.",
      desc: "Modern, high-speed websites and portals designed to turn visitors into booked clients.",
    },
    {
      title: "Complete System Care",
      promise: "Full documentation and 365 days of included support.",
      desc: "Step-by-step guides for your team, plus proactive maintenance so your systems never break.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto flex-1">
        {/* Page Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#f5f5f7] mb-4">
            Services
          </h1>
          <p className="text-base sm:text-lg text-[#86868b] leading-relaxed">
            Practical systems designed to solve real business bottlenecks. Nothing complicated.
          </p>
        </div>

        {/* 2-column minimal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {services.map((item, idx) => (
            <div key={idx} className="apple-card p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-medium text-[#f5f5f7] mb-1.5">
                  {item.title}
                </h3>
                <div className="text-xs text-[#2997ff] font-medium mb-3">
                  {item.promise}
                </div>
                <p className="text-sm text-[#86868b] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom CTA */}
        <div className="text-center pt-8 border-t border-white/[0.06]">
          <h3 className="text-xl font-medium text-[#f5f5f7] mb-3">
            Have a specific workflow in mind?
          </h3>
          <p className="text-sm text-[#86868b] mb-6">
            Tell us what takes up too much of your team's time.
          </p>
          <Link
            href="/contact"
            className="btn-press px-6 py-2.5 rounded-full bg-[#f5f5f7] hover:bg-white text-black font-medium text-xs inline-flex items-center gap-2"
          >
            <span>Talk to us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
