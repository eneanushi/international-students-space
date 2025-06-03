import React, { useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styled from '@emotion/styled';

const AboutContainer = styled.div`
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

const Section = styled(motion.section)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(8px);
  background: rgba(35, 41, 70, 0.1);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 640px) {
    padding: 2rem 1rem;
    border-radius: 16px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #3A29FF, #FF94B4, #FF3232);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-weight: 800;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #607afb, #FF94B4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Text = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const Highlight = styled.span`
  color: #FF94B4;
  font-weight: 600;
`;

const AIBuddy = styled(motion.div)`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 200px;
  height: 200px;
  background: url('/ai-buddy.png') no-repeat center center;
  background-size: contain;
  z-index: 2;
  filter: drop-shadow(0 0 20px rgba(96, 122, 251, 0.3));

  @media (max-width: 1024px) {
    width: 150px;
    height: 150px;
    right: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  opacity: 0.1;
  pointer-events: none;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));
`;

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    // Add floating elements
    const elements = ['passport', 'document', 'globe'];
    elements.forEach((element) => {
      const el = document.createElement('div');
      el.className = `floating-${element}`;
      el.style.background = `url('/${element}.png') no-repeat center center`;
      el.style.backgroundSize = 'contain';
      el.style.width = '100px';
      el.style.height = '100px';
      el.style.position = 'absolute';
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      el.style.opacity = '0.1';
      containerRef.current?.appendChild(el);
    });
  }, []);

  return (
    <AboutContainer ref={containerRef}>
      <AIBuddy
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <Section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About AgentX Navigator
        </Title>
        <Subtitle
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our Mission
        </Subtitle>
        <Text
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Empowering international students to succeed in the U.S. through <Highlight>personalized AI guidance</Highlight>.
          We understand the challenges you face, and we're here to make your journey smoother.
        </Text>
      </Section>

      <Section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Subtitle
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our Story
        </Subtitle>
        <Text
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Born from personal experience, AgentX Navigator was created by an international student
          who faced the complex U.S. education system alone. We've transformed those challenges
          into a <Highlight>powerful platform</Highlight> that guides students through every step of their journey.
        </Text>
      </Section>

      <Section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Subtitle
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Why It Matters
        </Subtitle>
        <Text
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Navigating <Highlight>CPT/OPT requirements</Highlight>, finding scholarships, and securing internships
          shouldn't be overwhelming. AgentX simplifies these complex processes with AI-powered
          guidance, making your path to success clearer and more achievable.
        </Text>
      </Section>

      {['passport', 'document', 'globe'].map((element, index) => (
        <FloatingElement
          key={element}
          style={{
            background: `url('/${element}.png') no-repeat center center`,
            backgroundSize: 'contain',
            width: '100px',
            height: '100px',
            left: `${20 + index * 30}%`,
            top: `${30 + index * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </AboutContainer>
  );
};

export default About; 