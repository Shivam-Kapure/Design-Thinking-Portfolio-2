import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Projects from '../components/Projects';
import Research from '../components/Research';
import Workshops from '../components/Workshops';
import Impact from '../components/Impact';
import Consultancy from '../components/Consultancy';
import Media from '../components/Media';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Research />
      <Workshops />
      <Impact />
      <Consultancy />
      <Media />
      <Blog />
      <Contact />
    </main>
  );
};

export default Home;
