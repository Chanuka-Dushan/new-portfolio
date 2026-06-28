import { motion } from "framer-motion";
import TiltCard from "@/components/common/tilt-card";
import EducationExperienceTabs from "@/components/common/education-experience-tabs";
import { useEffect, useState } from "react";
import DeveloperPhoto from "@/images/developer_photo.png";

export default function AboutSection() {
  const [repoCount, setRepoCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Chanuka-Dushan/repos");
        const repos = await response.json();
        setRepoCount(repos.length);
      } catch (error) {
        console.error("Error fetching repo count:", error);
      }
    };
    fetchRepoCount();
  }, []);

  return (
    <section id="about" className="py-32 relative bg-[#030014]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px] -z-10 pointer-events-none transform -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column (Sticky Portrait & Title) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-sans font-bold tracking-tight text-white mb-2">
                About <span className="text-purple-400">Me</span>
              </h2>
              <div className="w-12 h-1 bg-purple-500 rounded-full mb-10 mx-auto lg:mx-0" />
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto lg:mx-0 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.15)] group">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent mix-blend-overlay z-10" />
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={DeveloperPhoto}
                  alt="Dushan Chanuka"
                />
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-white">Dushan Chanuka</h3>
                <p className="text-purple-400 text-sm tracking-widest uppercase font-medium mt-1">Software Engineer</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Scrolling Content) */}
          <div className="w-full lg:w-2/3 space-y-24">
            
            {/* The Journey (Bio) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-semibold text-white">The Journey</h3>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                <p>
                  I am a passionate software developer specializing in mobile application development with a strong foundation in software engineering principles. Currently working as an Intern Software Engineer, I bring creative solutions to complex problems.
                </p>
                <p>
                  My journey in technology began during college where I discovered my passion for creating intuitive user experiences. I focus on writing clean, maintainable code while staying updated with the latest industry trends.
                </p>
              </div>
            </motion.div>

            {/* GitHub Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-semibold text-white">Open Source</h3>
              
              <div className="flex flex-col xl:flex-row items-stretch gap-8 pt-4">
                <TiltCard className="flex-shrink-0">
                  <div className="flex flex-col items-center justify-center p-8 h-full rounded-2xl bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)] min-w-[220px]">
                    <motion.i 
                      className="fab fa-github text-5xl text-purple-400 mb-4"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    ></motion.i>
                    <h4 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-200 drop-shadow-lg">
                      {repoCount !== null ? repoCount : "..."}
                    </h4>
                    <span className="text-purple-300/70 text-xs font-bold tracking-[0.2em] uppercase mt-4">Repositories</span>
                  </div>
                </TiltCard>
                
                <TiltCard className="flex-1">
                  <div className="w-full h-full rounded-2xl bg-[#0d1117] border border-white/5 p-2 flex items-center justify-center shadow-2xl">
                    <img
                      src={`https://github-readme-stats.vercel.app/api?username=Chanuka-Dushan&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117`}
                      alt="GitHub Stats"
                      className="w-full h-full object-contain mix-blend-screen"
                    />
                  </div>
                </TiltCard>
              </div>
            </motion.div>

            {/* Experience & Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-semibold text-white">Experience & Education</h3>
              <div className="pt-4">
                <EducationExperienceTabs />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
