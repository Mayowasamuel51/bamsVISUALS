import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
const Navbar = () => {
    const [bg, handleBg] = useState(false)
    
    useEffect(()=> {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleBg(true)

            }else handleBg(false)
        })
    }, [])

    return (
        <header className={`z-20 fixed w-full top-0 right-0 left-0 flex justify-between items-center py-4 md:px-20 px-4 ${bg && "bg-white shadow-md"} duration-300`}>
            <div className="font-light md:text-3xl">
                BAMS<span className="font-semibold">VISUALS</span>
            </div>
            <div className="md:block hidden">
                <nav>
                    <ul className={`flex items-center gap-5 ${bg ? "text-black" : "text-white"}`}>
                        <li className="hover:opacity-70 duration-300"><NavLink className={({isActive})=> isActive && "text-text"} to="/">Home</NavLink></li>
                        <li className="hover:opacity-70 duration-300"><NavLink className={({isActive})=> isActive && "text-text"} to="/gallery">Gallery</NavLink></li>
                        <li className="hover:opacity-70 duration-300"><NavLink className={({isActive})=> isActive && "text-text"} to="contact">Contact</NavLink></li>
                        <li className="hover:opacity-70 duration-300"><NavLink className={({isActive})=> isActive && "text-text"} to="/about">About</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar