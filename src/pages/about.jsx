import style from "../assets/images/about.svg"
const About = () => {
  return (
    <main>
        <div className="home min-h-screen flex justify-center items-center">
            <div className="relative z-10 text-white text-center flex flex-col gap-4">
                <h1 className="md:text-4xl text-3xl font-bold">About Me</h1>
                <p className='cursive text-sm md:text-4xl'>Find out what makes me ticks</p>
            </div>
        </div>

        <div className="md:py-20 md:px-10">
            <div className="flex md:flex-row flex-col md:gap-20">
                <div className="bg-[#907E69] md:w-1/2 h-[500px]"></div>
                <div className="flex-1 text-right">
                    <p className="text-sm md:text-lg">Adventure seeker, storyteller, and frame-obsessor! Based in the stunning Pacific Northwest, with Tacoma as my backyard and Seattle&apos;s creative vibes fueling my passion. Always ready to capture life&apos;s breathtaking moments and tales. Whether it&apos;s a wedding, a brand story, or a personal adventure, I&apos;m here to help you tell your story and make it unforgettable! Let&apos;s make some cinematic memories and become the ultimate storytelling squad!</p>
                    <h3 className="cursive text-button md:text-[80px]">with love and prayers ,Bams Visuals</h3>
                </div>
            </div>
        </div>

        <div className="md:py-20 md:px-10">
            <div className="flex md:flex-row flex-col md:gap-20">
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="font-bold md:text-3xl text-base">My Style</h1>
                    <p className="text-sm md:text-lg"> My style is a fusion of cinematic flair, documentary grit, and a deep love for the human experience. My films are woven with heart, soul, and a dash of magic. I chase light, laughter, and tears to craft stories that whisper secrets to your soul. With a keen eye for the authentic and the unscripted, I weave tales that transport you back to the moment it all happened. My films are a symphony of emotions, a dance between light and shadow, and a celebration of the beauty in the everyday. I don&apos;st just capture moments, I bottle up the feelings, the joy, and the tears, so you can relive them forever. Let&apos;s create films that make your heart skip a beat and your soul feel alive.</p>
                    <button className="bg-button  p-4 w-fit font-bold text-white">LETS TALK</button>
                </div>
                <img src={style} alt="" />
            </div>
        </div>
    </main>
  )
}

export default About