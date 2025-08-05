import MainLayout from "@/components/layout/main-layout";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ProjectsSection from "@/components/sections/projects-section";
import ContactSection from "@/components/sections/contact-section";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  // Set page title
  useEffect(() => {
    document.title = "Dushan Chanuka | Software Engineer & Mobile Developer";
  }, []);

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </motion.div>
    </MainLayout>
  );
}
