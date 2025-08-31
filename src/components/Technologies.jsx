import React from 'react'
import { motion } from "motion/react"

const Technologies = () => {

    const technologies = [
        "C",
        "Python",
        "Java",
        "HTML",
        "CSS",
        "Javascript",
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "MongoDB",
        "Framer Motion",
        "React Native",
    ];

    const techList = [...technologies, ...technologies];

    const scrollVariants1 = {
        animate: {
            x:[0, -2000],
            transition: {
                x:{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                },
            },
        },
    };

    const scrollVariants2 = {
        animate: {
            x:[-2000, 0],
            transition: {
                x:{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className='text-white py-16'>
            <div className='container mx-auto text-center'>
                {/* Gradient heading */}
                <h2 className='text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text'>
                    Technologies I Know
                </h2>

                {/* First Row */}
                <div className='overflow-hidden relative w-full'>
                    <motion.div
                        variants={scrollVariants1}
                        animate="animate"
                        className='whitespace-nowrap flex space-x-10'>
                        {techList.map((tech, index) => (
                            <div
                                key={index}
                                className='text-lg font-semibold px-6 py-3 rounded-full inline-block 
                                           bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 
                                           text-transparent bg-clip-text'>
                                {tech}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Second Row */}
                <div className='overflow-hidden relative w-full mt-5'>
                    <motion.div
                        variants={scrollVariants2}
                        animate="animate"
                        className='whitespace-nowrap flex space-x-10'>
                        {techList.map((tech, index) => (
                            <div
                                key={index}
                                className='text-lg font-semibold px-6 py-3 rounded-full inline-block 
                                           bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 
                                           text-transparent bg-clip-text'>
                                {tech}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Technologies
