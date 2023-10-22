import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Services from './components/Services';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <div className="App text-white">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
