import { motion } from "framer-motion";
import { ProjectType } from "@/lib/constants";

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { title, category, description, image, tags, links } = project;
  
  // Color mapping for category badges
  const categoryColors = {
    Mobile: "bg-primary/10 text-primary",
    Web: "bg-secondary/10 text-secondary",
    "UI/UX": "bg-accent/10 text-accent"
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div 
      variants={item}
      className="project-card bg-white dark:bg-dark-bg rounded-xl overflow-hidden shadow-md hover:shadow-xl"
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <div className="relative overflow-hidden group">
        <img 
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110" 
          src={image} 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="space-y-2">
            <div className="flex space-x-3">
              {links.map((link, idx) => (
                <motion.a 
                  key={idx}
                  href={link.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={link.icon}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-sans font-bold">{title}</h3>
          <div className={`px-3 py-1 rounded-full ${categoryColors[category as keyof typeof categoryColors]} text-xs font-medium`}>
            {category}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 rounded-md bg-gray-100 dark:bg-dark-surface text-gray-600 dark:text-gray-400 text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
