import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"
import Mobilenav from "./mobilenav";
import logo from "../assets/images/logo2.png";

const Navbar = () => {
    const [bg, handleBg] = useState(false)
    const [toggleNav, setToggleNav] = useState(false)
    const handleNav = ()=> {
        setToggleNav(prev=> !prev)
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleBg(true)

            } else handleBg(false)
        })
    }, [])

    return (
        <header className={`z-20 fixed w-full top-0 right-0 left-0 flex justify-between items-center md:px-20 px-4 py-1 ${bg && "shadow-md"} duration-300`}>
            <div className={`${bg && "bg-white h-full"} duration-300 h-0 origin-top absolute inset-0 -z-10`}></div>
            <Link to="/">
                <div className="">
                    <img src={logo} className="w-20 md:w-28" alt="logo" />
                </div>
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
            <motion.div whileHover={{scale: 1.1}} whileTap={{rotate:90}}  onClick={handleNav} className="md:hidden block relative z-10">
                {toggleNav ?
                    <FaXmark size={20} color="white" />
                    :
                    <FaBars size={20} />}
            </motion.div>

            <AnimatePresence>
                {toggleNav && <Mobilenav handleNav={handleNav}/>}
            </AnimatePresence>

        </header>
    )
}

export default Navbar