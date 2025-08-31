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
      description: "This was my first personal portfolio project...",
      image: Project1,
      link: "#"
    },
    {
      id: 2,
      title: "Brahmaputra Real Estate",
      description: "A real estate website designed to showcase properties...",
      image: Project2,
      link: "#"
    },
    {
      id: 3,
      title: "Aaahar Food Delivery",
      description: "Aaahar is a food delivery platform I’m currently building...",
      image: Project3,
      link: "#"
    },
    {
      id: 4,
      title: "Namaskar AI - A Conversational Web App",
      description: "Namaskar AI is an interactive web application built...",
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
