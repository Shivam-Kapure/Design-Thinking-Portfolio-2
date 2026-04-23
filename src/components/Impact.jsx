import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

function Counter({ from, to, duration = 2 }) {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value);
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration]);

  return <span ref={nodeRef}>{from}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const testimonials = [
  {
    quote: "Dr. Ambudkar's Design Thinking workshop was a turning point. It changed not just how I build products, but how I see problems.",
    author: "Alumni, SIT Pune (2022 Batch)"
  },
  {
    quote: "Her mentorship helped us pivot our startup idea three times — and land our first client within six months of graduating.",
    author: "Founder, EdTech Startup, Pune"
  }
];

const cards = [
  {
    title: "Student Startup Ecosystem",
    desc: "Mentored 50+ ventures from ideation to market entry"
  },
  {
    title: "National Outreach Programs",
    desc: "Conducted workshops across 12 institutions pan-India"
  },
  {
    title: "Research Scholarship",
    desc: "Supervised 8 PhD scholars and 20+ MTech dissertations"
  }
];

const Impact = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="impact" className="bg-[#1A1814] dark:bg-[#0A0906] py-32 px-8 md:px-20">
      <div className="max-w-[1920px] mx-auto text-center md:text-left">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
            <div className="h-px w-[48px] bg-gold" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">Mentorship & Impact</span>
          </div>

          <h2 className="font-display font-light italic text-[40px] md:text-[64px] leading-[1.1] text-[#FAF7F2] max-w-4xl mx-auto md:mx-0">
            Two Decades of Transforming Lives Through Education
          </h2>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-between items-center py-16 border-t border-b border-[#333028] my-16 gap-12 md:gap-0"
        >
          {[
            { num: 200, label: "Mentees" },
            { num: 50, label: "Startups Supported" },
            { num: 15, label: "Industry Partners" }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center flex-1 text-center border-r-0 md:border-r border-[#333028] last:border-r-0">
              <span className="font-display text-[64px] md:text-[80px] leading-none text-gold mb-4">
                <Counter from={0} to={stat.num} />+
              </span>
              <span className="font-sans text-[12px] text-[#A09890] uppercase tracking-[0.2em]">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="my-24 relative"
        >
          <div className="max-w-3xl mx-auto text-center min-h-[160px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-display italic text-[20px] md:text-[24px] leading-[1.6] text-[#FAF7F2] mb-6">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <p className="font-sans text-[12px] text-gold uppercase tracking-widest">
                  — {testimonials[currentTestimonial].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-[40px] h-[40px] flex items-center justify-center border border-[#333028] text-[#A09890] hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft size={20} strokeWidth={1} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-[40px] h-[40px] flex items-center justify-center border border-[#333028] text-[#A09890] hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight size={20} strokeWidth={1} />
            </button>
          </div>
        </motion.div>

        {/* Impact Cards */}
        <motion.div 
           variants={stagger}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              className="bg-[#242018] border border-[#333028] p-8 text-left group hover:border-gold transition-colors duration-300"
            >
              <div className="w-[48px] h-[48px] rounded-full bg-gold/15 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                 <Star size={20} strokeWidth={1.5} className="text-gold group-hover:text-[#0F0E0C] transition-colors" />
              </div>
              <h3 className="font-display text-[22px] text-[#FAF7F2] mb-3">
                {card.title}
              </h3>
              <p className="font-sans text-[14px] leading-[1.7] text-[#A09890]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Impact;
