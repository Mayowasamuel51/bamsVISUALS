import React from "react";

const BgChange = () => {
  return (
    <div className="relative w-full h-screen">
      <iframe
        src="https://player.vimeo.com/video/1010058915?h=c7c983dfc5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
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
