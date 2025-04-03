import React from "react";

interface SpringParticlesProps {
  count?: number;
  includeRain?: boolean;
}

const SpringParticles: React.FC<SpringParticlesProps> = ({
  count = 30,
  includeRain = true,
}) => {
  const particles = [];

  for (let i = 0; i < count; i++) {
    const size = 5 + Math.random() * 10;
    const left = `${Math.random() * 100}%`;
    const animationDuration = 8 + Math.random() * 15;
    const delay = Math.random() * 10;
    const rotation = Math.random() * 360;
    const colors = [
      "#ffafcc",
      "#ffccd5",
      "#f8edeb",
      "#ffc8dd",
      "#cdb4db",
      "#bde0fe",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    particles.push(
      <div
        key={`petal-${i}`}
        className="petal"
        style={{
          width: `${size}px`,
          height: `${size * 0.8}px`,
          left,
          top: `-30px`,
          backgroundColor: color,
          opacity: 0.8,
          borderRadius: "100% 0% 100% 0% / 100% 0% 100% 0%",
          transform: `rotate(${rotation}deg)`,
          animation: `petal-fall ${animationDuration}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  }

  // Add spring rain drops if needed
  if (includeRain) {
    for (let i = 0; i < 60; i++) {
      const delay = Math.random() * 3;
      const left = `${Math.random() * 100}%`;
      const duration = 1 + Math.random() * 1.5;

      particles.push(
        <div
          key={`spring-rain-${i}`}
          className="spring-rain-drop"
          style={{
            left,
            top: `-20px`,
            animation: `spring-rain ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
            opacity: 0.5 + Math.random() * 0.3,
          }}
        />
      );
    }
  }

  return <>{particles}</>;
};

export default SpringParticles;
