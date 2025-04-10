import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { formatPercentage } from "@/lib/utils";

interface SkillProgressProps {
  name: string;
  percentage: number;
  gradient: string;
}

export default function SkillProgress({ name, percentage, gradient }: SkillProgressProps) {
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const inView = useInView(progressRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="skill-item" ref={progressRef}>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-sm">{name}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{formatPercentage(percentage)}</span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? formatPercentage(percentage) : 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}
