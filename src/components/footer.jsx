

const Footer = () => {
    return (
        <>
            <div className="text-center md:py-20 py-10 bg-dark space-y-10">
                <div>
                    <h1 className="font-cormorant md:text-6xl text-3xl md:my-6 my-3 xl:w-[1000px] w-full mx-auto text-white">HAVE IDEA IN YOUR MIND ? LET&apos;S START YOUR PROJECT WITH US
                    </h1>
                    <p className="font-quicksand font-bold text-text_gold text-xl">BAM VISUALS, +234 811 823 6308 OR HELLO@BAMVISUALS.COM</p>
                </div>

                <div className="flex text-white justify-center gap-5 items-center">
                    <p className="font-cormorant text-2xl font-bold">FACEBOOK</p>
                    <p className="font-cormorant text-2xl font-bold">TWITTER</p>
                    <p className="font-cormorant text-2xl font-bold">LINKEDIN</p>
                    <p className="font-cormorant text-2xl font-bold">INSTAGRAM</p>
                    <p className="font-cormorant text-2xl font-bold">YOUTUBE</p>
                </div>
            </div>
            <div className="py-10 bg-[url('./assets/images/servicebg.png')] bg-cover bg-no-repeat relative after:absolute after:inset-0 after:bg-black/80">
            </div>
        </>

    )
}

export default Footer