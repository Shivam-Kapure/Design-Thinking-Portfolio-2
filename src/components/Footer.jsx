import React from 'react';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Expertise', to: 'expertise' },
  { name: 'Projects', to: 'projects' },
  { name: 'Research', to: 'research' },
  { name: 'Workshops', to: 'workshops' },
  { name: 'Impact', to: 'impact' },
  { name: 'Consultancy', to: 'consultancy' },
  { name: 'Media', to: 'media' },
  { name: 'Blog', to: 'blog' },
  { name: 'Contact', to: 'contact' },
];

const SocialLinks = [
  { name: "LinkedIn", link: "https://linkedin.com/" },
  { name: "Google Scholar", link: "https://scholar.google.com/" },
  { name: "ResearchGate", link: "https://www.researchgate.net/" },
  { name: "Academia", link: "https://www.academia.edu/" }
];

const Footer = () => {
  return (
    <footer className="bg-[#1A1814] pt-24 pb-12 px-8 md:px-20 text-[#FAF7F2]">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          
          {/* Col 1 */}
          <div className="flex flex-col items-start pr-0 md:pr-12">
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="cursor-pointer font-display italic font-medium text-[32px] text-gold mb-4"
            >
              EV
            </Link>
            <p className="font-sans font-light text-[15px] leading-[1.6] text-[#A09890] max-w-sm">
              Designing Futures. One Mind at a Time.
            </p>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col">
            <h4 className="font-sans text-[11px] uppercase tracking-widest text-[#A09890] mb-6">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  offset={-64}
                  duration={800}
                  className="cursor-pointer font-sans text-[13px] text-[#FAF7F2] hover:text-gold transition-colors inline-block w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col">
            <h4 className="font-sans text-[11px] uppercase tracking-widest text-[#A09890] mb-6">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {SocialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.link}
                  className="font-sans text-[13px] text-[#FAF7F2] hover:text-gold transition-colors inline-block w-fit"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333028] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-sans text-[12px] text-[#6B6560]">
            © 2025 Dr. Eleanor Vance. All rights reserved.
          </p>
          <p className="font-display italic text-[14px] text-[#6B6560]">
            Designed with intent. Built with purpose.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
