import React from "react";

const BgChange = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <iframe
        src="https://player.vimeo.com/video/1010058915?h=c7c983dfc5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        className="absolute top-0 left-0 w-full h-full object-cover"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Background Video"
      ></iframe>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text */}
      {/* <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold shadow-lg leading-snug max-w-2xl">
          A wedding film is more than just a recording—it's a timeless keepsake, 
          capturing the emotions and memories you'll cherish for a lifetime.
        </h1>
      </div> */}
    </div>
  );
};

export default BgChange;
