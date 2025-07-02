import React, { useState, useRef, useEffect } from 'react';
import './Space.css';

// Topic data with unique information for each card
const topicData = [
  {
    title: 'OPT / CPT',
    description: 'Optional Practical Training & Curricular Practical Training',
    details: [
      'OPT allows 12 months of work authorization',
      'STEM OPT extends for additional 24 months',
      'CPT must be part of academic curriculum',
      'Requires DSO authorization before starting'
    ],
    icon: '🎓',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    title: 'On-Campus Jobs',
    description: 'Employment opportunities within university campus',
    details: [
      'Up to 20 hours per week during academic year',
      'Full-time during breaks and summer',
      'No special authorization required',
      'Great for building experience and income'
    ],
    icon: '🏢',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    title: 'Housing',
    description: 'Accommodation solutions for international students',
    details: [
      'On-campus dormitories and apartments',
      'Off-campus housing options and resources',
      'Roommate matching services',
      'Housing assistance programs available'
    ],
    icon: '🏠',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    title: 'Mental Health',
    description: 'Support services for emotional well-being',
    details: [
      'Free counseling services on campus',
      '24/7 crisis hotlines available',
      'Cultural adjustment support groups',
      'Stress management workshops'
    ],
    icon: '🧠',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    title: 'Scholarships',
    description: 'Financial aid opportunities for international students',
    details: [
      'Merit-based scholarships available',
      'Department-specific funding opportunities',
      'External scholarship databases',
      'Application deadlines and requirements'
    ],
    icon: '💰',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    title: 'Clubs & Community',
    description: 'Student organizations and social networks',
    details: [
      'International student associations',
      'Cultural clubs and events',
      'Professional networking groups',
      'Volunteer and leadership opportunities'
    ],
    icon: '👥',
    color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  {
    title: 'Grades & Academic Tips',
    description: 'Academic success strategies and resources',
    details: [
      'Study skills workshops and tutoring',
      'Academic advising and course planning',
      'Time management techniques',
      'Research and writing support'
    ],
    icon: '📚',
    color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
  },
  {
    title: 'Internships & Referrals',
    description: 'Career development and professional opportunities',
    details: [
      'Internship placement assistance',
      'Career fair and networking events',
      'Resume and interview preparation',
      'Alumni mentorship programs'
    ],
    icon: '💼',
    color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  }
];

// Circular Crystal Card Component
const CrystalCircle = ({ data, index, onCardClick }: { 
  data: typeof topicData[0]; 
  index: number;
  onCardClick: (data: typeof topicData[0]) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={circleRef}
      className={`crystal-circle ${isHovered ? 'hovered' : ''}`}
      style={{
        '--circle-color': data.color,
        '--animation-delay': `${index * 0.1}s`
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCardClick(data)}
    >
      <div className="circle-content">
        <div className="circle-icon">{data.icon}</div>
        <h3 className="circle-title">{data.title}</h3>
        <div className="circle-glow"></div>
      </div>
    </div>
  );
};

// Connection Line Component
const ConnectionLine = ({ from, to, color }: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  color: string;
}) => {
  const length = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
  const angle = Math.atan2(to.y - from.y, to.x - from.x) * 180 / Math.PI;
  const centerX = (from.x + to.x) / 2;
  const centerY = (from.y + to.y) / 2;

  return (
    <div
      className="connection-line"
      style={{
        left: `${centerX}px`,
        top: `${centerY}px`,
        width: `${length}px`,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        '--line-color': color
      } as React.CSSProperties}
    >
      <div className="line-arrow"></div>
    </div>
  );
};

// Modal Component for detailed view
const DetailModal = ({ data, isOpen, onClose }: {
  data: typeof topicData[0] | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen || !data) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-header">
          <div className="modal-icon">{data.icon}</div>
          <h2 className="modal-title">{data.title}</h2>
        </div>
        <p className="modal-description">{data.description}</p>
        <div className="modal-details">
          {data.details.map((detail, idx) => (
            <div key={idx} className="modal-detail-item">
              <span className="modal-detail-bullet">•</span>
              <span className="modal-detail-text">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Space Component
const Space: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<typeof topicData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [connections, setConnections] = useState<Array<{from: number, to: number}>>([]);
  const circlesRef = useRef<HTMLDivElement>(null);

  // Generate web-like connections
  useEffect(() => {
    const newConnections = [];
    for (let i = 0; i < topicData.length; i++) {
      // Connect to next 2-3 nodes to create web pattern
      for (let j = 1; j <= 3; j++) {
        const nextIndex = (i + j) % topicData.length;
        if (i !== nextIndex) {
          newConnections.push({ from: i, to: nextIndex });
        }
      }
    }
    setConnections(newConnections);
  }, []);

  const handleCardClick = (data: typeof topicData[0]) => {
    setSelectedCard(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="space-container">
      {/* Animated background */}
      <div className="space-background">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      
      {/* Header */}
      <div className="space-header">
        <h1 className="main-title">The International Students Space</h1>
        <p className="subtitle">Your comprehensive guide to international student life</p>
      </div>
      
      {/* Web Layout */}
      <div className="web-container" ref={circlesRef}>
        {/* Connection Lines */}
        {connections.map((connection, index) => (
          <ConnectionLine
            key={`${connection.from}-${connection.to}`}
            from={{ x: 0, y: 0 }} // Will be calculated by CSS
            to={{ x: 0, y: 0 }}   // Will be calculated by CSS
            color={topicData[connection.from].color}
          />
        ))}
        
        {/* Circular Cards */}
        <div className="circles-grid">
          {topicData.map((data, index) => (
            <CrystalCircle
              key={data.title}
              data={data}
              index={index}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              '--particle-delay': `${Math.random() * 5}s`,
              '--particle-duration': `${Math.random() * 3 + 2}s`
            } as React.CSSProperties}
          ></div>
        ))}
      </div>

      {/* Detail Modal */}
      <DetailModal
        data={selectedCard}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Space;
