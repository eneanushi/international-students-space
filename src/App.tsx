import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
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

function Home() {
  return (
    <>
      <OpeningEffect />
      <div className="space-y-8">
        <Hero />
        <Timeline />
        <Features />
        <Subscribe />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="relative h-screen w-full font-sans bg-black">
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
        <div className="relative flex flex-col h-full w-full max-w-[1920px] mx-auto z-10">
          <Header />
          <main className="flex-1 w-full overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<FeaturesPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
