"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, PencilRuler, Blocks, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We look at how your business runs today and spot the repetitive tasks eating up your time.",
      icon: Compass,
      timeframe: "Week 1",
    },
    {
      num: "02",
      title: "Design",
      desc: "We map out a simple blueprint showing exactly what we will automate and connect.",
      icon: PencilRuler,
      timeframe: "Week 2",
    },
    {
      num: "03",
      title: "Build & Connect",
      desc: "We set up the automations, test everything carefully, and link your existing tools together.",
      icon: Blocks,
      timeframe: "Week 3-4",
    },
    {
      num: "04",
      title: "Support",
      desc: "We give you easy guides for your team and look after the system for 1 full year at no extra charge.",
      icon: HeartHandshake,
      timeframe: "1 Year",
    },
  ];

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

      <main className="relative pt-36 sm:pt-44 pb-28 px-6 max-w-4xl mx-auto flex-1 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <div className="mb-4 flex justify-center">
            <Badge
              variant="outline"
              className="px-3 py-1 rounded-full border-white/10 bg-white/[0.03] text-xs font-normal text-muted-foreground"
            >
              Engineering Lifecycle
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-4">
            How It Works
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Four simple steps. Clear timelines. Zero surprises.
          </p>
        </motion.div>

        {/* Timeline Steps using Axis Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 mb-20"
        >
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <Card
                key={st.num}
                className="rounded-2xl border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-xl p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] group"
              >
                <CardContent className="p-0 flex flex-col sm:flex-row sm:items-center gap-5">
                  <div className="flex items-center justify-between sm:justify-start gap-4 sm:w-28 shrink-0">
                    <span className="font-mono text-2xl font-light text-neutral-400 group-hover:text-white transition-colors">
                      {st.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-muted-foreground group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-medium text-white group-hover:text-neutral-100 transition-colors">
                        {st.title}
                      </h3>
                      <span className="text-[10px] font-mono text-muted-foreground/60 border border-white/[0.08] px-2 py-0.5 rounded-full">
                        {st.timeframe}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/60 p-8 sm:p-10 text-center backdrop-blur-md"
        >
          <h3 className="text-2xl font-semibold tracking-tight text-white mb-2">
            Ready to simplify your everyday work?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-6">
            Let's start with a friendly, no-pressure chat about your operations.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full px-7 h-11 bg-white text-black font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-all shadow-md active:scale-95"
            >
              <span>Get started</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
