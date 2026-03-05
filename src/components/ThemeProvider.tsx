"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <NextThemesProvider 
            attribute="class" 
            defaultTheme="dark" 
            enableSystem={true} // Changed to true so it respects OS preference initially
        >
            {children}
        </NextThemesProvider>
    );
}
