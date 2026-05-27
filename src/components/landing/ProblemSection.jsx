import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const painPoints = [
  {
    number: "01",
    title: "Dit is niet wie je wilt zijn.",
    description:
      "Je shirt zit strakker dan vorig jaar en op vakantiefoto's herken je jezelf niet meer. En diep van binnen weet je dat je kinderen straks naar die foto's kijken.",
  },
  {
    number: "02",
    title: "Je komt je beloftes niet na.",
    description:
      "Maandag begin ik, na deze drukke week, na de vakantie. En voor je het weet ben je drie jaar verder en draag je dezelfde broek twee maten groter.",
  },
  {
    number: "03",
    title: "Je weet niet wie je moet geloven.",
    description:
      "Carnivoor, vegan, vasten, koud douchen, iedereen schreeuwt hard, maar niemand kent jouw leven. Jij wil gewoon weten wat werkt voor een vader met een drukke baan.",
  },
  {
    number: "04",
    title: "De zoveelste poging verandert niks.",
    description:
      "Je hebt de schema's geprobeerd, de apps, de strenge weken. Twee weken vol gas, dan zakt het weg, en je staat weer precies waar je begon.",
  },
];

function PainCard({ point, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group relative h-full"
    >
      <div className="flex gap-6 md:gap-8 items-start h-full p-6 md:p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 transition-all duration-500">
        <span className="font-display text-5xl md:text-6xl text-primary shrink-0 leading-none mt-1">
          {point.number}
        </span>
        <div>
          <h3 className="font-display text-xl md:text-2xl tracking-wide text-foreground mb-3">
            {point.title}
          </h3>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            {point.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProblemSection() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 md:py-28 bg-background">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/3 to-transparent" />

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
              Wat je waarschijnlijk al weet
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground max-w-3xl"
          >
            JE VOELT HET
            <br />
            <span className="text-primary">ELKE DAG AL.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {painPoints.map((point, index) => (
            <PainCard key={point.number} point={point} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}