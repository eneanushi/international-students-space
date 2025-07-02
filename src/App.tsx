import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Features from './components/Features';
import Subscribe from './components/Subscribe';
import Aurora from './components/Aurora';
import OpeningEffect from './components/OpeningEffect';
import About from './components/About';
import FeaturesPage from './components/FeaturesPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Space from './components/Space';
import PrivacyPolicy from './components/PrivacyPolicy';
import ConsentModal from './components/ConsentModal';
import Roadmap from './components/Roadmap';

function Home() {
  const [showConsentModal, setShowConsentModal] = useState(true); // Show immediately
  const [showOpeningAnimation, setShowOpeningAnimation] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleConsentAccept = () => {
    setShowConsentModal(false);
    setShowOpeningAnimation(true);
  };

  const handleOpeningComplete = () => {
    setShowMainContent(true);
  };

  return (
    <>
      {/* Consent Modal - shows first */}
      <ConsentModal 
        isVisible={showConsentModal} 
        onAccept={handleConsentAccept} 
      />
      
      {/* Opening Animation - shows after consent */}
      {showOpeningAnimation && (
        <OpeningEffect onComplete={handleOpeningComplete} />
      )}
      
      {/* Main Content - only show after opening animation */}
      {showMainContent && (
        <div className="space-y-8">
          <Hero />
          <Timeline />
          <Features />
          <Subscribe />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full font-sans bg-black flex flex-col overflow-hidden">
        {/* Aurora background absolutely positioned and behind content */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.7}
            amplitude={1.2}
            speed={0.5}
          />
        </div>
        {/* Main content above Aurora */}
        <div className="relative w-full max-w-[1920px] mx-auto z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/space" element={<Space />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/roadmap" element={<Roadmap />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
