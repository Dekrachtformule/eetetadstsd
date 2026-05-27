import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

export default function VslSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative pt-10 pb-20 md:pt-14 md:pb-28 bg-secondary diagonal-bottom">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground text-center mb-10"
        >
          ALS JE VADER BENT EN DE VENT IN DE SPIEGEL
          <br />
          NIET MEER HERKENT: <span className="text-primary">KIJK DIT.</span>
        </motion.h2>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 bg-card aspect-video flex items-center justify-center group cursor-pointer"
        >
          {/* Thumbnail overlay */}
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&fit=crop"
            alt="VSL thumbnail"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />

          {/* Play button */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/40 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
            </div>
            <p className="font-body text-sm text-foreground/60 tracking-wide">
              Jouw VSL video, hier plaatsen
            </p>
          </div>
        </motion.div>


      </div>
    </section>
  );
}