import { Code, Server, Brain } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        "React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"
      ]
    },
    {
      icon: Server,
      title: "Backend & Database",
      skills: [
        "Node.js", "Express.js", "MongoDB", "MySQL", "SQL", "Python", "C++"
      ]
    },
    {
      icon: Brain,
      title: "Emerging Tech & Tools",
      skills: [
        "AI Development", "Bubble.io", "Git", "DSA", "OOP", "Problem Solving", "LeetCode"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <category.icon className="text-4xl text-primary-400 mb-4 mx-auto" size={48} />
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gradient-to-r from-primary-500/20 to-cyan-400/20 hover:from-primary-500/30 hover:to-cyan-400/30 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 border border-primary-500/30"
                    data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
