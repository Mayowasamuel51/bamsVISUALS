import React from "react";

const BgChange = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <iframe
        src="https://player.vimeo.com/video/1010058915?h=c7c983dfc5&autoplay=1&muted=1&background=1&badge=0&autopause=0&player_id=0&app_id=58479"
        className="absolute top-0 left-0 w-full h-full object-cover"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Background Video"
      ></iframe>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
};

export default BgChange;
