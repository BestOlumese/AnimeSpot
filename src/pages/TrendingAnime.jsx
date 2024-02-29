import React from 'react'
import Trending from '../components/Trending'

const TrendingAnime = ({ menu }) => {
  return (
    <>
      <div className={`w-full ${menu ? 'pl-[10px] pr-[10px] md:pl-[22%] md:pr-[30px]' : 'px-3 md:px-10'} py-7 mt-[50px] text-white`}>
        <Trending />
      </div>
    </>
  )
}

export default TrendingAnime