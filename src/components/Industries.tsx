import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  HeartPulse,
  ShoppingBag,
  Factory,
  Landmark,
  GraduationCap,
} from 'lucide-react';
import FloatingShapes from './FloatingShapes';

const industries = [
  {
    icon: <Building2 size={32} />,
    title: 'Finance',
    description: 'Secure and compliant solutions for financial institutions',
    benefits: [
      'Enhanced security protocols',
      'Regulatory compliance',
      'Real-time analytics',
    ],
  },
  {
    icon: <HeartPulse size={32} />,
    title: 'Healthcare',
    description: 'HIPAA-compliant healthcare technology solutions',
    benefits: [
      'Patient data security',
      'Telemedicine platforms',
      'Medical records management',
    ],
  },
  {
    icon: <ShoppingBag size={32} />,
    title: 'Retail',
    description: 'Digital transformation for modern retail',
    benefits: [
      'E-commerce solutions',
      'Inventory management',
      'Customer analytics',
    ],
  },
  {
    icon: <Factory size={32} />,
    title: 'Manufacturing',
    description: 'Smart manufacturing and Industry 4.0 solutions',
    benefits: [
      'IoT integration',
      'Process automation',
      'Supply chain optimization',
    ],
  },
  {
    icon: <Landmark size={32} />,
    title: 'Government',
    description: 'Secure solutions for public sector',
    benefits: [
      'Citizen services portals',
      'Data security',
      'Digital infrastructure',
    ],
  },
  {
    icon: <GraduationCap size={32} />,
    title: 'Education',
    description: 'Digital learning and administration solutions',
    benefits: [
      'Learning management systems',
      'Student portals',
      'Administrative automation',
    ],
  },
];

const testimonials = [
  {
    quote: "TechScrolll's solutions have transformed our financial operations, providing unparalleled security and efficiency.",
    author: "John Smith",
    position: "CTO",
    company: "Global Finance Corp",
    industry: "Finance"
  },
  {
    quote: "Their healthcare solutions have helped us streamline patient care while maintaining strict HIPAA compliance.",
    author: "Dr. Sarah Chen",
    position: "Medical Director",
    company: "HealthFirst Hospital",
    industry: "Healthcare"
  },
];

const Industries = () => {
  return (
    <section id="industries" className="relative py-20">
      <FloatingShapes className="absolute inset-0" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Tailored solutions for diverse sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 dark:bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <div className="text-primary dark:text-secondary">{industry.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-primary dark:text-white mb-4">
                {industry.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {industry.description}
              </p>
              <ul className="space-y-2">
                {industry.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 bg-primary dark:bg-secondary rounded-full mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-primary dark:text-white mb-12"
          >
            Client Success Stories
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg"
              >
                <div className="text-4xl text-primary dark:text-secondary mb-6">"</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-primary dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;