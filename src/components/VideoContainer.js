import React, { useEffect } from 'react'

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const apiUrl = process.env.REACT_APP_YT_VIDEOS_API;
    if (!apiUrl) {
      console.error('API URL not found. Please add REACT_APP_YT_VIDEOS_API to your .env file');
      return;
    }
    const data = await fetch(apiUrl);
    const json = await data.json();
    console.log(json);
  }
  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer