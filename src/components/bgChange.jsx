import React from "react";

const BgChange = () => {
  return (
    <div className="relative w-full h-screen">
      <iframe
        src="https://player.vimeo.com/video/1010058915?autoplay=1&loop=1&muted=1&background=1"
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Background Video"
      ></iframe>
    </div>
  );
};

export default BgChange;
