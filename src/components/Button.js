import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
        <button className="px-8 py-2 m-1 bg-gray-200 hover:bg-gray-300 rounded-lg">{name}</button>
    </div>
  )
}

export default Button