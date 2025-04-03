import React from "react";

interface SnowParticlesProps {
  count?: number;
}

const SnowParticles: React.FC<SnowParticlesProps> = ({ count = 50 }) => {
  const particles = [];

  for (let i = 0; i < count; i++) {
    const size = 1 + Math.random() * 3;
    const left = `${Math.random() * 100}%`;
    const animationDuration = 5 + Math.random() * 10;
    const delay = Math.random() * 5;

    particles.push(
      <div
        key={`snow-${i}`}
        className="snow-particle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left,
          top: `-20px`,
          animation: `snow ${animationDuration}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  }

  return <>{particles}</>;
};

export default SnowParticles;
