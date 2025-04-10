import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { contactSchema, ContactFormData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: async () => {
      toast({
        title: "Message sent",
        description: "I'll get back to you as soon as possible!",
        variant: "default",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  const contactInfo = [
    { icon: "fas fa-envelope", title: "Email", content: "john.smith@example.com", color: "text-primary", bgColor: "bg-primary/10", link: "mailto:john.smith@example.com" },
    { icon: "fas fa-phone-alt", title: "Phone", content: "+1 (123) 456-7890", color: "text-secondary", bgColor: "bg-secondary/10", link: "tel:+11234567890" },
    { icon: "fas fa-map-marker-alt", title: "Location", content: "San Francisco, California", color: "text-accent", bgColor: "bg-accent/10", link: null }
  ];

  const socialLinks = [
    { icon: "fab fa-github", url: "https://github.com", hoverColor: "hover:text-primary hover:bg-primary/5" },
    { icon: "fab fa-linkedin-in", url: "https://linkedin.com", hoverColor: "hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-blue-900/20" },
    { icon: "fab fa-twitter", url: "https://twitter.com", hoverColor: "hover:text-blue-400 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-blue-900/20" },
    { icon: "fab fa-instagram", url: "https://instagram.com", hoverColor: "hover:text-pink-600 hover:bg-pink-50 dark:hover:text-pink-400 dark:hover:bg-pink-900/20" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-sans font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Have a project in mind or want to collaborate? Feel free to reach out to me through any of the channels below.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-sans font-bold">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center ${item.color}`}>
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className={`${item.color} hover:opacity-80 transition-colors duration-300`}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="pt-6 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-sans font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-light-surface dark:bg-dark-bg shadow-md flex items-center justify-center text-gray-600 dark:text-gray-400 ${link.hoverColor} transition-all duration-300`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={`${link.icon} text-lg`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-dark-bg rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-sans font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      {...register("name")}
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name 
                          ? "border-red-500 focus:ring-red-500" 
                          : "border-gray-300 dark:border-gray-700 focus:ring-primary dark:focus:ring-primary-light"
                      } focus:outline-none focus:ring-2 focus:border-transparent bg-light-surface dark:bg-dark-surface text-gray-900 dark:text-gray-100`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email 
                          ? "border-red-500 focus:ring-red-500" 
                          : "border-gray-300 dark:border-gray-700 focus:ring-primary dark:focus:ring-primary-light"
                      } focus:outline-none focus:ring-2 focus:border-transparent bg-light-surface dark:bg-dark-surface text-gray-900 dark:text-gray-100`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    {...register("subject")}
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.subject 
                        ? "border-red-500 focus:ring-red-500" 
                        : "border-gray-300 dark:border-gray-700 focus:ring-primary dark:focus:ring-primary-light"
                    } focus:outline-none focus:ring-2 focus:border-transparent bg-light-surface dark:bg-dark-surface text-gray-900 dark:text-gray-100`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    placeholder="Your message"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message 
                        ? "border-red-500 focus:ring-red-500" 
                        : "border-gray-300 dark:border-gray-700 focus:ring-primary dark:focus:ring-primary-light"
                    } focus:outline-none focus:ring-2 focus:border-transparent bg-light-surface dark:bg-dark-surface text-gray-900 dark:text-gray-100 resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-md transition-all duration-300 disabled:opacity-50"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
