"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Workflow, Link2, BellRing, Bot, Globe, LifeBuoy } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function ServicesPage() {
  const services = [
    {
      title: "Workflow Automation",
      promise: "Stop wasting hours on repetitive busywork.",
      desc: "We automate client intake, notifications, invoice creation, and data entry across your apps.",
      icon: Workflow,
      tag: "Operations",
    },
    {
      title: "Tool & CRM Connections",
      promise: "Keep all your software speaking the same language.",
      desc: "We link your email, CRM, spreadsheets, and calendar so you never have to re-type information.",
      icon: Link2,
      tag: "Integration",
    },
    {
      title: "Instant Lead Follow-Up",
      promise: "Never lose a customer to slow response times.",
      desc: "Inquiries are captured, qualified, and followed up within 60 seconds via automated email and SMS.",
      icon: BellRing,
      tag: "Growth",
    },
    {
      title: "Smart Business Assistants",
      promise: "Answers questions using your real company knowledge.",
      desc: "Custom assistants that help your team answer client questions and extract information from documents.",
      icon: Bot,
      tag: "Intelligence",
    },
    {
      title: "Fast Web Solutions",
      promise: "A clean digital presence built for speed and results.",
      desc: "Modern, high-speed websites and portals designed to turn visitors into booked clients.",
      icon: Globe,
      tag: "Engineering",
    },
    {
      title: "Complete System Care",
      promise: "Full documentation and 365 days of included support.",
      desc: "Step-by-step guides for your team, plus proactive maintenance so your systems never break.",
      icon: LifeBuoy,
      tag: "Support",
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

      <main className="relative pt-36 sm:pt-44 pb-28 px-6 max-w-5xl mx-auto flex-1 w-full">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="mb-4 flex justify-center">
            <Badge
              variant="outline"
              className="px-3 py-1 rounded-full border-white/10 bg-white/[0.03] text-xs font-normal text-muted-foreground"
            >
              System Capabilities
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-4">
            Services
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Practical systems designed to solve real business bottlenecks. Nothing complicated.
          </p>
        </motion.div>

        {/* 2-column Grid using Axis Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20"
        >
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className="rounded-2xl border-white/[0.08] bg-[#0c0c0e]/80 backdrop-blur-xl p-7 transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] group flex flex-col justify-between"
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-neutral-300 group-hover:text-white" />
                    </div>
                    <Badge variant="secondary" className="text-[11px] font-normal border-transparent bg-white/[0.05] text-muted-foreground">
                      {item.tag}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-1.5 group-hover:text-neutral-100 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-blue-400 font-medium mb-3">
                    {item.promise}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
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
            Have a specific workflow in mind?
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-6">
            Tell us what takes up too much of your team's time. We reply within 24 hours.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full px-7 h-11 bg-white text-black font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-all shadow-md active:scale-95"
            >
              <span>Talk to us</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
