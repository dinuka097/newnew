import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const handleScrollDown = () => {
    const visionSection = document.querySelector('#vision');
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const title = "TECHSCROLLL";
  const letters = title.split("");

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div className="mb-6 relative">
            <div className="flex justify-center flex-wrap gap-x-1 sm:gap-x-2">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={letterAnimation}
                  className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <motion.div
              className="absolute -z-10 inset-0 blur-3xl opacity-20"
              animate={{
                background: [
                  'linear-gradient(45deg, #0A2463, #247BA0)',
                  'linear-gradient(45deg, #247BA0, #0A2463)',
                  'linear-gradient(45deg, #0A2463, #247BA0)',
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Transforming Ideas into Digital Reality
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-secondary dark:from-blue-500 dark:to-purple-500 text-white rounded-full transition-all group overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10">Our Services</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                animate={{
                  scale: [1, 1.5],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary dark:border-secondary text-primary dark:text-white rounded-full transition-all group overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-primary/10 dark:bg-secondary/10 -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  scale: [1, 1.5],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={handleScrollDown}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary dark:text-white cursor-pointer group"
      >
        <span className="text-xs sm:text-sm mb-2 block opacity-0 group-hover:opacity-100 transition-opacity">
          Scroll Down
        </span>
        <ArrowDown className="animate-bounce mx-auto w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>
    </section>
  );
};

export default Hero;