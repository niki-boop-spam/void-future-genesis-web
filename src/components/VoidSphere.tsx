
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

type VoidSphereProps = {
  color?: string;
  distort?: number;
  speed?: number;
};

export const VoidSphere = ({ 
  color = '#7c9a92', 
  distort = 0.4, 
  speed = 1.5 
}: VoidSphereProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1 * speed;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15 * speed;
  });

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef} position={[0, 0, 0]} scale={1.8}>
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

export default VoidSphere;
