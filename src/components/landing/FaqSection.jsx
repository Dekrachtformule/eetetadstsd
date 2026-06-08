import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ik heb echt geen tijd. Werkt dit dan wel?",
    answer:
      "Twee tot vier keer per week 45 minuten, en eten dat je gezin gewoon mee-eet. Kun je dat niet vrijmaken, dan ben je niet te druk, dan is het geen prioriteit. Maar bij de meeste vaders zit er meer ruimte dan ze denken. Dat zien we in de intake.",
  },
  {
    question: "Moet ik een streng dieet volgen of speciaal eten kopen?",
    answer:
      "Geen saai dieet. Wel voeding die lekker is, eiwitrijk, en past in een gezinsleven. Je leert zelf slimme keuzes maken en bouwt stap voor stap betere gewoontes op. Genieten kan, ik leer je hoe dat zonder verlies van resultaat.",
  },
  {
    question: "Ik heb al 3 keer eerder geprobeerd af te vallen. Wat maakt dit anders?",
    answer:
      "De meeste vaders hier hebben 3 tot 5 mislukte pogingen achter de rug. Geen wilskracht-probleem, ze hadden nooit een aanpak die past bij een leven met kinderen. Het verschil: een plan op maat, wekelijkse check-ins en een coach die in jou investeert.",
  },
  {
    question: "Ik heb thuis geen volledige gym. Kan ik dan wel meedoen?",
    answer:
      "De gym heeft de voorkeur, maar thuis trainen werkt ook, mits goed ingericht. Met roze dumbbells van 5 kilo kom je er niet, dus ik adviseer je over materiaal. Je programma schrijf ik op wat jij hebt.",
  },
  {
    question: "Is er een resultaatgarantie?",
    answer:
      "Ja. Geen resultaat na 4 weken, dan krijg je je investering terug. Ik neem alleen cliënten aan die ik echt kan helpen. De enige voorwaarde: jij houdt je aan de afspraken.",
  },
];

export default function FaqSection() {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/3 via-transparent to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary">
              Veelgestelde vragen
            </span>
            <div className="h-px w-12 bg-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground"
          >
            JIJ HEBT VRAGEN.
            <br />
            <span className="text-primary">IK HEB ANTWOORDEN.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 md:px-8 bg-card/30 data-[state=open]:border-primary/30 transition-colors duration-300"
              >
                <AccordionTrigger className="font-body text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm md:text-base text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}