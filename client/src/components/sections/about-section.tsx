import { motion } from "framer-motion";
import EducationExperienceTabs from "@/components/common/education-experience-tabs";

export default function AboutSection() {
  const stats = [
    { icon: "fas fa-laptop-code", value: "10+", label: "Projects Completed", color: "text-primary" },
    { icon: "fas fa-code-branch", value: "15K+", label: "Lines of Code", color: "text-secondary" },
    { icon: "fas fa-coffee", value: "500+", label: "Cups of Coffee", color: "text-accent" }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gray-50 dark:bg-dark-surface/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image/Visual */}
          <motion.div 
            className="lg:w-2/5 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-xl ml-0 sm:ml-10 border-8 border-white dark:border-dark-bg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 mix-blend-overlay"></div>
              <img 
                className="w-full h-auto" 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" 
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
              <div className="bg-white dark:bg-dark-bg shadow-lg rounded-full px-5 py-2 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <i className="fas fa-briefcase text-sm"></i>
                </div>
                <span className="text-sm font-medium">3+ Years Experience</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 hidden sm:block"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-white dark:bg-dark-bg shadow-lg rounded-full px-5 py-2 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
                  <i className="fas fa-mobile-alt text-sm"></i>
                </div>
                <span className="text-sm font-medium">10+ Mobile Apps</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            className="lg:w-3/5 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-sans font-bold">Software Engineer & Mobile Developer</h3>
            
            <p className="text-gray-700 dark:text-gray-300">
              I'm a passionate software developer specializing in mobile application development with a strong foundation in software engineering principles. Currently working as an Intern Software Engineer, I bring creative solutions to complex problems.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              My journey in technology began during college where I discovered my passion for creating intuitive user experiences. I focus on writing clean, maintainable code while staying updated with the latest industry trends and technologies.
            </p>
            
            {/* Stats Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-dark-bg p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className={`${stat.color} text-4xl mb-2`}>
                    <i className={stat.icon}></i>
                  </div>
                  <h4 className="font-sans font-bold text-lg mb-1">{stat.value}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
            
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
