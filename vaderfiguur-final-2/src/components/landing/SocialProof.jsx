import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Martijn van der Berg",
    role: "Bouwvakker, vader van 2, Utrecht",
    text: "In 10 weken 11 kilo kwijt. Ik train 3x per week 40 minuten thuis, terwijl de kids slapen. Mijn vrouw zei vorige week: je ziet eruit zoals toen we net samen waren. Dat raakte me meer dan elk getal op de weegschaal.",
    result: "-11 kg",
    weeks: "10 weken",
    featured: false,
  },
  {
    name: "Jeroen Smits",
    role: "Projectmanager, vader van 3, Amsterdam",
    text: "Ik had alles geprobeerd. Apps, PT's, schema's van internet. Vaderfiguur was anders: geen bullshit, geen extreme dingen. Gewoon een slim systeem dat paste bij mijn chaotische leven. En ineens lukte het wel.",
    result: "-9 kg",
    weeks: "11 weken",
    featured: true,
  },
  {
    name: "Dennis Koole",
    role: "Ondernemer, vader van 1, Rotterdam",
    text: "Wat me het meest verraste was de energie. Ik kom nu thuis van werk en ga met mijn zoontje voetballen in de tuin. Vroeger lag ik direct op de bank. Dat alleen al was elke cent waard.",
    result: "-7 kg",
    weeks: "9 weken",
    featured: false,
  },
];

function Card({ t }) {
  return (
    <div
      className={`relative h-full p-8 md:p-10 rounded-2xl border transition-all duration-500 ${
        t.featured
          ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/25"
          : "bg-card/60 border-border/50 hover:border-primary/40"
      }`}
    >
      {/* Result badges */}
      <div className="absolute -top-4 right-8 flex gap-2">
        <div
          className={`font-display text-xl px-4 py-1.5 rounded-full shadow-lg ${
            t.featured
              ? "bg-[#0a0a0a] text-primary"
              : "bg-primary text-primary-foreground shadow-primary/25"
          }`}
        >
          {t.result}
        </div>
        <div
          className={`font-body text-xs font-semibold px-3 py-1.5 rounded-full flex items-center ${
            t.featured
              ? "bg-[#0a0a0a] text-primary"
              : "bg-secondary border border-border text-foreground"
          }`}
        >
          {t.weeks}
        </div>
      </div>

      {/* Big yellow quote mark */}
      <span
        className={`font-display text-7xl leading-[0.5] block mb-5 ${
          t.featured ? "text-[#0a0a0a]" : "text-primary"
        }`}
      >
        &ldquo;
      </span>

      <p
        className={`font-body text-base md:text-lg leading-relaxed mb-8 ${
          t.featured ? "text-primary-foreground" : "text-foreground/85"
        }`}
      >
        {t.text}
      </p>

      <div
        className={`flex items-center justify-between pt-5 border-t ${
          t.featured ? "border-[#0a0a0a]/15" : "border-border/50"
        }`}
      >
        <div>
          <p
            className={`font-display text-lg tracking-wide ${
              t.featured ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {t.name}
          </p>
          <p
            className={`font-body text-sm ${
              t.featured ? "text-primary-foreground/70" : "text-muted-foreground"
            }`}
          >
            {t.role}
          </p>
        </div>
        <div className="flex gap-0.5 shrink-0">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              className={`w-4 h-4 ${
                t.featured
                  ? "fill-[#0a0a0a] text-[#0a0a0a]"
                  : "fill-primary text-primary"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const go = (dir) => {
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 md:py-28 bg-secondary diagonal-top">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary">
              Resultaten
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground"
          >
            ZIJ STONDEN WAAR
            <br />
            <span className="text-primary">JIJ NU STAAT.</span>
          </motion.h2>
        </div>

        {/* Desktop: three side by side */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Card t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: swipe carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <motion.div
              className="flex touch-pan-y"
              animate={{ x: `-${active * 100}%` }}
              transition={{ type: "tween", duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              dragMomentum={false}
              onDragEnd={(e, info) => {
                const threshold = 50;
                if (info.offset.x < -threshold && active < testimonials.length - 1) {
                  setActive(active + 1);
                } else if (info.offset.x > threshold && active > 0) {
                  setActive(active - 1);
                }
              }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full shrink-0 px-1 pt-4">
                  <Card t={t} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              aria-label="Vorige"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Ga naar ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Volgende"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
