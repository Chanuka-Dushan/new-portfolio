import { motion } from "framer-motion";
import EducationExperienceTabs from "@/components/common/education-experience-tabs";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [repoCount, setRepoCount] = useState<number | null>(null);

  useEffect(() => {
    // Fetch the repository count from GitHub API
    const fetchRepoCount = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Chanuka-Dushan/repos");
        const repos = await response.json();
        setRepoCount(repos.length);  // Set the repo count
      } catch (error) {
        console.error("Error fetching repo count:", error);
      }
    };

    fetchRepoCount();
  }, []);

  return (
      <section id="about" className="min-h-screen py-20 bg-dark-surface/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Me
            </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image with GitHub stats card on right */}
            <motion.div
                className="lg:w-2/5 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-xl ml-0 sm:ml-10 border-8 border-dark-bg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 mix-blend-overlay"></div>
                <img
                    className="w-full h-auto"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1772&q=80"
                    alt="Developer working on code"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                  className="absolute -top-8 -left-8 hidden sm:block"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="bg-dark-bg shadow-lg rounded-full px-5 py-2 flex items-center space-x-2 border border-gray-800">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    <i className="fas fa-briefcase text-sm"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                  Full Stack Developer
                </span>
                </div>
              </motion.div>

              <motion.div
                  className="absolute -bottom-6 -right-6 hidden sm:block"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="bg-dark-bg shadow-lg rounded-full px-5 py-2 flex items-center space-x-2 border border-gray-800">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                    <i className="fas fa-mobile-alt text-sm"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                  5+ Mobile Apps
                </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content + GitHub Stats Card */}
            <motion.div
                className="lg:w-3/5 space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-sans font-bold text-gray-100">
                Software Engineer & Mobile Developer
              </h3>

              <p className="text-gray-300">
                I'm a passionate software developer specializing in mobile
                application development with a strong foundation in software
                engineering principles. Currently working as an Intern Software
                Engineer, I bring creative solutions to complex problems.
              </p>

              <p className="text-gray-300">
                My journey in technology began during college where I discovered
                my passion for creating intuitive user experiences. I focus on
                writing clean, maintainable code while staying updated with the
                latest industry trends and technologies.
              </p>

              {/* GitHub Stats Image */}
              <div className="mt-6 flex items-center space-x-4">
                <img
                    src="https://github-readme-stats.vercel.app/api?username=Chanuka-Dushan&show_icons=true&theme=radical"
                    alt="Dushan Chanuka's GitHub Stats"
                    className="rounded-xl border border-gray-800 shadow-md"
                />

                {/* Repo count card */}
                <motion.div
                    className="bg-dark-bg p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-800 flex flex-col justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="text-4xl text-primary mb-2">
                    <i className="fas fa-archive"></i>
                  </div>
                  <h4 className="font-sans font-bold text-lg mb-1 text-gray-100">
                    {repoCount !== null ? (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                          {repoCount} Repositories
                        </motion.span>
                    ) : (
                        "Loading..."
                    )}
                  </h4>
                </motion.div>
              </div>

              {/* Education & Experience Tabs */}
              <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
              >
                <EducationExperienceTabs />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
