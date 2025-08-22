import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import EducationSection from "@/components/education-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import GoalsSection from "@/components/goals-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900 text-dark-50">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <GoalsSection />
        <ContactSection />
      </main>
      <footer className="bg-dark-950 border-t border-primary-500/20 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-xl font-bold bg-gradient-to-r from-primary-500 to-cyan-400 bg-clip-text text-transparent mb-2">
            Muhammad Saqib
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Problem Solver • MERN Stack Developer • AI Enthusiast
          </p>
          <p className="text-gray-500 text-xs">
            © 2024 Muhammad Saqib. All rights reserved. Built with passion and purpose.
          </p>
        </div>
      </footer>
    </div>
  );
}
