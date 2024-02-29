import React from 'react'
import TopAnime from '../components/TopAnime'
import Search from '../components/Search'
import { useParams } from 'react-router-dom'

const SearchAnime = ({ menu }) => {
    const { title } = useParams()
  return (
    <>
      <div className={`w-full ${menu ? 'pl-[10px] pr-[10px] md:pl-[22%] md:pr-[30px]' : 'px-3 md:px-10'} py-7 mt-[50px] text-white`}>
        <Search title={title} />
      </div>
    </>
  )
}

export default SearchAnime