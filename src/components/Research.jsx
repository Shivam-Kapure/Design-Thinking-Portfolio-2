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

const metrics = [
  { value: "30+", label: "Papers" },
  { value: "200+", label: "Citations" },
  { value: "8", label: "Journals" },
  { value: "2", label: "Books" }
];

const publications = [
  {
    type: "Journal Article",
    title: "Design Thinking as a Pedagogical Framework in Engineering Education",
    meta: "Journal of Engineering Education Research, 2023"
  },
  {
    type: "Journal Article",
    title: "Empathy Mapping for Student-Centered Learning: A Mixed Methods Approach",
    meta: "International Journal of Innovation in Education, 2022"
  },
  {
    type: "Journal Article",
    title: "AI-Enabled Design Thinking: Integrating Machine Intelligence into Human-Centered Problem Solving",
    meta: "Technology in Society, 2022"
  },
  {
    type: "Journal Article",
    title: "Measuring Innovation Competency: A Framework for Higher Education Institutions",
    meta: "Journal of Innovation & Knowledge, 2021"
  },
  {
    type: "Journal Article",
    title: "Startup Mentorship Models in Academic Ecosystems: Evidence from Indian B-Schools",
    meta: "SAGE Open, 2020"
  }
];

const Research = () => {
  return (
    <section id="research" className="bg-ivory dark:bg-[#0F0E0C] py-32 px-8 md:px-20">
      <div className="max-w-[1920px] mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">Research</span>
            <div className="h-px w-[48px] bg-gold" />
          </div>

          <h2 className="font-display font-normal text-[40px] md:text-[52px] leading-[1.1] text-ink dark:text-[#FAF7F2] mb-4">
            Research & Publications
          </h2>
          <p className="font-sans font-light text-[16px] leading-[1.8] text-muted dark:text-[#A09890] mb-16">
            Peer-reviewed contributions advancing the field of Design Thinking and Innovation.
          </p>
        </motion.div>

        {/* Metrics Bar */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-card dark:bg-[#242018] border border-border dark:border-[#333028] py-8 px-12 mb-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center md:text-left"
        >
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col border-r last:border-r-0 border-border dark:border-[#333028] pr-0 md:pr-4">
              <span className="font-display text-[40px] text-gold leading-none mb-2">{metric.value}</span>
              <span className="font-sans text-[12px] uppercase tracking-widest text-muted dark:text-[#A09890]">{metric.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Publications List */}
        <motion.div 
           variants={stagger}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="flex flex-col"
        >
          {publications.map((pub, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              className="w-full flex flex-col md:flex-row md:items-center justify-between border-b border-border dark:border-[#333028] py-6 px-0 hover:bg-surface dark:hover:bg-[#1C1A16] hover:px-4 rounded transition-all duration-300 group"
            >
              <div className="flex flex-col pr-8">
                <span className="font-sans text-[10px] uppercase tracking-wider px-2 py-0.5 border border-border dark:border-[#333028] text-muted dark:text-[#A09890] inline-block w-max mb-3">
                  {pub.type}
                </span>
                <h4 className="font-sans font-medium text-[16px] text-ink dark:text-[#FAF7F2] mb-1 group-hover:text-gold transition-colors">
                  {pub.title}
                </h4>
                <p className="font-sans text-[13px] text-muted dark:text-[#A09890]">
                  {pub.meta}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mt-12"
        >
          <a 
            href="https://scholar.google.com/citations?user=s3EygqgAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold hover:text-[#0F0E0C] transition-all duration-300"
          >
            View All on Google Scholar →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
