// lib/youtube.ts

const API_KEY = "AIzaSyBGNIEfagDFYNP7MGYlq1M3k0JB-sYNgMM";
const CHANNEL_ID = "UCS_rf3JZ95_0sTI42N2xP9Q";
const MAX_RESULTS = 6;

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
    liveBroadcastContent: string; // Added to check live broadcast status
  };
}

export const fetchYouTubeVideos = async (): Promise<YouTubeVideo[]> => {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&type=video`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Filter out live broadcasts
    const filteredVideos = data.items.filter((item: any) => {
      return item.snippet.liveBroadcastContent !== 'live';
    });

    return filteredVideos;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};