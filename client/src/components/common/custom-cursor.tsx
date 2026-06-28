import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const cursorXDot = useMotionValue(-100);
  const cursorYDot = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      cursorXDot.set(e.clientX - 4);
      cursorYDot.set(e.clientY - 4);
      
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, cursorXDot, cursorYDot, isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary/70 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        style={{
          x: cursorXDot,
          y: cursorYDot,
          opacity: isVisible ? 1 : 0
        }}
      />
    </>
  );
}
