import React from 'react'
import { FaMobileAlt, FaCode, FaPaintBrush, FaSearch, FaRegLightbulb, FaCogs } from "react-icons/fa"
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer'

const Services = () => {

    const servicesData = [
        {
            title: "App Design",
            description: "Designing elegant and modern mobile app interfaces with a focus on usability, creativity, and seamless interactions.",
            gradient: "from-[#a18cd1] to-[#fbc2eb]",
            icon: <FaMobileAlt className="text-5xl mb-4 mx-auto text-white drop-shadow-md" />
        },
        {
            title: "Web Development",
            description: "Developing fast, responsive, and scalable websites using modern frameworks and clean coding practices.",
            gradient: "from-[#89f7fe] to-[#66a6ff]",
            icon: <FaCode className="text-5xl mb-4 mx-auto text-white drop-shadow-md" />
        },
        {
            title: "UI/UX Design",
            description: "Creating beautiful and user-friendly designs that balance aesthetics with practical user experience.",
            gradient: "from-[#f6d365] to-[#fda085]",
            icon: <FaPaintBrush className="text-5xl mb-4 mx-auto text-white drop-shadow-md" />
        },
        {
            title: "SEO Optimization",
            description: "Boosting website visibility and search rankings with optimized structures, keywords, and performance improvements.",
            gradient: "from-[#cfd9df] to-[#e2ebf0]",
            icon: <FaSearch className="text-5xl mb-4 mx-auto text-white drop-shadow-md" />
        },
        {
            title: "Branding",
            description: "Building strong brand identities through logos, color schemes, and consistent visual language.",
            gradient: "from-[#ffecd2] to-[#fcb69f]",
            icon: <FaRegLightbulb className="text-5xl mb-4 mx-auto text-white drop-shadow-md" />
        },
        {
            title: "App Development",
            description: "Developing functional, scalable, and performance-driven applications tailored to user needs.",
            gradient: "from-[#84fab0] to-[#8fd3f4]",
            icon: <FaCogs className="text-5xl mb-4 mx-auto text-white drop-shadow-md" />
        },
    ]

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div id='services' className='py-16'>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className='container mx-auto px-4 text-center'
            >
                {/* Gradient Heading */}
                <h2 className='text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent'>
                    Services
                </h2>

                <p className='mb-12 text-gray-600'>
                    I offer services that blend creativity and technology, helping individuals and businesses bring ideas to life with design and development expertise.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {servicesData.map((service, index) => (
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            key={index}
                            className={`rounded-xl p-6 text-center shadow-lg bg-gradient-to-r ${service.gradient} hover:scale-105 transition-transform duration-300`}
                        >
                            {/* Icon */}
                            {service.icon}

                            {/* Title */}
                            <h3 className='text-xl font-semibold mb-2 text-gray-900 drop-shadow-sm'>
                                {service.title}
                            </h3>

                            <p className='text-sm sm:text-base lg:text-lg text-gray-800'>
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Services
