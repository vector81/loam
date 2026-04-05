"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdditiveBlending, Color, Mesh, Points, ShaderMaterial, Vector3 } from "three";

type BlobConfig = {
  color: string;
  scale: number;
  speed: number;
  offset: number;
  position: [number, number, number];
};

const blobVertexShader = `
  varying vec2 vUv;
  uniform float uTime;

  void main() {
    vUv = uv;

    vec3 transformed = position;
    transformed.z += sin((position.x * 2.2) + uTime * 0.35) * 0.02;
    transformed.z += cos((position.y * 2.8) + uTime * 0.25) * 0.025;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
  }
`;

const blobFragmentShader = `
  varying vec2 vUv;
  uniform vec3 uColor;
  uniform float uOpacity;

  void main() {
    vec2 centered = vUv - 0.5;
    float dist = length(centered * vec2(1.0, 0.82));
    float outer = smoothstep(0.7, 0.05, dist);
    float inner = smoothstep(0.38, 0.0, dist);
    float alpha = outer * 0.75 + inner * 0.55;
    alpha *= uOpacity;

    gl_FragColor = vec4(uColor, alpha);
  }
`;

function stableNoise(index: number, salt: number) {
  const value = Math.sin(index * 127.1 + salt * 311.7) * 43758.5453123;
  return value - Math.floor(value);
}

function Blob({ color, scale, speed, offset, position }: BlobConfig) {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<ShaderMaterial>(null);

  useFrame((state) => {
    const mesh = meshRef.current;
    const material = materialRef.current;

    if (!mesh || !material) {
      return;
    }

    const t = state.clock.elapsedTime * speed + offset;
    mesh.position.x = position[0] + Math.sin(t * 0.55) * 0.28;
    mesh.position.y = position[1] + Math.cos(t * 0.45) * 0.22;
    mesh.rotation.z = Math.sin(t * 0.35) * 0.18;
    mesh.scale.x = scale * (1 + Math.sin(t * 0.42) * 0.06);
    mesh.scale.y = scale * (1 + Math.cos(t * 0.37) * 0.08);
    material.uniforms.uTime.value = state.clock.elapsedTime + offset;
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new Color(color) },
      uOpacity: { value: 0.34 },
    }),
    [color],
  );

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[1.75, 1.75, 24, 24]} />
      <shaderMaterial
        ref={materialRef}
        key={color}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
        fragmentShader={blobFragmentShader}
        vertexShader={blobVertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function DustField() {
  const pointsRef = useRef<Points>(null);
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const count = 56;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (stableNoise(i, 0.17) - 0.5) * 5.4;
      positions[i * 3 + 1] = (stableNoise(i, 0.53) - 0.5) * 3.6;
      positions[i * 3 + 2] = (stableNoise(i, 0.91) - 0.5) * 0.5;
    }

    return positions;
  }, []);

  useFrame((state) => {
    const points = pointsRef.current;
    if (!points) {
      return;
    }

    points.rotation.z = Math.sin(state.clock.elapsedTime * 0.06) * 0.04;
    points.position.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.05;
    points.position.y = Math.cos(state.clock.elapsedTime * 0.06) * 0.04;
  });

  return (
    <points ref={pointsRef} position={new Vector3(0, 0, -0.2)} scale={Math.min(viewport.width / 6.5, 1.25)}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#f7efe0"
        size={0.028}
        sizeAttenuation
        transparent
        opacity={0.28}
        depthWrite={false}
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <Blob color="#3D6B4F" scale={2.2} speed={0.45} offset={0} position={[-1.4, 0.55, 0]} />
      <Blob color="#C67B5C" scale={1.9} speed={0.4} offset={1.2} position={[1.28, 0.25, 0]} />
      <Blob color="#8A9C54" scale={1.55} speed={0.35} offset={2.1} position={[0.1, -0.92, 0]} />
      <DustField />
    </>
  );
}

export default function HeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-80">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 4.5], fov: 36 }}
      >
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_34%,rgba(250,247,242,0.08)_58%,rgba(250,247,242,0.32)_100%)]" />
    </div>
  );
}
