// pages/index.tsx
import React, { useEffect, useState } from 'react';
import YouTubeEmbed from '@/components/Youtube';
import { fetchYouTubeVideos } from '@/lib/youtube';

const HomePage: React.FC = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const videoData = await fetchYouTubeVideos();
      setVideos(videoData);
    };

    getVideos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Latest Videos</h1>
      <div className="flex flex-wrap -mx-4">
        {videos.map((video) => (
          <YouTubeEmbed
            key={video.id.videoId}
            videoId={video.id.videoId}
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails.medium.url}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
