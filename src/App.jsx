import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Works from './components/Works'
import Contact from './components/Contact'
 import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e] min-h-screen">
      <ToastContainer/>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works />
      <Contact />
    </div>
  )
}

export default App
