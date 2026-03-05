import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import portfolioData from "@/data/portfolio.json";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 space-y-32 pb-20">
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}