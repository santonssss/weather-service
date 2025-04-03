import React from "react";

interface StarParticlesProps {
  count?: number;
}

const StarParticles: React.FC<StarParticlesProps> = ({ count = 100 }) => {
  const particles = [];

  for (let i = 0; i < count; i++) {
    const size = 1 + Math.random() * 2;
    const top = `${Math.random() * 100}%`;
    const left = `${Math.random() * 100}%`;
    const animationDuration = 1 + Math.random() * 3;

    particles.push(
      <div
        key={`star-${i}`}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top,
          left,
          animation: `pulse ${animationDuration}s ease-in-out infinite`,
        }}
      />
    );
  }

  return <>{particles}</>;
};

export default StarParticles;
