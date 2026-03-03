import Nav from "@/components/nav/Nav";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Achievements from "@/components/achievements/Achievements";
import Philosophy from "@/components/philosophy/Philosophy";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-base text-text-primary font-body tracking-tight overflow-x-hidden selection:bg-accent-glow selection:text-accent-primary">
      <Nav />
      {/* Sections stacked continuously allowing Intersection Observer scrolls inline */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
