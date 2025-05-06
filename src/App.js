import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutSection from './components/AboutSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Simple routing state
  const [currentPage, setCurrentPage] = useState('home');

  // Navigation handler
  const navigate = (page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <Navbar onNavigate={navigate} />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-center text-3xl font-bold mb-12 uppercase">A Church That's Relevant</h2>
            <Features />
          </div>
          <AboutSection />
        </>
      )}
      
      {currentPage === 'contact' && (
        <Contact />
      )}
      
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;