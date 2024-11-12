import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'AWS', level: 75 },
  { name: 'DevOps', level: 70 },
  { name: 'UI/UX', level: 85 }
];

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-primary dark:bg-secondary rounded-full"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
          <div className="space-y-8">
            {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index + Math.ceil(skills.length / 2)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;