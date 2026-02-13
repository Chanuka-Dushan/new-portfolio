import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { contactSchema, ContactFormData } from "@shared/schema";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
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

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        'Dushan0702', // Service ID
        'Dushan0503', // Template ID
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message
        },
        'GhnimFU3uwz_SXl9P' // Public Key
      );
      
      await Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        text: "Thank you for your message! I'll get back to you as soon as possible.",
        timer: 3000,
        showConfirmButton: false,
      });
      
      reset();
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error instanceof Error ? error.message : 'Failed to send message. Please try again later.',
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  const contactInfo = [
    { 
      icon: "fas fa-envelope", 
      title: "Email", 
      content: "hd.wijewantha@gmail.com", 
      color: "text-primary", 
      bgColor: "bg-primary/20", 
      link: "mailto:hd.wijewantha@gmail.com" 
    },
    { 
      icon: "fas fa-phone-alt", 
      title: "Phone", 
      content: "+94 77 618 3693",
      color: "text-secondary", 
      bgColor: "bg-secondary/20", 
      link: "tel:+94776183693" 
    },
    { 
      icon: "fas fa-map-marker-alt", 
      title: "Location", 
      content: "Marawila, Sri Lanka",
      color: "text-accent", 
      bgColor: "bg-accent/20", 
      link: null 
    }
  ];

  const socialLinks = [
    { 
      icon: "fab fa-github", 
      url: "https://github.com/Chanuka-Dushan", 
      hoverColor: "hover:text-primary hover:bg-primary/10" 
    },
    { 
      icon: "fab fa-linkedin-in", 
      url: "https://www.linkedin.com/in/dushan-chanuka",
      hoverColor: "hover:text-blue-400 hover:bg-blue-900/20" 
    },
    { 
      icon: "fab fa-instagram", 
      url: "https://www.instagram.com/_.d_u_s_h_a_n._/",
      hoverColor: "hover:text-pink-400 hover:bg-pink-900/20" 
    }
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
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
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
            <h3 className="text-2xl font-sans font-bold text-gray-100">Contact Information</h3>
            
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
                    <h4 className="font-medium text-lg text-gray-200">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className={`${item.color} hover:opacity-80 transition-colors duration-300`}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-400">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="pt-6 border-t border-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-sans font-bold mb-4 text-gray-100">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-dark-bg shadow-md flex items-center justify-center text-gray-400 ${link.hoverColor} transition-all duration-300 border border-gray-800`}
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
            <div className="bg-dark-bg rounded-xl shadow-md p-8 border border-gray-800">
              <h3 className="text-2xl font-sans font-bold mb-6 text-gray-100">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
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
                          : "border-gray-700 focus:ring-primary-light"
                      } focus:outline-none focus:ring-2 focus:border-transparent bg-dark-surface text-gray-100`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
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
                          : "border-gray-700 focus:ring-primary-light"
                      } focus:outline-none focus:ring-2 focus:border-transparent bg-dark-surface text-gray-100`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
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
                        : "border-gray-700 focus:ring-primary-light"
                    } focus:outline-none focus:ring-2 focus:border-transparent bg-dark-surface text-gray-100`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
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
                        : "border-gray-700 focus:ring-primary-light"
                    } focus:outline-none focus:ring-2 focus:border-transparent bg-dark-surface text-gray-100 resize-none`}
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
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}