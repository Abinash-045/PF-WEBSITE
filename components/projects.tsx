"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { profile } from "@/lib/profile";

const projectsData = [
  {
    title: 'Edify - RealTime-Spotify-Clone',
    description: 'A full-stack Spotify clone featuring real-time chat and music streaming functionality. It includes an admin dashboard for creating albums and songs, user online/offline status tracking, real-time activity updates showing what others are listening to, and an analytics page displaying aggregated data. Additional features include next/previous song controls, volume adjustment with a slider, and an overall smooth interactive listening experience.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB','cloudinary','render'],
    github: 'https://github.com/Abinash-045/RealTime-Spotify-Clone',
    live: 'https://realtime-spotify-clone-r04c.onrender.com/',
    image: '/projects/spotify-clone.jpg',
    featured: true
  },

  {
    title: 'Abitalk-Video Calling Realtime Chat App & Social App',
    description: 'Abitalk – Real-Time Chat and Video Calling Application. A full-stack communication platform designed for seamless real-time interaction. The app features an interactive onboarding flow, a friends management system, real-time messaging, and integrated video calling. It includes 32 customizable UI themes',
    tech: ['React', '', 'Node.js', 'Express.js', 'MongoDB', 'TanStack','Query','Tailwind'],
    github: 'https://github.com/Abinash-045/abitalk-chatapp',
    live: 'https://abitalk-chatapp.onrender.com/',
    image: '/projects/abitalk-app.jpg',
    featured: true
  },
  {
    title: 'AbinAi Virtual Assistant',
    description: 'AbinAi Virtual Assistant offers intelligent voice-based interaction using the Web Speech API and smart AI responses powered by Gemini. It includes a secure authentication system with JWT and bcrypt, allowing users to log in and manage personalized sessions. The assistant’s appearance can be customized with Cloudinary and Multer for uploading images, along with the ability to modify its name and voice to match user preferences. Designed to be fully responsive and deployment-ready, AbinAi provides a seamless JARVIS-like experience with smooth AI communication and real-time functionality.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini AI', 'Web Speech API', 'JWT', 'bcryptjs', 'Multer', 'Cloudinary', 'Render'],

    github: 'https://github.com/Abinash-045/AbinAI',
    live: 'https://abinai.onrender.com/',
    image: '/projects/hotel.jpg',
    featured: false
  },
  {
    title: 'EdPress - AI Powered Blog Platform',
    description: 'EdPress is a full-stack AI-integrated blogging platform built with the MERN stack. It allows users to create, read, and interact with blog content, while an AI feature intelligently generates blog articles. The platform includes an admin dashboard for managing posts and comments, ensuring smooth content moderation. Fully deployed on Render, EdPress provides a seamless and modern blogging experience with AI assistance and responsive design.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini AI', 'JWT', 'Render'],
    github: 'https://github.com/Abinash-045/EdPress',
    live: 'https://edpress-a2lm.onrender.com/',
    image: '/projects/edpress.jpg',
    featured: false
  },
  {
    title: 'AI Bazaar - Smart E-Commerce Platform',
    description: 'An AI-powered e-commerce platform developed using the MERN stack, integrating intelligent product recommendations and real-time stock updates. The system features a secure authentication flow via Google (Firebase), payment integration with Razorpay, and an admin dashboard for managing products, orders, and users. Designed with a fully responsive interface and deployed on Render, AI Bazaar demonstrates advanced full-stack development and AI integration for seamless online shopping.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Razorpay', 'Gemini AI', 'JWT', 'Render'],
    github: 'https://github.com/Abinash-045/AI-Bazaar',
    live: 'https://ai-bazaar.onrender.com/',
    image: '/projects/aibazaar.jpg',
    featured: false
  },
  {
    title: 'EDGRAM - Real-Time Social Media Platform',
    description: 'A full-stack social media application built using the MERN stack and Socket.IO, featuring real-time communication and content sharing similar to Instagram. The platform includes Reels, Stories (auto-expiring in 24 hours), live chat, notifications, and an interactive post system with likes, comments, and follows. It ensures secure authentication using JWT, cloud media storage via Cloudinary, and a fully responsive UI designed with Tailwind CSS. Deployed on Render, EDGRAM showcases expertise in scalable, real-time web applications.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT', 'Cloudinary', 'Tailwind CSS', 'Render'],
    github: 'https://github.com/Abinash-045/EDGRAM',
    live: 'https://edgram.onrender.com/',
    image: '/projects/edgram.jpg',
    featured: false
  },
  

];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development work and technical capabilities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  project.featured ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-6xl opacity-20"
                    >
                      🖥️ 
                    </motion.div>
                  </div>
                  
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/50 text-xs rounded-full border border-border/50"
                      >
                        <Tag className="w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary border border-border/50 rounded-lg transition-all duration-300 text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg transition-all duration-300 text-sm hover:shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-lg hover:border-blue-500/50 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}