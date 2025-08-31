import React from 'react'
import Project1 from "../assets/pallab-portfolio-old.png"
import Project2 from "../assets/brahmaputra-RE.png"
import Project3 from "../assets/aaahar-food-delivery.png"
import Project4 from "../assets/namaskar-AI.png"
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer'
import Technologies from './Technologies'

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "Old Portfolio Website",
      description: "This was my very first portfolio website, where I started showcasing my journey in web development. It highlights my early projects, skills, and design experiments as I learned the fundamentals of frontend development. While the design and features are simple compared to my current work, this site represents the foundation of my growth as a developer and the passion that drove me to keep improving.",
      image: Project1,
      link: "#"
    },
    {
      id: 2,
      title: "Brahmaputra Real Estate",
      description: "The Brahmaputra Real Estate website is a modern, responsive platform designed to showcase property listings and services in a clean, user-friendly way. Built with a focus on professional design and smooth navigation, it highlights real estate offerings with clear layouts, images, and details to provide potential clients with a seamless browsing experience. This project reflects my ability to create business-oriented websites that balance aesthetics with functionality.",
      image: Project2,
      link: "#"
    },
    {
      id: 3,
      title: "Aaahar Food Delivery",
      description: "Aaahar Food Delivery is an ongoing project where I’m building a responsive and user-friendly platform for seamless online food ordering. The website is designed with clean layouts, easy navigation, and categorized menus to enhance the customer experience. Currently, I’m working on adding more advanced features and improving the UI/UX to make it a complete full-stack web application.",
      image: Project3,
      link: "#"
    },
    {
      id: 4,
      title: "Namaskar AI - A Conversational Web App",
      description: "Namaskar AI is an AI-powered web application built using the Gemini API to deliver intelligent, conversational assistance. The project combines a clean, responsive interface with powerful AI capabilities, enabling users to interact seamlessly and get accurate, context-aware responses. As an ongoing project, I’m continuously working on expanding features and enhancing the overall user experience to make it more interactive and practical.",
      image: Project4,
      link: "#"
    }
  ]

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "-100px 0px",
  });

  return (
    <div id='work' className='py-12' ref={ref}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='text-4xl text-white underline font-bold text-center mb-12'>
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            My Works
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='mb-12 text-gray-400 text-center'>
          A collection of my recent projects, where I explored different technologies and improved my development skills.
        </motion.p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: project.id * 0.2, duration: 0.5 }}
              className='bg-gray-900 shadow-lg rounded-lg overflow-hidden flex flex-col'
            >
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover ' />
              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-xl text-white font-semibold mb-2'>{project.title}</h3>
                <p className='text-slate-400 mb-4 max-h-24 overflow-y-auto pr-2'>
                  {project.description}
                </p>
                <div className='mt-auto'>
                  <button
                    className='relative px-4 py-2 rounded-full font-medium 
                    bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
                    text-white shadow-md transition duration-300 
                    hover:scale-105 hover:shadow-lg'
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Technologies />
      </motion.div>
    </div>
  )
}

export default Works
