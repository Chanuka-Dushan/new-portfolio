import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EducationExperienceTabs() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  const education = [
    {
      title: "BSc.Information Technology",
      institution: "Sri Lanka Institute of Information Technology, 2022 - present",
      description: "Undergraduate program focusing on software engineering and mobile development",
      icon: "fas fa-graduation-cap"
    },
    // {
    //   title: "Mobile Development Certification",
    //   institution: "Google Developer Academy, 2022",
    //   description: "Advanced Android development and Flutter framework",
    //   icon: "fas fa-certificate"
    // }
  ];

  const experience = [
    {
      title: "Intern Software Engineer",
      company: "Ecommex Digital Business Co. (pvt) Ltd, 2024-Dec to present",
      description: "Working on full-stack developer with focus on mobile applications",
      icon: "fas fa-briefcase"
    }
    // },
    // {
    //   title: "Freelance Mobile Developer",
    //   company: "Self-employed, 2021-2023",
    //   description: "Developed custom mobile applications for various clients",
    //   icon: "fas fa-laptop-code"
    // }
  ];

  return (
    <div>
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button 
          onClick={() => setActiveTab('education')}
          className={`py-2 px-4 border-b-2 font-medium transition-colors duration-300 ${
            activeTab === 'education' 
              ? 'border-primary text-primary' 
              : 'border-transparent text-gray-500 dark:text-gray-400'
          }`}
        >
          Education
        </button>
        <button 
          onClick={() => setActiveTab('experience')}
          className={`py-2 px-4 border-b-2 font-medium transition-colors duration-300 ${
            activeTab === 'experience' 
              ? 'border-primary text-primary' 
              : 'border-transparent text-gray-500 dark:text-gray-400'
          }`}
        >
          Experience
        </button>
      </div>
      
      <AnimatePresence mode="wait">
        {activeTab === 'education' && (
          <motion.div 
            key="education"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="py-4 space-y-4"
          >
            {education.map((item, index) => (
              <motion.div 
                key={index}
                className="flex"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center">
                    <i className={`${item.icon} text-primary`}></i>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.institution}</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {activeTab === 'experience' && (
          <motion.div 
            key="experience"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="py-4 space-y-4"
          >
            {experience.map((item, index) => (
              <motion.div 
                key={index}
                className="flex"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary-light/20 flex items-center justify-center">
                    <i className={`${item.icon} text-secondary`}></i>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.company}</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
