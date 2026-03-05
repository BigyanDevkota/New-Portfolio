"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Using Lucide for consistency
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevents hydration mismatch
    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="w-10 h-10" />;

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="glass-panel relative p-2.5 rounded-xl transition-all duration-300 active:scale-90 group overflow-hidden"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={isDark ? "dark" : "light"}
                    initial={{ y: 20, opacity: 0, rotate: 45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="relative z-10"
                >
                    {isDark ? (
                        <Sun className="w-5 h-5 text-amber-400 fill-amber-400/20" />
                    ) : (
                        <Moon className="w-5 h-5 text-indigo-600 fill-indigo-600/10" />
                    )}
                </motion.div>
            </AnimatePresence>
            
            {/* Hover highlight effect */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
    );
}