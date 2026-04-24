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

const smallPosts = [
  {
    category: "Innovation",
    title: "The 5 Most Common Mistakes in Design Thinking Workshops (And How to Fix Them)",
    date: "Feb 2024",
    image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=600",
    excerpt: "Facilitation is more art than science, but certain foundational errors can derail even the most enthusiastic teams..."
  },
  {
    category: "Industry",
    title: "From Classroom to Boardroom: How DT Is Reshaping Indian Corporations",
    date: "Jan 2024",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600",
    excerpt: "Tracking the migration of design principles from academic theory into the core operations of enterprise leaders..."
  },
  {
    category: "AI & Education",
    title: "AI Is Not the Enemy of Empathy — It's the Amplifier",
    date: "Dec 2023",
    image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?w=600",
    excerpt: "Integrating generative tools into human-centered workflows without losing the vital spark of radical empathy..."
  }
];

const Blog = () => {
  return (
    <section id="blog" className="bg-ivory dark:bg-[#0F0E0C] py-32 px-8 md:px-20">
      <div className="max-w-[1920px] mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">Blog</span>
            <div className="h-px w-[48px] bg-gold" />
          </div>

          <h2 className="font-display font-normal text-[40px] md:text-[52px] leading-[1.1] text-ink dark:text-[#FAF7F2] mb-4">
            Blog & Thought Leadership
          </h2>
          <p className="font-sans font-light text-[16px] leading-[1.8] text-muted dark:text-[#A09890] max-w-2xl">
            Perspectives on Design Thinking, future skills, and the evolving landscape of innovation in education.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-card dark:bg-[#242018] border border-border dark:border-[#333028] overflow-hidden grid grid-cols-1 lg:grid-cols-2 mb-8 group cursor-pointer"
        >
          <div className="overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800"
              alt="Design Thinking"
              className="w-full h-80 lg:h-full object-cover dark:brightness-75 group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
            />
          </div>
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            <span className="font-sans text-[10px] tracking-widest uppercase text-gold mb-6 inline-block">
              Design Thinking
            </span>
            <h3 className="font-display font-medium text-[32px] md:text-[36px] text-ink dark:text-[#FAF7F2] leading-tight mb-4">
              Why Every Engineer Needs a Design Thinker's Mindset
            </h3>
            <p className="font-sans font-light text-[15px] leading-[1.7] text-muted dark:text-[#A09890] mb-8">
              Technical brilliance without empathy often leads to perfectly engineered products that no one needs. 
              Here is why integrating human-centered methodologies into engineering curricula is no longer optional, 
              but an imperative for creating sustainable impact.
            </p>
            
            <div className="mt-auto flex items-center justify-between w-full gap-4">
              <span className="font-sans text-[12px] text-muted dark:text-[#A09890]">
                March 15, 2024
              </span>
              <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="font-sans text-[12px] text-gold uppercase tracking-widest hover:underline">Read Full Blog</a>
            </div>
          </div>
        </motion.div>

        {/* Small Posts Grid */}
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {smallPosts.map((post, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              className="bg-card dark:bg-[#242018] border border-border dark:border-[#333028] overflow-hidden group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover dark:brightness-75 group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                />
              </div>
              <div className="p-6">
                <span className="font-sans text-[10px] uppercase tracking-widest text-gold mb-3 inline-block">
                  {post.category}
                </span>
                <h4 className="font-display font-medium text-[22px] text-ink dark:text-[#FAF7F2] leading-[1.3] mb-3">
                  {post.title}
                </h4>
                <p className="font-sans font-light text-[13px] leading-[1.6] text-muted dark:text-[#A09890] mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-sans text-[11px] text-muted dark:text-[#A09890]">
                    {post.date}
                  </span>
                  <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" className="font-sans text-[11px] text-gold uppercase tracking-widest hover:underline">Read Full Blog</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
