import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { AnimatePresence } from "framer-motion"
import Mobilenav from "./mobilenav";
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
        <header className={`z-20 fixed w-full top-0 right-0 left-0 flex justify-between items-center py-4 md:px-20 px-4 ${bg && "shadow-md"} duration-300`}>
            <div className={`${bg && "bg-white h-full"} duration-300 h-0 origin-top absolute inset-0 -z-10`}></div>
            <div className="font-light md:text-3xl">
                BAMS<span className="font-semibold">VISUALS</span>
            </div>
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
            <div onClick={handleNav} className="md:hidden block">
                {toggleNav ?
                    <FaXmark size={30} color="white" className="relative z-10" />
                    :
                    <FaBars size={30} />}
            </div>

            <AnimatePresence>
                {toggleNav && <Mobilenav/>}
            </AnimatePresence>

        </header>
    )
}

export default Navbar