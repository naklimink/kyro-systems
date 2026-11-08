"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Wrench, Layers, FileText, Clock } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function AboutPage() {
  const values = [
    {
      title: "Practicality over hype",
      desc: "We don't sell experimental buzzwords. We build useful tools that save you actual hours every day.",
      icon: Wrench,
    },
    {
      title: "Use what you have",
      desc: "You don't need to throw away your current software. We make your existing tools work better together.",
      icon: Layers,
    },
    {
      title: "Clear and documented",
      desc: "You always own your systems. We leave behind easy guides so anyone on your team can understand them.",
      icon: FileText,
    },
    {
      title: "Long-term commitment",
      desc: "We don't build and run away. Every project includes a full year of maintenance to keep everything running.",
      icon: Clock,
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
              Company Philosophy
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-4">
            About KYRO
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We help business owners take back their time by replacing manual tasks with dependable systems.
          </p>
        </motion.div>

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-white/[0.08] bg-[#0c0c0e]/80 p-8 sm:p-10 mb-12 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed backdrop-blur-xl"
        >
          <p className="text-white font-medium text-lg sm:text-xl tracking-tight leading-snug">
            Most businesses don't need complicated tech. They need their everyday tools to just work together.
          </p>
          <p>
            When inquiries fall through the cracks or employees spend hours manually typing the same data into multiple apps, growth feels exhausting.
          </p>
          <p>
            KYRO was built to fix that. We engineer clear, quiet systems that operate in the background so you can focus on serving your clients and leading your team.
          </p>
        </motion.div>

        {/* 4 Core Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20"
        >
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <Card
                key={idx}
                className="rounded-2xl border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-xl p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] group"
              >
                <CardContent className="p-0">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-muted-foreground group-hover:text-white transition-colors mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-medium text-white mb-2 group-hover:text-neutral-100 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {val.desc}
                  </p>
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
            Want to see how KYRO can help your business?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-6">
            We’d love to learn about what you're building.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full px-7 h-11 bg-white text-black font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-all shadow-md active:scale-95"
            >
              <span>Say hello</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
