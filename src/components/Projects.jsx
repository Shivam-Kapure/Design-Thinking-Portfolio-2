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

const smallProjects = [
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
    category: "College Board Initiative",
    title: "National Design Thinking Curriculum Reform",
    description: "Co-lead",
    year: "2022"
  },
  {
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=600",
    category: "Program Director",
    title: "Women in STEM Mentorship Program",
    description: "Program Director",
    year: "2020"
  },
  {
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600",
    category: "Facilitator",
    title: "Industry-Academia Bridge: Design Sprint Series",
    description: "Facilitator & Designer",
    year: "2021"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-surface dark:bg-[#1C1A16] py-32 px-8 md:px-20">
      <div className="max-w-[1920px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">Projects</span>
            <div className="h-px w-[48px] bg-gold" />
          </div>

          <h2 className="font-display font-normal text-[40px] md:text-[52px] leading-[1.1] text-ink dark:text-[#FAF7F2] mb-4">
            Projects & Initiatives
          </h2>
          <p className="font-sans font-light text-[16px] leading-[1.8] text-muted dark:text-[#A09890]">
            Building innovation ecosystems from the ground up.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-card dark:bg-[#242018] border border-border dark:border-[#333028] overflow-hidden grid grid-cols-1 md:grid-cols-2 mb-8 group cursor-pointer"
        >
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800"
              alt="Design Thinking Workshop"
              className="w-full h-80 md:h-full object-cover dark:brightness-75 group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
            />
          </div>
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="font-sans text-[10px] tracking-wider uppercase text-gold mb-4 inline-block">
              Flagship Initiative
            </span>
            <h3 className="font-display font-medium text-[32px] text-ink dark:text-[#FAF7F2] leading-tight mb-6">
              Innovation Cell — HOGWARTS
            </h3>
            <p className="font-sans font-light text-[15px] leading-[1.7] text-muted dark:text-[#A09890] mb-10">
              Founded and led HOGWARTS's interdisciplinary innovation cell, mentoring 50+ student startups,
              facilitating 20+ funded prototypes, and establishing the institution's first Design Lab.
            </p>

            <div className="flex flex-wrap gap-6 mt-auto">
              <div className="flex items-center gap-2">
                <span className="font-sans text-[10px] uppercase text-gold">Year:</span>
                <span className="font-sans text-[12px] text-muted dark:text-[#A09890]">2018–Present</span>
              </div>
              <div className="w-px h-[16px] bg-border dark:bg-[#333028]" />
              <div className="flex items-center gap-2">
                <span className="font-sans text-[10px] uppercase text-gold">Role:</span>
                <span className="font-sans text-[12px] text-muted dark:text-[#A09890]">Founder & Director</span>
              </div>
              <div className="w-px h-[16px] bg-border dark:bg-[#333028]" />
              <div className="flex items-center gap-2">
                <span className="font-sans text-[10px] uppercase text-gold">Impact:</span>
                <span className="font-sans text-[12px] text-muted dark:text-[#A09890]">500+ Students</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {smallProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-card dark:bg-[#242018] border border-border dark:border-[#333028] overflow-hidden group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover dark:brightness-75 group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                />
              </div>
              <div className="p-6">
                <span className="inline-block font-sans text-[10px] uppercase tracking-widest px-3 py-1 bg-gold/10 dark:bg-gold/15 text-gold mb-4">
                  {project.category}
                </span>
                <h4 className="font-display font-medium text-[22px] text-ink dark:text-[#FAF7F2] leading-[1.3] mb-3">
                  {project.title}
                </h4>
                <div className="flex items-center justify-between mt-6">
                  <p className="font-sans text-[13px] text-muted dark:text-[#A09890]">
                    {project.year} | {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
