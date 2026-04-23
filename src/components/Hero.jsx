import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import bhavnaImg from '../assets/images/bhavna.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-ivory dark:bg-[#0F0E0C] pt-[96px] relative flex md:items-center">
      <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 md:grid-cols-[55%_45%] min-h-[calc(100vh-96px)]">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center px-8 md:px-20 py-12 md:py-0 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-px w-[32px] bg-gold" />
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-gold">
              Professor · Design Thinking · SIT Pune
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light italic text-[48px] md:text-[80px] leading-[1.05] text-ink dark:text-[#FAF7F2] mb-6 whitespace-pre-line"
          >
            {'Shaping Minds,\n'}
            <span className="text-gold">Designing Futures.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-light text-[14px] md:text-[16px] leading-[1.7] text-muted dark:text-[#A09890] max-w-lg mb-10"
          >
            Associate Professor & Design Thinking Lead at Symbiosis Institute of Technology, Pune —
            empowering the next generation of innovators through research, mentorship, and systemic thinking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="projects"
              smooth={true}
              offset={-64}
              duration={800}
              className="cursor-pointer bg-gold text-[#0F0E0C] px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-[#B8994E] dark:hover:bg-[#D4B97E] transition-all duration-300 inline-block text-center"
            >
              Explore My Work
            </Link>
          </motion.div>

          {/* Social Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-5 mt-10 md:mt-16"
          >
            {/* Social links */}
            {[
              { name: 'LinkedIn', url: '#' },
              { name: 'Google Scholar', url: '#' },
              { name: 'ResearchGate', url: '#' },
              { name: 'Academia', url: '#' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                className="font-sans text-[11px] uppercase tracking-widest text-muted dark:text-[#A09890] hover:text-gold transition-colors"
                aria-label={social.name}
              >
                {social.name}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden h-[400px] md:h-full mt-8 md:mt-0"
          style={{ clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
          <img 
            src={bhavnaImg} 
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800'; }}
            alt="Dr. Bhavna Ambudkar"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-ivory dark:to-[#0F0E0C] opacity-70" style={{ backgroundImage: 'linear-gradient(to left, transparent 60%, var(--tw-gradient-to) 100%)' }} />
          
          <div className="absolute bottom-8 right-8 flex flex-col items-end">
             <div className="h-px w-[80px] bg-gold mb-2" />
             <span className="font-sans text-[10px] text-muted">©2025</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none hidden md:flex"
      >
        <span className="text-muted dark:text-[#A09890] transform rotate-90 font-sans text-[10px] uppercase tracking-widest origin-center translate-y-[-24px]">Scroll</span>
        <div className="w-px h-[48px] bg-muted/40 dark:bg-[#A09890]/40 mt-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
