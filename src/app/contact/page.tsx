"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className="relative min-h-screen bg-[#0d0e12] text-[#f0f2f5] flex flex-col justify-between selection:bg-[#252834] selection:text-white">
      <Navbar />

      <main className="pt-32 sm:pt-40 pb-36 sm:pb-44 px-4 sm:px-6 max-w-lg mx-auto flex-1 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-xs font-mono text-[#6e7485] mb-2 uppercase tracking-wide">
            Inquiry
          </div>
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#f0f2f5] mb-2">
            Start a project
          </h1>
          <p className="text-xs sm:text-sm text-[#9ba1b0]">
            Tell us about your business and what you&apos;d like to improve. We reply within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-10 rounded-xl bg-[#14161c] border border-white/[0.08] text-center space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium text-[#f0f2f5]">Inquiry received</h3>
            <p className="text-xs sm:text-sm text-[#9ba1b0] leading-relaxed max-w-sm mx-auto">
              Our engineering team will review your notes and email you back within 24 hours.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", business: "", details: "" });
                }}
                className="text-xs font-mono text-[#6e7485] hover:text-[#f0f2f5] transition-colors"
              >
                ← Send another message
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 rounded-xl bg-[#14161c] border border-white/[0.08]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-medium text-[#9ba1b0]">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Morgan"
                  className="w-full h-10 px-3.5 rounded-lg bg-[#0d0e12] border border-white/[0.08] focus:border-white/[0.25] text-sm text-[#f0f2f5] placeholder-[#4e5362] outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-medium text-[#9ba1b0]">
                  Business email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full h-10 px-3.5 rounded-lg bg-[#0d0e12] border border-white/[0.08] focus:border-white/[0.25] text-sm text-[#f0f2f5] placeholder-[#4e5362] outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="business" className="block text-xs font-medium text-[#9ba1b0]">
                  Company name
                </label>
                <input
                  id="business"
                  type="text"
                  required
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  placeholder="Morgan Logistics"
                  className="w-full h-10 px-3.5 rounded-lg bg-[#0d0e12] border border-white/[0.08] focus:border-white/[0.25] text-sm text-[#f0f2f5] placeholder-[#4e5362] outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="details" className="block text-xs font-medium text-[#9ba1b0]">
                  What takes up too much of your time?
                </label>
                <textarea
                  id="details"
                  rows={3}
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us what daily tasks or tools feel slow, disconnected, or repetitive..."
                  className="w-full p-3.5 rounded-lg bg-[#0d0e12] border border-white/[0.08] focus:border-white/[0.25] text-sm text-[#f0f2f5] placeholder-[#4e5362] outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-press w-full h-10 rounded-lg bg-[#f0f2f5] hover:bg-white text-[#0d0e12] font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-80" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
