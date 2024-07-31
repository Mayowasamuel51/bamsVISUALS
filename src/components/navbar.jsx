import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"
import Mobilenav from "./mobilenav";
import logo from "../assets/images/logo2.png";
import logo2 from "../assets/images/logo-gold.png";



const Navbar = () => {
    const [bg, handleBg] = useState(false)
    const imgVariant = {
        initial: {
            opacity: 1,
            rotateY: 0
        },
        animate: {
            rotateY: bg ? 360 : 0,
            transition: { duration: 0.5 }
        },
        exit: {
            rotate: 90
        }
    }
    const [toggleNav, setToggleNav] = useState(false)
    const handleNav = () => {
        setToggleNav(prev => !prev)
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleBg(true)

            } else handleBg(false)
        })
    }, [])

    return (
        <header className={`z-20 fixed w-full top-0 right-0 left-0 flex justify-between items-center md:px-20 px-4 py-2 ${bg && "shadow-md"} duration-300`}>
            <div className={`${bg && "bg-white h-full"} duration-300 h-0 origin-top absolute inset-0 -z-10`}></div>
            <Link to="/">
                <AnimatePresence>
                    <motion.div
                        variants={imgVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <img src={bg ? logo2 : logo} alt="logo" className="w-20 md:w-20 h-22 object-cover" />
                    </motion.div>
                </AnimatePresence>
            </Link>
            <div className="md:block hidden">
                <nav>
                    <ul className={`flex items-center gap-8 ${bg ? "text-black" : "text-white"}`}>
                        <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="/">Home</NavLink></li>
                        <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="/gallery">Gallery</NavLink></li>
                        <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="contact">Contact</NavLink></li>
                        <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="/about">About</NavLink></li>
                    </ul>
                </nav>
            </div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ rotate: 90 }} onClick={handleNav} className="md:hidden block relative z-10">
                {toggleNav ?
                    <FaXmark size={20} color="white" />
                    :
                    <FaBars size={20} />}
            </motion.div>

            <AnimatePresence>
                {toggleNav && <Mobilenav handleNav={handleNav} />}
            </AnimatePresence>

        </header>
    )
}

export default Navbar