import { motion } from 'framer-motion';
import ResourcesContent from '../components/resources/ResourcesContent';

export default function Resources() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-primary-50"
    >
      <ResourcesContent />
    </motion.div>
  );
}