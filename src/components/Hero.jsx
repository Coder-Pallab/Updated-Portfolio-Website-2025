import React from 'react'
import Avatar from "../assets/pallab-non-bg.png"
import { motion } from "motion/react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="text-white py-10 px-6 md:px-12 lg:px-20">
      {/* Avatar */}
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mx-auto w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/5 rounded-full p-[4px]"
        style={{
          background:
            "linear-gradient(135deg, #6a11cb, #2575fc, #ff6ec4)", // gradient border
        }}
        src={Avatar}
        alt="pallab's photo"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center mt-6"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug"
        >
          Hello Coders, I am Pallab
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mt-2"
          >
            I am a Computer Science Student
          </motion.span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 px-2"
        >
          I'm a 19-year-old BCA student passionate about programming and web
          development. I know Python and I'm learning Java, React.js, and
          Node.js as I work toward becoming a full-stack developer. I enjoy
          building projects and exploring new technologies to keep growing in my
          field.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-400 hover:via-pink-400 hover:to-red-400 text-white px-6 py-3 rounded-full shadow-md text-base sm:text-lg"
          >
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              Hire Me
            </Link>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-white border border-gray-300 hover:border-purple-400 hover:text-purple-400 px-6 py-3 rounded-full shadow-md text-base sm:text-lg"
          >
            <Link to="about" smooth={true} duration={500} offset={-70}>
              My Story
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
