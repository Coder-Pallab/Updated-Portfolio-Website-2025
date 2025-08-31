import React from 'react'
import AboutImg from "../assets/pallab_about.jpg"
import { motion } from "motion/react";
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div id="about" className="text-white py-16 px-6 md:px-12 lg:px-20" ref={ref}>
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 relative inline-block"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            About Me
          </span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[3px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full"></span>
        </motion.h2>

        {/* Short Intro */}
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-12 text-gray-300 max-w-2xl mx-auto"
        >
          Hi, I'm <span className="font-semibold text-white">Pallab Duarah</span>, 
          a 19-year-old BCA student and passionate developer.
        </motion.p>

        {/* Image + Text */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Image Card */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="relative p-[4px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg"
          >
            <img
              src={AboutImg}
              alt="About Me Photo"
              className="w-60 sm:w-72 md:w-80 rounded-2xl object-cover bg-[#0f0f14]"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="md:w-1/2 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            I enjoy turning ideas into functional and visually appealing digital
            experiences. With a strong foundation in{" "}
            <span className="text-white font-semibold">
              Python, Java, JavaScript, and React
            </span>
            , I'm constantly learning and exploring new technologies to sharpen
            my skills. Beyond coding, I love solving problems, experimenting with
            creative designs, and working on projects that challenge me to grow.
            My goal is to build impactful applications and eventually move into
            full-stack and backend development.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-around items-center mt-16 gap-12 sm:gap-0">
          {/* Stat 1 */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5, duration: 0.3 }}
            className="text-center"
          >
            <h3 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              2+
            </h3>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="text-sm sm:text-base text-gray-300"
            >
              Years of Development Experience
            </motion.p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.7, duration: 0.3 }}
            className="text-center"
          >
            <h3 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              10+
            </h3>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="text-sm sm:text-base text-gray-300"
            >
              Overall Global Customers
            </motion.p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.9, duration: 0.3 }}
            className="text-center"
          >
            <h3 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              50+
            </h3>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.9, duration: 0.5 }}
              className="text-sm sm:text-base text-gray-300"
            >
              Projects I Have Made
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
