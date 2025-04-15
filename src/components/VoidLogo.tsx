
import React from 'react';

type VoidLogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

const VoidLogo = ({ className = "", width = 120, height = 40 }: VoidLogoProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 400 120" 
      className={className}
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M140.3 102.5C123.1 102.5 109 88.4 109 71.2C109 54 123.1 39.9 140.3 39.9C157.5 39.9 171.6 54 171.6 71.2C171.6 88.4 157.5 102.5 140.3 102.5ZM140.3 46.9C127 46.9 116 57.9 116 71.2C116 84.5 127 95.5 140.3 95.5C153.6 95.5 164.6 84.5 164.6 71.2C164.6 57.9 153.6 46.9 140.3 46.9Z" />
      <path d="M79.3 100L113.8 20H118.8L153.3 100H146.2L115 28.3H117.6L86.4 100H79.3Z" />
      <path d="M167 100V20H173.7V100H167Z" />
      <path d="M195.8 100V20H202.5V93.5H258.9V100H195.8Z" />
    </svg>
  );
};

export default VoidLogo;
