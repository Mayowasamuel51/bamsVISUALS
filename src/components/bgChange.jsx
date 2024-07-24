import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { motion } from 'framer-motion';
import img0 from "../assets/images/home-bg0.jpg"
import img01 from "../assets/images/home-bg01.jpg"
import img1 from "../assets/images/home-bg.jpg"
import img2 from "../assets/images/home-bg2.jpg"

const bgChange = () => {
  return (
    <Splide className='absolute top-0 left-0 bottom-0 w-full h-full' options={{
        type: "fade",
        speed: 2000,
        interval: 20000,
        autoplay: true,
        rewind: true,
        arrows: false,
        pagination: false,
        height : "100vh",
    }}>
        <SplideSlide>
            <motion.img
                src={img0}
                className='w-full h-full object-cover zoom-animation'
                alt="hero-image"
            />
        </SplideSlide>
        <SplideSlide>
            <motion.img
                src={img01}
                className='w-full h-full object-cover zoom-animation'
                alt="hero-image"
            />
        </SplideSlide>
        <SplideSlide>
            <motion.img
                src={img1}
                className='w-full h-full object-cover zoom-animation'
                alt="hero-image"
            />
        </SplideSlide>
        <SplideSlide>
            <motion.img
                src={img2}
                className='w-full h-full object-cover zoom-animation'
                alt="hero-image"
            />
        </SplideSlide>
    </Splide>
  )
}

export default bgChange