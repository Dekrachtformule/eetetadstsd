import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function EmailCapture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Full-width amber/gold inverted background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-yellow-600/80" />
      {/* Noise texture on amber */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"}}
      />

      <div ref={ref} className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Mail className="w-10 h-10 text-primary-foreground/60 mx-auto mb-5" />

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-primary-foreground mb-4">
            NOG NIET KLAAR VOOR EEN CALL?
          </h2>
          <p className="font-body text-base md:text-lg text-primary-foreground/75 mb-8">
            Ontvang de gratis gids: <strong className="text-primary-foreground">"3 dingen die vaders verkeerd doen met afvallen"</strong>. Direct in je inbox. Geen spam, nooit.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jouw@email.nl"
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm focus:outline-none focus:border-primary-foreground/50 focus:bg-primary-foreground/15 transition-all"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-3.5 rounded-full font-body font-bold text-sm tracking-wide hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                Stuur me de gids
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl px-8 py-5 inline-block"
            >
              <p className="font-display text-2xl text-primary-foreground tracking-wide">GOED BEZIG.</p>
              <p className="font-body text-sm text-primary-foreground/70 mt-1">Check je inbox — de gids is onderweg.</p>
            </motion.div>
          )}

          <p className="font-body text-xs text-primary-foreground/40 mt-5">
            Geen spam. Uitschrijven kan altijd. Beloofd.
          </p>
        </motion.div>
      </div>
    </section>
  );
}