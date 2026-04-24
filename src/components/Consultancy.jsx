import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const services = [
  {
    num: "01",
    title: "Curriculum Design & Review",
    desc: "Structuring DT-integrated curricula for UG/PG programs"
  },
  {
    num: "02",
    title: "Innovation Cell Setup",
    desc: "End-to-end advisory for establishing institutional innovation hubs"
  },
  {
    num: "03",
    title: "Faculty Development Programs",
    desc: "Upskilling educators in Design Thinking facilitation"
  },
  {
    num: "04",
    title: "Industry-Academia Collaboration",
    desc: "Bridging corporate needs with academic research capabilities"
  },
  {
    num: "05",
    title: "Strategic Advisory",
    desc: "Design Thinking as a strategic tool for organizational change management"
  }
];

const Consultancy = () => {
  return (
    <section id="consultancy" className="bg-ivory dark:bg-[#0F0E0C] py-32 px-8 md:px-20">
      <div className="max-w-[1920px] mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">Consultancy Services</span>
            <div className="h-px w-[48px] bg-gold" />
          </div>
          <p className="font-sans font-light text-[16px] leading-[1.8] text-muted dark:text-[#A09890] max-w-2xl">
            Partnering with institutions and organizations to embed innovation culture from the inside out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col"
          >
            <h3 className="font-display italic text-[40px] md:text-[52px] leading-[1.1] text-ink dark:text-[#FAF7F2] mb-8 pr-0 lg:pr-12">
              Turning Academic Expertise into Organizational Transformation
            </h3>
            
            <p className="font-sans font-light text-[16px] leading-[1.8] text-muted dark:text-[#A09890] mb-12 max-w-xl">
              Dr. Vance offers bespoke consultancy engagements for educational institutions, corporate L&D
              divisions, and government bodies seeking to institutionalize Design Thinking and build lasting
              innovation capability.
            </p>
            
            <div>
              <Link
                to="contact"
                smooth={true}
                offset={-64}
                duration={800}
                className="cursor-pointer bg-gold text-[#0F0E0C] px-8 py-4 text-sm tracking-widest uppercase font-sans font-medium hover:bg-[#B8994E] dark:hover:bg-[#D4B97E] transition-colors duration-300 inline-block"
              >
                REQUEST CONSULTATION
              </Link>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="flex items-start gap-6 border-b border-border dark:border-[#333028] py-6 last:border-b-0 hover:bg-surface dark:hover:bg-[#1C1A16] hover:px-4 -mx-4 px-4 transition-all duration-300 rounded"
              >
                <div className="font-display text-[32px] leading-none text-gold mt-1 min-w-[50px]">
                  {service.num}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-sans font-medium text-[15px] text-ink dark:text-[#FAF7F2] mb-2">
                    {service.title}
                  </h4>
                  <p className="font-sans font-light text-[13px] leading-[1.6] text-muted dark:text-[#A09890]">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Consultancy;
