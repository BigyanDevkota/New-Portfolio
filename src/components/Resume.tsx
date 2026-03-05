"use client";

import { motion } from "motion/react";
import portfolioData from "@/data/portfolio.json";
import { GraduationCap, Calendar, BookOpen, Download } from "lucide-react";

export default function Resume() {
  const { education } = portfolioData;

  return (
    <section id="resume" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 text-primary mb-4">
            <GraduationCap size={20} />
            <span className="text-xs font-black uppercase tracking-[0.2em]">My Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Academic <span className="text-gradient">History</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Vertical Line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/10 to-transparent sm:-translate-x-px" />

          <div className="space-y-12 sm:space-y-16">
            {education.map((edu, i) => (
              <motion.div
                key={`${edu.degree}-${i}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`relative flex items-center justify-between gap-8 sm:gap-12 flex-col sm:flex-row ${
                  i % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] sm:left-1/2 sm:ml-[-5px] top-8 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)] z-10 border-2 border-background" />

                {/* Content Card */}
                <div className="sm:w-1/2 w-full pl-8 sm:pl-0">
                  <div className="group relative p-8 rounded-[2.5rem] glass-panel border-white/5 hover:border-primary/20 transition-all duration-500 shadow-2xl overflow-hidden">
                    {/* Period Badge */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Calendar size={14} />
                      </div>
                      <span className="text-xs font-black text-primary tracking-widest uppercase">
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h4>
                    
                    <p className="text-primary/70 font-bold mb-6 text-sm flex items-center gap-2">
                      <span className="w-4 h-px bg-primary/30" />
                      {edu.institution}
                    </p>

                    <div className="pt-6 border-t border-white/5 space-y-2">
                      <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                        <BookOpen size={12} className="text-primary" />
                        Focus Area
                      </div>
                      <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                        {edu.subject}
                      </p>
                    </div>

                    {/* Subtle Corner Glow */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
                  </div>
                </div>

                {/* Empty Space for ZigZag */}
                <div className="sm:w-1/2 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resume Download CTA */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 flex justify-center"
        >
          <a 
            href="#" // Ensure you have your resume in public/resume.pdf
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-secondary hover:bg-secondary/80 text-foreground font-black text-xs uppercase tracking-widest transition-all border border-white/5 group"
          >
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            Download Full CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
