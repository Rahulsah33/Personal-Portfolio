import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "../../context/ThemeContext";

const ParticleField3D = ({ count = 60 }) => {
  const pointsRef = useRef();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Deterministically generate particle coordinates
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Deterministic pseudorandom values based on index
      const seed1 = Math.sin(i * 12.9898) * 43758.5453;
      const seed2 = Math.cos(i * 78.233) * 43758.5453;
      const seed3 = Math.sin(i * 45.164) * 23421.631;

      const frac1 = seed1 - Math.floor(seed1);
      const frac2 = seed2 - Math.floor(seed2);
      const frac3 = seed3 - Math.floor(seed3);

      positions[i * 3] = (frac1 - 0.5) * 16;
      positions[i * 3 + 1] = (frac2 - 0.5) * 16;
      positions[i * 3 + 2] = (frac3 - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;

      // Pointer parallax
      pointsRef.current.position.x = THREE.MathUtils.lerp(
        pointsRef.current.position.x,
        state.pointer.x * 0.5,
        0.05
      );
      pointsRef.current.position.y = THREE.MathUtils.lerp(
        pointsRef.current.position.y,
        state.pointer.y * 0.5,
        0.05
      );
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={isDark ? "#3b82f6" : "#0052ff"}
        transparent
        opacity={isDark ? 0.45 : 0.3}
        sizeAttenuation
      />
    </points>
  );
};

export default ParticleField3D;
