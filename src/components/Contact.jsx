import React from 'react'
import { motion } from "motion/react"
import { useInView } from 'react-intersection-observer'
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaGithub
} from "react-icons/fa"
import { toast } from 'react-toastify';


const Contact = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ba52bf24-ff53-422e-b614-da3d01f9a879");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Succesfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult("");
        }
    };

    return (
        <div id='contact' ref={ref}>
            {/* Header */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12'>
                <motion.h2
                    
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-4xl font-bold text-white'>
                    Contact{" "}
                    <span className='bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
                        Pallab
                    </span>
                </motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: -100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='text-slate-400 mt-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique harum dolorem iure ratione quae expedita quam ducimus quas facere.
                </motion.p>
            </div>

            {/* Contact Info + Form */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Left: Contact Info */}
                <div className='space-y-6'>
                    {[
                        { icon: <FaPhone className='w-6 h-6 text-white' />, title: "Call Me", value: "+91 6001478031" },
                        { icon: <FaEnvelope className='w-6 h-6 text-white' />, title: "Email", value: "duarahpallab0@gmail.com" },
                        { icon: <FaMapMarkerAlt className='w-6 h-6 text-white' />, title: "Address", value: "Sibsagar, Amguri, Lalimchiga Gaon, 785680" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            ref={ref}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 * (i + 1), duration: 0.5 }}
                            className='flex items-center space-x-4'
                        >
                            <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-lg'>
                                {item.icon}
                            </div>
                            <div>
                                <p className='text-lg font-medium bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
                                    {item.title}
                                </p>
                                <p className='text-white'>{item.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right: Contact Form */}
                <motion.form
                    onSubmit={onSubmit}
                    ref={ref}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className='space-y-4 text-white'
                >
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <input required name='Name' className='border border-purple-500/50 bg-gray-900 p-4 rounded-md w-full focus:border-pink-500 transition' type='text' placeholder='Full Name' />
                        <input required name='Email' className='border border-purple-500/50 bg-gray-900 p-4 rounded-md w-full focus:border-pink-500 transition' type='email' placeholder='Your Email' />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <input required className='border border-purple-500/50 bg-gray-900 p-4 rounded-md w-full focus:border-pink-500 transition' type='number' placeholder='Phone No' />
                        <input required className='border border-purple-500/50 bg-gray-900 p-4 rounded-md w-full focus:border-pink-500 transition' type='text' placeholder='Your Project' />
                    </div>
                    <textarea name='Message' required className='border border-purple-500/50 bg-gray-900 p-4 rounded-md w-full focus:border-pink-500 transition' placeholder='Message'></textarea>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white px-7 py-3 rounded-md shadow-lg hover:opacity-90 transition duration-200'
                        type='submit'
                    >
                        {result ? result : "Send Message"}
                    </motion.button>
                </motion.form>
            </div>

            {/* Footer */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.1, duration: 0.5 }}
                className='mt-48 flex flex-col md:flex-row justify-between items-center p-5 text-white border-t border-purple-500/50'
            >
                <p>© {new Date().getFullYear()} | All Rights Reserved</p>
                <p className='bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent font-semibold'>
                    FULLSTACK PALLAB
                </p>
                <div className='flex space-x-4 mt-4 md:mt-0'>
                    {[
                        { Icon: FaFacebook, link: "https://www.facebook.com/PR4DYUT/" },
                        { Icon: FaTwitter, link: "https://x.com/pallab_speaks" },
                        { Icon: FaLinkedin, link: "https://www.linkedin.com/in/pallab-duarah2006/" },
                        { Icon: FaInstagram, link: "https://www.instagram.com/__about_.pallab/" },
                        { Icon: FaGithub, link: "https://github.com/Coder-Pallab" }, // 
                    ].map(({ Icon, link }, i) => (
                        <a
                            key={i}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition"
                        >
                            <Icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>


            </motion.div>
        </div>
    )
}

export default Contact
