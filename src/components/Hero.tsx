import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col gap-4 py-8 sm:py-10 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] text-white">
                Your AI buddy for college life in the U.S.
              </h1>
              <p className="text-sm sm:text-base text-white/80 max-w-2xl">
                Navigating college life in a new country can be challenging. We're here to help you every step of the way.
              </p>
            </div>
                        <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative group">
                <button 
                  className="flex items-center justify-center rounded-xl bg-[#607afb] px-4 sm:px-6 h-10 text-xs sm:text-sm font-bold text-white hover:bg-[#4a5fd9] transition-colors cursor-pointer w-full sm:w-auto"
                >
                  <span className="hidden sm:inline">Learn About AgentX Navigator Mobile Application</span>
                  <span className="sm:hidden">AgentX Mobile App</span>
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <div className="flex items-center gap-1 bg-[#607afb]/10 px-2 py-1 rounded-full">
                    <svg className="w-3 h-3 text-[#607afb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-xs text-[#607afb]">Coming Soon</span>
                  </div>
                </div>
              </div>
              <Link 
                to="/space" 
                className="flex items-center justify-center rounded-xl border border-white/20 px-4 sm:px-6 h-10 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                <span className="hidden sm:inline">Visit International Student Space</span>
                <span className="sm:hidden">Students Space</span>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div
              className="w-full aspect-video rounded-2xl bg-cover bg-center shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
              style={{
                backgroundImage: 'url("/heroimage.png")',
                backgroundPosition: 'center 19%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;