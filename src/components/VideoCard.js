import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-full max-w-[360px] bg-white rounded-xl overflow-hidden cursor-pointer p-2">
      <img
        src={thumbnails?.medium?.url}
        alt={title}
        className="w-full h-[200px] object-cover block rounded-xl"
      />
      <ul className="list-none px-1 pt-3 pb-2 m-0">
        <li className="text-[15px] font-semibold text-[#0f0f0f] leading-snug mb-1">
          {title}
        </li>
        <li className="text-[12px] text-[#606060] leading-snug mb-0.5">
          {channelTitle}
        </li>
        <li className="text-[12px] text-[#606060] leading-snug">
          {statistics?.viewCount} ViewS
        </li>
      </ul>
    </div>
  )
}

export default VideoCard