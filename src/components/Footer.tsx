import portfolioData from "@/data/portfolio.json";
import Image from "next/image";

import { Github, Linkedin, Twitter, Youtube, Facebook, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
    const { name, social, contact } = portfolioData.personalInfo;

    return (
        <footer className="relative mt-20 border-t border-white/10 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden border border-white/5">
                                <Image
                                    src="/images/Bigyan_Devkota_logo.png"
                                    alt="Logo"
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Brand Name */}
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter text-foreground">
                                    {name}<span className="text-primary"></span>
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">
                                    Indie Dev
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-sm mb-6 leading-relaxed">
                            Crafting high-performance mobile applications and beautiful user interfaces.
                            Based in Nepal, available for worldwide collaboration.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon href={social.github} icon={<Github size={18} />} />
                            <SocialIcon href={social.linkedin} icon={<Linkedin size={18} />} />
                            <SocialIcon href={social.twitter} icon={<Twitter size={18} />} />
                            <SocialIcon href={social.youtube} icon={<Youtube size={18} />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#about" label="About Me" />
                            <FooterLink href="#projects" label="Recent Work" />
                            <FooterLink href="#skills" label="Tech Stack" />
                            <FooterLink href="#contact" label="Get in Touch" />
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
                        <div className="space-y-4">
                            <a href={`mailto:${contact.email}`} className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                                <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors">
                                    <Mail size={16} />
                                </div>
                                {contact.email}
                            </a>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <div className="p-2 rounded-lg bg-secondary">
                                    <ArrowUpRight size={16} />
                                </div>
                                {contact.address}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-medium text-muted-foreground">
                    <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            className="p-2.5 rounded-xl glass-panel text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all" />
                {label}
            </a>
        </li>
    );
}