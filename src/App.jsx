import React, { useState, useEffect, createContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'light');
  const [introComplete, setIntroComplete] = useState(() => {
    return sessionStorage.getItem('intro-complete') === 'true';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  const handleIntroComplete = () => {
    setIntroComplete(true);
    sessionStorage.setItem('intro-complete', 'true');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AnimatePresence>
        {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <Home />
        <Footer />
      </motion.div>
    </ThemeContext.Provider>
  );
}

export default App;
