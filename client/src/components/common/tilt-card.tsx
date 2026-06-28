import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const glareOpacity = useTransform(mouseYSpring, [-0.5, 0.5], [0, 0.3]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["-100%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-xl ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <div 
        className="w-full h-full relative z-10" 
        style={{ transform: "translateZ(30px)" }}
      >
        {children}
      </div>

      {/* Glare effect */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none rounded-xl overflow-hidden"
        style={{ opacity: glareOpacity, mixBlendMode: "overlay" }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-50 blur-xl"
          style={{ y: glareY }}
        />
      </motion.div>
    </motion.div>
  );
}
