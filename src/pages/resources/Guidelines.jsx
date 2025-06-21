import { motion } from 'framer-motion';

export default function Guidelines() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-primary-50 py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-8">Community Guidelines</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">Code of Conduct</h2>
            <p className="text-primary-600">Guidelines for maintaining a positive and inclusive community environment.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">Project Guidelines</h2>
            <p className="text-primary-600">Best practices for sharing and collaborating on projects within StudyCircle.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">Communication Guidelines</h2>
            <p className="text-primary-600">Tips for effective communication within peer groups and project teams.</p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}