import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Infrastructure } from './components/Infrastructure';
import { Testimonials } from './components/Testimonials';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Services />
      {/* <Infrastructure /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;