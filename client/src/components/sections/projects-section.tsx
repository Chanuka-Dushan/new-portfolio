import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/common/project-card";
import { projects } from "@/lib/constants";

// Define ProjectType (adjust according to your actual project structure)
interface ProjectType {
  id: string | number;
  title: string;
  category: string;
  description: string;
  // Add other properties as needed
}

// Project categories for filtering
const categories = ["All", "Mobile", "Web"] as const;

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>([]); // Explicitly typed
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Filter projects based on category using useEffect
  useEffect(() => {
    try {
      setIsLoading(true);
      if (!projects || !Array.isArray(projects)) {
        throw new Error("Projects data is not available or invalid");
      }
      if (activeFilter === "All") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
            projects.filter((project) => project.category === activeFilter)
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setIsLoading(false);
    }
  }, [activeFilter]);

  // Filter projects based on category and reset visible projects
  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
    setVisibleProjects(6); // Reset visible projects when filter changes
  };

  // Load more projects
  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Loading state
  if (isLoading) {
    return (
        <section className="py-20 bg-gray-50 dark:bg-dark-surface/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">Loading projects...</p>
          </div>
        </section>
    );
  }

  // Error state
  if (error) {
    return (
        <section className="py-20 bg-gray-50 dark:bg-dark-surface/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-red-600 dark:text-red-400">
              Failed to load projects: {error}
            </p>
          </div>
        </section>
    );
  }

  return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
              Here are some of my recent projects. Each represents my passion for
              creating intuitive, user-friendly applications.
            </p>
          </motion.div>

          {/* Project Filter */}
          <motion.div
              className="flex flex-wrap justify-center mb-12 gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
                <motion.button
                    key={category}
                    onClick={() => handleFilterClick(category)}
                    className={`px-5 py-2 rounded-full font-medium transition-colors duration-300 ${
                        activeFilter === category
                            ? "bg-primary text-white"
                            : "bg-white dark:bg-dark-bg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-surface"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
              <div className="text-center text-gray-600 dark:text-gray-400">
                No projects found for this category.
              </div>
          ) : (
              <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
              >
                <AnimatePresence>
                  {filteredProjects
                      .slice(0, visibleProjects)
                      .map((project, index) => (
                          <ProjectCard key={project.id} project={project} index={index} />
                      ))}
                </AnimatePresence>
              </motion.div>
          )}

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
              <motion.div
                  className="text-center mt-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
              >
                <motion.button
                    onClick={loadMoreProjects}
                    className="px-6 py-3 rounded-full bg-primary text-white font-medium transform shadow-md"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                >
                  Load More Projects
                </motion.button>
              </motion.div>
          )}
        </div>
      </section>
  );
}