"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Send, Mail, User, Building, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GridPattern } from "@/components/ui/grid-pattern";

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
    }, 600);
  };

  return (
    <div className="relative min-h-screen bg-black text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-neutral-800 selection:text-white">
      <Navbar />

      {/* Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        <GridPattern
          width={36}
          height={36}
          x={-1}
          y={-1}
          strokeDasharray="4 2"
          className="stroke-white/[0.04] fill-transparent"
        />
      </div>

      <main className="relative pt-28 sm:pt-36 pb-36 px-6 max-w-xl mx-auto flex-1 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          <div className="mb-3 flex justify-center">
            <Badge
              variant="outline"
              className="px-3 py-1 rounded-full border-white/10 bg-white/[0.03] text-xs font-normal text-muted-foreground gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Direct Inquiry
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-2">
            Start a project
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Tell us about your business and what you'd like to improve. We reply within 24 hours.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="rounded-2xl border-white/[0.1] bg-[#0c0c0e]/90 backdrop-blur-xl p-8 sm:p-10 text-center space-y-4 shadow-2xl">
                <CardContent className="p-0 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">Thank you</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    We’ve received your message. Our engineering team will review your notes and email you back within 24 hours.
                  </p>
                  <div className="pt-3">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", business: "", details: "" });
                      }}
                      className="rounded-full px-5 border-white/10 text-xs"
                    >
                      Send another message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="rounded-2xl border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                        Your name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="h-10 rounded-xl bg-black/40 border-white/[0.08] focus-visible:border-white/30 text-white placeholder:text-neutral-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                        Business email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="h-10 rounded-xl bg-black/40 border-white/[0.08] focus-visible:border-white/30 text-white placeholder:text-neutral-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="business" className="text-xs font-medium text-muted-foreground">
                        Company or business name
                      </Label>
                      <Input
                        id="business"
                        type="text"
                        required
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        placeholder="Morgan Logistics"
                        className="h-10 rounded-xl bg-black/40 border-white/[0.08] focus-visible:border-white/30 text-white placeholder:text-neutral-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="details" className="text-xs font-medium text-muted-foreground">
                        What takes up too much of your time?
                      </Label>
                      <textarea
                        id="details"
                        rows={3}
                        required
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Tell us what daily tasks or tools feel slow, disconnected, or repetitive..."
                        className="w-full px-3.5 py-2.5 bg-black/40 border border-white/[0.08] focus:border-white/30 rounded-xl text-sm text-white placeholder:text-neutral-600 outline-none transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={loading}
                        size="lg"
                        className="w-full rounded-full h-11 bg-white hover:bg-neutral-200 text-black font-medium text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
                      >
                        {loading ? (
                          <span>Sending inquiry...</span>
                        ) : (
                          <>
                            <span>Send message</span>
                            <ArrowRight className="w-4 h-4 ml-1.5" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
