import React, { useRef, useState } from "react";

const Card3D = ({
  children,
  className = "",
  maxTilt = 10,
  glare = true,
  scale = 1.02,
  ...props
}) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
  });
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    transform: "translate(0px, 0px)",
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: "transform 0.1s ease-out",
    });

    if (glare) {
      setGlareStyle({
        opacity: 0.35,
        transform: `translate(${x}px, ${y}px)`,
        background: `radial-gradient(circle 180px at center, var(--primary) 0%, transparent 80%)`,
      });
    }
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
    });
    setGlareStyle({
      opacity: 0,
      transform: "translate(0px, 0px)",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative transform-gpu will-change-transform ${className}`}
      {...props}
    >
      {children}

      {/* 3D Dynamic Glare Reflection Overlay */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] transition-opacity duration-300"
          style={{ opacity: glareStyle.opacity }}
        >
          <div
            className="absolute -inset-[150px] mix-blend-overlay blur-xl transition-transform duration-75 pointer-events-none"
            style={{
              transform: glareStyle.transform,
              background: glareStyle.background,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Card3D;
