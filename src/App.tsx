import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Vision from './components/Vision';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Clients from './components/Clients';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Industries from './components/Industries';
import Privacy from './components/Privacy';
import FAQ from './components/FAQ';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollProgress from './components/ScrollProgress';
import LoadingSpinner from './components/LoadingSpinner';
import Chatbot from './components/Chatbot';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <AnimatePresence>
        {isLoading && <LoadingSpinner />}
      </AnimatePresence>

      <ScrollProgress />
      
      <div className="fixed inset-0 z-0">
        <ParticlesBackground />
      </div>
      
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed right-4 top-24 z-30 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-primary dark:text-white backdrop-blur-sm hover:scale-110 transition-transform shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed right-4 bottom-4 z-30 p-3 rounded-full bg-primary dark:bg-secondary text-white backdrop-blur-sm shadow-lg"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <Chatbot />

      <Suspense fallback={<LoadingSpinner />}>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10"
        >
          <section id="hero">
            <Hero />
          </section>
          <Vision />
          <AboutUs />
          <Services />
          <Industries />
          <Expertise />
          <Experience />
          <Clients />
          <FAQ />
          <Privacy />
          <Contact />
        </motion.main>
      </Suspense>
    </div>
  );
}

export default App;