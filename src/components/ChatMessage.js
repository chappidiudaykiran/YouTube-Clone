import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2 m-2 bg-white rounded-lg">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
          className="w-8 h-8 cursor-pointer"
        />
        <span className='font-bold px-1'>{name}</span>
        <p>{message}</p>
    </div>
  )
}   
  
export default ChatMessage