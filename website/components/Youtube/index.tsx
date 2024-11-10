// components/YouTubeEmbed.tsx
import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  thumbnail: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title, thumbnail }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <iframe
          className="w-full"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
