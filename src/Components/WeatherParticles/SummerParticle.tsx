import React from "react";

interface SummerParticlesProps {
  count?: number;
}

const SummerParticles: React.FC<SummerParticlesProps> = ({ count = 20 }) => {
  const particles = [];

  for (let i = 0; i < count; i++) {
    const size = 10 + Math.random() * 30;
    const top = `${Math.random() * 80}%`;
    const left = `${Math.random() * 100}%`;
    const animationDuration = 3 + Math.random() * 4;
    const delay = Math.random() * 5;

    particles.push(
      <div
        key={`sunbeam-${i}`}
        className="sunbeam"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top,
          left,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,190,0.7) 0%, rgba(255,255,190,0) 70%)",
          animation: `pulse ${animationDuration}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          pointerEvents: "none",
        }}
      />
    );
  }

  return <>{particles}</>;
};

export default SummerParticles;
