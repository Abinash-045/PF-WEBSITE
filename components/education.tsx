"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { profile } from "@/lib/profile";

const educationData = [
  {
    institution: profile.education.institution || 'Centurion University of Technology and Management',
    location: profile.location,
    degree: profile.education.degree,
    duration: profile.education.period || 'Expected',
    grade: profile.education.cgpa || '',
    current: true
  },
 
  {
    institution: 'Vinayak Residential College, Bhadrak',
    location: 'Bhadrak, Odisha, India',
    degree: 'Higher Secondary Education',
    duration: '2020-2022',
    grade: 'Percentage: 70.83%',
    current: false
  },
  {
    institution: 'Giridhari Panda Uchcha Vidya Pitha, Bhadrak',
    location: 'Bhadrak, Odisha, India',
    degree: 'Secondary Education',
    duration: '2019-2020',
    grade: 'Percentage: 57.66%',
    current: false
  }
];

export default function Education() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My Academic and Learning Journey
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-background z-10">
                    {edu.current && (
                      <motion.div
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-blue-500 rounded-full opacity-30"
                      />
                    )}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-500/10 rounded-lg shrink-0">
                          <GraduationCap className="w-6 h-6 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">
                            {edu.degree}
                          </h3>
                          <h4 className="text-blue-500 font-medium mb-3">
                            {edu.institution}
                          </h4>
                          
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.duration}</span>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                              edu.current 
                                ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                                : 'bg-secondary text-foreground'
                            }`}>
                              {edu.grade}
                            </span>
                            {edu.current && (
                              <span className="ml-2 inline-block px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm border border-blue-500/20">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}