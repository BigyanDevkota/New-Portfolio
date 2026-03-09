"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";
import Image from "next/image";
import { User, GraduationCap, Code2, Heart, Rocket } from "lucide-react";

export default function About() {
  const { aboutBio, details, stats } = portfolioData.personalInfo;

  const detailEntries = [
    { label: "Domain", value: details.domain, icon: <Rocket size={16} /> },
    { label: "Education", value: details.education, icon: <GraduationCap size={16} /> },
    { label: "Languages", value: details.languages, icon: <Code2 size={16} /> },
    { label: "Interests", value: details.interests, icon: <Heart size={16} /> },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image Frame */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] bg-slate-900">
              <Image
                src="/images/Bigyan_Devkota.webp"
                alt="Tech Illustration"
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Floating Stat Card */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 z-20 glass-panel p-6 rounded-3xl shadow-2xl border-primary/20"
            >
              <div className="text-center">
                <p className="text-4xl font-black text-primary leading-none mb-1">
                  {stats.projectsCompleted}+
                </p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                  Projects Developed
                </p>
              </div>
            </motion.div>

            {/* Background Blob */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 text-primary mb-4">
                <div className="w-10 h-[2px] bg-primary" />
                <span className="text-sm font-bold uppercase tracking-[0.2em]">About Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                Building Products That <span className="text-gradient">People Actually Use</span>
              </h2>
              <p className="whitespace-pre-line text-lg text-muted-foreground leading-relaxed font-medium">
                {aboutBio}
              </p>
            </motion.div>

            {/* Detail Bento Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {detailEntries.map((entry, i) => (
                <motion.div
                  key={entry.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-secondary/30 border border-white/5 hover:border-primary/20 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2 text-primary">
                    {entry.icon}
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                      {entry.label}
                    </h4>
                  </div>
                  <p className="text-sm font-bold text-foreground leading-tight">
                    {entry.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}