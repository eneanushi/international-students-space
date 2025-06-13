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
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf-wjxSr_W28XG-Y9XRfsqyTvxv7vSemHjHkK6SJ7B492JQrA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl bg-[#607afb] px-6 h-10 text-sm font-bold text-white hover:bg-[#4a5fd9] transition-colors"
              >
                Take Survey
              </a>
              <Link 
                to="/features"
                className="flex items-center justify-center rounded-xl border border-white/20 px-6 h-10 text-sm font-bold text-white hover:bg-white/10 transition-colors"
              >
                Learn More
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