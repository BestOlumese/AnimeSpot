import React from 'react'
import { FaBook, FaCamera, FaFileVideo, FaHouseMedicalCircleCheck } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Sidebar = ({ menu }) => {
  return (
    <div className={`grid-cols-4 w-[60%] md:w-[25%] lg:w-[20%] ${menu ? 'md:block hidden' : 'md:hidden sm:block'} h-screen fixed py-7 bg-gradient-to-l from-purple-800 to-purple-500 text-white z-50`}>
      <div className="mx-auto">
        <img src="/public/logo.png" className='w-200' alt="" />
      </div>
      <div className="flex flex-col mt-10 mx-auto pl-10">
        <ul>
          <li className='bg-primary py-2 px-4 rounded-l-lg flex flex-row items-center mb-2'>
            <Link to='/' className='font-medium text-sm flex items-center flex-row hover:text-purple-600'>
              <FaHouseMedicalCircleCheck className='size-4 mr-[10px]' />
              Home
            </Link>
          </li>
          <li className='bg-primary py-2 px-4 rounded-l-lg flex flex-row items-center mb-2'>
            <Link to='/top-animes' className='font-medium text-sm flex items-center flex-row hover:text-purple-600'>
              <FaFileVideo className='size-4 mr-[10px]' />
              Top Anime
            </Link>
          </li>
          <li className='bg-primary py-2 px-4 rounded-l-lg flex flex-row items-center mb-2'>
            <Link to='/trending-animes' className='font-medium text-sm flex items-center flex-row hover:text-purple-600'>
              <FaFileVideo className='size-4 mr-[10px]' />
              Trending Anime
            </Link>
          </li>
          <li className='bg-primary py-2 px-4 rounded-l-lg flex flex-row items-center mb-2'>
            <Link to='/filter-animes' className='font-medium text-sm flex items-center flex-row hover:text-purple-600'>
              <FaCamera className='size-4 mr-[10px]' />
              Filter Anime
            </Link>
          </li>
          <li className='bg-primary py-2 px-4 rounded-l-lg flex flex-row items-center mb-2'>
            <Link to='/' className='font-medium text-sm flex items-center flex-row hover:text-purple-600'>
              <FaBook className='size-4 mr-[10px]' />
              Manga
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full absolute bottom-5">
        <p className="text-center">&copy; 2024 AniSpot;</p>
      </div>
    </div>
  )
}

export default Sidebar