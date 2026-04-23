import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Rocket, 
  Brain, 
  FlaskConical, 
  Users, 
  Leaf 
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const expertiseData = [
  {
    icon: Lightbulb,
    title: "Design Thinking",
    description: "Facilitating structured Design Thinking workshops and integrating DT methodologies into undergraduate and postgraduate curricula at SIT Pune.",
    tags: ["Empathy", "Ideation", "Prototyping", "Testing"]
  },
  {
    icon: Rocket,
    title: "Innovation & Entrepreneurship",
    description: "Supporting student and faculty ventures through mentorship, innovation cells, and cross-disciplinary ideation programs.",
    tags: ["Lean Startup", "Startup Ecosystem", "Incubation"]
  },
  {
    icon: Brain,
    title: "AI Integration in Education",
    description: "Pioneering the integration of AI-driven pedagogical tools into engineering and management education programs.",
    tags: ["EdTech", "AI Tools", "Curriculum Design"]
  },
  {
    icon: FlaskConical,
    title: "Research Methodology",
    description: "Guiding doctoral and post-doctoral researchers in rigorous academic inquiry with real-world applicability.",
    tags: ["Qualitative", "Mixed Methods", "Action Research"]
  },
  {
    icon: Users,
    title: "Corporate Training & L&D",
    description: "Delivering customized training programs for industry professionals in Design Thinking and Innovation frameworks.",
    tags: ["Workshops", "Leadership", "Upskilling"]
  },
  {
    icon: Leaf,
    title: "Sustainability & Social Innovation",
    description: "Applying Design Thinking principles to develop solutions for societal challenges aligned with UN Sustainable Development Goals.",
    tags: ["SDGs", "Impact Design", "Community"]
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="bg-ivory dark:bg-[#0F0E0C] py-32 px-8 md:px-20">
      <div className="max-w-[1920px] mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">Expertise</span>
            <div className="h-px w-[48px] bg-gold" />
          </div>

          <h2 className="font-display font-normal text-[40px] md:text-[52px] leading-[1.1] text-ink dark:text-[#FAF7F2] mb-6">
            Areas of Expertise
          </h2>
          <p className="font-sans font-light text-[16px] leading-[1.8] text-muted dark:text-[#A09890] max-w-2xl mb-16">
            A multidisciplinary foundation built over years of teaching, research, and industry practice.
          </p>
        </motion.div>

        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {expertiseData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="group bg-card dark:bg-[#242018] border border-border dark:border-[#333028] p-8 hover:border-gold dark:hover:border-gold transition-all duration-500"
              >
                <div className="w-[56px] h-[56px] rounded-full bg-gold/10 dark:bg-gold/15 flex items-center justify-center group-hover:bg-gold transition-colors duration-500 mb-6">
                  <Icon size={28} strokeWidth={1.5} className="text-gold group-hover:text-[#0F0E0C] transition-colors duration-500" />
                </div>
                
                <h3 className="font-display font-medium text-[22px] text-ink dark:text-[#FAF7F2] mb-3">
                  {item.title}
                </h3>
                
                <p className="font-sans font-light text-[14px] leading-[1.7] text-muted dark:text-[#A09890] mb-8 min-h-[70px]">
                  {item.description}
                </p>
                
                <div className="flex gap-2 flex-wrap mt-auto">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="font-sans text-[10px] tracking-wider uppercase px-3 py-1 border border-border dark:border-[#333028] group-hover:border-gold group-hover:text-gold text-muted dark:text-[#A09890] transition-colors duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
