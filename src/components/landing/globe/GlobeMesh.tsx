"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const GLOBE_RADIUS = 2.4;
const GRID_COLOR = new THREE.Color("#5eead4");
const NODE_COLOR = new THREE.Color("#22d3ee");

/** Builds latitude/longitude line segments for the wireframe grid. */
function createGridLines(
  radius: number,
  latSegments: number,
  lonSegments: number,
): THREE.BufferGeometry {
  const points: THREE.Vector3[] = [];

  for (let lat = 0; lat <= latSegments; lat++) {
    const phi = (lat / latSegments) * Math.PI;
    for (let lon = 0; lon < lonSegments; lon++) {
      const theta1 = (lon / lonSegments) * Math.PI * 2;
      const theta2 = ((lon + 1) / lonSegments) * Math.PI * 2;
      points.push(
        sphericalToCartesian(radius, phi, theta1),
        sphericalToCartesian(radius, phi, theta2),
      );
    }
  }

  for (let lon = 0; lon < lonSegments; lon++) {
    const theta = (lon / lonSegments) * Math.PI * 2;
    for (let lat = 0; lat < latSegments; lat++) {
      const phi1 = (lat / latSegments) * Math.PI;
      const phi2 = ((lat + 1) / latSegments) * Math.PI;
      points.push(
        sphericalToCartesian(radius, phi1, theta),
        sphericalToCartesian(radius, phi2, theta),
      );
    }
  }

  return new THREE.BufferGeometry().setFromPoints(points);
}

function sphericalToCartesian(
  radius: number,
  phi: number,
  theta: number,
): THREE.Vector3 {
  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

/** Deterministic node positions on the sphere surface (data-path endpoints). */
function createNodePositions(count: number, radius: number): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.cos(phi);
    positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
  }
  return positions;
}

/**
 * Translucent globe with cyan grid lines and glowing nodes.
 * Rotates at sub-perceptible speed via parent group ref.
 */
export function GlobeMesh() {
  const groupRef = useRef<THREE.Group>(null);

  const gridGeometry = useMemo(
    () => createGridLines(GLOBE_RADIUS, 24, 48),
    [],
  );

  const nodeGeometry = useMemo(() => {
    const positions = createNodePositions(48, GLOBE_RADIUS * 1.002);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    return geometry;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshPhysicalMaterial
          color="#0f172a"
          transparent
          opacity={0.35}
          roughness={0.2}
          metalness={0.1}
          transmission={0.6}
          thickness={0.5}
        />
      </mesh>

      <lineSegments geometry={gridGeometry}>
        <lineBasicMaterial color={GRID_COLOR} transparent opacity={0.45} />
      </lineSegments>

      <points geometry={nodeGeometry}>
        <pointsMaterial
          color={NODE_COLOR}
          size={0.06}
          transparent
          opacity={0.95}
          sizeAttenuation
        />
      </points>

      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 1.08, 32, 32]} />
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}
