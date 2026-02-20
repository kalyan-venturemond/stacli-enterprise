import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stats = [
  { value: "20–35%", label: "Capacity lost to manual workflows", color: "text-red-400" },
  { value: "Disconnected", label: "Systems creating data silos", color: "text-orange-400" },
  { value: "Delayed", label: "Decision cycles slowing execution", color: "text-amber-400" },
  { value: "Human-Heavy", label: "Task chains limiting scale", color: "text-yellow-400" },
];

const OperationalReality = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Split Layout Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: The Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-semibold tracking-wider uppercase mb-6">
            The Bottleneck
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
            Most companies don't have a technology problem.<br />
            <span className="text-emerald-400">They have a coordination problem.</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8">
            Your tools are powerful, but your workflows are fragmented. The gap between intention and execution is where growth stalls.
          </p>

          <div className="h-1 w-20 bg-emerald-500 rounded-full" />
        </motion.div>

        {/* Right: The Evidence (System Diagnostic Terminal) */}
        <div className="relative">
          {/* Decorative blurred background blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            style={{ y }}
            className="relative z-10 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">EXE.ANALYTICS</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-8 space-y-2 relative">
              {/* Vertical connecting line for visual hierarchy */}
              <div className="absolute left-[2.25rem] top-12 bottom-12 w-px bg-white/5" />

              {stats.map((stat, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  key={stat.label}
                  className="group flex items-start gap-6 relative z-10 pt-4"
                >
                  {/* Status Node */}
                  <div className="w-2 h-2 rounded-full bg-white/20 mt-3 border-[3px] box-content border-[#0a0a0a] group-hover:bg-emerald-400 shadow-[0_0_0_0_rgba(16,185,129,0)] group-hover:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-300 relative z-10 shrink-0" />

                  <div className="flex-1 pb-6 border-b border-white/5 group-hover:border-emerald-500/20 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-baseline gap-2 mb-2">
                      <span className="font-display text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/60 leading-relaxed font-mono">
                      {'>'} {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scanning line */}
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="absolute left-0 w-full h-px bg-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-20 pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OperationalReality;
