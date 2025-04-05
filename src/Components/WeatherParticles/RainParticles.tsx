import React from "react";

interface RainParticlesProps {
  count?: number;
}

const RainParticles: React.FC<RainParticlesProps> = ({ count = 100 }) => {
  const particles = [];

  for (let i = 0; i < count; i++) {
    const delay = Math.random() * 2;
    const left = `${Math.random() * 100}%`;
    const duration = 0.5 + Math.random() * 0.5;
    const size = 8 + Math.random() * 7;
    particles.push(
      <div
        key={`rain-${i}`}
        className="rain-drop"
        style={{
          left,
          height: `${size}px`,
          top: `-20px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          opacity: 0.7 + Math.random() * 0.3,
        }}
      />
    );
  }

  return <>{particles}</>;
};

export default RainParticles;
