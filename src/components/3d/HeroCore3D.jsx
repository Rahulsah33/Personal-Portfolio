import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "../../context/ThemeContext";

// Concentric Orbit Ring
const OrbitRing = ({ radius, speed, rotationAxis = [1, 0, 0], color }) => {
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * speed * rotationAxis[0];
      ringRef.current.rotation.y += delta * speed * rotationAxis[1];
      ringRef.current.rotation.z += delta * speed * rotationAxis[2];
    }
  });

  return (
    <group ref={ringRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.015, 16, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

// 3D Central Node
const CoreGeometry = ({ isDark }) => {
  const meshRef = useRef();
  const innerRef = useRef();
  const groupRef = useRef();

  const primaryColor = isDark ? "#3b82f6" : "#0052ff";
  const accentColor = isDark ? "#60a5fa" : "#2563eb";
  const coreColor = isDark ? "#10b981" : "#059669";

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.5;
      innerRef.current.rotation.z += delta * 0.3;
    }
    if (groupRef.current) {
      // Smooth pointer parallax
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 6;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetX,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -targetY,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.8}>
        {/* Outer Wireframe Icosahedron */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.3, 1]} />
          <meshStandardMaterial
            color={primaryColor}
            wireframe
            transparent
            opacity={0.7}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Inner Solid Geometric Node */}
        <mesh ref={innerRef}>
          <octahedronGeometry args={[0.75, 0]} />
          <meshStandardMaterial
            color={accentColor}
            roughness={0.3}
            metalness={0.7}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Glowing Center Core with internal point light */}
        <mesh>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshBasicMaterial color={coreColor} />
          <pointLight color={coreColor} intensity={isDark ? 4.0 : 2.5} distance={10} decay={2} />
        </mesh>

        {/* Orbiting Concentric Blueprint Rings */}
        <OrbitRing radius={1.8} speed={0.4} rotationAxis={[1, 0.5, 0]} color={primaryColor} />
        <OrbitRing radius={2.2} speed={-0.3} rotationAxis={[0.5, 1, 0.5]} color={accentColor} />
      </Float>
    </group>
  );
};

const HeroCore3D = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Lighting Setup */}
      <ambientLight intensity={isDark ? 0.7 : 0.9} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-4, -3, -2]} intensity={2} color={isDark ? "#3b82f6" : "#0052ff"} />
      <pointLight position={[3, 4, 2]} intensity={1.5} color={isDark ? "#10b981" : "#059669"} />

      {/* Main 3D Node */}
      <CoreGeometry isDark={isDark} />
    </>
  );
};

export default HeroCore3D;
