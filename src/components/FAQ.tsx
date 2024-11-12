import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is managed IT services?',
    answer: 'Managed IT services provide comprehensive technology support, including network monitoring, security, maintenance, and help desk support. We proactively manage your IT infrastructure to prevent issues and ensure optimal performance.'
  },
  {
    question: 'How is your pricing structured?',
    answer: 'Our pricing is based on several factors including service level, number of users, infrastructure complexity, and specific requirements. We offer flexible plans starting from $999/month for small businesses. Contact us for a customized quote.'
  },
  {
    question: 'What are your support response times?',
    answer: 'We offer 24/7 support with different SLA levels:\n• Critical issues: 15-minute response\n• High priority: 1-hour response\n• Normal priority: 4-hour response\n• Low priority: Next business day'
  },
  {
    question: 'What does the onboarding process look like?',
    answer: '1. Initial consultation and assessment\n2. Custom solution design\n3. Implementation planning\n4. Staged rollout\n5. Team training\n6. Ongoing support and optimization\nTypical onboarding takes 2-4 weeks.'
  },
  {
    question: 'Do you offer cloud migration services?',
    answer: 'Yes, we provide comprehensive cloud migration services including assessment, planning, migration execution, and post-migration support. We work with major cloud providers like AWS, Azure, and Google Cloud.'
  },
  {
    question: 'How do you handle data security?',
    answer: 'We implement multiple layers of security including:\n• Enterprise-grade encryption\n• Multi-factor authentication\n• Regular security audits\n• Compliance monitoring\n• Employee security training\n• Incident response planning'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between"
              >
                <span className="text-lg font-semibold text-primary dark:text-white">
                  {faq.question}
                </span>
                <div className="text-primary dark:text-secondary ml-4">
                  {openIndex === index ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Still have questions?{' '}
            <a
              href="#contact"
              className="text-primary dark:text-secondary hover:underline"
            >
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;