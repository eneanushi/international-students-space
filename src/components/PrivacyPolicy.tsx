import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#232946] via-[#1a1f35] to-[#0f1419] text-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#607afb] to-[#ff6b6b] bg-clip-text text-transparent">
            Privacy & Legal Disclaimer
          </h1>
          <p className="text-lg text-gray-300">
            Last Updated: 07/02/2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-[#232946]/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-[#607afb]/20">
          
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg text-gray-200 leading-relaxed">
              By using this website or platform, you agree to the following:
            </p>
          </div>

          {/* We Do Not Take Responsibility */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">❗</span>
              <h2 className="text-2xl font-bold text-[#607afb]">We Do Not Take Responsibility</h2>
            </div>
            <div className="space-y-4 text-gray-200">
              <p>
                The information, resources, and tools provided on this site are for general guidance only. 
                We do not guarantee accuracy, completeness, or outcomes.
              </p>
              <p className="font-semibold">We are not responsible for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Any decisions made based on the content</li>
                <li>Missed opportunities, financial losses, or visa issues</li>
                <li>Any consequences that result from using this platform</li>
              </ul>
              <div className="bg-[#607afb]/10 border-l-4 border-[#607afb] p-4 rounded-r-lg">
                <p className="font-semibold text-[#607afb]">
                  Always consult official school advisors, legal professionals, or immigration services 
                  before making important decisions.
                </p>
              </div>
            </div>
          </div>

          {/* External Links */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔗</span>
              <h2 className="text-2xl font-bold text-[#607afb]">External Links</h2>
            </div>
            <p className="text-gray-200 leading-relaxed">
              This platform may contain links to third-party websites. We do not control those sites 
              and are not responsible for their content, accuracy, or privacy practices.
            </p>
          </div>

          {/* No Legal Guarantees */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⚠️</span>
              <h2 className="text-2xl font-bold text-[#607afb]">No Legal Guarantees</h2>
            </div>
            <p className="text-gray-200 leading-relaxed">
              This website is provided "as is" with no warranties. Use it at your own risk. 
              We are not liable for any damages, losses, or claims.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-[#607afb]/20">
            <div className="text-center">
              <p className="text-gray-300 mb-4">
                If you have any questions about this privacy policy, please contact us.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#607afb] to-[#ff6b6b] text-white font-semibold rounded-lg hover:from-[#4c63d2] hover:to-[#e55a5a] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#607afb] hover:text-[#4c63d2] transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 