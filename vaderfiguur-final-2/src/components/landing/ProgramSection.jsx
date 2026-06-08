import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const blocks = [
  {
    number: "01",
    title: "Training die past in jouw tijd.",
    description:
      "Thuis of in de gym. Twee tot vier keer per week, 30 tot 60 minuten. Geen uur opwarmen, geen drie uur trainen. Maximaal resultaat in minimale tijd.",
    tag: "Op maat",
  },
  {
    number: "02",
    title: "Voeding die in je leven past.",
    description:
      "Geen plan dat sneuvelt zodra het leven even niet meewerkt. Wel een aanpak waarbij je leert omgaan met verjaardagen, vakanties en pizza-avonden, zonder dat het je resultaat sloopt.",
    tag: "Familie-proof",
  },
  {
    number: "03",
    title: "Educatie waar je iets aan hebt.",
    description:
      "Elke week korte, praktische uitleg over training, voeding en leefstijl. Geen theorie-bombardement. Dingen die je dezelfde dag nog toepast.",
    tag: "Direct toepasbaar",
  },
  {
    number: "04",
    title: "We doen dit samen.",
    description:
      "Je hoeft het niet zelf uit te vogelen. Wekelijkse feedbackmomenten, directe chat-support, reactie binnen 24 uur. Iemand die meedenkt als het leven tegenzit, niet wegkijkt.",
    tag: "1-op-1, geen groep",
  },
];

const stats = [
  { num: "12 wkn", label: "Volledig op maat" },
  { num: "2 - 4x", label: "Trainen per week, 45 min" },
  { num: "< 24 u", label: "Reactie op je vragen" },
];

function ProgramCard({ block, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.2, 0.8, 0.2, 1] }}
      className="group relative h-full"
    >
      <div className="relative h-full flex flex-col p-7 md:p-8 rounded-2xl bg-primary text-primary-foreground overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30">
        {/* Dark glow on hover */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-black/0 group-hover:bg-black/10 rounded-full blur-3xl transition-all duration-700" />

        <div className="relative flex-1">
          <div className="font-display text-5xl md:text-6xl text-primary-foreground leading-none mb-5">
            {block.number}
          </div>
          <h3 className="font-display text-xl md:text-2xl tracking-wide text-primary-foreground mb-3">
            {block.title}
          </h3>
          <p className="font-body text-sm md:text-base text-primary-foreground/80 leading-relaxed">
            {block.description}
          </p>
        </div>

        <div className="relative mt-6">
          <span className="inline-block font-body text-xs font-bold tracking-[0.15em] uppercase text-primary bg-[#0a0a0a] rounded-full px-4 py-1.5">
            {block.tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProgramSection() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="hoe" className="relative py-20 md:py-28 bg-secondary diagonal-top">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="mb-12 md:mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-primary"
          >
            <span className="font-body text-sm font-bold tracking-[0.2em] uppercase text-primary-foreground">
              Wat je krijgt
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground"
          >
            12 WEKEN COACHING, GEBOUWD ROND{" "}
            <span className="text-primary">JOUW LEVEN ALS VADER.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mt-6"
          >
            Geen app die je koopt en dan vergeet. Geen schema dat alleen een
            22-jarige aankan. Een traject op jouw lijf en leven geschreven.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {blocks.map((block, index) => (
            <ProgramCard key={block.number} block={block} index={index} />
          ))}
        </div>

        {/* Stat row — dark to contrast the yellow cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px mt-4 md:mt-6 rounded-2xl overflow-hidden bg-border">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a0a0a] p-7 md:p-9"
            >
              <div className="font-display text-3xl md:text-4xl text-primary mb-2">
                {stat.num}
              </div>
              <div className="font-body text-xs md:text-sm tracking-[0.1em] uppercase text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
