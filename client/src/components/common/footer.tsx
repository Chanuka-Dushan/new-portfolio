import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="py-8 bg-gray-50 dark:bg-dark-surface/30 border-t border-gray-200 dark:border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary overflow-hidden">
                <img
                    src="https://avatars.githubusercontent.com/u/125439016?v=4"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                />
              </div>
              <span className="font-sans font-bold text-lg">Dushan Chanuka</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Software Engineer & Mobile Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-600 dark:text-gray-400 text-sm">&copy; {new Date().getFullYear()} All Rights Reserved</p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">Developed by Dushan</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
