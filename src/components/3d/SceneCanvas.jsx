import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.warn("3D WebGL Canvas fallback triggered:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

const SceneCanvas = ({
  children,
  className = "",
  camera = { position: [0, 0, 5], fov: 45 },
  style = {},
  ...props
}) => {
  return (
    <CanvasErrorBoundary>
      <div className={`relative w-full h-full ${className}`} style={style}>
        <Canvas
          camera={camera}
          dpr={[1, 1.75]}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
          {...props}
        >
          <Suspense fallback={null}>{children}</Suspense>
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
};

export default SceneCanvas;
