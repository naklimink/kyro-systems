import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black text-[#86868b] pt-12 pb-28 sm:pb-32 text-xs">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[#f5f5f7] font-medium">KYRO</span>
          <span>— Systems that just work.</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/services" className="hover:text-[#f5f5f7] transition-colors">
            Services
          </Link>
          <Link href="/how-it-works" className="hover:text-[#f5f5f7] transition-colors">
            Process
          </Link>
          <Link href="/about" className="hover:text-[#f5f5f7] transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#f5f5f7] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
