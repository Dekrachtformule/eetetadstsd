import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Flame, Clock, Zap, Shield } from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "-5 TOT -15 KG VETVERLIES",
    subtitle: "Niet alleen 'minder dik'",
    description:
      "Het doel is dat je gespierder, sterker en leaner bent dan ooit tevoren. Jij ziet het. Je vrouw ziet het. En je kids ervaren het aan je energie. Dat is het verschil tussen afslanken en echt veranderen.",
  },
  {
    icon: Clock,
    title: "KORT. INTENS. KLAAR.",
    subtitle: "Past in elk vaderleven",
    description:
      "Geen halve dag in de gym. Korte, intensieve sessies die raak zijn. Twee tot vier keer per week. Thuis of in de gym. Je gezin merkt niet eens dat je weg was.",
  },
  {
    icon: Zap,
    title: "ENERGIE OM TE RAVOTTEN",
    subtitle: "Van leeg naar aanwezig",
    description:
      "Je komt thuis van werk en gaat met je zoontje voetballen in de tuin. Vroeger lag je direct op de bank. Dat is de beste investering die jij kan doen. De kilo's minder? Bonus.",
  },
  {
    icon: Shield,
    title: "KENNIS DIE BLIJFT",
    subtitle: "Onafhankelijk na 12 weken",
    description:
      "Elke week bouw je kennis op die je de rest van je leven bijblijft. Na twaalf weken ben je niet alleen fysiek veranderd. Je begrijpt ook waarom. Dat is wat je onafhankelijk maakt van welk programma dan ook.",
  },
];

function BenefitCard({ benefit, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = benefit.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative"
    >
      <div className="relative h-full p-8 md:p-10 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden hover:border-primary/40 transition-all duration-500">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/0 group-hover:bg-primary/8 rounded-full blur-3xl transition-all duration-700" />

        <div className="relative">
          <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
            <Icon className="w-6 h-6 text-primary" />
          </div>

          <p className="font-body text-xs font-medium tracking-[0.15em] uppercase text-primary mb-2">
            {benefit.subtitle}
          </p>
          <h3 className="font-display text-2xl md:text-3xl tracking-wide text-foreground mb-4">
            {benefit.title}
          </h3>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            {benefit.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function BenefitsSection() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative diagonal-top bg-secondary py-32 md:py-44">
      {/* Large amber block — unexpected layout element, full-bleed left side */}
      <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-primary" />
      <div className="absolute left-0 top-16 h-64 md:h-80 w-[45vw] md:w-[35vw] bg-primary/15 blur-none" style={{clipPath:"polygon(0 0, 100% 0, 70% 100%, 0 100%)"}} />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary">
              Jouw transformatie
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground max-w-3xl"
          >
            JIJ HERKENT
            <br />
            <span className="text-primary">JEZELF WEER</span>
            <br />
            IN DE SPIEGEL.
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}