import { Code, Server, Brain } from "lucide-react";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        "React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Vite", "TypeScript"
      ]
    },
    {
      icon: Server,
      title: "Backend & Database",
      skills: [
        "Node.js", "Express.js", "MongoDB", "MySQL", "SQL", "Python", "C++", "PHP", "Laravel"
      ]
    },
    {
      icon: Brain,
      title: "Emerging Tech & Tools",
      skills: [
        "AI Development", "Bubble.io", "Git", "DSA", "OOP", "LeetCode", "GitHub"
      ]
    },
    {
      icon: Brain,
      title: "Soft Skills",
      skills: [
        "Problem Solving Technique ",'Good Decision Making','Quick Learning','Pressure Handling','Communication Skills','Leadership','Critical Thinking','Team Collaboration'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-800">
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
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <category.icon
                  className="text-4xl text-primary-400 mb-4 mx-auto"
                  size={48}
                />
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="bg-gradient-to-r from-primary-500/20 to-cyan-400/20 hover:from-primary-500/30 hover:to-cyan-400/30 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-primary-500/30"
                    data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
