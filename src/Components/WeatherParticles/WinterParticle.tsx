import React from "react";

interface WinterParticlesProps {
  count?: number;
}

const WinterParticles: React.FC<WinterParticlesProps> = ({ count = 40 }) => {
  const particles = [];

  for (let i = 0; i < count; i++) {
    const size = 1 + Math.random() * 3;
    const left = `${Math.random() * 100}%`;
    const animationDuration = 8 + Math.random() * 12;
    const delay = Math.random() * 5;

    particles.push(
      <div
        key={`winter-snow-${i}`}
        className="winter-snow"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left,
          top: `-20px`,
          backgroundColor: "white",
          borderRadius: "50%",
          animation: `winter-snow ${animationDuration}s linear infinite`,
          animationDelay: `${delay}s`,
          pointerEvents: "none",
        }}
      />
    );
  }

  return <>{particles}</>;
};

export default WinterParticles;
