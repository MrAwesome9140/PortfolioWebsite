"use client";

import { motion } from "framer-motion";

export default function SystemArchitecture() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          System Architecture & Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "Wellhead Installation Digital Simulator",
              description:
                "Advanced software simulator enabling realistic testing with real-time noise, shift, and network fault simulations",
              details: [
                "Angular front-end with dynamic scatterplot detection",
                "PDF job report generation and responsive layouts",
                "Modbus protocol support for industrial communication",
                "SharePoint file synchronization reducing setup time by 10×",
                "Machine learning algorithm for landing detection (Patent pending)",
                "Integrated capacitance and strain gauge sensor processing",
              ],
              tech: [
                "Angular",
                "ModBus",
                "SharePoint",
                "Machine Learning",
                "PDF Generation",
                "C#",
              ],
            },
            {
              title: "YASPE - Streaming Platform Engine",
              description:
                "High-performance C++ streaming platform leveraging modern C++20 for efficient real-time data processing",
              details: [
                "Built comprehensive buffer management system",
                "Implemented windowing system for stream processing",
                "Designed client-server communication with gRPC and Protobuf",
                "Created shared library system for custom user functions",
                "Containerized with Docker for easy deployment",
                "Comprehensive testing with GoogleTest framework",
              ],
              tech: [
                "C++20",
                "CMake",
                "gRPC",
                "Protobuf",
                "Docker",
                "GoogleTest",
                "GCP",
              ],
            },
            {
              title: "NextUp - Pickup Sports Platform",
              description:
                "React-based social platform connecting pickup sports players with comprehensive user matching system",
              details: [
                "Led team of 4 through complete design process",
                "Conducted user surveys for needfinding research",
                "Prototyping with wireframes and Figma designs",
                "User profile system with skill-based matching",
                "Firebase backend with real-time data sync",
                "A/B testing with counterbalancing for UX optimization",
              ],
              tech: [
                "React",
                "Firebase",
                "Figma",
                "JavaScript",
                "User Research",
                "A/B Testing",
              ],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
