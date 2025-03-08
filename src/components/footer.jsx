import { NavLink } from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='md:px-10 px-4'>
            <div className='flex items-center justify-between py-2 md:py-4 border-t border-b border-black mb-2 md:mb-6 mt-4 md:mt-10'>
                <nav>
                    <ul className={`flex items-center md:text-sm text-xs gap-2 md:gap-5`}> 
                        <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="/">Home</NavLink></li>
                        <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="/gallery">Gallery</NavLink></li>
                        <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="contact">Contact</NavLink></li>
                        <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="/about">About</NavLink></li>
                    </ul>
                </nav>

                <div className="footer-icons flex items-center gap-3 md:gap-6">
    <div className="w-8 md:w-12 h-8 md:h-12 flex items-center justify-center rounded-full bg-blue-600 text-white">
    <a href="https://www.instagram.com/bamsvisuals/" target="_blank" rel="noopener noreferrer" 
       className="w-8 md:w-12 h-8 md:h-12 flex items-center justify-center rounded-full bg-blue-600 text-white">
        <FaInstagram size={20} />
    </a>
    </div>
    <div className="w-8 md:w-12 h-8 md:h-12 flex items-center justify-center rounded-full bg-blue-600 text-white">
        <FaTwitter size={20} />
    </div>
    <div className="w-8 md:w-12 h-8 md:h-12 flex items-center justify-center rounded-full bg-blue-600 text-white">
        <FaFacebook size={20} />
    </div>
</div>

            </div>
            <p className="text-center py-2 md:py-4 md:text-base text-xs">&copy; {new Date().getFullYear()}, Bam Visuals. All rights reserved</p>
        </div>
    )
}

export default Footer