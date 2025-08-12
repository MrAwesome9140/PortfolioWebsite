"use client";

import { motion } from "framer-motion";

// Technical Metrics Component
export default function TechnicalMetrics() {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Impact & Achievements
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {/* System Performance */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">
              System Performance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  YASPE Streaming Engine
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>• Built high-performance C++20 streaming platform</li>
                  <li>• Leveraged modern C++ for optimal performance</li>
                  <li>• Tested on Google Cloud Platform VMs</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Wellhead Simulator
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>• Reduced setup time by up to 10×</li>
                  <li>• Real-time noise & fault simulations</li>
                  <li>• Significantly improved testing coverage</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Development & Innovation */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">
              Development & Innovation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Machine Learning Innovation
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>• Invention disclosure IS25.1019 under review</li>
                  <li>• ML-driven landing detection algorithm</li>
                  <li>• Improved sensor accuracy with capacitance/strain</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Full-Stack Development
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>• Angular front-end with dynamic visualizations</li>
                  <li>• Modbus protocol integration</li>
                  <li>• SharePoint file synchronization system</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Systems & Architecture */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">
              Systems & Architecture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Operating Systems
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>• Implemented PintOS in C and x86 assembly</li>
                  <li>• Built process scheduling & virtual memory</li>
                  <li>• Designed Fast File System implementation</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Team Leadership
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>• Led team of 4 in React app development</li>
                  <li>• Full design process from needfinding to testing</li>
                  <li>• A/B testing with counterbalancing methods</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
