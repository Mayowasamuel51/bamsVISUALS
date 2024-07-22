import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const Mobilenav = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="min-h-screen fixed inset-0 bg-black bg-opacity-50 p-10">
            <motion.nav initial={{scale: 0}} animate={{scale: 1}} className="bg-white rounded-md py-20">
                <ul className={`flex flex-col items-center gap-8`}>
                    <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="/">Home</NavLink></li>
                    <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="/gallery">Gallery</NavLink></li>
                    <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="contact">Contact</NavLink></li>
                    <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="/about">About</NavLink></li>
                </ul>
            </motion.nav>
        </motion.div>
    )
}

export default Mobilenav