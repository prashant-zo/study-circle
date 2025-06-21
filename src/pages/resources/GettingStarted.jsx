import { motion } from 'framer-motion';

export default function GettingStarted() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-primary-50 py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-8">Getting Started with StudyCircle</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">Create Your Account</h2>
            <p className="text-primary-600">Learn how to create and set up your StudyCircle account to start collaborating with peers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">Find Projects</h2>
            <p className="text-primary-600">Discover ongoing projects or create your own to share with the community.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-700 mb-4">Join Peer Groups</h2>
            <p className="text-primary-600">Connect with like-minded students and form study groups for better learning.</p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}