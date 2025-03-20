import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaXmark, FaInstagram, FaEnvelope } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Mobilenav from "./mobilenav";
import logo from "../assets/images/logo2.png";
import logo2 from "../assets/images/logo-gold.png";

const Navbar = () => {
  const [bg, handleBg] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      handleBg(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => setToggleNav((prev) => !prev);

  return (
    <header className={`z-20 fixed top-0 left-0 right-0 md:top-12 md:right-12 md:left-12 md:rounded-xl overflow-hidden shadow-lg flex justify-between items-center md:px-20 px-4 py-2 duration-300 ${bg ? "bg-white" : "bg-transparent"}`}>
      {/* Background transition */}
      <div className={`${bg ? "bg-white h-full" : "h-0"} duration-300 h-0 absolute inset-0 -z-10 md:rounded-xl`}></div>

      {/* Logo */}
      <Link to="/">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 1, rotateY: 0 }}
            animate={{ rotateY: bg ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={bg ? logo2 : logo} alt="logo" className="w-20 md:w-20 h-22 object-cover" />
          </motion.div>
        </AnimatePresence>
      </Link>

      {/* Desktop Navigation */}
      <div className="md:block hidden">
        <nav>
          <ul className={`flex items-center gap-8 ${bg ? "text-black" : "text-white"}`}>
            <li className="hover:opacity-70 duration-300"><NavLink to="/">Home</NavLink></li>
            <li className="hover:opacity-70 duration-300"><NavLink to="/gallery">Film Page</NavLink></li>
            <li className="hover:opacity-70 duration-300"><NavLink to="/contact">Contact</NavLink></li>
            <li className="hover:opacity-70 duration-300"><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6">
        <a href="https://www.instagram.com/bamsvisuals/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={`hover:opacity-70 duration-300 text-2xl ${bg ? "text-black" : "text-white"}`} />
        </a>
        <a href="mailto:example@example.com">
          <FaEnvelope className={`hover:opacity-70 duration-300 text-2xl ${bg ? "text-black" : "text-white"}`} />
        </a>
      </div>

      {/* Mobile Nav Button */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ rotate: 90 }} onClick={handleNav} className="md:hidden block relative z-10">
        {toggleNav ? <FaXmark size={24} className={bg ? "text-black" : "text-white"} /> : <FaBars size={24} className={bg ? "text-black" : "text-white"} />}
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {toggleNav && <Mobilenav handleNav={handleNav} />}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
