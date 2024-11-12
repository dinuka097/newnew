import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Award, Users, Briefcase, Globe, Trophy } from 'lucide-react';

const experiences = [
  {
    year: 2019,
    icon: <Calendar size={24} />,
    title: 'Company Founded',
    description: 'Started with a vision to transform digital landscapes',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    year: 2020,
    icon: <Users size={24} />,
    title: 'Team Expansion',
    description: 'Grew to 50+ talented professionals across multiple domains',
    color: 'from-green-500 to-emerald-600',
  },
  {
    year: 2021,
    icon: <Award size={24} />,
    title: 'Industry Recognition',
    description: 'Received multiple awards for technical excellence',
    color: 'from-purple-500 to-violet-600',
  },
  {
    year: 2022,
    icon: <Globe size={24} />,
    title: 'Global Presence',
    description: 'Expanded operations to 2 continents serving 1000+ clients',
    color: 'from-orange-500 to-red-600',
  },
  {
    year: 2023,
    icon: <Trophy size={24} />,
    title: 'Market Leader',
    description: 'Recognized as industry leader in digital transformation',
    color: 'from-pink-500 to-rose-600',
  },
];

const stats = [
  { value: '1000+', label: 'Clients', icon: <Briefcase size={24} /> },
  { value: '1500+', label: 'Projects', icon: <Trophy size={24} /> },
  { value: '75+', label: 'Experts', icon: <Users size={24} /> },
  { value: '2', label: 'Continents', icon: <Globe size={24} /> },
];

const AnimatedCounter = ({ value }) => {
  const [counter, setCounter] = React.useState(0);
  const numberValue = parseInt(value);

  React.useEffect(() => {
    let isMounted = true;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = numberValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      if (!isMounted) return;
      
      current += stepValue;
      if (current >= numberValue) {
        setCounter(numberValue);
        clearInterval(timer);
      } else {
        setCounter(Math.floor(current));
      }
    }, duration / steps);

    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, [numberValue]);

  return (
    <span>
      {counter}
      {value.includes('+') ? '+' : ''}
    </span>
  );
};

const Experience = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

  return (
    <section id="journey" className="py-20 relative overflow-hidden">
      <motion.div style={{ scale, opacity }} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">
            Our Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            5 Years of Excellence and Innovation
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="w-12 h-12 bg-primary/10 dark:bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary dark:text-secondary"
              >
                {stat.icon}
              </motion.div>
              <motion.h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-2">
                <AnimatedCounter value={stat.value} />
              </motion.h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-secondary/20 to-primary/20 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-5/12">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="ml-12 md:ml-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${exp.color} flex items-center justify-center text-white`}
                    >
                      {exp.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {exp.year}
                    </h3>
                  </div>
                  <h4 className="text-lg font-semibold text-primary dark:text-secondary mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className={`absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-white shadow-lg md:-translate-x-1/2`}
                style={{
                  top: '2rem',
                  marginLeft: '0.5rem',
                }}
              >
                {exp.icon}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;