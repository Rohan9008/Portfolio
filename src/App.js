import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">Rohan</h1>
        <div className="space-x-6">
          <a href="#about" className="hover:text-yellow-300">About</a>
          <a href="#skills" className="hover:text-yellow-300">Skills</a>
          <a href="#projects" className="hover:text-yellow-300">Projects</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold"
        >
          Hi, I'm Rohan 👋
        </motion.h1>
        <p className="mt-4 text-xl">
          Full Stack Developer | Java | Spring Boot | React
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="#projects"
            className="bg-yellow-400 text-black px-6 py-2 rounded-xl font-semibold hover:bg-yellow-300"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="bg-white text-black px-6 py-2 rounded-xl font-semibold hover:bg-gray-200"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-10 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I am a passionate Full Stack Developer with hands-on experience in
          building scalable web applications using Java, Spring Boot, and
          React.js. I specialize in developing REST APIs, integrating frontend
          with backend, and working with databases like MySQL.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-10 py-16 bg-black/20">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["Java", "JavaScript", "Spring Boot", "React.js", "MySQL", "REST APIs", "Hibernate", "HTML/CSS"].map(
            (skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 p-4 rounded-xl shadow-lg"
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-10 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/10 p-6 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-2">Local Service Finder</h3>
          <p className="mb-4">
            A full-stack web application built with Spring Boot and React.js.
            Includes user authentication, booking system, API integration, and
            MySQL database.
          </p>
          <div className="space-x-4">
            <a
              href="#"
              className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Rohan9008"
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-10 py-16 text-center bg-black/20">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-2">📧 melkunderohan89@gmail.com</p>
        <p className="mb-2">📱 +91 8999557245</p>
        <p>💻 github.com/Rohan9008</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-300">
        © 2026 Rohan Melkunde | Built with React 🚀
      </footer>
    </div>
  );
}
