import React, { useEffect, useState } from 'react';

const auroraColors = [
  '#3A29FF', // blue
  '#FF94B4', // pink
  '#FF3232', // red
];

const OpeningEffect: React.FC = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHide(true), 1600); // 1.6s effect
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none transition-all duration-1000 ease-in-out flex items-center justify-center ${hide ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
      style={{
        background: `radial-gradient(circle at 20% 30%, ${auroraColors[0]} 0%, transparent 60%),
                     radial-gradient(circle at 60% 20%, ${auroraColors[1]} 0%, transparent 60%),
                     radial-gradient(circle at 80% 70%, ${auroraColors[2]} 0%, transparent 60%),
                     #000` // fallback
      }}
    >
      <h1 className={`netflix-intro-text text-white text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg`}
        >
        The International Students Space
      </h1>
    </div>
  );
};

export default OpeningEffect; 