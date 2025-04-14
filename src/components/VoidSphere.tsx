
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
  // Empty component, Three.js animations removed
  return null;
};

export default VoidSphere;
