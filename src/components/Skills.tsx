"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";
import { Globe, Smartphone, Cpu, Database, Layout, ToolCase } from "lucide-react";

// Categorized for a more professional impact
const iconMap: Record<string, any> = {
    "Full-Stack Web": <Globe size={20} />,
    "Cross-Platform Mobile": <Smartphone size={20} />,
    "Programming Languages": <Cpu size={20} />,
    "Database Architecture": <Database size={20} />,
    "Design & Prototyping": <Layout size={20} />,
    "Tools": <ToolCase size={20} />,
};

export default function Skills() {
    const { skills } = portfolioData;
    // Professional category names
    const categories = [
        "Full-Stack Web",
        "Cross-Platform Mobile",
        "Programming Languages",
        "Database Architecture",
        "Design & Prototyping",
        "Tools"
    ];

    return (
        <section id="skills" className="relative py-32 bg-background transition-colors duration-500 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.03),transparent_70%)] -z-10" />

            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6"
                    >
                        Technical Proficiency
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        Technical <span className="text-primary">Toolkit.</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl font-medium text-lg leading-relaxed">
                        A comprehensive overview of my specialized skills in building high-performance
                        applications, from low-level systems to modern mobile experiences.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {categories.map((cat, catIdx) => (
                        <motion.div
                            key={cat}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIdx * 0.1, duration: 0.6 }}
                            className="glass-panel group p-8 rounded-[2.5rem] border-white/5 hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Subtle hover glow for the card */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

                            <div className="flex items-center gap-5 mb-10 relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {iconMap[cat]}
                                </div>
                                <div>
                                    <h3 className="text-xl font-black tracking-tight text-foreground">{cat}</h3>
                                    <div className="h-1 w-8 bg-primary/30 rounded-full mt-1 group-hover:w-16 transition-all duration-500" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-y-7 relative z-10">
                                {skills
                                    .filter((s) => s.category === cat)
                                    .map((skill, i) => (
                                        <div key={skill.name} className="group/item">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-sm font-bold text-foreground/90 group-hover/item:text-primary transition-colors tracking-tight">
                                                    {skill.name}
                                                </span>
                                                <span className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-widest">
                                                    {skill.level}%
                                                </span>
                                            </div>

                                            {/* Skill Bar Container */}
                                            <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden p-[2px] shadow-inner ring-1 ring-white/5">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                                                    className="h-full bg-gradient-to-r from-primary/80 via-primary to-blue-400 rounded-full relative shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
                                                >
                                                    {/* High-visibility animated shine */}
                                                    <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:200%_100%] animate-[shimmer_3s_infinite_linear]" />

                                                    {/* Subtle indicator bulb at the end of the progress */}
                                                    {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full blur-[2px] opacity-80" /> */}
                                                </motion.div>
                                            </div>

                                        </div>
                                    ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}