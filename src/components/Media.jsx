import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const awards = [
  {
    title: "Best Educator Award",
    issuer: "Hogwarts University, 2023"
  },
  {
    title: "Innovation Champion",
    issuer: "CII (Confederation of International Industry), 2022"
  },
  {
    title: "National Design Thinking Fellow",
    issuer: "NASSCOM Foundation, 2021"
  },
  {
    title: "Excellence in Research Mentorship",
    issuer: "Global Foundation, 2020"
  },
  {
    title: "Outstanding Faculty in Entrepreneurship",
    issuer: "Entrepreneurship Development Institute, 2019"
  },
  {
    title: "Women Leader in Academia",
    issuer: "FICCI FLO Japan Chapter, 2018"
  }
];

const mediaMentions = [
  "Global Education Plus",
  "Higher Ed Times",
  "Campus Review",
  "TechStory",
  "EdTechReview"
];

const Media = () => {
  return (
    <section id="media" className="bg-surface dark:bg-[#1C1A16] py-32 px-8 md:px-20 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">Media & Recognition</span>
            <div className="h-px w-[48px] bg-gold" />
          </div>

          <h2 className="font-display font-normal text-[40px] md:text-[52px] leading-[1.1] text-ink dark:text-[#FAF7F2] mb-4">
            Awards & Mentions
          </h2>
          <p className="font-sans font-light text-[16px] leading-[1.8] text-muted dark:text-[#A09890] max-w-2xl">
            Featured in national media, recognized by industry bodies, and certified by global institutions.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        >
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-card dark:bg-[#242018] border border-border dark:border-[#333028] p-8 hover:border-gold transition-colors duration-300"
            >
              <Award size={32} strokeWidth={1.5} className="text-gold mb-6" />
              <h3 className="font-sans font-medium text-[16px] text-ink dark:text-[#FAF7F2] mb-2">
                {award.title}
              </h3>
              <p className="font-sans text-[13px] text-muted dark:text-[#A09890]">
                {award.issuer}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Media Mentions - horizontal scroll mobile, grid desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-4 mb-8">
            <h3 className="font-sans text-[12px] uppercase tracking-widest text-muted dark:text-[#A09890]">Featured In</h3>
            <div className="h-px flex-1 bg-border dark:bg-[#333028]" />
          </div>

          <div className="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto pb-4 md:pb-0 -mx-8 px-8 md:mx-0 md:px-0 snap-x">
            {mediaMentions.map((mention, idx) => (
              <div
                key={idx}
                className="flex-[0_0_240px] md:flex-auto h-20 flex items-center justify-center bg-card dark:bg-[#242018] border border-border dark:border-[#333028] px-4 grayscale hover:grayscale-0 transition-all duration-300 cursor-default snap-center hover:border-gold"
              >
                <span className="font-display italic text-[16px] text-muted dark:text-[#A09890] text-center">
                  {mention}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Media;
