import React from 'react';
import { MdOutlineTravelExplore, MdWorkOutline, MdPsychologyAlt, MdSchool, MdWorkHistory } from 'react-icons/md';

interface Feature {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Stay Informed and Compliant",
    subtitle: "Visa Guidance",
    description: "Our AI-powered tool helps you understand and maintain your visa status.",
    icon: <MdOutlineTravelExplore className="text-3xl text-[#607afb] mx-auto" />,
  },
  {
    title: "Find Your Dream Internship",
    subtitle: "Internship Finder",
    description: "Connect with top companies offering internships tailored for international students.",
    icon: <MdWorkOutline className="text-3xl text-[#607afb] mx-auto" />,
  },
  {
    title: "Support for Your Well-being",
    subtitle: "Mental Health Resources",
    description: "Access a range of mental health resources to help you thrive.",
    icon: <MdPsychologyAlt className="text-3xl text-[#607afb] mx-auto" />,
  },
  {
    title: "Unlock Funding Opportunities",
    subtitle: "Scholarships",
    description: "Discover scholarships specifically for international students, making your education more affordable and reducing financial stress.",
    icon: <MdSchool className="text-3xl text-[#607afb] mx-auto" />,
  },
  {
    title: "Find On-Campus Employment",
    subtitle: "On-Campus Job Tips",
    description: "Get tips and resources to find on-campus jobs that fit your schedule and skills, helping you earn while studying.",
    icon: <MdWorkHistory className="text-3xl text-[#607afb] mx-auto" />,
  },
];

const Features = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Key Features
          </h2>
          <p className="text-white/80 text-sm max-w-2xl mx-auto">
            Everything you need to succeed as an international student in the U.S.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#181d35]/50 backdrop-blur-sm rounded-xl p-4 hover:bg-[#181d35]/80 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="relative flex justify-center items-center h-20">
                  {feature.icon}
                </div>
                <div className="space-y-1">
                  <p className="text-[#607afb] text-xs font-medium">{feature.subtitle}</p>
                  <h3 className="text-base font-bold text-white">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
