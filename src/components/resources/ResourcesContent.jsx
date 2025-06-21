import { Link } from 'react-router-dom';

const guides = [
  {
    title: 'Getting Started',
    description: 'Learn how to create an account and start using StudyCircle',
    path: '/docs/getting-started'
  },
  {
    title: 'Finding Projects',
    description: 'Discover and join exciting coding projects',
    path: '/docs/finding-projects'
  },
  {
    title: 'Joining Peer Groups',
    description: 'Connect with fellow students in peer groups',
    path: '/docs/peer-groups'
  }
];

const guidelines = [
  {
    title: 'Code of Conduct',
    description: 'Community guidelines for a positive environment',
    path: '/guidelines/code-of-conduct'
  },
  {
    title: 'Project Guidelines',
    description: 'Best practices for sharing and collaborating on projects',
    path: '/guidelines/projects'
  },
  {
    title: 'Communication Guidelines',
    description: 'Tips for effective group communication',
    path: '/guidelines/communication'
  }
];

const faqs = [
  {
    question: 'How do I join a peer group?',
    answer: 'Navigate to the Peer Groups section, find a group that interests you, and click the "Join Group" button. Once joined, you\'ll have access to the group chat and resources.'
  },
  {
    question: 'Can I create multiple projects?',
    answer: 'Yes! You can create and participate in multiple projects simultaneously. Just ensure you can actively contribute to each one.'
  },
  {
    question: 'How do I share my project?',
    answer: 'Go to the Projects section and click "Create Project". Fill in the details including title, description, and technologies used. You can also add GitHub and demo links.'
  }
];

export default function ResourcesContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-primary-800 mb-6">User Guides</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <Link
              key={index}
              to={guide.path}
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-semibold text-primary-700 mb-2">{guide.title}</h3>
              <p className="text-primary-600">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Guidelines</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {guidelines.map((guideline, index) => (
            <Link
              key={index}
              to={guideline.path}
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-semibold text-primary-700 mb-2">{guideline.title}</h3>
              <p className="text-primary-600">{guideline.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-primary-700 mb-2">{faq.question}</h3>
              <p className="text-primary-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary-800 mb-6">Support</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-primary-600 mb-4">
            Need help? Contact our support team at:{' '}
            <a
              href="mailto:prashantkd010@gmail.com"
              className="text-primary-700 hover:text-primary-800 underline"
            >
              prashantkd010@gmail.com
            </a>
          </p>
          <p className="text-primary-600">
            We typically respond within 24 hours during business days.
          </p>
        </div>
      </section>
    </div>
  );
}