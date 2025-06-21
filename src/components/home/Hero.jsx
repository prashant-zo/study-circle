import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaLightbulb } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-primary-800 mb-4">
            Welcome to StudyCircle
          </h1>
          <p className="text-xl text-primary-600 mb-12 max-w-2xl mx-auto">
            Connect, Collaborate, and Create Amazing Projects Together with Fellow Students
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <FaCode className="text-4xl text-primary-600 mb-4" />
            <h2 className="text-xl font-semibold text-primary-800 mb-2">Share Projects</h2>
            <p className="text-primary-600">Showcase your coding projects and get feedback from peers</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <FaUsers className="text-4xl text-primary-600 mb-4" />
            <h2 className="text-xl font-semibold text-primary-800 mb-2">Find Your Team</h2>
            <p className="text-primary-600">Connect with like-minded students and form coding groups</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <FaLightbulb className="text-4xl text-primary-600 mb-4" />
            <h2 className="text-xl font-semibold text-primary-800 mb-2">Grow Together</h2>
            <p className="text-primary-600">Learn from others and improve your coding skills</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}