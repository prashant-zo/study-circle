import { motion } from 'framer-motion';
import { FaLaptopCode, FaHandshake, FaBrain, FaRocket } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaLaptopCode className="text-5xl mb-4 text-primary-600" />,
      title: "Real-World Projects",
      description: "Work on practical projects that matter and build your portfolio while learning"
    },
    {
      icon: <FaHandshake className="text-5xl mb-4 text-primary-600" />,
      title: "Peer Learning",
      description: "Learn from and with your peers through collaborative coding sessions"
    },
    {
      icon: <FaBrain className="text-5xl mb-4 text-primary-600" />,
      title: "Skill Development",
      description: "Enhance your technical and soft skills through team projects"
    },
    {
      icon: <FaRocket className="text-5xl mb-4 text-primary-600" />,
      title: "Career Growth",
      description: "Build a strong foundation for your tech career through practical experience"
    }
  ];

  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-800 mb-4">Why Choose StudyCircle?</h2>
          <p className="text-xl text-primary-600">Discover the benefits of collaborative learning</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-primary-800 mb-2">{feature.title}</h3>
              <p className="text-primary-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}