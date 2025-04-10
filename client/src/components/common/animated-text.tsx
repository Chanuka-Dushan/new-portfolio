import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`inline-block overflow-hidden ${className}`}>
      {isVisible && (
        <motion.p
          className="whitespace-nowrap"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 2.5, 
            ease: "easeInOut" 
          }}
        >
          {text}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.8 
            }}
            className="inline-block w-1 h-6 ml-1 bg-current align-middle"
          />
        </motion.p>
      )}
    </div>
  );
}
