import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function DeliveredProjectsSection() {
  const projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    demoUrl: string;
    image: string;
    demoText?: string;
  }> = [
    {
      title: "Goodway AMC",
      description: "A corporate website and service booking platform for home appliance repair and maintenance. It helps clients easily discover services and request maintenance.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      demoUrl: "https://goodwayamc.online/",
      demoText: "View Live Project",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Hafiz Clinic",
      description: "A live clinic platform delivered to Faiz Ahmed, with online appointment booking, patient and staff portals, lab reports, and a store for herbal hair oil, beauty care, eye care, and home delivery.",
      technologies: ["React", "Vite", "JavaScript"],
      demoUrl: "https://hafizclinic.online/",
      demoText: "View Live Project",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    },
  ];

  return (
    <section id="delivered-projects" className="py-20 bg-dark-950 border-t border-primary-500/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-primary-500 to-cyan-400 bg-clip-text text-transparent">Delivered Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            High-quality, production-ready solutions delivered successfully to clients worldwide.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 border border-cyan-500/20 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={`${project.title} - Project Screenshot`}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors transform hover:scale-110"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed whitespace-pre-line flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-end items-center">
                  {project.demoUrl ? (
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="bg-primary-600 hover:bg-primary-700 text-white w-full sm:w-auto"
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        {project.demoText || "Demo"}
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="secondary"
                      size="sm"
                      disabled
                      className="w-full sm:w-auto opacity-50 cursor-not-allowed"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      {project.demoText || "Demo"}
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
