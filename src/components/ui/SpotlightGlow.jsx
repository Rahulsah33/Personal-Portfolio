import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const SpotlightGlow = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [smoothPos, setSmoothPos] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    let animationFrameId;
    const updateSmoothPos = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.12,
        y: prev.y + (mousePos.y - prev.y) * 0.12,
      }));
      animationFrameId = requestAnimationFrame(updateSmoothPos);
    };
    animationFrameId = requestAnimationFrame(updateSmoothPos);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-700 overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        background: isDark
          ? `radial-gradient(750px circle at ${smoothPos.x}px ${smoothPos.y}px, rgba(59, 130, 246, 0.12), rgba(16, 185, 129, 0.04) 45%, transparent 75%)`
          : `radial-gradient(600px circle at ${smoothPos.x}px ${smoothPos.y}px, rgba(0, 82, 255, 0.04), transparent 70%)`,
      }}
    />
  );
};

export default SpotlightGlow;
