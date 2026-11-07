import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KYRO — Business Infrastructure & Automation Engineering",
  description:
    "KYRO engineers practical business systems: eliminate repetitive work, connect existing tools, and implement reliable workflow automation.",
  keywords: [
    "business automation",
    "workflow automation",
    "CRM integration",
    "AI business assistants",
    "operations engineering",
    "digital infrastructure",
  ],
  icons: {
    icon: "/brand/kyro-logo-white.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-black text-white antialiased flex flex-col selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
