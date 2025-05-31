import React from 'react';

interface TimelineItem {
  title: string;
  description: string;
  imageUrl: string;
}

const timelineItems: TimelineItem[] = [
  {
    title: "Arrival in the U.S.",
    description: "Get settled and start your academic journey.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB95vgHmXSbyYUr4E8ZRDknEtiAowkyVgBUjD7GKc7iK8aBFM77An7tLJp1w4aty8SWkqJLxy2LpjuG7KA86M4cvYbdL6TF6SRxieiqIcsPTxQ--v83m33lVyUnLGl4HVsAvvPG8ZGFfPW4ZJviQWoZZZ6UgFMTZTEFG2Cw60u5_YWhMhlQNBy2KE7xvGzEMH7AfxSl4VsYJlL446-sbtEvmjtCZ3_Dse2OUAc57WFF28rFYSD_xUUzh9eKkD9uj4QV9j6k6lzUJdc"
  },
  {
    title: "Visa Guidance",
    description: "Understand and maintain your visa status.",
    imageUrl: "/visaguidance.png",
  },
  {
    title: "Internship Finder",
    description: "Find the perfect internship to boost your career.",
    imageUrl: "/internship.jpg",
  },
  {
    title: "Mental Health Resources",
    description: "Access resources to support your well-being.",
    imageUrl: "/mentalhealth.png",
  },
  {
    title: "Scholarships",
    description: "Explore funding options to ease financial burdens.",
    imageUrl: "/scholarships.png",
  }
];

const Timeline = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Your Journey, Simplified
          </h2>
          <p className="text-white/80 text-sm max-w-2xl mx-auto">
            From arrival to graduation, we've got you covered with comprehensive support.
          </p>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#607afb] to-[#232946] hidden lg:block" />
          
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-6 items-center">
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} space-y-2`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-[#607afb] shadow-lg">
                        {item.title === 'Visa Guidance' ? (
                          <img src={item.imageUrl} alt={item.title} className="w-10 h-10 object-contain mx-auto my-auto" style={{ objectPosition: 'center 10%' }} />
                        ) : item.title === 'Internship Finder' ? (
                          <img src={item.imageUrl} alt={item.title} className="w-10 h-10 object-contain mx-auto my-auto" style={{ objectPosition: 'center 80%' }} />
                        ) : item.title === 'Mental Health Resources' ? (
                          <img src={item.imageUrl} alt={item.title} className="w-10 h-10 object-contain mx-auto my-auto" style={{ objectPosition: 'center 80%' }} />
                        ) : item.title === 'Scholarships' ? (
                          <img src={item.imageUrl} alt={item.title} className="w-10 h-10 object-contain mx-auto my-auto" style={{ objectPosition: 'center 80%' }} />
                        ) : (
                          <img src={item.imageUrl} alt={item.title} className="w-10 h-10 object-contain mx-auto my-auto" />
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} mt-4 lg:mt-0`}>
                    <div
                      className="w-full aspect-video rounded-xl bg-cover bg-center shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
                      style={{ backgroundImage: `url('${item.imageUrl}')` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
