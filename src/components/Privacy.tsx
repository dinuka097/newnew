import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cookie, Share2, UserCheck, Mail } from 'lucide-react';

const privacySections = [
  {
    icon: <Shield size={32} />,
    title: 'Data Collection',
    content: `We collect and process your data to provide our services effectively. This includes:
    • Personal information provided during registration
    • Usage data and analytics
    • Technical information about your device
    All data is processed in accordance with GDPR and applicable privacy laws.`
  },
  {
    icon: <Cookie size={32} />,
    title: 'Cookies Policy',
    content: `We use cookies to enhance your browsing experience:
    • Essential cookies for site functionality
    • Analytics cookies to improve our services
    • Marketing cookies (optional)
    You can manage your cookie preferences through your browser settings.`
  },
  {
    icon: <Share2 size={32} />,
    title: 'Third-Party Sharing',
    content: `We may share your data with:
    • Service providers who assist our operations
    • Analytics partners
    • Legal authorities when required by law
    We never sell your personal data to third parties.`
  },
  {
    icon: <UserCheck size={32} />,
    title: 'Your Rights',
    content: `You have the right to:
    • Access your personal data
    • Request data correction
    • Request data deletion
    • Withdraw consent
    • Export your data`
  },
  {
    icon: <Mail size={32} />,
    title: 'Contact Us',
    content: `For privacy-related inquiries:
    Email: privacy@techscrolll.com
    Phone: +61 422 666 104
    Address: 43 Brittlegum Street, Cranbourne East, VIC, Australia`
  }
];

const Privacy = () => {
  return (
    <section id="privacy" className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">
            Privacy Policy
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Your privacy is our priority
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {privacySections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 dark:bg-secondary/10 rounded-full flex items-center justify-center">
                  <div className="text-primary dark:text-secondary">
                    {section.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white">
                  {section.title}
                </h3>
              </div>
              <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          Last updated: March 2024
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;