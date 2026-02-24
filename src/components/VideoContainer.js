import React, { useEffect } from 'react'
import { useState } from 'react';
import VideoCard from './VideoCard';
const VideoContainer = () => {
  const[videos,setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const apiUrl = process.env.REACT_APP_YT_VIDEOS_API;
    if (!apiUrl) {
      return;
    }
    const data = await fetch(apiUrl);
    const json = await data.json();
    setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap gap-4 p-4'>
      {videos.map((video) => (
        <a key={video.id} href={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </a>
      ))}
    </div>
  )
}

export default VideoContainer