import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Award } from 'lucide-react';

const Vision = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          >
            <div className="w-16 h-16 bg-primary dark:bg-secondary rounded-full flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To be the global leader in digital innovation, transforming businesses through cutting-edge technology solutions that drive growth and success.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          >
            <div className="w-16 h-16 bg-primary dark:bg-secondary rounded-full flex items-center justify-center mb-6">
              <Compass className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To deliver exceptional digital solutions that empower businesses to thrive in the digital age through innovation, expertise, and unwavering commitment to excellence.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          >
            <div className="w-16 h-16 bg-primary dark:bg-secondary rounded-full flex items-center justify-center mb-6">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Our Values</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Innovation & Excellence</li>
              <li>• Client-Centric Approach</li>
              <li>• Integrity & Transparency</li>
              <li>• Continuous Learning</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;