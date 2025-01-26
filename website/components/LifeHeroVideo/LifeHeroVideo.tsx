import React from 'react';

const LifeHeroVideo = ({ src, muted = true, autoPlay = true, loop = true }) => {
  return (
    <div className="hero-video">

      <video src={src} muted={muted} autoPlay={autoPlay} loop={loop}/>
      <div className="Why-hero-video-overlay" />
    </div>
  );
};

export default LifeHeroVideo;
