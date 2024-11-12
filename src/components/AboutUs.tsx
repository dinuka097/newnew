import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Heart, BookOpen, Shield, Cloud } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300',
    bio: 'With over 15 years in tech leadership, Sarah drives our vision for digital innovation.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300',
    bio: 'Expert in cloud architecture and emerging technologies, leading our technical direction.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Innovation',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300',
    bio: 'Pioneering our R&D initiatives and driving technological advancement.',
  },
];

const certifications = [
  {
    title: 'ISO 27001',
    description: 'Certified for Information Security Management',
    icon: <Shield size={24} />,
  },
  {
    title: 'Microsoft Gold Partner',
    description: 'Highest level of Microsoft partnership',
    icon: <Award size={24} />,
  },
  {
    title: 'AWS Advanced Partner',
    description: 'Advanced consulting partner for AWS services',
    icon: <Cloud size={24} />,
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-8">
            About TechScrolll
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 dark:bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary dark:text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To empower businesses through innovative technology solutions that drive growth and success in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 dark:bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-primary dark:text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Founded in 2019, TechScrolll has grown from a small tech consultancy to a leading digital innovation partner, serving clients across the globe.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Leadership Team */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-primary dark:text-white mb-12"
          >
            Leadership Team
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">
                  {member.name}
                </h4>
                <p className="text-secondary dark:text-secondary mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-primary dark:text-white mb-12"
          >
            Certifications & Awards
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary/10 dark:bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary dark:text-secondary">{cert.icon}</div>
                </div>
                <h4 className="text-xl font-bold text-primary dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CSR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-primary dark:text-white mb-8">
            Corporate Social Responsibility
          </h3>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-primary/10 dark:bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-primary dark:text-secondary" size={32} />
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're committed to making a positive impact through technology education initiatives, 
              environmental sustainability practices, and community engagement programs. Our annual 
              Tech for Good program has helped numerous non-profits digitize their operations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;