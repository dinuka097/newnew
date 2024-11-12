import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Lock,
  X,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    icon: <Code size={40} />,
    title: 'Web Development',
    description:
      'Custom web applications built with cutting-edge technologies.',
    details: [
      'Full-stack development using React, Node.js, and modern frameworks',
      'Progressive Web Apps (PWA) development',
      'E-commerce solutions',
      'Content Management Systems',
      'API development and integration',
      'Performance optimization',
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    icon: <Smartphone size={40} />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
    details: [
      'iOS and Android native development',
      'Cross-platform development with React Native',
      'Mobile UI/UX design',
      'App Store optimization',
      'Push notifications',
      'Offline functionality',
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
  },
  {
    icon: <Cloud size={40} />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment.',
    details: [
      'AWS, Azure, and Google Cloud Platform expertise',
      'Cloud architecture design',
      'Serverless computing',
      'Container orchestration',
      'Cloud security',
      'Cost optimization',
    ],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8',
  },
  {
    icon: <Database size={40} />,
    title: 'Database Solutions',
    description: 'Robust database design and optimization.',
    details: [
      'Database architecture design',
      'Performance tuning',
      'Data migration',
      'Backup and recovery',
      'NoSQL solutions',
      'Real-time databases',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
  },
  {
    icon: <Lock size={40} />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions for your digital assets.',
    details: [
      'Security audits',
      'Penetration testing',
      'Vulnerability assessment',
      'Security training',
      'Compliance consulting',
      'Incident response',
    ],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
  },
  {
    icon: <Globe size={40} />,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation services.',
    details: [
      'Digital strategy consulting',
      'Process automation',
      'Legacy system modernization',
      'Digital workplace solutions',
      'Innovation workshops',
      'Change management',
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  },
];

const ServiceCard = ({ service, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      whileHover={{ y: -5 }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transition-all duration-300">
        <div className="text-primary dark:text-secondary mb-4">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {service.description}
        </p>
        <div className="flex items-center text-primary dark:text-secondary text-sm font-medium">
          Learn more <ChevronRight size={16} className="ml-1" />
        </div>
      </div>
    </motion.div>
  );
};

const ServiceModal = ({ service, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl my-8 mx-4"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-50 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 shadow-lg transition-all duration-300"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <div className="aspect-video rounded-lg overflow-hidden mb-6">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary dark:bg-secondary rounded-full flex items-center justify-center text-white">
              {service.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              {service.title}
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {service.description}
          </p>

          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
              Key Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm md:text-base"
                >
                  <ChevronRight
                    className="text-primary dark:text-secondary flex-shrink-0"
                    size={16}
                  />
                  {detail}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedService && (
            <ServiceModal
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;