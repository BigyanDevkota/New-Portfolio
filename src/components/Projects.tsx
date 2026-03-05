"use client";

import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink, Folder } from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;
  const githubUrl = portfolioData.personalInfo.social.github;

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-background">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 text-primary mb-4">
              <Folder size={18} />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground font-medium text-lg leading-relaxed">
              A curated selection of my technical work, focusing on performance, 
              scalability, and user-centric architecture.
            </p>
          </motion.div>

          <motion.a
            href={githubUrl}
            target="_blank"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group hidden md:flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
          >
            View GitHub Archive
            <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group relative h-full flex flex-col rounded-[2.5rem] glass-panel border-white/5 hover:border-primary/20 overflow-hidden transition-all duration-500 hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay for category */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-[10px] font-black text-foreground uppercase tracking-widest">
                      {project.description}
                    </span>
                  </div>
                  {/* Subtle Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-black tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex gap-3 text-muted-foreground">
                      {project.link && (
                        <a href={project.link} target="_blank" className="hover:text-primary transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm font-medium text-muted-foreground mb-6 line-clamp-2">
                    {project.details}
                  </p>

                  <div className="mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-secondary/50 text-[10px] font-bold text-muted-foreground border border-white/5 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Action */}
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                      <span>Live Project</span>
                      <div className="h-px flex-grow bg-primary/20" />
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile-only GitHub Link */}
        <div className="mt-12 text-center md:hidden">
            <a href={githubUrl} className="text-sm font-bold text-primary flex items-center justify-center gap-2">
                <Github size={18} /> Explore more on GitHub
            </a>
        </div>
      </div>
    </section>
  );
}
