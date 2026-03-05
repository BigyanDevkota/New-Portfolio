"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Sparkles, Download, MessageSquare } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export default function Hero() {
    const { name, typingTexts, bio } = portfolioData.personalInfo;
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [typingTexts.length]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-glow" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-primary/20 bg-primary/5 text-xs font-bold tracking-wide uppercase text-primary">
                        <Sparkles size={14} className="animate-pulse" />
                        <span>Available for Projects</span>
                    </div>
                </motion.div>

                {/* Main Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
                        <span className="text-foreground block opacity-90">Hi, I'm</span>
                        <span className="text-gradient drop-shadow-2xl">
                            {name}
                        </span>
                    </h1>
                </motion.div>

                {/* Dynamic Roles */}
                <div className="h-16 mb-8 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={currentTextIndex}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="text-xl md:text-3xl font-semibold text-muted-foreground"
                        >
                            <span className="text-foreground/20 mr-2">{"//"}</span>
                            {typingTexts[currentTextIndex]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Bio */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
                >
                    {bio}
                </motion.p>

                {/* Call to Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-foreground text-background rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-foreground/10"
                    >
                        Explore My Work
                        <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-4 glass-panel rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 dark:hover:bg-white/5 transition-all hover:scale-[1.02] active:scale-95"
                    >
                        <MessageSquare size={18} />
                        Let's Talk
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 p-1 flex justify-center">
                    <motion.div
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-2 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}