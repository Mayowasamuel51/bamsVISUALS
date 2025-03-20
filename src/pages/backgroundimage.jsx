import { motion } from "framer-motion";
import img0 from "../assets/images/screencapture-player-vimeo-video-1021627312-2025-03-20-11_54_39.png";
import img01 from   "../assets/images/screencapture-player-vimeo-video-1018523334-2025-03-20-11_34_49.png";
import img1 from "../assets/images/screencapture-vimeo-1030637546-2025-03-08-21_24_18.png";

import img2  from  "../assets/images/gallery4.jpeg";

import img3 from   "../assets/images/gallery6.jpeg";


import img4 from    "../assets/images/Snapinsta.webp";
const images = [img0, img01, img1 , img2, img3,  img4 ];

const Background = () => {
  return (
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
  
  );
};

export default Background;
