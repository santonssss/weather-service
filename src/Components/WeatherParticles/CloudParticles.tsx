import React from "react";

interface CloudParticlesProps {
  count?: number;
  isStormy?: boolean;
}

const CloudParticles: React.FC<CloudParticlesProps> = ({
  count = 5,
  isStormy = false,
}) => {
  const particles = [];

  for (let i = 0; i < count; i++) {
    const top = `${10 + Math.random() * 40}%`;
    const size = 100 + Math.random() * 150;
    const opacity = 0.4 + Math.random() * 0.3;
    const delay = Math.random() * 15;
    const speed = 20 + Math.random() * 30;

    particles.push(
      <div
        key={`cloud-${i}`}
        className="cloud"
        style={{
          top,
          left: "-200px",
          width: `${size}px`,
          height: `${size * 0.6}px`,
          opacity,
          backgroundColor: isStormy ? "#2c3e50" : "#f1f1f1",
          borderRadius: "50%",
          animation: `clouds-move ${speed}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  }

  return <>{particles}</>;
};

export default CloudParticles;
