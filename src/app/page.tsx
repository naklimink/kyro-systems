import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import InteractiveWorkflow from "@/components/InteractiveWorkflow";
import ProcessTimeline from "@/components/ProcessTimeline";
import AudienceSection from "@/components/AudienceSection";
import WhyKyroSection from "@/components/WhyKyroSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <CapabilitiesSection />
      <InteractiveWorkflow />
      <ProcessTimeline />
      <AudienceSection />
      <WhyKyroSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
