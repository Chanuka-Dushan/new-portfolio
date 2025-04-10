import MainLayout from "@/components/layout/main-layout";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ProjectsSection from "@/components/sections/projects-section";
import ContactSectionStatic from "@/components/sections/contact-section-static";

export default function HomeStatic() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSectionStatic />
    </MainLayout>
  );
}