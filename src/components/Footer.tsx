import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-black text-muted-foreground pt-14 pb-32 sm:pb-36 text-xs">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/kyro-logo-white.png"
              alt="KYRO"
              width={20}
              height={24}
              className="object-contain opacity-80"
            />
            <span className="text-foreground font-medium text-sm tracking-tight">KYRO Systems</span>
            <span className="text-muted-foreground hidden sm:inline">— Reliable business infrastructure & automation engineering</span>
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-300">All systems operational</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-muted-foreground">
          <p>© 2026 KYRO Systems Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/services" className="hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/how-it-works" className="hover:text-foreground transition-colors">
              Process
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
