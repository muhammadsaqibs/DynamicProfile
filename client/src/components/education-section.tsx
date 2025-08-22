import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

// Logos
import logo67 from "../asset/logo67.jpg";
import logo68 from "../asset/logo68.jpg";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Education Journey
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-cyan-400"></div>

          {/* University */}
          <motion.div
            className="relative mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-16">
                <div className="bg-gradient-to-r from-primary-500/20 to-cyan-400/20 p-1 rounded-xl">
                  <div className="bg-dark-800 p-6 rounded-xl">
                    <div className="flex items-center justify-center md:justify-end mb-3">
                      <GraduationCap className="text-primary-400 mr-2" size={24} />
                      <h3 className="text-2xl font-bold text-primary-400">Computer Science</h3>
                    </div>
                    <p className="text-xl font-semibold mb-2">COMSATS University Islamabad</p>
                    <p className="text-gray-400 mb-2">Feb 2023 - June 2027</p>
                    <p className="text-gray-400 mb-2">Current: 6th Semester</p>
                    <div className="flex items-center justify-center md:justify-end">
                      <Award className="text-primary-400 mr-2" size={20} />
                      <p className="text-primary-400 font-semibold">CGPA: 3.56/4.00</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                      Actively building skills in computer science with a focus on Software and Web Development projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:pl-16 text-center">
                <img
                  src={logo67}
                  alt="COMSATS University Islamabad Logo"
                  className="w-40 h-40 rounded-full object-contain border-4 border-primary-500 mx-auto shadow-lg shadow-primary-500/20"
                  data-testid="comsats-logo"
                />
              </div>
            </div>
          </motion.div>

          {/* Intermediate */}
          <motion.div
            className="relative mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:pr-16 order-2 md:order-1">
                <img
                  src={logo68}
                  alt="Punjab Daanish School Logo"
                  className="w-40 h-40 rounded-full object-contain border-4 border-primary-500 mx-auto shadow-lg shadow-primary-500/20"
                  data-testid="daanish-logo-intermediate"
                />
              </div>
              <div className="md:pl-16 order-1 md:order-2">
                <div className="bg-gradient-to-r from-primary-500/20 to-cyan-400/20 p-1 rounded-xl">
                  <div className="bg-dark-800 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="text-primary-400 mr-2" size={24} />
                      <h3 className="text-2xl font-bold text-primary-400">Intermediate (ICS)</h3>
                    </div>
                    <p className="text-xl font-semibold mb-2">Punjab Daanish Higher Secondary School</p>
                    <p className="text-gray-400 mb-2">Mianwali, Punjab</p>
                    <div className="flex items-center">
                      <Award className="text-primary-400 mr-2" size={20} />
                      <p className="text-primary-400 font-semibold">Marks: 965/1100 (87% - A Grade)</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                      Specialized in Computer Science with excellent academic performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Matriculation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right md:pr-16">
                <div className="bg-gradient-to-r from-primary-500/20 to-cyan-400/20 p-1 rounded-xl">
                  <div className="bg-dark-800 p-6 rounded-xl">
                    <div className="flex items-center justify-center md:justify-end mb-3">
                      <GraduationCap className="text-primary-400 mr-2" size={24} />
                      <h3 className="text-2xl font-bold text-primary-400">Matriculation</h3>
                    </div>
                    <p className="text-xl font-semibold mb-2">Punjab Daanish Secondary School</p>
                    <p className="text-gray-400 mb-2">Mianwali, Punjab</p>
                    <div className="flex items-center justify-center md:justify-end">
                      <Award className="text-primary-400 mr-2" size={20} />
                      <p className="text-primary-400 font-semibold">Marks: 1013/1100 (92% - A+ Grade)</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                      Achieved excellent academic performance with outstanding results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:pl-16 text-center">
                <img
                  src={logo68}
                  alt="Punjab Daanish School Logo"
                  className="w-40 h-40 rounded-full object-contain border-4 border-primary-500 mx-auto shadow-lg shadow-primary-500/20"
                  data-testid="daanish-logo-matriculation"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
