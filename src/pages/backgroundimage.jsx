import { motion } from "framer-motion";
import img0 from "../assets/images/test.webp";
import img01 from "../assets/images/Snapinsta.webp";
import img1 from "../assets/images/0A6A4645_2_bniny9.webp";

const images = [img0, img01, img1];

const Background = () => {
  return (
    <div className="relative w-full py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-4 "     data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="30"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
>
        {images.map((image, index) => (
          <motion.div 
            key={index} 
            className="overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={image}
              alt={`Background ${index}`}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Background;
