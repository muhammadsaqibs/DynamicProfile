import { Github, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import currencyDemo from "../asset/currency-demo.png";
import railwayDemo from "../asset/railway.png";
export default function ProjectsSection() {
  const projects = [
     {
      title: "Advanced Railway App",
      description:
        "The Railway Management System is a web-based application designed to manage railway operations such as train management, ticket booking, seat reservation, and payment handling.",
      technologies: ["php", "mysql", "html" ,"css"],
      githubUrl: "https://github.com/muhammadsaqibs/railway_management",
      demoUrl: "http://pakrailwaymanagement.free.nf/railway_management/public",
      image:
        railwayDemo,
    },
  
    {
      title: "Currency Converter",
      description:
        "Real-time currency converter with API integration, featuring multiple currencies and historical data.",
      technologies: ["JavaScript", "HTML5", "CSS3", "API"],
      githubUrl:
        "https://github.com/muhammadsaqibs/MY-CURRENCY-CONVERTER-APP",
      demoUrl: "https://officialcurrencyconverter.netlify.app/",
      image: currencyDemo,
    },
    {
      title: "Smart Desk Notes",
      description:
        "Intelligent note-taking application with search functionality, categories, and cloud synchronization.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/muhammadsaqibs/smart-desk-notes",
      demoUrl: "https://smartdesknote.netlify.app/",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
     {
      title: "Advanced Text Editor",
      description:
        "Feature-rich text editor with full of formatting options, file operations, and real-time preview functionality.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/muhammadsaqibs/Text-editor",
      demoUrl: "https://muhammadsaqibs.github.io/Text-editor/",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
      
    {
      title: "Artisan Connect",
      description:
        "Artisan-Connect is an absolutely MERN-based platform that connects users with local service providers, featuring secure authentication, cart management, and seamless online payments.",
      technologies: ["MERN Stack", "Payment API", "Authentication"],
      githubUrl: "https://github.com/muhammadsaqibs/Artisan-Connect",
      demoUrl: "https://artisanconnects.netlify.app/",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
   {
      title: "News App",
      description:
        "A comprehensive news aggregation app with real-time updates, category filtering, and responsive design.",
      technologies: ["React.js", "News API", "CSS3"],
      githubUrl: "https://github.com/muhammadsaqibs/NewsApp",
      demoUrl: "",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
    {
  "title": "Efficient Biometric & Monitoring System",
  "description": "A real-time continuous authentication system that monitors computer users through facial recognition. Unlike traditional login systems that only verify identity once, this system captures and verifies face images every 5–10 seconds using the built-in webcam. If an unauthorized person appears or the user steps away, the workstation locks instantly and logs the event for security auditing. Built as a final year project with a complete admin dashboard, user enrollment module, and real-time session monitoring.",
  "technologies": [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "OpenCV",
    "Face Recognition Library",
    "Webcam API"
  ],
  "githubUrl": "https://github.com/muhammadsaqibs/EFFICIENT-BIOMETRIC-AND-MONITORING-SYSTEM",
  "demoUrl": "",
  "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
}
   
  ];

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my projects which  showcase my technical skills and
            problem-solving approach
          </p>
        </motion.div>

        {/* Highlighted Client Project - Goodway AMC */}
        <motion.div
          className="mb-20 bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl overflow-hidden border border-primary-500/40 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 flex flex-col lg:flex-row max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Highlight Image */}
          <div className="w-full lg:w-1/2 relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Goodway AMC Live Platform" 
              className="w-full h-full object-cover min-h-[350px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Highlight Content */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            
            <div className="inline-flex items-center px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-sm font-semibold text-green-400 mb-6 self-start shadow-[0_0_15px_rgba(34,197,94,0.15)]">
              <CheckCircle className="w-4 h-4 mr-2" />
              Successfully Delivered to Client (Faiz Ahmed)
            </div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Goodway <span className="text-primary-400">AMC</span>
            </h3>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              A premium, full-stack enterprise platform featuring a modern dark-tech glassmorphism UI. Engineered from end-to-end to meet complex business requirements.
            </p>
            
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Core Functionalities</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span> 
                  AI-powered Conversational Assistant (Groq API)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span> 
                  Secure Google Calendar Integration for Smart Scheduling
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span> 
                  Dynamic Real-time News Ticker & Multi-currency Checkout
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span> 
                  Full cPanel Production Deployment & Server Configuration
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
              {["Laravel", "Tailwind CSS", "Groq AI", "Google Calendar API", "cPanel"].map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-dark-900 border border-primary-500/30 rounded-full text-xs font-medium text-primary-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
               <Button
                  variant="default"
                  size="lg"
                  asChild
                  className="bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/30"
                >
                  <a
                    href="https://goodwayamc.online"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Visit Live Project
                  </a>
                </Button>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Heading */}
        <div className="flex items-center mb-10">
          <h3 className="text-2xl font-bold text-gray-200">Other Notable Projects</h3>
          <div className="h-px bg-gray-800 flex-grow ml-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 border border-primary-500/20"
              data-testid={`project-${project.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - Project Screenshot`}
                  className="w-full aspect-[16/9] object-cover md:aspect-[4/3] lg:aspect-[16/9] transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-500/20 border border-primary-500/30 rounded-full text-xs font-medium text-primary-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center">
                  {/* Github Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-primary-400 hover:text-primary-300 hover:bg-primary-500/10"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`github-${project.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>

                  {/* Demo Button */}
                  {project.demoUrl ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="text-gray-400 hover:text-primary-400 hover:bg-primary-500/10"
                      data-testid={`demo-${project.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled
                      className="text-gray-500 cursor-not-allowed"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
