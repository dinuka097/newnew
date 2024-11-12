import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Shield, Cpu, Palette } from 'lucide-react';

const expertiseAreas = [
  {
    icon: <Code2 size={32} />,
    title: 'Full-Stack Development',
    skills: ['React', 'Node.js', 'TypeScript', 'Python', 'GraphQL'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: <Database size={32} />,
    title: 'Database Architecture',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL', 'Firebase'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: <Cloud size={32} />,
    title: 'Cloud Computing',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
    color: 'from-purple-500 to-violet-600'
  },
  {
    icon: <Shield size={32} />,
    title: 'Cybersecurity',
    skills: ['Penetration Testing', 'Security Audits', 'Encryption', 'OAuth', 'JWT'],
    color: 'from-red-500 to-rose-600'
  },
  {
    icon: <Cpu size={32} />,
    title: 'AI & Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'Data Science'],
    color: 'from-yellow-500 to-amber-600'
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    skills: ['Figma', 'Adobe XD', 'Responsive Design', 'Prototyping', 'User Research'],
    color: 'from-pink-500 to-rose-600'
  }
];

const ExpertiseCard = ({ area, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
    >
      <div className="flex items-center space-x-4 mb-6">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center text-white`}>
          {area.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{area.title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {area.skills.map((skill, skillIndex) => (
          <motion.span
            key={skillIndex}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + skillIndex * 0.1 }}
            className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${area.color} text-white`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">Our Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300">Mastering technologies to deliver excellence</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard key={index} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;