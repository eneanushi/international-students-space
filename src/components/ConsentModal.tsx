import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ConsentModalProps {
  isVisible: boolean;
  onAccept: () => void;
}

const ConsentModal: React.FC<ConsentModalProps> = ({ isVisible, onAccept }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Start animation after a brief delay
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className={`max-w-4xl mx-auto px-4 py-4 md:px-12 md:py-16 transition-all duration-1000 ${
        isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-[#232946]/95 to-[#1a1f35]/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-12 shadow-2xl border border-[#607afb]/20">
          
          {/* Headline Section */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                This is the{' '}
              </span>
              <span className="bg-gradient-to-r from-[#607afb] to-[#ff6b6b] bg-clip-text text-transparent">
                International Student Space
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/80 mb-6 md:mb-8 leading-relaxed">
              Made to help international students use all the resources in the U.S.
            </p>
            
            <div className="bg-gradient-to-r from-[#607afb]/10 to-[#ff6b6b]/10 border-l-4 border-[#607afb] p-4 md:p-6 rounded-r-xl">
              <p className="text-base md:text-xl text-white/90 italic">
                Remember: <span className="font-bold text-[#607afb]">early</span> is on time,{' '}
                <span className="font-bold text-[#607afb]">on time</span> is late, and{' '}
                <span className="font-bold text-[#ff6b6b]">late</span> is unacceptable.
              </p>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="mb-6 md:mb-8 p-4 md:p-6 bg-[#232946]/50 rounded-xl border border-white/10">
            <p className="text-white/70 text-center leading-relaxed text-sm md:text-base">
              By continuing, you agree to our privacy policy. This platform provides general guidance only. 
              Always consult with your DSO before taking any official steps.
            </p>
          </div>

          {/* Checkbox and Button Section */}
          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded border-2 transition-all duration-300 ${
                  isChecked 
                    ? 'bg-[#607afb] border-[#607afb]' 
                    : 'border-white/40 group-hover:border-[#607afb]'
                }`}>
                  {isChecked && (
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-white/80 group-hover:text-white transition-colors text-sm md:text-base">
                I accept and agree to the{' '}
                <Link 
                  to="/privacy" 
                  className="text-[#607afb] hover:text-[#4c63d2] underline transition-colors"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>

            <button
              onClick={onAccept}
              disabled={!isChecked}
              className={`px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform ${
                isChecked
                  ? 'bg-gradient-to-r from-[#607afb] to-[#ff6b6b] hover:from-[#4c63d2] hover:to-[#e55a5a] hover:scale-105 shadow-lg cursor-pointer'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              Enter The Platform
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 md:mt-8 text-center">
            <p className="text-white/50 text-xs md:text-sm">
              This platform is designed to guide, not replace professional advice
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal; 