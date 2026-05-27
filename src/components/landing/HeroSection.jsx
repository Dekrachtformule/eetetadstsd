import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="top" className="relative flex items-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full bg-primary/10 blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[140px]" />
      </div>

      {/* Oversized background text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden">
        <span className="font-display text-[28vw] lg:text-[22vw] leading-none text-foreground/[0.035] whitespace-nowrap">
          VADER
        </span>
      </div>

      {/* Vertical accent line */}
      <div className="absolute left-8 lg:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12 md:pt-28 md:pb-16 w-full">
        <div className="max-w-4xl">
          {/* Selection badge — light, card-style */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 mb-7 px-4 py-2 rounded-full bg-[#f4f1ea] text-[#0a0a0a] shadow-lg shadow-black/30"
          >
            <span className="font-body text-xs sm:text-sm font-semibold tracking-tight">
              Lichting 01 &middot; Start 7 sept
            </span>
            <span className="w-full sm:w-auto font-body text-xs sm:text-sm font-semibold tracking-tight">
              <span className="hidden sm:inline">&middot; </span>Beperkt aantal plekken
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-[3.2rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] leading-[0.86] tracking-tight text-foreground mb-7"
          >
            NIET ACHTERUIT.
            <br />
            <span className="text-primary">OPSTAAN.</span>
          </motion.h1>

          {/* Subheadline — shorter, white */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-lg md:text-xl text-foreground/90 max-w-xl leading-relaxed mb-10"
          >
            12 weken coaching die past in jouw leven, niet andersom.{" "}
            <span className="whitespace-nowrap">5 tot 10 kilo eraf.</span>{" "}
            Word de man die ze thuis verdienen.
          </motion.p>

          {/* Two CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#intake"
              className="group relative inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-7 py-4 rounded-full font-body font-semibold text-sm tracking-wide hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30"
            >
              <span>Gratis strategiegesprek</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-primary/50 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
            </a>
            <a
              href="#hoe"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-body font-semibold text-sm tracking-wide border border-border text-foreground hover:border-primary hover:bg-primary/[0.08] hover:scale-105 transition-all duration-300"
            >
              <span>Zo werkt het</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
