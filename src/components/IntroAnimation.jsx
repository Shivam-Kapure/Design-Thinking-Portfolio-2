import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3400); // 2.8s start + 0.6s slide up = 3.4s total wait
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: '-100vh' }}
      transition={{ delay: 2.8, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0F0E0C]"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-display font-light text-[96px] leading-none text-[#C8A96E]"
      >
        E
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        className="h-px w-[200px] bg-[#C8A96E] mt-4 origin-center"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="font-sans text-[14px] tracking-[0.3em] uppercase text-[#FAF7F2] mt-6"
      >
        Dr. Eleanor Vance
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="font-sans text-[11px] tracking-[0.15em] text-[#8B7550] mt-3 uppercase"
      >
        Design Thinking • Innovation • Leadership
      </motion.div>
    </motion.div>
  );
};

export default IntroAnimation;
