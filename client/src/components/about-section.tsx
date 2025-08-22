import { motion } from "framer-motion";
import profileImagePath from "@assets/b6d49343-f6ef-46b2-8de9-c73f546dded9_1755833600739.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-dark-800">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              Hi, I'm{" "}
              <span className="text-primary-400 font-semibold">Muhammad Saqib</span>, 
              a passionate problem solver first — and a developer second. 
              While others chase code, I chase solutions. My journey into tech began with a 
              deep desire to fix what's broken around us — especially in Pakistan — using 
              technology as a tool for change.
            </p>

            <p>
              I specialize in the{" "}
              <span className="text-primary-400 font-semibold">MERN Stack</span>, 
              and I build digital systems that are not just functional, but impactful. 
              Every line of code I write is fueled by purpose: to solve real problems, 
              not just follow tutorials.
            </p>

            <p>
              I don't just aim to become a full-stack developer — I aim to become a 
              builder of systems that matter. Whether it's energy management, 
              digital automation, or smart tools, I believe in creating software 
              that speaks — that works silently in the background, transforming lives.
            </p>

            <p className="text-primary-400 font-semibold text-xl">
              This isn't just my career — it's my mission.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-2xl blur-xl opacity-20"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ repeat: Infinity, duration: 4 }}
              ></motion.div>
              <img
                src={profileImagePath}
                alt="Muhammad Saqib in professional setting"
                className="relative z-10 rounded-2xl shadow-2xl shadow-primary-500/20 max-w-sm w-full"
                data-testid="about-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
