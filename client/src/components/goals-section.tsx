import { Bot, Award, Lightbulb } from "lucide-react";

export default function GoalsSection() {
  const goals = [
    {
      icon: Bot,
      title: "AI Mastery",
      description: "Mastering artificial intelligence to develop intelligent, AI-powered applications that solve complex real-world problems and transform user experiences."
    },
    {
      icon: Award,
      title: "Google Summer of Code",
      description: "Participating in Google Summer of Code to contribute to open-source projects and collaborate with developers worldwide on innovative solutions."
    },
    {
      icon: Lightbulb,
      title: "Tech Innovation",
      description: "Building innovative technology solutions specifically designed to address challenges in Pakistan and create lasting positive impact on society."
    }
  ];

  return (
    <section id="goals" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Future Aspirations
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {goals.map((goal, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-gradient-to-br from-primary-500/10 to-cyan-400/10 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 transform hover:scale-105"
              data-testid={`goal-${goal.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="mb-6">
                <goal.icon className="text-primary-400 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-primary-400 mb-4">{goal.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            My future goal is to master Bubble.io, artificial intelligence, and use it to develop powerful, intelligent projects and websites with AI chatbots 
            that go beyond basic web apps. I want to shape the future of AI-powered software in Pakistan and make a difference that lasts.
          </p>
          <div className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-4 rounded-full">
            <span className="text-lg font-semibold text-white">Ready to build the future together?</span>
          </div>
        </div>
      </div>
    </section>
  );
}
