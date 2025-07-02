import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#232946]/40 to-[#232946]/80 backdrop-blur-md mt-auto border-t border-white/10">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="size-6 text-[#607afb] group-hover:text-[#FF94B4] transition-colors">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="text-lg font-bold tracking-[-0.015em] bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-[#607afb] group-hover:to-[#FF94B4] transition-all">
                The International Students Space
              </h2>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Empowering international students to succeed in the U.S. through personalized AI guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Features', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-white/60 hover:text-[#607afb] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#607afb] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/privacy" 
                  className="text-white/60 hover:text-[#607afb] transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#607afb] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Resources</h3>
            <ul className="space-y-3">
              {['Visa Guide', 'Scholarships', 'Internship Tips', 'Mental Health'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/space" 
                    className="text-white/60 hover:text-[#607afb] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#607afb] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-white/60 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#607afb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Boston, MA
              </li>
              <li className="text-white/60 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#607afb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                enea_nushi@student.uml.edu
              </li>
              <li className="flex gap-4 mt-4">
                {[
                  { icon: "instagram", href: "#" },
                  { icon: "tiktok", href: "#" }
                ].map((social) => (
                  <div key={social.icon} className="relative group">
                    <div className="text-white/60 p-2 rounded-full">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        {social.icon === 'instagram' && (
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        )}
                        {social.icon === 'tiktok' && (
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                        )}
                      </svg>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-1 bg-[#607afb]/10 px-2 py-1 rounded-full">
                        <svg className="w-3 h-3 text-[#607afb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-xs text-[#607afb]">Coming Soon</span>
                      </div>
                    </div>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex justify-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} The International Students Space. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 