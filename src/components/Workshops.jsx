import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const workshops = [
  {
    num: "01",
    title: "Design Thinking Bootcamp — 5 Stages in 2 Days",
    mode: "In-Person",
    duration: "2 Days",
    desc: "An intensive workshop walking participants through the full DT process: Empathize, Define, Ideate, Prototype, Test."
  },
  {
    num: "02",
    title: "Human-Centered AI: Designing with Intelligence",
    mode: "Hybrid",
    duration: "Full-Day",
    desc: "Exploring how AI tools can be embedded in the Design Thinking process without losing human empathy at the core."
  },
  {
    num: "03",
    title: "Corporate Innovation Sprint for Leadership Teams",
    mode: "Corporate",
    duration: "2 Days",
    desc: "Tailored 2-day sessions for senior management to apply DT frameworks to business challenges."
  },
  {
    num: "04",
    title: "Women & Innovation: Building Confidence to Create",
    mode: "In-Person",
    duration: "Full-Day",
    desc: "A specialized workshop empowering women professionals and students to lead innovation initiatives."
  },
  {
    num: "05",
    title: "Design Thinking for Social Impact",
    mode: "In-Person",
    duration: "3 Days",
    desc: "Community-centered problem-solving using DT applied to NGO, government, and social enterprise challenges."
  },
  {
    num: "06",
    title: "Facilitator Certification Program — Train the Trainer",
    mode: "Hybrid",
    duration: "3 Days",
    desc: "Equipping educators and corporate L&D professionals to independently facilitate Design Thinking workshops."
  }
];

const Workshops = () => {
  return (
    <section id="workshops" className="bg-surface dark:bg-[#1C1A16] py-32 px-8 md:px-20">
      <div className="max-w-[1920px] mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">Workshops</span>
            <div className="h-px w-[48px] bg-gold" />
          </div>

          <h2 className="font-display font-normal text-[40px] md:text-[52px] leading-[1.1] text-ink dark:text-[#FAF7F2] mb-4">
            Workshops & Training
          </h2>
          <p className="font-sans font-light text-[16px] leading-[1.8] text-muted dark:text-[#A09890]">
            Hands-on, immersive programs designed to build lasting Design Thinking capability.
          </p>
        </motion.div>

        <motion.div 
           variants={stagger}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {workshops.map((workshop, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              className="bg-card dark:bg-[#242018] border border-border dark:border-[#333028] p-8 flex flex-col hover:border-gold transition-colors duration-300"
            >
              <div className="font-display font-light text-[64px] leading-none text-gold/20 dark:text-gold/10">
                {workshop.num}
              </div>
              
              <h3 className="font-display font-medium text-[24px] text-ink dark:text-[#FAF7F2] -mt-6 relative z-10 mb-4">
                {workshop.title}
              </h3>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="font-sans text-[10px] uppercase px-2 py-0.5 border border-border dark:border-[#333028] text-muted dark:text-[#A09890]">
                  {workshop.mode}
                </span>
                <span className="font-sans text-[12px] text-gold">
                  {workshop.duration}
                </span>
              </div>
              
              <p className="font-sans text-[14px] leading-[1.7] text-muted dark:text-[#A09890] mb-8 flex-grow">
                {workshop.desc}
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border dark:border-[#333028]">
                <div className="h-px w-[32px] bg-gold" />
                <span className="font-sans text-[11px] text-muted dark:text-[#A09890] uppercase tracking-wider">
                  Delivered 12+ times
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Workshops;
