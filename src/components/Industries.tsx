import { motion } from "framer-motion";

const industries = [
  {
    name: "Healthcare & Diagnostics",
    challenges: ["Manual patient data handling", "Compliance bottlenecks"],
    deploy: ["AI-powered diagnostic workflows", "Automated compliance reporting"],
    impact: ["30–40% reduction in admin overhead", "1.5× faster diagnostic cycles"],
  },
  {
    name: "Logistics & Supply Chain",
    challenges: ["Manual coordination", "SLA delays"],
    deploy: ["AI dispatch agents", "Automated status workflows"],
    impact: ["30–40% manual reduction", "1.5–2× faster cycles"],
  },
  {
    name: "Manufacturing",
    challenges: ["Quality control delays", "Production scheduling gaps"],
    deploy: ["Predictive maintenance systems", "Automated production scheduling"],
    impact: ["35% reduction in downtime", "1.8× faster production cycles"],
  },
  {
    name: "Financial Services",
    challenges: ["Regulatory compliance overhead", "Manual risk assessment"],
    deploy: ["Automated compliance workflows", "AI-driven risk models"],
    impact: ["30% compliance cost reduction", "2× faster risk assessment"],
  },
  {
    name: "EdTech",
    challenges: ["Manual content management", "Disconnected learning platforms"],
    deploy: ["AI content orchestration", "Integrated learning pipelines"],
    impact: ["30% content delivery improvement", "1.5× faster onboarding"],
  },
  {
    name: "Service Businesses",
    challenges: ["Client coordination overhead", "Project tracking gaps"],
    deploy: ["AI project management agents", "Automated client workflows"],
    impact: ["35% operational overhead reduction", "1.5× faster project delivery"],
  },
  {
    name: "Tech Startups",
    challenges: ["Infrastructure scaling pain", "Resource allocation"],
    deploy: ["Auto-scaling infrastructure", "AI-driven resource optimization"],
    impact: ["40% infrastructure cost reduction", "2× faster deployments"],
  },
];

const Industries = () => {
  return (
    <section id="industries" className="section-padding bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-20">

          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit mb-16 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-semibold tracking-wider uppercase mb-6">
                Industries
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                Industries We Serve
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Tailored intelligence for high-stakes sectors. We deploy domain-specific agents that understand your operational reality and drive measurable outcomes from day one.
              </p>
            </motion.div>
          </div>

          {/* Scrollable Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-40 pb-32">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="py-8 border-l-2 border-white/5 pl-8 md:pl-12 backdrop-blur-sm"
              >
                <h3 className="text-3xl font-display font-bold mb-10 text-foreground">
                  {ind.name}
                </h3>

                <div className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    {/* Challenges */}
                    <div>
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                        Challenges
                      </h4>
                      <ul className="space-y-4">
                        {ind.challenges.map((c) => (
                          <li key={c} className="text-muted-foreground text-sm leading-relaxed border-l border-white/10 pl-4">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deploy */}
                    <div>
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        What We Deploy
                      </h4>
                      <ul className="space-y-4">
                        {ind.deploy.map((d) => (
                          <li key={d} className="text-foreground text-sm font-medium leading-relaxed border-l border-white/10 pl-4">
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Impact */}
                  <div>
                    <h4 className="text-xs font-semibold text-emerald-500 uppercase tracking-wide mb-5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Impact
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {ind.impact.map((im) => (
                        <div key={im} className="bg-white/5 rounded-lg p-4 border border-white/5">
                          <p className="text-emerald-400 font-medium text-sm">{im}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
