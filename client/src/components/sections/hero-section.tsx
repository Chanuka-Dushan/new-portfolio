import { motion } from "framer-motion";
import MagneticButton from "@/components/common/magnetic-button";
import { scrollToElement } from "@/lib/utils";
import DeveloperPhoto from "@/images/developer_photo.png";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#030014]">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Floating Animated Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div 
          className="absolute top-[10%] left-[20%] w-[30rem] h-[30rem] bg-purple-600/30 rounded-full blur-[120px] mix-blend-screen"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[10%] right-[20%] w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 max-w-7xl mx-auto">
          
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="lg:w-[55%] space-y-8 text-center lg:text-left"
          >
            {/* Status Pill */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              className="flex justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl inline-flex">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-gray-300 text-sm font-medium tracking-wide">Available for new opportunities</span>
              </div>
            </motion.div>

            {/* Massive Typography */}
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl sm:text-7xl lg:text-8xl font-sans font-extrabold tracking-tighter"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <span className="text-white drop-shadow-2xl leading-tight">
                  Dushan
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient bg-[length:200%_auto] leading-tight">
                  Chanuka
                </span>
              </motion.h1>
              
              <motion.h2
                className="text-2xl sm:text-3xl text-gray-400 font-medium tracking-tight mt-4"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                Software Engineer & Mobile Developer
              </motion.h2>
            </div>

            <motion.p 
              className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              I engineer robust mobile and web applications, transforming complex problems into elegant, high-performance digital experiences.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <MagneticButton
                onClick={() => scrollToElement("projects")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                Explore Projects 
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </MagneticButton>
              <MagneticButton
                onClick={() => scrollToElement("contact")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Contact Me
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-6 pt-8"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              {[
                { icon: "fab fa-github", url: "https://github.com/Chanuka-Dushan" },
                { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/dushan-chanuka" },
                { icon: "fas fa-envelope", url: "mailto:hd.wijewantha@gmail.com" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
                >
                  <i className={`${social.icon} text-3xl`}></i>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image / Floating Glass Container */}
          <motion.div 
            className="lg:w-[45%] flex justify-center lg:justify-end relative mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Rotating background glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-2xl opacity-40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full border-2 border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={DeveloperPhoto}
                  alt="Dushan Chanuka"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating Tech Badges */}
              <motion.div 
                className="absolute -top-4 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl flex items-center justify-center"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <i className="fas fa-code text-3xl text-purple-400"></i>
              </motion.div>
              <motion.div 
                className="absolute -bottom-8 left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl flex items-center justify-center"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              >
                <i className="fas fa-mobile-alt text-3xl text-blue-400"></i>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
