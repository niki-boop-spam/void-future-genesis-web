
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import VoidSphere from './VoidSphere';

type ThreeSceneProps = {
  className?: string;
};

export const ThreeScene = ({ className = '' }: ThreeSceneProps) => {
  return (
    <div className={`w-full h-full min-h-[400px] ${className}`}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
          <VoidSphere />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            rotateSpeed={0.5}
            autoRotate 
            autoRotateSpeed={0.5} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
