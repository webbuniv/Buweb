// pages/index.tsx
"use client"

import React, { useEffect, useState } from 'react';
import YouTubeEmbed from '@/components/Youtube';
import { fetchYouTubeVideos } from '@/lib/youtube';
import SectionTitle from "../Common/SectionTitle";

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
      <SectionTitle
          title="Our Latest Videos"
          paragraph="You'll find a wealth of 
        knowledge and insights on various topics related to academia, student life, research, and more."
          center
        />
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
