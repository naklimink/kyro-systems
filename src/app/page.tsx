"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, RefreshCw, Cpu } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-foreground flex flex-col justify-between overflow-x-hidden selection:bg-neutral-800 selection:text-white">
      <Navbar />

      {/* Subtle Axis Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        <GridPattern
          width={36}
          height={36}
          x={-1}
          y={-1}
          strokeDasharray="4 2"
          className="stroke-white/[0.05] fill-transparent"
        />
      </div>

      <main className="relative pt-36 sm:pt-44 pb-28 px-6 max-w-5xl mx-auto flex-1 flex flex-col justify-center text-center">
        {/* Subtle pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex justify-center"
        >
          <Badge
            variant="outline"
            className="px-3.5 py-1.5 rounded-full border-white/10 bg-white/[0.03] backdrop-blur-md text-xs font-normal text-muted-foreground gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-300">Simple, reliable business systems</span>
          </Badge>
        </motion.div>

        {/* Hero headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-white leading-[1.04] mb-7 max-w-4xl mx-auto"
        >
          Work less. <br />
          <span className="text-[#888891] font-light">Run smoother.</span>
        </motion.h1>

        {/* Crisp promise */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed mb-10"
        >
          KYRO removes repetitive tasks, connects your everyday tools, and builds systems that keep your business running smoothly without the headache.
        </motion.p>

        {/* Action Buttons using Axis Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-24"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full px-7 h-12 bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all shadow-md active:scale-95"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
          <Link href="/services" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-7 h-12 border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white text-sm font-medium transition-all active:scale-95"
            >
              Explore services
            </Button>
          </Link>
        </motion.div>

        {/* 3 Axis Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left mb-20"
        >
          {/* Card 1 */}
          <Card className="rounded-2xl border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-xl p-7 transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] group">
            <CardContent className="p-0 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground uppercase">
                <span>01 / Automate</span>
                <Zap className="w-4 h-4 text-emerald-400 opacity-80 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-medium text-white group-hover:text-emerald-300 transition-colors">
                Save 15+ hours a week
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We turn daily copy-pasting, lead tracking, and status emails into automatic actions.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="rounded-2xl border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-xl p-7 transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] group">
            <CardContent className="p-0 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground uppercase">
                <span>02 / Connect</span>
                <RefreshCw className="w-4 h-4 text-sky-400 opacity-80 group-hover:rotate-45 transition-transform" />
              </div>
              <h3 className="text-lg font-medium text-white group-hover:text-sky-300 transition-colors">
                All your tools in sync
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your CRM, email, calendar, and sheets update together in real time with zero errors.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="rounded-2xl border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-xl p-7 transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] group">
            <CardContent className="p-0 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground uppercase">
                <span>03 / Peace of Mind</span>
                <ShieldCheck className="w-4 h-4 text-purple-400 opacity-80 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors">
                1 year of care included
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every system comes with clear guides and 365 days of maintenance at no extra cost.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Minimal Engineering Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-white/[0.07] bg-[#0a0a0c]/60 p-6 sm:p-8 backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-1">99.9%</div>
            <div className="text-xs text-muted-foreground font-medium">Uptime & Reliability</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-1">&lt; 60s</div>
            <div className="text-xs text-muted-foreground font-medium">Instant Lead Response</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-1">Zero</div>
            <div className="text-xs text-muted-foreground font-medium">Data Desynchronization</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-1">365 Days</div>
            <div className="text-xs text-muted-foreground font-medium">Included Maintenance</div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
