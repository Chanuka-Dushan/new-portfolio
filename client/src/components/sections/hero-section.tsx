import { motion } from "framer-motion";
import AnimatedText from "@/components/common/animated-text";
import { scrollToElement } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <motion.h2 
                className="text-2xl font-medium text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm
              </motion.h2>
              <motion.h1 
                className="text-5xl sm:text-6xl font-sans font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
                  Dushan chanuka
                </span>
              </motion.h1>
              <div className="mt-2">
                <AnimatedText text="Mobile Developer & Software Engineer" className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300" />
              </div>
            </div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I specialize in creating beautiful, user-friendly mobile applications and web experiences with a focus on performance and modern technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                onClick={() => scrollToElement("projects")}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => scrollToElement("contact")}
                className="px-6 py-3 rounded-full bg-light-surface dark:bg-dark-surface text-gray-700 dark:text-gray-300 font-medium border border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary-light transform hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <a href="https://github.com/Chanuka-Dushan" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="www.linkedin.com/in/dushan-chanuka" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="mailto:hd.wijewantha@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300">
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Hero Image/Animation */}
          <motion.div 
            className="lg:w-1/2 order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="relative w-80 h-80 md:w-96 md:h-96"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-light via-accent to-secondary-light opacity-20 rounded-full blur-2xl"></div>
              <div className="relative w-full h-full bg-light-surface dark:bg-dark-surface rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-xl">
                <motion.div 
                  className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 12 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className="fas fa-mobile-alt text-3xl"></i>
                </motion.div>
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -12 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className="fas fa-laptop-code text-3xl"></i>
                </motion.div>
                <img
                    className="w-3/4 h-3/4 rounded-full object-cover"
                    src="https://github.com/Chanuka-Dushan/new-portfolio/blob/main/client/src/images/developer_photo.png"
                    alt="Developer Portrait"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div 
          className="flex justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a 
            href="#about" 
            className="text-gray-500 dark:text-gray-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
            onClick={(e) => {
              e.preventDefault();
              scrollToElement("about");
            }}
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
