import { CodeShowcase } from "@/components/CodeShowcase";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TeachingSection } from "@/components/TeachingSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <CodeShowcase />
        <TeachingSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
