import React from "react";

interface AutumnParticlesProps {
  count?: number;
}

const AutumnParticles: React.FC<AutumnParticlesProps> = ({ count = 40 }) => {
  const particles = [];

  for (let i = 0; i < count; i++) {
    const size = 10 + Math.random() * 15;
    const left = `${Math.random() * 100}%`;
    const animationDuration = 10 + Math.random() * 20;
    const delay = Math.random() * 15;
    const rotation = Math.random() * 360;
    const colors = [
      "#e63946",
      "#e76f51",
      "#f4a261",
      "#ee9b00",
      "#ca6702",
      "#bb3e03",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    particles.push(
      <div
        key={`leaf-${i}`}
        className="leaf"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left,
          top: `-50px`,
          backgroundColor: color,
          opacity: 0.8,
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          transform: `rotate(${rotation}deg)`,
          animation: `leaf-fall ${animationDuration}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  }

  return <>{particles}</>;
};

export default AutumnParticles;
