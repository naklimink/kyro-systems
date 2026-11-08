import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0b0e] text-[#6e7485] pt-12 pb-32 sm:pb-36 text-xs">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <Image
              src="/brand/kyro-logo-white.png"
              alt="KYRO"
              width={20}
              height={24}
              className="object-contain opacity-75"
            />
            <span className="text-[#f0f2f5] font-medium text-xs tracking-tight">KYRO Systems</span>
            <span className="text-[#6e7485] hidden sm:inline">— Business infrastructure & workflow automation engineering</span>
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[#9ba1b0]">SYS:OPERATIONAL</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-[#6e7485]">
          <p>© 2026 KYRO Systems Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/services" className="hover:text-[#f0f2f5] transition-colors">
              Services
            </Link>
            <Link href="/how-it-works" className="hover:text-[#f0f2f5] transition-colors">
              Process
            </Link>
            <Link href="/about" className="hover:text-[#f0f2f5] transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-[#f0f2f5] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
