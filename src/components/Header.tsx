import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#232946]/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-4">
            <div className="size-6">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-[-0.015em] text-white">The International Students Space</h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9">
            <Link to="/" className="text-white text-sm font-medium hover:text-[#607afb] transition-colors">Home</Link>
            <Link to="/about" className="text-white text-sm font-medium hover:text-[#607afb] transition-colors">About</Link>
            <Link to="/features" className="text-white text-sm font-medium hover:text-[#607afb] transition-colors">Features</Link>
            <a href="#contact" className="text-white text-sm font-medium hover:text-[#607afb] transition-colors">Contact</a>
            <button className="rounded-xl bg-[#607afb] px-6 h-10 text-sm font-bold text-white hover:bg-[#4a5fd9] transition-colors">
              I'm Interested
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#232946]/95 backdrop-blur-sm rounded-b-xl">
              <Link to="/" className="block px-3 py-2 text-white text-sm font-medium hover:text-[#607afb] transition-colors">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-white text-sm font-medium hover:text-[#607afb] transition-colors">About</Link>
              <Link to="/features" className="block px-3 py-2 text-white text-sm font-medium hover:text-[#607afb] transition-colors">Features</Link>
              <a href="#contact" className="block px-3 py-2 text-white text-sm font-medium hover:text-[#607afb] transition-colors">Contact</a>
              <button className="w-full mt-2 rounded-xl bg-[#607afb] px-6 h-10 text-sm font-bold text-white hover:bg-[#4a5fd9] transition-colors">
                I'm Interested
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
  