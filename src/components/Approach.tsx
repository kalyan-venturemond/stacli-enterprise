import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Infrastructure Assessment", desc: "Deep analysis of existing systems, workflows, and bottlenecks." },
  { icon: PenTool, num: "02", title: "Architecture Design", desc: "Blueprint for scalable, intelligent infrastructure." },
  { icon: Rocket, num: "03", title: "Engineering & Deployment", desc: "Production-grade implementation with rigorous testing." },
  { icon: TrendingUp, num: "04", title: "Optimization & Scale", desc: "Continuous improvement and performance tuning." },
];

const Approach = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="approach" className="section-padding bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative" ref={containerRef}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 relative z-10"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-semibold tracking-wider uppercase mb-6">
            Our Approach
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">How We Work</h2>
        </motion.div>

        {/* Vertical Line Container (Desktop) */}
        <div className="absolute left-1/2 top-32 bottom-20 w-px bg-white/5 -translate-x-1/2 hidden md:block" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-1/2 top-32 w-0.5 bg-gradient-to-b from-primary via-emerald-400 to-primary -translate-x-1/2 shadow-[0_0_15px_rgba(16,185,129,0.5)] origin-top hidden md:block z-0"
        />

        <div className="flex flex-col gap-10 relative z-10">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex items-center w-full justify-between ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Card Side */}
                <div className="w-full md:w-[45%]">
                  <div className="glass-card p-6 md:p-8 border border-white/10 rounded-2xl relative overflow-hidden group hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">

                    {/* Number Watermark */}
                    <span className="font-display text-6xl font-bold text-white/[0.03] absolute top-2 right-4 select-none pointer-events-none transition-all duration-500 group-hover:text-primary/10 group-hover:scale-110 md:text-7xl">
                      {step.num}
                    </span>

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Dot (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(16,185,129,0.5)] z-20"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary m-auto animate-pulse" />
                  </motion.div>
                </div>

                {/* Empty Side for Balance (Desktop) */}
                <div className="w-[45%] hidden md:block" />

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Approach;
