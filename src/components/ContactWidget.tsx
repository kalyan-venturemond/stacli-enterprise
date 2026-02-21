import { MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ContactWidget = () => {
    const location = useLocation();

    // Don't show the floating widget if the user is already on the Contact page
    if (location.pathname === "/contact") {
        return null;
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]"
            >
                <Link
                    to="/contact"
                    className="relative flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-4 md:px-6 md:py-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all duration-300 group"
                >
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-display font-bold uppercase tracking-widest text-xs md:text-sm hidden sm:block pr-1">
                        Contact Us
                    </span>

                    {/* Pulsing indicator dot indicating activity/availability */}
                    <span className="absolute top-0 right-0 flex h-3.5 w-3.5 mt-0 mr-0 sm:-mt-1 sm:-mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-full w-full bg-white border border-emerald-500"></span>
                    </span>
                </Link>
            </motion.div>
        </AnimatePresence>
    );
};

export default ContactWidget;
