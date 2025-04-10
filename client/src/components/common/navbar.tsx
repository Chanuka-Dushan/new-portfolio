import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { scrollToElement } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const navLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const activeSection = useScrollSpy();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Handle navigation click
  const handleNavClick = (target: string) => {
    scrollToElement(target);
    setIsMenuOpen(false);
  };

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md transition-all duration-300 ${hasScrolled ? "shadow-md" : "shadow-sm"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
              JS
            </div>
            <span className="font-sans font-bold text-xl dark:text-white">John Smith</span>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className={`text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light font-medium transition-colors duration-300 ${activeSection === link.target ? "text-primary dark:text-primary-light" : ""}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          
          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-light-surface dark:bg-dark-surface flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Toggle theme"
            >
              <i className="fas fa-sun text-yellow-500 dark:hidden"></i>
              <i className="fas fa-moon text-blue-300 hidden dark:block"></i>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: 500, opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-dark-surface shadow-lg rounded-b-xl mx-4 overflow-hidden"
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className="px-6 py-3 text-left hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
