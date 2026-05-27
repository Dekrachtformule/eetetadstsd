import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import VslSection from "../components/landing/VslSection";
import ProblemSection from "../components/landing/ProblemSection";
import ProgramSection from "../components/landing/ProgramSection";
import CoachSection from "../components/landing/CoachSection";
import SocialProof from "../components/landing/SocialProof";
import FinalCta from "../components/landing/FinalCta";
import FaqSection from "../components/landing/FaqSection";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <div className="bg-background text-foreground font-body min-h-screen overflow-x-hidden">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      <Navbar />
      <HeroSection />
      <VslSection />
      <ProblemSection />
      <ProgramSection />
      <CoachSection />
      <SocialProof />
      <FinalCta />
      <FaqSection />
      <Footer />
    </div>
  );
}
