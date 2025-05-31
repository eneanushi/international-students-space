import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log('Subscribing email:', email);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#232946] to-[#3b3b5c] p-6 sm:p-8">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDAgOS0xMiAyNC0xMiIgc3Ryb2tlPSIjNjA3YWZiIiBzdHJva2Utb3BhY2l0eT0iLjEiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-10" />
          
          <div className="relative">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Get early access – we'll notify you when we launch
              </h2>
              <p className="text-white/80 text-sm">
                Join our waitlist to be among the first to experience our platform.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 px-4 h-10 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#607afb] focus:border-transparent transition-all text-sm"
                />
                <button
                  type="submit"
                  className="px-6 h-10 rounded-xl bg-[#607afb] text-white font-bold hover:bg-[#4a5fd9] transition-colors whitespace-nowrap text-sm"
                >
                  Get early access
                </button>
              </div>
            </form>

            <p className="text-center text-white/60 text-xs mt-3">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
