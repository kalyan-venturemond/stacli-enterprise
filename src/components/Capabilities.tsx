import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Bot, Database, Server } from "lucide-react";

const capabilities = [
    {
        num: "01",
        title: "AI Strategy &\nImplementation",
        tag: "FOUNDATION",
        icon: Brain,
        subtitle: "Align execution with high-impact business goals.",
        points: ["Automation roadmap", "Workflow redesign", "Operational transformation planning"],
    },
    {
        num: "02",
        title: "AI Agents &\nAutonomous Workflows",
        tag: "EXECUTION",
        icon: Bot,
        subtitle: "Deploy systems that execute workflows autonomously.",
        points: ["Customer & partner AI agents", "Exception handling automation", "Event-triggered actions", "Intelligent alerts"],
    },
    {
        num: "03",
        title: "Data Engineering &\nOrchestration",
        tag: "INTELLIGENCE",
        icon: Database,
        subtitle: "Unify fragmented data into actionable intelligence.",
        points: ["Real-time data pipelines", "ERP / CRM integration", "API-first architecture", "Event-driven systems"],
    },
    {
        num: "04",
        title: "Infrastructure &\nPlatform Engineering",
        tag: "SCALE",
        icon: Server,
        subtitle: "Cloud-native foundations built for scale.",
        points: ["Cloud-native systems", "Secure deployments", "High-availability backend", "Performance optimization"],
    },
];

const CapabilityRow = ({ cap, index }: { cap: typeof capabilities[0]; index: number }) => {
    const rowRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: rowRef,
        offset: ["start 85%", "start 30%"],
    });

    const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

    return (
        <motion.div
            ref={rowRef}
            style={{ opacity, y }}
            className="relative group"
        >
            {/* Top separator line that draws itself */}
            <div className="relative h-px w-full bg-white/5 overflow-hidden">
                <motion.div
                    style={{ width: lineWidth }}
                    className="absolute top-0 left-0 h-full bg-emerald-500/60"
                />
            </div>

            {/* Row Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 py-10 md:py-14">

                {/* Left: Number */}
                <div className="md:col-span-2 flex items-start mb-4 md:mb-0">
                    <span
                        className="font-display font-black text-[72px] md:text-[100px] leading-none tracking-tighter text-transparent bg-clip-text select-none transition-all duration-500"
                        style={{
                            backgroundImage: "linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 100%)",
                            WebkitTextStroke: "1px rgba(16,185,129,0.2)"
                        }}
                    >
                        {cap.num}
                    </span>
                </div>

                {/* Middle: Tag + Title */}
                <div className="md:col-span-5 flex flex-col justify-center pr-0 md:pr-12 mb-6 md:mb-0">
                    <span className="text-[10px] font-bold tracking-[0.35em] text-emerald-500/60 uppercase mb-4 block">
                        {cap.tag}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground whitespace-pre-line leading-tight tracking-tight">
                        {cap.title}
                    </h3>
                </div>

                {/* Right: Description + Points */}
                <div className="md:col-span-5 flex flex-col justify-center border-l border-white/5 pl-0 md:pl-12">
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                        {cap.subtitle}
                    </p>
                    <ul className="space-y-3">
                        {cap.points.map((point, i) => (
                            <li
                                key={point}
                                className="flex items-center gap-4 text-sm text-foreground/60"
                            >
                                <div className="w-5 h-px bg-emerald-500/40 shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/[0.02] transition-colors duration-700 pointer-events-none rounded-lg" />
        </motion.div>
    );
};

const Capabilities = () => {
    return (
        <section id="capabilities" className="bg-background relative py-24 md:py-40 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20 md:mb-28 max-w-xl"
                >
                    <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-semibold tracking-wider uppercase mb-6">
                        What We Engineer
                    </div>
                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-none tracking-tighter mb-8">
                        One Model.<br />
                        <span className="text-emerald-400">Four Layers.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        A single execution framework applied across every client engagement and internal product.
                    </p>
                </motion.div>

                {/* Capability Rows */}
                <div>
                    {capabilities.map((cap, i) => (
                        <CapabilityRow key={cap.num} cap={cap} index={i} />
                    ))}

                    {/* Final bottom line */}
                    <div className="h-px w-full bg-white/5" />
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
