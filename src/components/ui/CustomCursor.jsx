import React, { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState("default");
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: coarse)").matches;
  });

  const requestRef = useRef();

  useEffect(() => {
    if (isTouchDevice) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target;
      const clickable = target.closest(
        'button, a, input, textarea, select, [role="button"], .cursor-pointer, .card-hover-fx, [data-cursor]'
      );

      if (clickable) {
        setIsHovered(true);
        if (target.closest('input, textarea')) {
          setHoverType("text");
        } else if (target.closest('.card-hover-fx, [data-cursor="view"]')) {
          setHoverType("view");
        } else {
          setHoverType("pointer");
        }
      } else {
        setIsHovered(false);
        setHoverType("default");
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible, isTouchDevice]);

  // Smooth lerp loop for outer trailing ring
  useEffect(() => {
    if (isTouchDevice) return;

    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      requestRef.current = requestAnimationFrame(animateTrailing);
    };

    requestRef.current = requestAnimationFrame(animateTrailing);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Smooth Trailing Ring */}
      <div
        className={`fixed rounded-full transition-transform duration-150 ease-out border flex items-center justify-center ${
          isHovered
            ? hoverType === "view"
              ? "w-14 h-14 bg-primary/10 border-primary scale-110 shadow-lg shadow-primary/20 backdrop-blur-[1px]"
              : hoverType === "text"
              ? "w-6 h-10 rounded-sm bg-primary/10 border-primary scale-100"
              : "w-10 h-10 bg-primary/15 border-primary scale-125 shadow-md shadow-primary/20"
            : "w-7 h-7 bg-transparent border-primary/40 scale-100"
        } ${isClicking ? "scale-90 opacity-70" : ""}`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          transition: "width 0.2s, height 0.2s, border-color 0.2s, background-color 0.2s, transform 0.05s ease-out",
        }}
      >
        {/* Subtle crosshair lines on hover for blueprint aesthetic */}
        {isHovered && hoverType === "pointer" && (
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
        )}
      </div>

      {/* Inner Precision Center Dot */}
      <div
        className={`fixed rounded-full bg-primary transition-opacity duration-100 ${
          isHovered ? "w-2 h-2 opacity-80" : "w-1.5 h-1.5 opacity-100"
        } ${isClicking ? "scale-150" : "scale-100"}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
