import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaXmark, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa6";
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
    <header
      className={`bg-opacity-70 z-[999999999999999999999] w-full fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-56 transition-all duration-500 ${
        bg ? "bg-black dark:bg-black shadow-md" : "bg-dark dark:bg-dark"
      }`}
    >
      <Link to="/">
        <motion.img
          src={bg ? logo2 : logo}
          alt="logo"
          className="size-20 object-contain"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: bg ? 360 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ perspective: "1000px" }}
        />
      </Link>

      <nav className="hidden md:block">
        <ul
          className={`*:font-quicksand flex items-center gap-8 text-base font-bold transition-colors duration-500 ${
            bg ? "text-black" : "text-white"
          }`}
        >
          <li className="hover:opacity-70 duration-300">
            <NavLink className={({isActive})=> isActive ? "text-text_gold font-quicksand" : bg ? "text-black font-quicksand" : " text-white font-quicksand"} to="/">Home</NavLink>
          </li>
          <li className="hover:opacity-70 duration-300">
            <NavLink className={({isActive})=> isActive ? "text-text_gold font-quicksand" : bg ? "text-black font-quicksand" : " text-white font-quicksand"} to="/about">About</NavLink>
          </li>
          <li className="hover:opacity-70 duration-300">
            <NavLink className={({isActive})=> isActive ? "text-text_gold font-quicksand" : bg ? "text-black font-quicksand" : " text-white font-quicksand"} to="/gallery">Films</NavLink>
          </li>
          <li className="hover:opacity-70 duration-300">
            <NavLink className={({isActive})=> isActive ? "text-text_gold font-quicksand" : bg ? "text-black font-quicksand" : " text-white font-quicksand"} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      {/* Mobile Navigation Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ rotate: 90 }}
        onClick={handleNav}
        className="md:hidden block relative z-10"
      >
        {toggleNav ? (
          <FaXmark size={24} className={bg ? "text-black" : "text-white"} />
        ) : (
          <FaBars size={24} className={bg ? "text-black" : "text-white"} />
        )}
      </motion.div>

      <AnimatePresence>
        {toggleNav && <Mobilenav handleNav={handleNav} />}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
