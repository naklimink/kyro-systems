"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-xl mx-auto flex-1 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#f5f5f7] mb-3">
            Start a project
          </h1>
          <p className="text-sm sm:text-base text-[#86868b]">
            Tell us about your business and what you'd like to improve. We reply within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="apple-card p-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#2997ff] mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-[#f5f5f7]">Thank you</h3>
            <p className="text-sm text-[#86868b] leading-relaxed">
              We’ve received your message. Our team will review your notes and email you back within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-[#86868b] hover:text-[#f5f5f7] underline pt-4"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="apple-card p-8 sm:p-10 space-y-5">
            <div>
              <label className="block text-xs text-[#86868b] mb-2 font-medium">
                Your name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Alex Morgan"
                className="w-full px-4 py-3 bg-black/40 border border-white/[0.08] focus:border-white/20 rounded-xl text-sm text-[#f5f5f7] placeholder-[#515154] outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-[#86868b] mb-2 font-medium">
                Business email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@company.com"
                className="w-full px-4 py-3 bg-black/40 border border-white/[0.08] focus:border-white/20 rounded-xl text-sm text-[#f5f5f7] placeholder-[#515154] outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-[#86868b] mb-2 font-medium">
                Company or business name
              </label>
              <input
                type="text"
                required
                value={formData.business}
                onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                placeholder="Morgan Logistics"
                className="w-full px-4 py-3 bg-black/40 border border-white/[0.08] focus:border-white/20 rounded-xl text-sm text-[#f5f5f7] placeholder-[#515154] outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-[#86868b] mb-2 font-medium">
                What takes up too much of your time?
              </label>
              <textarea
                rows={4}
                required
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Tell us what daily tasks or tools feel slow, disconnected, or repetitive..."
                className="w-full px-4 py-3 bg-black/40 border border-white/[0.08] focus:border-white/20 rounded-xl text-sm text-[#f5f5f7] placeholder-[#515154] outline-none transition-colors"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="btn-press w-full py-3.5 rounded-full bg-[#f5f5f7] hover:bg-white text-black font-medium text-sm flex items-center justify-center gap-2"
              >
                <span>Send message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </main>

      <Footer />
    </div>
  );
}
