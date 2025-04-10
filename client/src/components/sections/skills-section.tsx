import { motion } from "framer-motion";
import SkillProgress from "@/components/common/skill-progress";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: "fas fa-mobile-alt",
      color: "text-primary",
      gradient: "from-primary to-secondary",
      description: "Creating responsive and feature-rich mobile applications for iOS and Android platforms.",
      skills: [
        { name: "React Native", percentage: 90 },
        { name: "Flutter", percentage: 85 },
        { name: "Android (Kotlin/Java)", percentage: 80 }
      ]
    },
    {
      title: "Front-End Development",
      icon: "fas fa-code",
      color: "text-secondary",
      gradient: "from-secondary to-accent",
      description: "Building responsive, accessible, and performant user interfaces for web applications.",
      skills: [
        { name: "JavaScript/TypeScript", percentage: 95 },
        { name: "React.js", percentage: 90 },
        { name: "HTML/CSS/SASS", percentage: 95 }
      ]
    },
    {
      title: "Back-End Development",
      icon: "fas fa-server",
      color: "text-accent",
      gradient: "from-accent to-primary",
      description: "Developing robust server-side applications and RESTful APIs.",
      skills: [
        { name: "Node.js", percentage: 85 },
        { name: "Express.js", percentage: 80 },
        { name: "MongoDB/SQL", percentage: 75 }
      ]
    }
  ];

  const technologies = [
    { name: "React", icon: "fab fa-react text-blue-500" },
    { name: "JavaScript", icon: "fab fa-js text-yellow-500" },
    { name: "Node.js", icon: "fab fa-node-js text-green-600" },
    { name: "HTML5", icon: "fab fa-html5 text-orange-600" },
    { name: "CSS3", icon: "fab fa-css3-alt text-blue-600" },
    { name: "React Native", icon: "fas fa-mobile-alt text-purple-600" },
    { name: "MongoDB", icon: "fas fa-database text-gray-700 dark:text-gray-300" },
    { name: "Git", icon: "fab fa-git-alt text-orange-600" },
    { name: "Android", icon: "fab fa-android text-green-600" },
    { name: "Sass", icon: "fab fa-sass text-pink-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            I've worked with a variety of technologies and frameworks to deliver high-quality applications.
          </p>
        </motion.div>
        
        {/* Skills Categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className="bg-white dark:bg-dark-bg rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className={`${category.color} text-4xl mb-4`}>
                <i className={category.icon}></i>
              </div>
              <h3 className="text-xl font-sans font-bold mb-3">{category.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-5">
                {category.description}
              </p>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillProgress 
                    key={skillIdx}
                    name={skill.name} 
                    percentage={skill.percentage} 
                    gradient={category.gradient}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Technologies & Tools */}
        <motion.h3 
          className="text-2xl font-sans font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Technologies & Tools
        </motion.h3>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              className="px-4 py-2 bg-white dark:bg-dark-bg rounded-full shadow-md flex items-center space-x-2 border border-gray-100 dark:border-gray-800"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            >
              <i className={tech.icon}></i>
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
