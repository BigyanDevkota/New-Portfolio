import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Bigyan Devkota | App Developer",
  description:
    "Portfolio of Bigyan Devkota — App Developer specializing in Flutter, UI/UX Design, and modern web technologies. Based in Nepal.",
  keywords: [
    "Bigyan Devkota",
    "Bigyan",
    "Indie Dev",
    "Independent Developer",
    "App Developer",
    "Flutter Developer",
    "UI/UX Designer",
    "Nepal",
    "Mobile App Development",
    "Portfolio",
  ],
  authors: [{ name: "Bigyan Devkota" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased bg-slate-950 text-slate-200 selection:bg-indigo-500/30`}>
        <ThemeProvider>
          <div className="relative min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import { Inter, Plus_Jakarta_Sans } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/ThemeProvider";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

// export const metadata: Metadata = {
//   title: "Bigyan Devkota | App Developer",
//   description: "Portfolio of Bigyan Devkota — Flutter Developer and UI/UX Designer creating premium mobile experiences.",
//   // ... rest of the metadata
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning className="scroll-smooth">
//       <body className={`${plusJakartaSans.variable} ${inter.variable} font-sans antialiased`}>
//         <ThemeProvider>
//           {/* Subtle Grid Background */}
//           <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//             <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>
//           </div>
          
//           <div className="relative z-10 flex min-h-screen flex-col">
//             {children}
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }