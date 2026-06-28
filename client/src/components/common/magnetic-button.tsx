import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function MagneticButton({ children, className = "", onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center (max 20px pull)
    const pullX = (clientX - centerX) * 0.4;
    const pullY = (clientY - centerY) * 0.4;
    
    x.set(pullX);
    y.set(pullY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${className}`}
    >
      {children}
    </motion.button>
  );
}
