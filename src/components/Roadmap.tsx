import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const RoadmapContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: transparent;
  color: rgba(255, 255, 255, 0.87);
  padding: 1rem;
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 640px) {
    padding: 0.5rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #3A29FF, #FF94B4, #FF3232);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-weight: 800;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

const TimelineContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Timeline = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #607afb, #ff6b6b);
    transform: translateX(-50%);
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 2rem;
      transform: none;
    }
  }
`;

const PhaseCard = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  width: 45%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: calc(100% - 4rem);
    margin-left: 4rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 2rem;
  }

  &:nth-child(odd) {
    margin-left: 0;
    margin-right: auto;

    @media (max-width: 768px) {
      margin-left: 4rem;
      margin-right: 0;
    }
  }

  &:nth-child(even) {
    margin-left: auto;
    margin-right: 0;

    @media (max-width: 768px) {
      margin-left: 4rem;
      margin-right: 0;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: linear-gradient(45deg, #607afb, #ff6b6b);
    border-radius: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 20px rgba(96, 122, 251, 0.5);

    @media (max-width: 768px) {
      left: -3rem;
      transform: translateY(-50%);
    }
  }

  &:nth-child(odd)::before {
    right: -3rem;

    @media (max-width: 768px) {
      right: auto;
      left: -3rem;
    }
  }

  &:nth-child(even)::before {
    left: -3rem;

    @media (max-width: 768px) {
      left: -3rem;
    }
  }
`;

const PhaseNumber = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #607afb, #ff6b6b);
  border-radius: 50%;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
`;

const PhaseTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #607afb, #FF94B4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const PhasePeriod = styled.p`
  font-size: 1rem;
  color: #FF94B4;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const PhaseContent = styled.div`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const PhaseList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const PhaseListItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #607afb;
    font-weight: bold;
  }
`;

const FundingSection = styled.div`
  background: rgba(96, 122, 251, 0.1);
  border-left: 4px solid #607afb;
  padding: 1rem;
  border-radius: 0 8px 8px 0;
  margin-top: 1rem;

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const FundingTitle = styled.h4`
  color: #607afb;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Roadmap: React.FC = () => {
  useEffect(() => {
    // Ensure the component is properly mounted and visible
    console.log('Roadmap component mounted');
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const phases = [
    {
      number: 1,
      title: "Launch & Foundation",
      period: "Summer 2025",
      content: [
        "Launch of the International Student Space website.",
        "Release of AgentXNavigator: AI-powered chatbot + phone assistant for international students.",
        "Begin collecting user feedback."
      ],
      funding: [
        "Upgrade hardware (replace current 8GB RAM MacBook Air) for smoother local development and faster build times.",
        "Cover initial cloud/API costs."
      ]
    },
    {
      number: 2,
      title: "UI/UX & Backend Development",
      period: "Fall 2025",
      content: [
        "Design and begin building the mobile application (iOS + Android).",
        "Expand chatbot knowledge with more school-specific data (CPT/OPT, housing, mental health, etc.).",
        "Integrate 3D AI agent models for personalization inside the app.",
        "Beta-testing of new features on the web platform."
      ]
    },
    {
      number: 3,
      title: "Mobile App Testing & Deployment",
      period: "Winter 2026",
      content: [
        "January 2026: Launch mobile app (test mode) for students to start using key features.",
        "AI phone agent integrated into the app.",
        "Internal bug tracking + feedback loop from selected users.",
        "Continue improving server response times and UI responsiveness.",
        "Launching a community platform similar to Reddit, designed specifically for international students to post their concerns, share experiences, and receive advice from others who have faced similar situations."
      ]
    },
    {
      number: 4,
      title: "Public Scaling & Feature Expansion",
      period: "Spring–Summer 2026",
      content: [
        "Open mobile app to all Massachusetts international students.",
        "Launch roadmap-style UI tree with 3D visual progression.",
        "Develop smart scheduling assistant for CPT, OPT deadlines, and reminders.",
        "Begin exploring partnerships with universities and international offices.",
        "Prepare for potential investor/demo day presentations with product traction and data."
      ]
    }
  ];

  return (
    <RoadmapContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Development Roadmap
      </Title>
      
      <Subtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our journey to revolutionize the international student experience through AI-powered guidance and comprehensive support.
      </Subtitle>

      <TimelineContainer>
        <Timeline>
          {phases.map((phase, index) => (
            <PhaseCard
              key={phase.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <PhaseNumber>{phase.number}</PhaseNumber>
              <PhaseTitle>{phase.title}</PhaseTitle>
              <PhasePeriod>{phase.period}</PhasePeriod>
              
              <PhaseContent>
                <PhaseList>
                  {phase.content.map((item, itemIndex) => (
                    <PhaseListItem key={itemIndex}>
                      {item}
                    </PhaseListItem>
                  ))}
                </PhaseList>

                {phase.funding && (
                  <FundingSection>
                    <FundingTitle>Funding received will be used to:</FundingTitle>
                    <PhaseList>
                      {phase.funding.map((item, itemIndex) => (
                        <PhaseListItem key={itemIndex}>
                          {item}
                        </PhaseListItem>
                      ))}
                    </PhaseList>
                  </FundingSection>
                )}
              </PhaseContent>
            </PhaseCard>
          ))}
        </Timeline>
      </TimelineContainer>
    </RoadmapContainer>
  );
};

export default Roadmap; 