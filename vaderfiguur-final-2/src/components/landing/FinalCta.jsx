import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, Check, ShieldCheck } from "lucide-react";

const cardPoints = [
  "Helder antwoord of Het Vaderfiguur bij jou past",
  "Eerlijke inschatting van je realistische resultaat",
  "Inzicht in investering en startdatum",
];

export default function FinalCta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="intake" className="relative py-24 md:py-36 overflow-hidden">
      {/* Bold amber background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/30 via-transparent to-black/40" />

      {/* Oversized bg text */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
        <span className="font-display text-[30vw] leading-none text-black/[0.07] whitespace-nowrap">
          VADER
        </span>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: copy + button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-sm font-bold tracking-[0.18em] uppercase text-black/60 block mb-5">
              De Selectie &middot; Lichting 01 &middot; Start 7 sept
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-black mb-6">
              WORD DE MAN DIE ZE{" "}
              <span className="text-black/40">THUIS VERDIENEN.</span>
            </h2>
            <p className="font-body text-base md:text-lg text-black/75 leading-relaxed mb-8">
              Je kunt deze pagina sluiten en hopen dat het rustiger wordt. Dat
              wordt het niet. Of je plant een eerlijk gesprek van 30 minuten.
              Geen verkooppitch. Wel duidelijkheid.
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-black text-primary px-8 py-4 rounded-full font-body font-bold text-base md:text-lg tracking-wide hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/40"
            >
              <Phone className="w-5 h-5" />
              <span>Plan je gratis strategiegesprek</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right: dark card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-[#0a0a0a] rounded-2xl p-8 md:p-9 shadow-2xl shadow-black/40"
          >
            <span className="font-body text-xs font-medium tracking-[0.18em] uppercase text-primary block mb-4">
              Wat dit gesprek je oplevert
            </span>
            <h3 className="font-display text-2xl md:text-3xl tracking-wide text-foreground mb-7 leading-tight">
              Een eerlijk beeld van waar je staat &amp; hoe je dit voorgoed kunt oplossen.
            </h3>
            <ul className="space-y-4">
              {cardPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3.5} />
                  </div>
                  <span className="font-body text-sm md:text-base text-foreground/85">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Guarantee bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 mx-auto max-w-2xl flex flex-col sm:flex-row items-center gap-5 bg-[#0a0a0a] border-2 border-primary rounded-2xl px-7 py-6 text-center sm:text-left"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8 text-primary" />
          </div>
          <div>
            <span className="font-body text-[0.65rem] font-bold tracking-[0.16em] uppercase text-primary block mb-2">
              Resultaatgarantie
            </span>
            <strong className="block font-body text-base md:text-lg font-semibold text-foreground leading-snug">
              Geen resultaat na 4 weken? Dan krijg je je
              <br />
              <span className="text-primary">volledige investering terug.</span>
            </strong>
            <span className="block font-body text-xs text-muted-foreground mt-2">
              *Check de algemene voorwaarden.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
