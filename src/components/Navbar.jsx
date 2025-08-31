import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from "motion/react";
import { Link } from "react-scroll";

const Navbar = () => {
  const variants = {
    open: { clipPath: "circle(1200px at 43px 43px)" },
    transition: { type: "spring" },
    closed: {
      clipPath: "circle(25px at 43px 37px)",
      transition: { type: "spring", duration: 1 },
    },
  };

  const [menu, setMenu] = useState(false);

  const items = [
    { id: 1, text: "About", to: "about" },
    { id: 2, text: "Services", to: "services" },
    { id: 3, text: "Work", to: "work" },
    { id: 4, text: "Contact", to: "contact" },
  ];

  return (
    <div className="">
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto hidden md:flex justify-between items-center py-5 px-8"
      >
        {/* Logo */}
        <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
          <span className="text-white">FULLSTACK</span>
          {/* Gradient text */}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            PALLAB
          </span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center space-x-8 list-none lg:text-lg md:text-base text-gray-200">
          {items.map(({ id, text, to }) => (
            <li key={id} className="hover:text-purple-400 transition">
              <Link to={to} smooth={true} duration={500} offset={-70}>
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Gradient Button */}
        <a href='src/assets/Pallab_Duarah_Resume_1st_year.pdf' download="" className="md:text-base lg:text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-400 hover:via-pink-400 hover:to-red-400 text-white px-6 py-2.5 rounded-full shadow-md transition">
          Download Resume
        </a>
      </motion.div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between">
        {/* Sidebar Menu */}
        <motion.div animate={menu ? "open" : "closed"}>
          <motion.div
            variants={variants}
            className="bg-[#1c1c24] w-2/3 h-screen text-white fixed z-10 shadow-lg"
          >
            <div
              onClick={() => setMenu((prev) => !prev)}
              className="px-6 py-6 cursor-pointer text-gray-200"
            >
              {menu ? <IoClose size={30} /> : <IoMenu size={30} />}
            </div>

            {menu && (
              <div className="flex flex-col justify-center items-center mt-10">
                <ul className="space-y-6 text-gray-200 text-lg">
                  {items.map(({ id, text, to }) => (
                    <li
                      key={id}
                      className="hover:text-purple-400 duration-200 cursor-pointer"
                    >
                      <Link
                        to={to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => setMenu(false)}
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* Gradient Button */}
                <a href='src/assets/Pallab_Duarah_Resume_1st_year.pdf' download="" className="text-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-400 hover:via-pink-400 hover:to-red-400 text-white px-6 py-2 mt-8 rounded-full shadow-md transition">
                  Download Resume
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Mobile Logo */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-bold flex items-center gap-2 py-6 px-4"
        >
          <span className="text-white">FULLSTACK</span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            PALLAB
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
