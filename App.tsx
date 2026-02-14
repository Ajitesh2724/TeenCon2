import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Sponsors from './components/Sponsors';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Impact />
        <Events />
        <Testimonials />
        <Sponsors />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
