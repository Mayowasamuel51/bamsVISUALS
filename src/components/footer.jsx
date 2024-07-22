import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <div className='md:px-10 px-4'>
            <div className='flex items-center justify-between py-2 md:py-4 border-t border-b border-black mb-2 md:mb-6 mt-4 md:mt-10'>
                <nav>
                    <ul className={`flex items-center gap-5`}> 
                        <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="/">Home</NavLink></li>
                        <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="/gallery">Gallery</NavLink></li>
                        <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="contact">Contact</NavLink></li>
                        <li className="hover:opacity-70 duration-300"><NavLink className={({ isActive }) => isActive && "text-text"} to="/about">About</NavLink></li>
                    </ul>
                </nav>

                <div className='flex items-center gap-6'>
                    <div className='w-5 md:w-10 aspect-square bg-blue-600'></div>
                    <div className='w-5 md:w-10 aspect-square bg-blue-600'></div>
                </div>
            </div>
            <p className="text-center py-2 md:py-4 md:text-base text-xs">&copy;2024, Bam Visuals. All rights reserved</p>
        </div>
    )
}

export default Footer