import { motion } from "framer-motion";
import { TrendingUp, Clock, Activity } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const metrics = [
  {
    id: 1,
    value: "40%",
    label: "Manual effort reduction",
    desc: "By automating repetitive workflows.",
    icon: Activity,
    progress: 40
  },
  {
    id: 2,
    value: "2x",
    label: "Faster execution cycles",
    desc: "Accelerating go-to-market speed.",
    icon: Clock,
    progress: 90
  },
  {
    id: 3,
    value: "45%",
    label: "Operational waste reduction",
    desc: "Optimizing resource allocation.",
    icon: TrendingUp,
    progress: 45
  },
];

const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/5 pb-8">
            <div>
              <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-semibold tracking-wider uppercase mb-6">
                IMPACT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Measurable Impact
              </h2>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid gap-6">
          {metrics.map((m, i) => (
            <RevealOnScroll key={m.id} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-card/10 backdrop-blur-sm p-6 hover:border-emerald-500/30 transition-all duration-500">

                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-transparent transition-all duration-700" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">

                  {/* Icon & Label */}
                  <div className="flex items-center gap-4 w-full md:w-auto min-w-[240px]">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                      <m.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground tracking-tight">{m.label}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{m.desc}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 + (i * 0.1) }}
                      className="h-full bg-emerald-500 relative"
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-2 shadow-[0_0_10px_rgba(16,185,129,0.8)] bg-white/80 blur-[1px]" />
                    </motion.div>
                  </div>

                  {/* Value */}
                  <div className="text-right min-w-[100px]">
                    <span className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight tabular-nums block leading-none">
                      {m.value}
                    </span>
                  </div>

                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Impact;
