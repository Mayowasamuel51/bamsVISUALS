import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img0 from "../assets/images/screencapture-player-vimeo-video-1021627312-2025-03-20-11_54_39.png";
import img01 from   "../assets/images/screencapture-player-vimeo-video-1018523334-2025-03-20-11_34_49.png";
import img1 from "../assets/images/screencapture-vimeo-1030637546-2025-03-08-21_24_18.png";

import img2  from  "../assets/images/gallery4.jpeg";

import img3 from   "../assets/images/gallery6.jpeg";


import img4 from    "../assets/images/Snapinsta.webp";
const images = [img0, img01, img1 , img2, img3,  img4 ];

const Background = () => {
  return (
    <>  
     <div className="relative flex flex-col items-center justify-center min-h-[60vh] bg-black text-white p-6">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/your-wedding-image.jpg')] bg-cover bg-center opacity-30"></div>

      {/* Content with fade-in effect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-2xl text-center z-10"
      >
        <h1 className="text-4xl font-bold mb-4 tracking-wide text-white">
          More Than Just a Recording
        </h1>
        <p className="text-lg text-gray-300">
          A wedding film is a beautifully crafted story, preserving the emotions, laughter, and love of your special day.
          A timeless keepsake you'll cherish for a lifetime.
        </p>
      </motion.div>

      {/* Call to Action Section */}
      <div className="relative text-center py-10 z-10">
        <h2 className="font-cursive text-3xl md:text-6xl md:my-6 my-3 text-white">
          Can’t wait to chat with you!!
        </h2>
        <Link to="/contact">
          <button className="bg-button border-2 border-button hover:bg-transparent hover:text-white transition duration-200 mx-auto px-6 py-3 font-bold text-white">
            LET'S TALK
          </button>
        </Link>
      </div>
    </div>
    
    
  
    <div className="relative w-full py-10">
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4"
      // data-aos="fade-up"
      // data-aos-offset="200"
      // data-aos-delay="40"
      // data-aos-duration="1000"
      // data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      // data-aos-once="false"
      // data-aos-anchor-placement="top-center"
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="overflow-hidden h-80"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={image}
            alt={`Background ${index}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      ))}
    </div>
  </div>
  </>
  );
};

export default Background;
