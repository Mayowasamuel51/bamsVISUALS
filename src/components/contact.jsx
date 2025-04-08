import { FaPhone, FaLocationArrow } from "react-icons/fa"
import { FaMessage, FaUser } from "react-icons/fa6"
import { useLocation } from "react-router-dom"


const Contact = () => {
    const {pathname} = useLocation()
  return (
    <section className="bg-[#949191] lg:p-32 md:p-10 p-4">
        <div className={`flex lg:flex-nowrap flex-wrap gap-20 ${pathname === "/contact" && "flex-row-reverse"}`}>
            <div className="flex-1 flex flex-col gap-10">
                <div className="flex gap-10 lg:flex-nowrap flex-wrap">
                    <input className="text-white placeholder:text-white  font-open_sans flex-1 bg-transparent w-full h-12 border-l border-b border-white pl-4" placeholder="Your name here" type="text" />
                    <input className="text-white placeholder:text-white font-open_sans flex-1 bg-transparent w-full h-12 border-l border-b border-white pl-4" placeholder="Your email here"  type="text" />
                </div>
                <input className="text-white placeholder:text-white font-open_sans bg-transparent w-full h-12 border-l border-b border-white pl-4" placeholder="Your Subject here"  type="text" />
                <textarea className="text-white placeholder:text-white font-open_sans bg-transparent w-full resize-none h-20 border-l border-b border-white pl-4" placeholder="Your Message here"  name="" id=""></textarea>
                <button className="border-2 border-text_gold text-text_gold p-4">SUBMIT NOW</button>
                <p className="text-white font-semibold text-lg font-quicksand">We will contact you back within 24 hours via email.</p>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <h2 className="text-text_gold font-bold text-lg font-quicksand">CONTACT</h2>
                <h3 className="font-bold font-cormorant text-[48px]">REQUEST CALL BACK</h3>
                <p className="text-white font-open_sans">Nulla facilisi. Praesent non mauris ac ligula ullamcorper vehicula. Praesent mollis, nibh in venenatis iaculis, mauris eros iaculis quam, ut aliquam nisi nunc vitae quam. Fusce faucibus, felis at fermentum convallis, nunc neque aliquam turpis, ut varius ipsum nisi eu magna. Sed euismod laoreet nisi, eu iaculis elit scelerisque non.</p>
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="flex items-center gap-2 py-6">
                        <FaPhone size={20} color="#FFAE54" />
                        <p className="text-white font-open_sans">+234 811 823 6308</p>
                    </div>
                    <div className="flex items-center gap-2 py-6">
                        <FaLocationArrow size={20} color="#FFAE54" />
                        <p className="text-white font-open_sans">99 Ijako Church Ogun State</p>
                    </div>
                    <div className="flex items-center gap-2 py-6">
                        <FaMessage size={20} color="#FFAE54" />
                        <p className="text-white font-open_sans">hello@bamvisuals.com</p>
                    </div>
                    <div className="flex items-center gap-2 py-6">
                        <FaUser size={20} color="#FFAE54" />
                        <p className="text-white font-open_sans">@bamvisuals</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact