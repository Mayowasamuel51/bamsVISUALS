import gallery_one from "../assets/images/gallery1.svg"
import gallery_two from "../assets/images/gallery2.svg"
import gallery_three from "../assets/images/gallery3.svg"
import gallery_four from "../assets/images/gallery3.jpeg"
import gallery_five from "../assets/images/gallery3.jpeg"
import gallery_six from "../assets/images/gallery3.jpeg"
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"


const Gallery = () => {
    return (
        <main>
            <div className='py-20'>
                <div className='text-center'>
                    <h1 className='cursive text-4xl md:text-6xl my-2'>Recent Works</h1>
                    <p className='md:text-xl text-base font-light italic'>Explore our latest stories in motion!</p>
                </div>
            </div>

            <div id="works" className="flex flex-col gap-10">
                <div className="relative">
                    <ReactPlayer url="https://www.dropbox.com/scl/fi/te2r7y8c4j3vq457hvd71/teaser-2160p-1.mp4?rlkey=93s9yy5a7xghggjzfgyx113ub&st=zg4tmxi6&dl=0" width={`100%`} height={600} controls={true} playing={true} light={gallery_one} playIcon={<button className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white">PLAY VIDEO</button>}  />
                </div>
                <div className="relative">
                    <ReactPlayer url="https://www.dropbox.com/scl/fi/al3ytsl8ag93mn0ntfz33/IMG_0520.PNG?rlkey=lmow2oxxyv7sp7wwad41ky4h6&st=tghnhjyw&dl=0" width={`100%`} height={600} controls={true} playing={true} light={gallery_two} playIcon={<button className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white">PLAY VIDEO</button>}  />
                </div>
                <div className="relative">
                    <ReactPlayer url="https://www.dropbox.com/scl/fi/qot2n92kio5msjwank9v5/IMG_0521.jpg?rlkey=1c23u59gb5nz8eqenxazhnwkj&st=k6dob4u6&dl=0" width={`100%`} height={600} controls={true} playing={true} light={gallery_three} playIcon={<button className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white">PLAY VIDEO</button>}  />
                </div>
                <div className="relative">
                    <ReactPlayer url="https://vimeo.com/990179377/a9a9266311" width={`100%`} height={600} controls={true} playing={true} light={gallery_four} playIcon={<button className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white">PLAY VIDEO</button>}  />
                </div>
                <div className="relative">
                    <ReactPlayer url="https://vimeo.com/990845187/f49e83fd83" width={`100%`} height={600} controls={true} playing={true} light={gallery_five} playIcon={<button className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white">PLAY VIDEO</button>}  />
                </div>
                <div className="relative">
                    <ReactPlayer url="https://vimeo.com/990177049/e349d31ec3" width={`100%`} height={600} controls={true} playing={true} light={gallery_six} playIcon={<button className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 p-4 w-fit mx-auto font-bold md:px-12 md:py-6 text-white">PLAY VIDEO</button>}  />
                </div>
            </div>

            <div className="text-center md:py-20 py-10">
                <h1 className="cursive md:text-6xl text-3xl md:my-6 my-3">Can’t wait to chat with you!!</h1>
                <Link to="/contact">
                    <button className="bg-button border-2 border-button hover:bg-transparent hover:text-text duration-200 mx-auto p-4 w-fit font-bold text-white">LETS TALK</button>
                </Link>
            </div>  
        </main>
    )
}

export default Gallery