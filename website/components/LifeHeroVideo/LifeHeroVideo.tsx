import React from 'react';

const LifeHeroVideo = ({ src, muted = true, autoPlay = true, loop = true }) => {
  return (
    <div className="hero-video">
      <img src={src} />
      <div className="Why-hero-video-overlay" />
    </div>
  );
};

export default LifeHeroVideo;
