"use client";

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Web Development Fundamentals',
    issuer: 'IBM SkillsBuild',
    year: '2025',
    description: 'This certification covers the fundamental concepts of web development, including HTML, CSS, JavaScript, and basic web development principles.',
    skills: [
      'Front-End Development',
      'Back-End Development',
      'Web Development',
      'Responsive Design',
      'Accessibility & Usability',
      'Software Development Lifecycle (SDLC)',
      'Version Control & Deployment',
      'DevOps Practices',
      'Testing & Debugging',
      'HTML',
      'CSS',
      'JavaScript',
      'Visual Studio Code',
      'Integrated Development Environments (IDEs)',
      'Web Publishing',
      'Website Design'
    ]
    ,
    color: 'from-green-500 to-emerald-600',
    certificateUrl: 'https://www.credly.com/badges/901d37af-547b-4acb-a898-304dd0b5eff6/public_url' // Replace with your actual certificate URL
  },
  {
    title: 'AWS Solutions Architect Associate',
    issuer: 'AWS',
    year: '2025',
    description: 'This certification covers the AWS solutions architect associate, including AWS services, AWS architecture, and AWS deployment.',
    skills: [
      'AWS Solutions Architect Associate',
      'AWS Services',
      'AWS Architecture',
      'AWS Deployment', 
      'AWS Security',
      'AWS Networking',
      'AWS Storage',
      'AWS Compute',
      'AWS Database',
      'AWS Monitoring',
      'AWS Logging',
      'AWS Cost Optimization',
      'AWS Performance Optimization',
      'AWS Disaster Recovery',
      'AWS High Availability',
      'AWS Scalability',
    
      
     
    ]
    ,
    color: 'from-green-500 to-emerald-600',
    certificateUrl: 'https://www.credly.com/badges/a46964ef-5e78-48c9-837a-1d4d4c21e423/linked_in?t=t4udbi' // Replace with your actual certificate URL
  },

  {
    title: 'MERN: Advanced MERN Development',
    issuer: 'infosys springboard',
    year: '2025',
    description: 'This certification covers the advanced concepts of MERN development, including advanced React, Node.js, MongoDB, and REST APIs.',
    skills: [
      'React',
      'Node.js',
      'MongoDB',
      'REST APIs',
      'Advanced React',
      'Advanced Node.js',
      'Advanced MongoDB',
      'Advanced REST APIs'
    ],
    color: 'from-purple-500 to-indigo-600',
    certificateUrl: 'https://skillsoft.digitalbadges.skillsoft.com/fe0cc910-1aa8-4d10-8baf-d57b64ffde36#acc.gyZQzIDl' // Replace with your actual certificate URL
  },
  {
    title: 'Frontend Development',
    issuer: 'One Roadmap',
    year: '2025',
    description: 'This certification covers the frontend development, including HTML, CSS, JavaScript, and basic web development principles.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Redux',
      'Tailwind CSS',
      'Bootstrap',
      'Material UI',
    ],
    color: 'from-purple-500 to-indigo-600',
    certificateUrl: 'https://oneroadmap.io/skills/frontend/certificate/CERT-89E85DB5' // Replace with your actual certificate URL
  },
  {
    title: 'Full Stack Developer',
    issuer: 'One Roadmap',
    year: '2025',
    description: 'This certification covers the full stack development, including frontend and backend technologies, databases, and deployment.',
    skills: [
      'Frontend Development',
      'Backend Development',
      'Web Development',
      'Responsive Design',
      'Accessibility & Usability',
      'Software Development Lifecycle (SDLC)',
      'Version Control & Deployment',
      'DevOps Practices',
      'Testing & Debugging',
      'HTML',
      'CSS',
      'JavaScript',
      'Visual Studio Code',
      'Integrated Development Environments (IDEs)',
      'Web Publishing',
      'Website Design'
    ],
    color: 'from-purple-500 to-indigo-600',
    certificateUrl: 'https://oneroadmap.io/skills/fs/certificate/CERT-E61C5014' // Replace with your actual certificate URL
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'SimpliLearn',
    year: '2025',
    description: 'This certification covers the AWS cloud practitioner essentials, including AWS services, AWS architecture, and AWS deployment.',
    skills: [
      'AWS Services',
      'AWS Architecture',
      'AWS Deployment',
      'AWS Services',
      'AWS Architecture',
      'AWS Deployment',
    ],
    color: 'from-purple-500 to-indigo-600',
    certificateUrl: 'https://simpli.app.link/1So4GkV9DXb' // Replace with your actual certificate URL
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional',
    issuer: 'Oracle',
    year: '2025',
    description: 'This certification covers the Oracle cloud infrastructure, including Oracle cloud services, Oracle cloud architecture, and Oracle cloud deployment.',
    skills: [
      'Oracle Cloud Services',
      'Oracle Cloud Architecture',
      'Oracle Cloud Deployment',
    ],
    color: 'from-purple-500 to-indigo-600',
    certificateUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=D4867CD8CF1D1C73D16B68B1CA6C2F414157CA962883845C2D11583E133698C2' // Replace with your actual certificate URL
  },
  {
    title: ' Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
    description: 'This certification covers the Oracle cloud infrastructure foundations, including Oracle cloud services, Oracle cloud architecture, and Oracle cloud deployment.',
    skills:[
      'Oracle Cloud Services',
      'Oracle Cloud Architecture',
      'Oracle Cloud Deployment',
      'Cloud Computing Fundamentals',
      'OCI Compute and Storage',
      'OCI Networking',
      'Oracle Database Cloud',
      'Identity and Access Management (IAM)',
      'Cloud Security and Compliance',
      'Monitoring and Observability'
    ],
    color: 'from-purple-500 to-indigo-600',
    certificateUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=CCD8C01772DAE6FA507714D9A8D458CD01C387924D6B285EB92B3680E5218B33' // Replace with your actual certificate URL
  },
  {
    title: ' Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
    issuer: 'Oracle',
    year: '2025',
    description: 'This certification covers the Oracle cloud infrastructure data science professional, including Oracle cloud services, Oracle cloud architecture, and Oracle cloud deployment.',
    skills:[
      'Data Science',
      'Data Analysis',
      'Data Visualization',
      'Data Engineering',
      'Data Mining',
      'Data Warehousing',
    ],
    color: 'from-purple-500 to-indigo-600',
    certificateUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=0A80DEAFAC3D3E10A9BD59F6AE73AAC1EF1D86F0E7B8C938E94C276DF023FD08' // Replace with your actual certificate URL
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and continuous learning achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <Award className={`w-6 h-6 text-transparent bg-gradient-to-r ${cert.color} bg-clip-text`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{cert.issuer}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-foreground">Key Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                          className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                            skillIndex % 2 === 0
                              ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                              : 'bg-purple-500/10 text-purple-500 border-purple-500/20'
                          }`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Verification Badge */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-500 font-medium">Verified</span>
                      </div>
                      <motion.a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View Certificate
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}