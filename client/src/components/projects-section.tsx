import { Github, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "News App",
      description: "A comprehensive news aggregation app with real-time updates, category filtering, and responsive design.",
      technologies: ["React.js", "News API", "CSS3"],
      githubUrl: "https://github.com/muhammadsaqibs/NewsApp",
      demoUrl: "",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Currency Converter",
      description: "Real-time currency converter with API integration, featuring multiple currencies and historical data.",
      technologies: ["JavaScript", "HTML5", "CSS3", "API"],
      githubUrl: "https://github.com/muhammadsaqibs/MY-CURRENCY-CONVERTER-APP",
      demoUrl: "",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Smart Desk Notes",
      description: "Intelligent note-taking application with search functionality, categories, and cloud synchronization.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/muhammadsaqibs/smart-desk-notes",
      demoUrl: "",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce platform with user authentication, cart functionality, and payment integration.",
      technologies: ["MERN Stack", "Payment API", "Authentication"],
      githubUrl: "https://github.com/muhammadsaqibs/E-commerce-website",
      demoUrl: "",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Advanced Text Editor",
      description: "Feature-rich text editor with formatting options, file operations, and real-time preview functionality.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/muhammadsaqibs/Text-editor",
      demoUrl: "",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      title: "Smart Meter App",
      description: "IoT-enabled smart meter monitoring system with real-time energy consumption tracking and analytics.",
      technologies: ["React.js", "IoT Integration", "Data Analytics"],
      githubUrl: "https://github.com/muhammadsaqibs/smart-meter-app",
      demoUrl: "",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my projects that showcase my technical skills and problem-solving approach
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 border border-primary-500/20"
              data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={`${project.title} - Project Screenshot`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-400 mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
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
                
                <div className="flex justify-between items-center">
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
                      data-testid={`github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-primary-400 hover:bg-primary-500/10"
                    data-testid={`demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
