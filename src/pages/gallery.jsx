import gallery_one from "../assets/images/gallery1.svg"
import gallery_two from "../assets/images/gallery2.svg"
import gallery_three from "../assets/images/gallery3.svg"
import { motion } from "framer-motion"


const Gallery = () => {
    return (
        <main>
            <div className="home min-h-screen flex justify-center items-center">
                <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5, stiffness: 500, damping: 10 }} className="relative z-10 text-white text-center flex flex-col gap-5">
                    <h1 className="md:text-4xl text-3xl font-bold">Gallery</h1>
                    <p className='cursive text-sm md:text-4xl'>Your event through my lens</p>
                </motion.div>
            </div>
            <div className='py-20'>
                <div className='text-center'>
                    <h1 className='cursive text-3xl md:text-6xl'>Recent Works</h1>
                    <p className='md:text-base text-sm'>Explore our latest stories in motion!</p>
                </div>
            </div>

            <div className="flex flex-col gap-10">
                <div className="relative">
                    <img src={gallery_one} alt="" />
                    <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-button  p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white">PLAY VIDEO</button>
                </div>
                <div className="relative">
                    <img src={gallery_two} alt="" />
                    <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-button  p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white">PLAY VIDEO</button>
                </div>
                <div className="relative">
                    <img src={gallery_three} alt="" />
                    <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-button  p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white">PLAY VIDEO</button>
                </div>
            </div>

        </main>
    )
}

export default Gallery