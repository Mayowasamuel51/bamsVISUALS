import { motion } from "framer-motion";
import img0 from "../assets/images/test.webp";
import img01 from "../assets/images/Snapinsta.webp";
import img1 from "../assets/images/0A6A4645_2_bniny9.webp";

const images = [img0, img01, img1];

const BgChange = () => {
  return (
    // absolute inset-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 w-full h-full
    <div className="absolute inset-0   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  w-full  h-full">
      {images.map((image, index) => (
        <motion.div 
          key={index} 
          className="overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={image}
            alt={`Background ${index}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BgChange;
