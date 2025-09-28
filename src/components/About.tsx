import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center space-y-8"
      >
        {/* Floating Avatar */}
        <motion.img
          src="https://avatars.githubusercontent.com/u/000000?v=4" // replace with your image
          alt="Rakib"
          className="w-32 h-32 rounded-full mx-auto border-4 border-purple-500 shadow-lg shadow-purple-500/40"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Hi, I'm Rakib 👋
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A passionate{" "}
          <span className="text-purple-400 font-semibold">
            React Native Developer
          </span>{" "}
          with 3 years of experience building sleek, modern apps for OTT, IoT,
          and RMG sectors. I love turning ideas into interactive, high-quality
          mobile experiences.
        </p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-6"
        >
          {["⚛️ React Native", "📱 iOS & Android", "🎨 UI/UX", "⚡ Redux", "☁️ GraphQL"].map(
            (skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.15 }}
                className="px-4 py-2 bg-gray-800/70 border border-gray-700 rounded-full text-sm md:text-base shadow-md hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
              >
                {skill}
              </motion.span>
            )
          )}
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/40 hover:scale-105 transition-transform"
          >
            🚀 View My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-purple-400 text-purple-400 font-semibold hover:bg-purple-500/20 hover:scale-105 transition-transform"
          >
            📩 Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
