import React from 'react'
import Button from './Button'
const list=["All","Music","Sports","News","Movies","Gaming","Live","Fashion","Learning"]
const ButtonList = () => {
  return (
    <div className='flex items-center justify-start gap-2 whitespace-nowrap px-4 py-2 shadow-sm sticky top-16 bg-white z-10'>
      {list.map((buttonName) => (
        <Button key={buttonName} name={buttonName} />
      ))}
    </div>
  )
}

export default ButtonList