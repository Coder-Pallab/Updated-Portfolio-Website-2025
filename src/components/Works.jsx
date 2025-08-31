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
            description: "This was my first personal portfolio project where I showcased my skills, projects, and background. Built with a simple and minimal design, it served as my starting point in web development. Through this project, I learned the fundamentals of creating responsive layouts, structuring content effectively, and working with modern frontend tools. While basic compared to my current work, it represents my growth and journey as a developer.",
            image: Project1,
            link: "#"
        },
        {
            id: 2,
            title: "Brahmaputra Real Estate",
            description: "A real estate website designed to showcase properties and provide users with an easy browsing experience. The project focused on creating a clean, modern interface where users can explore property listings, view details, and navigate smoothly. I worked on building responsive layouts, implementing interactive components, and ensuring a user-friendly design that reflects professionalism. This project helped me strengthen my frontend development skills and apply real-world design principles to create a practical business-oriented platform.",
            image: Project2,
            link: "#"
        },
        {
            id: 3,
            title: "Aaahar Food Delivery",
            description: "Aaahar is a food delivery platform I’m currently building, aimed at providing a seamless experience for users to browse restaurants, explore menus, and place orders online. The focus is on creating an intuitive UI with smooth navigation, responsive design, and engaging visuals. At this stage, I’ve completed most of the frontend development and am planning to extend it into a full-stack project with order management and real-time updates. This project reflects my journey of combining design, functionality, and scalability into one practical solution.",
            image: Project3,
            link: "#"
        },
        {
            id: 4,
            title: "Namaskar AI - A Conversational Web App",
            description: "Namskar AI is an interactive web application built using the Gemini API, designed to deliver intelligent and engaging conversations. The project focuses on creating a clean and simple interface where users can ask questions and receive AI-powered responses in real-time. Through this project, I explored API integration, state management, and responsive UI design. It also helped me gain hands-on experience in working with modern AI tools and connecting them seamlessly with frontend technologies.",
            image: Project4,
            link: "#"
        }
    ]

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div id='work' className='py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-4xl text-white underline font-bold text-center mb-12'>
                    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                        My Works
                    </span>
                </motion.h2>

                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='mb-12 text-gray-400 text-center'>
                    A collection of my recent projects, where I explored different technologies and improved my development skills.
                </motion.p>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: project.id * 0.2, duration: 0.5 }}
                            key={project.id}
                            className='bg-gray-900 shadow-lg rounded-lg overflow-hidden flex flex-col'
                        >
                            <img src={project.image} alt={project.title} className='w-full h-48 object-cover ' />
                            <div className='p-6 flex flex-col flex-grow'>
                                <h3 className='text-xl text-white font-semibold mb-2'>{project.title}</h3>

                                {/* Scrollable description */}
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
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                <Technologies />
            </motion.div>
        </div>
    )
}

export default Works
