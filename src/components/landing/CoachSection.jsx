import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Clock } from "lucide-react";

const credentials = [
  { icon: Clock, value: "12 jaar", label: "Fulltime coach" },
  { icon: Award, value: "NK-titels", label: "Behaald met cliënten" },
  { icon: Users, value: "Vader van 2", label: "Jongens" },
];

export default function CoachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-[380px] mx-auto lg:mx-0">
              <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-black/40 rotate-[-2deg]">
                <img
                  src="/jeremy.jpg"
                  alt="Jeremy, coach Het Vaderfiguur"
                  className="w-full h-[440px] object-cover"
                />
              </div>
              {/* Accent block behind */}
              <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-2xl bg-primary/15 rotate-[3deg]" />
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7"
          >
            {/* Title with accent line */}
            <div className="flex items-center gap-4 mb-7">
              <div className="h-12 w-1.5 bg-primary rounded-full shrink-0" />
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground">
                IK HEB EEN <span className="text-primary">MISSIE.</span>
              </h2>
            </div>

            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Ik geloof in een nieuwe generatie vaders.{" "}
              <br className="sm:hidden" />
              Mannen die na hun dertigste niet achteruitgaan,{" "}
              <br className="sm:hidden" />
              maar opstaan. Mannen die het voorbeeld zijn waar hun kinderen
              recht op hebben.{" "}
              <strong className="text-foreground">
                Niet perfect. Wel bewust. Wel sterk. Wel aanwezig.
              </strong>
            </p>

            {/* Credentials */}
            <div className="grid sm:grid-cols-3 gap-3">
              {credentials.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-primary rounded-xl px-4 py-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0a0a0a]/12 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-display text-base text-primary-foreground leading-none">
                        {c.value}
                      </p>
                      <p className="font-body text-xs text-primary-foreground/75 mt-1">
                        {c.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
