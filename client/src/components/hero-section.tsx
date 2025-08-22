import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Typewriter from "./typewriter";
import profileImagePath from "@assets/b6d49343-f6ef-46b2-8de9-c73f546dded9_1755833600739.jpg";

export default function HeroSection() {
  const typewriterWords = [
    "Problem Solver",
    "MERN Stack Developer",
    "AI Enthusiast", 
    "Full Stack Developer",
    "Python Developer",
    "Next.js Developer",
    "Software Engineer",
    "Tech Innovator"
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-cyan-900/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-500 to-cyan-400 bg-clip-text text-transparent">
              Muhammad Saqib
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-medium mb-8 h-20 flex items-center justify-center md:justify-start">
            <span className="text-gray-300 mr-2">I'm a </span>
            <Typewriter 
              words={typewriterWords}
              className="bg-gradient-to-r from-primary-500 to-cyan-400 bg-clip-text text-transparent font-semibold"
            />
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            A passionate problem solver first — and a developer second. Building digital systems that are not just functional, but impactful. 
            Every line of code I write is fueled by purpose: to solve real problems and create meaningful change.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
              data-testid="download-resume"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="contact-button"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end animate-slide-up">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img 
              src={profileImagePath}
              alt="Muhammad Saqib - Professional Profile"
              className="relative z-10 w-80 h-80 rounded-full object-cover border-4 border-primary-500/30 shadow-2xl shadow-primary-500/20"
              data-testid="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
