import React, { use } from 'react'
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return Pattern
  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-52'>
      <ul>
        <li><a href="/">Home</a></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Movies</li>
        <li>Music</li>
        <li>Sports</li>
        <li>News</li>
      </ul>
    </div>
  )
}

export default Sidebar