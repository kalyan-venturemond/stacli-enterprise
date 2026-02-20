"use client";

import { motion } from "framer-motion";

const logos = [
    { name: "n8n", src: "https://cdn.simpleicons.org/n8n" },
    { name: "OpenAI", src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "ERPNext", src: "https://cdn.simpleicons.org/erpnext" },
    { name: "Docker", src: "https://cdn.simpleicons.org/docker" },
    { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql" },
    { name: "Redis", src: "https://cdn.simpleicons.org/redis" },
    { name: "Linux", src: "https://cdn.simpleicons.org/linux" },
    { name: "GitHub", src: "https://cdn.simpleicons.org/github" }
];

import RevealOnScroll from "./RevealOnScroll";

const TechStackStrip = () => {
    return (
        <section className="bg-background border-b border-white/5 py-12 overflow-hidden relative z-10">
            {/* Gradient Edges */}
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center select-none opacity-50 hover:opacity-100 transition-all duration-500 cursor-pointer"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="w-full h-full object-contain"
                                    style={{ filter: "brightness(0) invert(1)" }}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default TechStackStrip;
