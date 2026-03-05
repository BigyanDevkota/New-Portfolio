"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import portfolioData from "@/data/portfolio.json";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 pointer-events-none">
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`pointer-events-auto flex items-center justify-between gap-8 px-5 py-3 rounded-2xl transition-all duration-300 max-w-5xl w-full border ${scrolled
                    ? "glass-panel shadow-2xl scale-[0.98] border-white/20 dark:border-white/5"
                    : "bg-transparent border-transparent"
                    }`}
            >
                {/* Logo/Identity */}
                <a href="#home" className="group relative flex items-center justify-center w-10 h-10">
                    {/* 1. Glow Effect (Behind) */}
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/40 transition-all duration-500 -z-10" />

                    {/* 2. Logo Container */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 flex items-center justify-center">
                        <Image
                            src="/images/Bigyan_Devkota_logo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            priority // This ensures the logo loads instantly
                            className="object-contain transition-transform duration-300 group-hover:scale-110"
                            /* If the image still doesn't show, this will log the error to your browser console */
                            onError={() => console.error("Could not find logo.png in public/images/")}
                        />
                    </div>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1 bg-secondary/50 dark:bg-white/5 p-1 rounded-xl border border-white/10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all rounded-lg hover:bg-white/10"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-2 md:hidden rounded-xl glass-panel text-foreground"
                        aria-label="Toggle Menu"
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    <a
                        href="#contact"
                        className="hidden md:block px-5 py-2 text-xs font-bold bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity"
                    >
                        Hire Me
                    </a>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="fixed inset-x-4 top-24 pointer-events-auto md:hidden glass-panel rounded-3xl overflow-hidden z-40 border-white/20 dark:border-white/10"
                    >
                        <div className="p-3 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center px-6 py-4 rounded-2xl text-base font-semibold text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}