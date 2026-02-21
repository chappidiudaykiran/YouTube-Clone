
import SearchLogo from '../Assets/SearchLogo.jpg'


const Head = () => {
  return (
  <div className='flex items-center justify-between px-4 py-3 shadow-sm sticky top-0 bg-white z-10'>
    <div className='flex items-center gap-4 w-1/4 ml-3'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1280px-Hamburger_icon.svg.png" alt="hamburger" className='w-6 h-6 cursor-pointer'/>
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png" alt="youtube logo" className='w-28 h-6 object-contain cursor-pointer'/>
        </div>
    <div className="flex justify-center w-2/4">
      <div className='flex w-full max-w-2xl'>
        <input
          type="text"
          placeholder='Search'
          className='w-full border border-gray-300 rounded-l-full py-2 px-4 focus:outline-none'
        />
        <button className='border border-l-0 border-gray-300 bg-gray-100 px-4 rounded-r-full hover:bg-gray-200 flex items-center justify-center'>
            <img
              src={SearchLogo}
              alt="search"
              className='w-12 h-12 object-contain'
            />
        </button>
      </div>
        </div>
    <div className="flex justify-end w-1/4 mr-3">
      <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" className='w-8 h-8 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Head