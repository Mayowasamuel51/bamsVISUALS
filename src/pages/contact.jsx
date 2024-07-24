const Contact = () => {
    return (
        <main>
            <div className="md:px-10 px-4 md:py-20">
                {/* <HoneyBookWidget/> */}
                
                <div className="text-center md:w-[600px] mx-auto py-6 md:py-8 flex flex-col gap-4 md:gap-8">
                    <h1 className="font-medium md:text-4xl">Let’s create <span className="font-normal cursive text-4xl md:text-6xl text-text">Magic</span></h1>
                    <p className="md:text-xl text-base font-light">I am excited to be a part of your big day. Kindly fill out the contact form below and we will be in touch with more details. Please allow 24 hours for a response</p>
                </div>
                <form action="" className="flex flex-col gap-5 md:gap-10">
                    <div>
                        <input type="text" name="" id="" placeholder="name" className="border-2 border-black border-opacity-25 md:h-14 h-12 md:px-5 px-3 text-black w-full" />
                    </div>
                    <div>
                        <input type="text" name="" id="" placeholder="Phone Number" className="border-2 border-black border-opacity-25 md:h-14 h-12 md:px-5 px-3 text-black w-full" />
                    </div>
                    <div>
                        <input type="text" name="" id="" placeholder="Email" className="border-2 border-black border-opacity-25 md:h-14 h-12 md:px-5 px-3 text-black w-full" />
                    </div>
                    <div>
                        <input type="text" name="" id="" placeholder="Wedding Location" className="border-2 border-black border-opacity-25 md:h-14 h-12 md:px-5 px-3 text-black w-full" />
                    </div>
                    <div>
                        <input type="text" name="" id="" placeholder="Wedding How did you Hear about us" className="border-2 border-black border-opacity-25 md:h-14 h-12 md:px-5 px-3 text-black w-full" />
                    </div>
                    <div>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Please tell us how we can make your day memorable. " className="border-2 border-black border-opacity-25 w-full resize-none p-2 md:p-5"></textarea>
                    </div>

                    <button className="my-3 px-3 md:px-5 py-3 text-white bg-black bg-opacity-25 w-fit font-bold hover:bg-black hover:text-white duration-300">SUBMIT</button>
                </form> 
            </div>

        </main>
    )
}

export default Contact