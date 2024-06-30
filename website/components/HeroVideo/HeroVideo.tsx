import React from 'react';

const HeroVideo = ({ src, muted = true, autoPlay = true, loop = true }) => {
  return (
    <div className="hero-video hidden lg:block">
      <video src={src} muted={muted} autoPlay={autoPlay} loop={loop}/>
      <div className="hero-video-overlay" />
    </div>
  );
};

export default HeroVideo;
