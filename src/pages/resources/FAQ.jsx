import { motion } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    {
      question: 'How do I join a peer group?',
      answer: 'Navigate to the Peer Groups section, find a group that interests you, and click the "Join Group" button.'
    },
    {
      question: 'Can I create multiple projects?',
      answer: 'Yes! You can create and participate in multiple projects simultaneously.'
    },
    {
      question: 'How do I share my project?',
      answer: 'Go to the Projects section and click "Create Project". Fill in the project details and submit.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-primary-50 py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-primary-800 mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-primary-700 mb-2">{faq.question}</h2>
              <p className="text-primary-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}