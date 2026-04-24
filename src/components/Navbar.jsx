import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { ThemeContext } from '../App';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Expertise', to: 'expertise' },
  { name: 'Projects', to: 'projects' },
  { name: 'Research', to: 'research' },
  { name: 'Workshops', to: 'workshops' },
  { name: 'Impact', to: 'impact' },
  { name: 'Consultancy', to: 'consultancy' },
  { name: 'Media', to: 'media' },
  { name: 'Blog', to: 'blog' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ivory/95 dark:bg-[#0F0E0C]/95 backdrop-blur-md border-b border-border dark:border-[#333028]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="h-[56px] md:h-[64px] px-4 md:px-8 max-w-[1920px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="cursor-pointer font-display italic font-medium text-[22px] text-gold"
          >
            EV
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={800}
                activeClass="text-gold border-b border-gold pb-0.5 !dark:text-gold"
                className="cursor-pointer font-sans text-[12px] tracking-[0.08em] uppercase font-medium text-muted dark:text-[#A09890] hover:text-ink dark:hover:text-ivory transition-colors border-b border-transparent pb-0.5"
              >
                {link.name}
              </Link>
            ))}

            {/* Dark Mode Toggle Desktop */}
            <button
              onClick={toggleTheme}
              className="relative flex items-center justify-center w-[36px] h-[36px] rounded-full border border-border dark:border-[#333028] hover:bg-surface dark:hover:bg-[#1C1A16] transition-colors ml-2 cursor-pointer"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} className="text-ink" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} className="text-ivory" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>

          {/* Mobile Utilities */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} className="text-ink dark:text-ivory" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-ink/20 dark:bg-ivory/5 z-[60] md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-ivory dark:bg-[#0F0E0C] z-[70] shadow-2xl flex flex-col md:hidden border-l border-border dark:border-[#333028]"
            >
              <div className="h-[56px] flex justify-end items-center px-4 border-b border-border dark:border-[#333028]">
                <button onClick={() => setMobileMenuOpen(false)}>
                  <motion.div whileTap={{ rotate: 90 }}>
                    <X size={24} className="text-ink dark:text-ivory" />
                  </motion.div>
                </button>
              </div>
              <div className="flex flex-col overflow-y-auto pb-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-56}
                    duration={800}
                    activeClass="text-gold !border-gold"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center h-[48px] px-6 border-b border-border dark:border-[#333028] font-sans text-[12px] tracking-[0.08em] uppercase font-medium text-muted dark:text-[#A09890]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto p-6 border-t border-border dark:border-[#333028] flex justify-center">
                 <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 w-full justify-center py-3 rounded-full border border-border dark:border-[#333028] hover:bg-surface dark:hover:bg-[#1C1A16] transition-colors cursor-pointer"
                >
                  {theme === 'light' ? (
                    <><Sun size={18} className="text-ink" /><span className="font-sans text-xs uppercase tracking-wider">Light Mode</span></>
                  ) : (
                    <><Moon size={18} className="text-ivory" /><span className="font-sans text-xs uppercase tracking-wider text-ivory">Dark Mode</span></>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
