import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const ContactContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: transparent;
  color: rgba(255, 255, 255, 0.87);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: block !important;
  opacity: 1 !important;
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #607afb;
    box-shadow: 0 0 0 2px rgba(96, 122, 251, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #607afb;
    box-shadow: 0 0 0 2px rgba(96, 122, 251, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 12px;
  border: none;
  background: linear-gradient(45deg, #3A29FF, #FF94B4);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(96, 122, 251, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ContactCard = styled(motion.div)`
  padding: 2rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the component is properly mounted and visible
    console.log('Contact component mounted');
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Force a re-render if needed
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.display = 'block';
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <ContactContainer ref={containerRef}>
      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get in Touch
        </Title>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            required
          />
          <Input
            type="text"
            placeholder="Subject"
            required
          />
          <TextArea
            placeholder="Your Message"
            required
          />
          <SubmitButton type="submit">
            Send Message
          </SubmitButton>
        </Form>

        <ContactInfo>
          <ContactCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Agent Phone Number</h3>
            <p>Coming Soon</p>
          </ContactCard>

          <ContactCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3>Location</h3>
            <p>Boston, MA</p>
          </ContactCard>

          <ContactCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3>Social Media</h3>
            <p>@Coming Soon</p>
          </ContactCard>
        </ContactInfo>
      </Section>
    </ContactContainer>
  );
};

export default Contact; 