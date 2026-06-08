import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ManifestoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-36">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/3 to-transparent" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-primary" />
          <span className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary">
            De waarheid die niemand je vertelt
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground mb-10"
        >
          IK GA JE IETS VERTELLEN WAT{" "}
          <span className="text-primary">NIEMAND</span> JE VERTELT.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            Na je dertigste, als het leven voller wordt, de kinderen komen en de
            carrière trekt, begint het lichaam van de meeste vaders langzaam
            achteruit te gaan. Niet omdat het moet. Maar omdat niemand ze ooit
            heeft geleerd hoe het anders kan.
          </p>
          <p>
            <strong className="text-foreground">Ik weet hoe dat voelt.</strong>{" "}
            Ik ben opgegroeid met overgewicht. Ik ken de schaamte. Ik ken de
            strijd. Maar ik weiger te accepteren dat dit onze eindbestemming is.
          </p>
          <p>
            De vaders vóór ons groeiden op in een wereld zonder goede informatie
            en zonder toegang tot de juiste begeleiding. Ze wisten simpelweg
            niet beter. Maar jij? Jij hebt de kennis. De tools. De begeleiding.
            Het is er allemaal.
          </p>

          <p className="font-display text-2xl md:text-3xl text-primary tracking-wide py-4">
            De enige vraag is of je er iets mee doet.
          </p>

          <p>
            Ik geloof in een nieuwe generatie vaders. Mannen die na hun
            dertigste niet achteruitgaan, maar opstaan. Mannen die het voorbeeld
            zijn waar hun kinderen recht op hebben.{" "}
            <strong className="text-foreground">
              Niet perfect. Wel bewust. Wel sterk. Wel aanwezig.
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
