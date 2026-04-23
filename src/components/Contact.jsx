import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, GraduationCap, BookOpen } from 'lucide-react';

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-1.83 0-2.54 1-2.92 1.56V9.85H9.5v8.65h2.82v-4.8c0-.28.05-.55.13-.75.22-.55.72-1.12 1.56-1.12 1.1 0 1.54.84 1.54 2.07v4.62h2.95M6.4 8.28h-.02a1.6 1.6 0 1 1 .02 0m-1.4 10.22h2.82V9.85H5v8.65z"/>
  </svg>
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // In a real app, send data here.
      // For the prompt: "On submit: show 'Thank you. I'll be in touch soon.'"
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-surface dark:bg-[#1C1A16] py-32 px-8 md:px-20">
      <div className="max-w-[1920px] mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">Get In Touch</span>
            <div className="h-px w-[48px] bg-gold" />
          </div>

          <h2 className="font-display font-normal text-[40px] md:text-[52px] leading-[1.1] text-ink dark:text-[#FAF7F2] mb-4">
            Contact & Collaboration
          </h2>
          <p className="font-sans font-light text-[16px] leading-[1.8] text-muted dark:text-[#A09890] max-w-2xl">
            Open to speaking engagements, research collaborations, consulting inquiries, and mentorship partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-24">
          {/* Left - Form */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col"
          >
            <div className="space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-border dark:border-[#333028] py-3 font-sans text-[15px] font-light text-ink dark:text-[#FAF7F2] placeholder:text-muted/60 dark:placeholder:text-[#A09890]/50 focus:outline-none focus:border-gold dark:focus:border-gold transition-colors"
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-border dark:border-[#333028] py-3 font-sans text-[15px] font-light text-ink dark:text-[#FAF7F2] placeholder:text-muted/60 dark:placeholder:text-[#A09890]/50 focus:outline-none focus:border-gold dark:focus:border-gold transition-colors"
                />
              </div>
              <div className="relative border-b border-border dark:border-[#333028]">
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent py-3 font-sans text-[15px] font-light text-ink dark:text-[#FAF7F2] focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-muted/60">Select Subject...</option>
                  <option value="Consulting" className="dark:bg-[#1C1A16]">Consulting</option>
                  <option value="Speaking" className="dark:bg-[#1C1A16]">Speaking</option>
                  <option value="Research" className="dark:bg-[#1C1A16]">Research</option>
                  <option value="Mentorship" className="dark:bg-[#1C1A16]">Mentorship</option>
                  <option value="Other" className="dark:bg-[#1C1A16]">Other</option>
                </select>
                {/* Custom chevron dropdown icon */}
                <div className="absolute right-0 top-[20px] pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" className="text-muted dark:text-[#A09890]"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-border dark:border-[#333028] py-3 font-sans text-[15px] font-light text-ink dark:text-[#FAF7F2] placeholder:text-muted/60 dark:placeholder:text-[#A09890]/50 focus:outline-none focus:border-gold dark:focus:border-gold transition-colors resize-none"
                />
              </div>

              <div className="pt-6 relative h-[60px]">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute inset-0 flex items-center"
                    >
                      <p className="font-display italic text-[20px] text-gold">
                        Thank you. I'll be in touch soon.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="button"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute inset-0"
                    >
                      <button 
                        onClick={handleSubmit}
                        className="w-full bg-gold text-[#0F0E0C] py-4 text-sm font-sans font-medium uppercase tracking-widest hover:bg-[#B8994E] dark:hover:bg-[#D4B97E] transition-colors duration-300"
                      >
                        Send Message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right - Info */}
          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <div className="flex flex-col gap-4">
              {[
                { label: "Email Me", value: "bhavna.ambudkar@sitpune.edu.in", link: "mailto:bhavna.ambudkar@sitpune.edu.in", icon: Mail },
                { label: "Connect on LinkedIn", value: "/in/bhavna-ambudkar", link: "https://linkedin.com/in/bhavna-ambudkar-2683a919", icon: LinkedinIcon },
                { label: "Google Scholar Profile", value: "Dr. Bhavna Ambudkar", link: "https://scholar.google.com/citations?user=s3EygqgAAAAJ&hl=en", icon: GraduationCap },
                { label: "ResearchGate Profile", value: "Dr. Bhavna Ambudkar", link: "https://www.researchgate.net/profile/Dr-Bhavna-Ambudkar", icon: BookOpen }
              ].map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.div key={idx} variants={fadeUp}>
                    {info.link ? (
                      <a href={info.link} target={info.link.startsWith('mailto') ? "_self" : "_blank"} rel="noopener noreferrer" className="flex items-center gap-4 bg-card dark:bg-[#242018] border border-border dark:border-[#333028] p-4 hover:border-gold transition-colors group rounded-sm w-full">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/10 group-hover:bg-gold transition-colors">
                          <Icon size={20} className="text-gold group-hover:text-[#0F0E0C] transition-colors" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-sans font-medium text-[14px] text-ink dark:text-[#FAF7F2]">{info.label}</span>
                          <span className="font-sans text-[12px] text-muted dark:text-[#A09890]">{info.value}</span>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 border border-border dark:border-[#333028] p-4 rounded-sm w-full">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-surface dark:bg-[#1C1A16]">
                          <Icon size={20} className="text-muted dark:text-[#A09890]" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-sans font-medium text-[14px] text-ink dark:text-[#FAF7F2]">{info.label}</span>
                          <span className="font-sans text-[12px] text-muted dark:text-[#A09890]">{info.value}</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              variants={fadeUp}
              className="mt-10 border-l-2 border-gold pl-6"
            >
              <p className="font-display italic text-[20px] text-ink dark:text-[#FAF7F2]">
                "Innovation is born from the intersection of empathy, creativity, and systemic thinking."
              </p>
              <p className="font-sans text-[13px] text-muted dark:text-[#A09890] mt-3 uppercase tracking-widest">
                — DR. BHAVNA AMBUDKAR
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
