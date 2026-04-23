import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const About = () => {
  return (
    <section id="about" className="bg-surface dark:bg-[#1C1A16] py-32 px-8 md:px-20">
      <motion.div 
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] gap-16 lg:gap-24 items-center"
      >
        {/* Left Image Block */}
        <motion.div variants={fadeUp} className="w-full max-w-md mx-auto md:max-w-none">
          <div className="relative aspect-[3/4]">
            {/* Offset Frame */}
            <div className="absolute -inset-[16px] border border-gold z-0" />
            
            <div className="relative z-10 w-full h-full overflow-hidden filter sepia-[.1] contrast-[1.05] dark:sepia-0 dark:brightness-[.85] dark:contrast-[1.1] transition-all duration-500">
              <img 
                src="/src/assets/images/bhavna.jpg" 
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800'; }}
                alt="Dr. Bhavna Ambudkar portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-8">
            <p className="font-display italic text-[15px] text-muted dark:text-[#A09890] text-center md:text-left">
              Associate Professor, Dept. of Management<br/>
              Symbiosis Institute of Technology, Pune
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="flex flex-col">
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">About</span>
            <div className="h-px w-[48px] bg-gold" />
          </motion.div>

          <motion.h2 
            variants={fadeUp}
            className="font-display font-normal text-[40px] md:text-[52px] leading-[1.1] text-ink dark:text-[#FAF7F2] mb-8"
          >
            Academic Excellence Rooted in Real-World Impact
          </motion.h2>

          <motion.p variants={fadeUp} className="font-sans font-light text-[16px] leading-[1.8] text-muted dark:text-[#A09890] mb-6">
            With over 15 years of teaching, research, and industry engagement, Dr. Bhavna Ambudkar brings
            a rare blend of academic rigor and practical relevance to Design Thinking education. Her work
            spans classrooms, boardrooms, and startup ecosystems — consistently placing human-centered
            problem-solving at the center of innovation.
          </motion.p>

          <motion.p variants={fadeUp} className="font-sans font-light text-[16px] leading-[1.8] text-muted dark:text-[#A09890] mb-10">
            A committed pedagogue, she holds a Ph.D. and has earned advanced certifications in Design
            Thinking, Innovation Management, and Entrepreneurship. Her philosophy is simple: learning must
            be experiential, interdisciplinary, and purposeful.
          </motion.p>

          {/* Philosophy Card */}
          <motion.div 
            variants={fadeUp}
            className="bg-card dark:bg-[#242018] border-l-2 border-gold px-6 py-8"
          >
            <p className="font-display italic text-[20px] text-ink dark:text-[#FAF7F2] mb-4">
              "Design Thinking is not a process. It is a mindset — one that begins with radical empathy
              and ends with meaningful change."
            </p>
            <span className="font-sans text-[12px] text-gold tracking-wider uppercase inline-block mt-2">
              — Dr. Bhavna Ambudkar
            </span>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-wrap gap-8 lg:gap-16 mt-12"
          >
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '200+', label: 'Students Mentored' },
              { number: '30+', label: 'Publications & Papers' }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-display text-[48px] leading-none text-gold mb-2">{stat.number}</span>
                <span className="font-sans text-[12px] uppercase tracking-widest text-muted dark:text-[#A09890]">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
