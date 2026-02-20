import { motion } from "framer-motion";

interface RevealOnScrollProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    yOffset?: number;
    fullWidth?: boolean;
}

const RevealOnScroll = ({
    children,
    className = "",
    delay = 0,
    yOffset = 40,
    fullWidth = true
}: RevealOnScrollProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            className={className}
            style={{ width: fullWidth ? "100%" : "auto" }}
        >
            {children}
        </motion.div>
    );
};

export default RevealOnScroll;
