import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import Skills from "@/components/Skills";
import MouseRevealBackground from "@/components/MouseRevealBackground";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import FadeWrapper from "@/components/FadeWrapper";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <MouseGlow />
      <MouseRevealBackground />
      <LanguageSwitcher />
      
      {/* CONTENT */}
      <div className="relative z-10 px-6">
        <FadeWrapper>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Timeline />
          <Footer />
        </FadeWrapper>
      </div>

    </main>
  );
}