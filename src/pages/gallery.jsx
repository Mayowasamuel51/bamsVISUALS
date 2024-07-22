import gallery_one from "../assets/images/gallery1.svg"
import gallery_two from "../assets/images/gallery2.svg"
import gallery_three from "../assets/images/gallery3.svg"
import { motion } from "framer-motion"
import ReactPlayer from 'react-player'



const Gallery = () => {
    return (
        <main>
            <div className="home min-h-screen flex justify-center items-center">
                <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5, stiffness: 500, damping: 10 }} className="relative z-10 text-white text-center flex flex-col gap-5">
                    <h1 className="md:text-4xl text-3xl font-bold">Gallery</h1>
                    <p className='cursive text-2xl md:text-4xl'>Your event through my lens</p>
                </motion.div>
            </div>
            <div className='py-20'>
                <div className='text-center'>
                    <h1 className='cursive text-3xl md:text-6xl'>Recent Works</h1>
                    <p className='md:text-base text-sm'>Explore our latest stories in motion!</p>
                </div>
            </div>

            <div id="works" className="flex flex-col gap-10">
                <div className="relative">
                    <ReactPlayer url="https://www.dropbox.com/scl/fi/te2r7y8c4j3vq457hvd71/teaser-2160p-1.mp4?rlkey=93s9yy5a7xghggjzfgyx113ub&st=zg4tmxi6&dl=0" width={`100%`} height={600} controls={true} playing={true} light={gallery_one} playIcon={<button className="bg-button  p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white">PLAY VIDEO</button>}  />
                </div>
                <div className="relative">
                    <ReactPlayer url="https://www.dropbox.com/scl/fi/al3ytsl8ag93mn0ntfz33/IMG_0520.PNG?rlkey=lmow2oxxyv7sp7wwad41ky4h6&st=tghnhjyw&dl=0" width={`100%`} height={600} controls={true} playing={true} light={gallery_two} playIcon={<button className="bg-button  p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white">PLAY VIDEO</button>}  />
                </div>
                <div className="relative">
                    <ReactPlayer url="https://www.dropbox.com/scl/fi/qot2n92kio5msjwank9v5/IMG_0521.jpg?rlkey=1c23u59gb5nz8eqenxazhnwkj&st=k6dob4u6&dl=0" width={`100%`} height={600} controls={true} playing={true} light={gallery_three} playIcon={<button className="bg-button  p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white">PLAY VIDEO</button>}  />
                </div>
            </div>
        </main>
    )
}

export default Gallery