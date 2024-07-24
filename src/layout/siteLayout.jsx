import { useState } from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import BgChange from "../components/bgChange"
import { motion } from "framer-motion"
import { Link, Outlet, useLocation } from "react-router-dom"

const SiteLayout = () => {
  const { pathname } = useLocation()
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const text = "Crafting cinematic tales that inspire";
  const words = text.split("");

  return (
    <div className="">
      <Navbar />
      <div className="home relative bg-cover min-h-screen flex justify-center items-center overflow-hidden">
        <BgChange />
        {pathname === "/" && (
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5, stiffness: 500, damping: 10 }} className="relative z-10 text-white text-center flex flex-col gap-5">
            <h1 className="md:text-5xl text-2xl font-medium tracking-wide md:block hidden roboto">
              {/* {words.map((word, index) => (
                <span key={index} className="word cursor-pointer">{word === " " ? `\u00A0` : word}</span>
              ))} */}
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`word cursor-pointer ${hoveredIndex === index ? 'hovered' : ''
                    } ${hoveredIndex !== null &&
                      (index === hoveredIndex - 1 || index === hoveredIndex + 1)
                      ? 'adjacent'
                      : ''
                    }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {word === ' ' ? `\u00A0` : word}
                </span>
              ))}
            </h1>
            <h1 className="md:text-5xl text-2xl font-medium tracking-wide md:hidden block">Crafting cinematic tales that inspire</h1>
            <Link to="/gallery#works">
              <button className="border-2 border-button bg-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit mx-auto font-bold md:px-12 md:py-6">SEE MY WORKS</button>
            </Link>
          </motion.div>
        )}
        {pathname === "/gallery" && (
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5, stiffness: 500, damping: 10 }} className="relative z-10 text-white text-center flex flex-col gap-5">
            <h1 className="md:text-4xl text-3xl font-medium">Gallery</h1>
            <p className='cursive text-2xl md:text-5xl'>Your event through my lens</p>
          </motion.div>
        )}
        {pathname === "/contact" && (
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5, stiffness: 500, damping: 10 }} className="relative z-10 text-white text-center flex flex-col gap-5">
            <h1 className="md:text-4xl text-3xl font-medium">Contact Me</h1>
            <p className='cursive text-2xl md:text-5xl'>Dreams become reality with me</p>
          </motion.div>
        )}
        {pathname === "/about" && (
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5, stiffness: 500, damping: 10 }} className="relative z-10 text-white text-center flex flex-col gap-5">
            <h1 className="md:text-4xl text-3xl font-medium">About Me</h1>
            <p className='cursive text-2xl md:text-5xl'>Find out what makes me ticks</p>
          </motion.div>
        )}
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

export default SiteLayout