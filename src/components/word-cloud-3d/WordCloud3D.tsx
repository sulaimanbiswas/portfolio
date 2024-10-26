"use client";

import { Billboard, Text, TrackballControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { generate } from "random-words";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

interface WordProps {
  children: string;
  position: THREE.Vector3;
}

function Word({ children, position }: WordProps) {
  const { resolvedTheme } = useTheme();

  const color = new THREE.Color();
  const fontProps = {
    font: "/fonts/GeistMonoVF.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const over = (e: any) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useFrame(() => {
    if (
      ref.current &&
      ref.current.material instanceof THREE.MeshBasicMaterial
    ) {
      ref.current.material.color.lerp(
        color.set(
          hovered
            ? "#3b82f6"
            : resolvedTheme === "dark"
              ? "#ffffff"
              : "#000000",
        ),
        0.1,
      );
    }
  });

  return (
    <Billboard position={position}>
      <Text ref={ref} onPointerOver={over} onPointerOut={out} {...fontProps}>
        {children}
      </Text>
    </Billboard>
  );
}

interface CloudProps {
  count?: number;
  radius?: number;
  customWords?: string[];
}

function Cloud({ count = 4, radius = 15, customWords }: CloudProps) {
  const words = useMemo(() => {
    const temp: [THREE.Vector3, string][] = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const word = customWords
          ? customWords[(i * count + j) % customWords.length]
          : generate();
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j),
          ),
          word as string,
        ]);
      }
    }
    return temp;
  }, [count, radius, customWords]);

  return (
    <>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos}>
          {word}
        </Word>
      ))}
    </>
  );
}

function RotatingGroup({ count, radius, customWords }: CloudProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Adjust the rotation speed by modifying the increment values
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <Cloud count={count} radius={radius} customWords={customWords} />
    </group>
  );
}

interface WordCloud3DProps {
  customWords?: string[];
}

export default function WordCloud3D({ customWords }: WordCloud3DProps) {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 40], fov: 70 }}>
      <ambientLight intensity={0.5} />
      <fog attach="fog" args={["#3b82f6", 20, 80]} />
      <Suspense fallback={null}>
        <RotatingGroup count={7} radius={20} customWords={customWords} />
      </Suspense>
      <TrackballControls />
    </Canvas>
  );
}
