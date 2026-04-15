import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MouseRevealBackground from "@/components/MouseRevealBackground";
import FadeWrapper from "@/components/FadeWrapper";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      
      <LanguageSwitcher />
      <MouseRevealBackground />

      <FadeWrapper>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Timeline />
        <Footer />
      </FadeWrapper>

    </main>
  );
}