// lib/youtube.ts
import axios from 'axios';

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = 'your-channel-id';
const MAX_RESULTS = 10;

interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

export const fetchYouTubeVideos = async (): Promise<YouTubeVideo[]> => {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`;

  const response = await axios.get(url);
  return response.data.items;
};
