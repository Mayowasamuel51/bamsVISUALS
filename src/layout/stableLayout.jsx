import { useState } from "react";
import Navbar from "../components/navbar";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Footer from "../components/footer";
import BgChange from "../components/bgChange";
import { motion } from "framer-motion";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../styles/home.css";
import Gallery from "../pages/gallery";
import Home from "../pages/home";
import Background from "../pages/backgroundimage";
const containerVariant = {
  initial: { opacity: 0, y: -30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.3,
      stiffness: 50,
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { when: "beforeChildren", duration: 0.3 },
  },
};
const StableLayout = () => {
  const { pathname } = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const text = "Crafting cinematic tales that inspire";
  const words = text.split("");

  return (
    <>
      <div>
        <Navbar />

        {/* Background Video Section */}
        <div className="relative w-full h-screen bg-black">
        <BgChange />
        </div>

        {/* Testimonials Section */}
        <div className="testimonial md:py-28 py-10 bg-[#F6E7BE]">
          <div className="relative z-20 lg:w-[700px] w-[90%] mx-auto cursor-grab">
            <Splide
              options={{
                type: "loop",
                perPage: 1,
                perMove: 1,
                autoplay: true,
                arrows: false,
                speed: 3000,
                interval: 4000,
                drag: "free",
                snap: true,
              }}
            >
              <SplideSlide>
                <div className="text-center px-6 py-10 md:px-10 md:py-24 flex flex-col gap-4 justify-between">
                  <p className="md:text-base text-sm font-light md:leading-[1.5]">
                    Absolutely THE BEST videographer out there!!! Bams captured
                    our special day with such grace and elegance. His talent is
                    unmatched and his kindness is contagious! I can&apos;t
                    recommend him enough.
                  </p>
                  <h3 className="cursive text-3xl md:text-5xl">
                    Adetola & Henry
                  </h3>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="text-center px-6 py-10 md:px-10 md:py-24 flex flex-col gap-4 justify-between">
                  <p className="md:text-base text-sm font-light md:leading-[1.5]">
                    Working with Bams was an absolute dream! He captured our
                    love story with such passion and creativity. The final film
                    is a masterpiece!
                  </p>
                  <h3 className="cursive text-3xl md:text-5xl">
                    Ari & Micheal
                  </h3>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>

        
        <Background />


        <div className="text-center md:py-20 py-10">
          <h1 className="cursive md:text-6xl text-3xl md:my-6 my-3">
            Can’t wait to chat with you!!
          </h1>
          <Link  to="/contact">
            <button className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 mx-auto p-4 w-fit font-bold text-white">
              LET'S TALK
            </button>
          </Link>
        </div>


        
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default StableLayout;
