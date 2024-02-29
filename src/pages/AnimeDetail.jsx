import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AnimeDetail = ({ menu }) => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [next, setNext] = useState(`https://kitsu.io/api/edge/anime/+${id}`)
    console.log(data);
    
    useEffect(() => {
        async function fetchData() {
            const url = next;

            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result.data.attributes);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [next])
    console.log(data);
  return (
    <>
      <div className={`w-full ${menu ? 'pl-[10px] pr-[10px] md:pl-[22%] md:pr-[30px]' : 'px-3 md:px-10'} py-7 mt-[50px] text-white`}>
        {
            (!loading) ?
            (
                <>
                    <div style={{ backgroundImage: "url('"+data.coverImage.original+"')", }} className={`h-[350px] rounded-lg cursor-pointer w-full block overflow-hidden relative z-10 bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-r before:from-purple-300 before:to-purple-600 p-4 before:opacity-75 before:z-[-5]`}>
                        <h1 className="text-4xl font-semibold text-center">{data.titles.en}</h1>
                    </div>
                    <div className="flex flex-col md:flex-row mt-[30px]">
                        <div className="w-[100%] mr-[0px] md:w-[23%] md:mr-[25px]">
                            <img src={data.posterImage.original} className='rounded-lg w-full cursor-pointer' alt="" />
                            <p className="text-white underline font-medium mt-[10px]"><a className='hover:text-purple-800' href={`https://www.youtube.com/watch?v=${data.youtubeVideoId}`} target='_blank'>Watch Trailer</a></p>
                        </div>
                        <div className='w-[100%] md:w-[77%] mt-[20px] md:mt-[0px]'>
                            <h1 className="text-2xl">{data.titles.en}</h1>
                            <p className='mt-[10px] text-gray-400 font-thin italic'>{data.titles.en}, {data.titles.en_jp}, {data.titles.ja_jp}</p>
                            <div className="mt-[15px] text-justify text-gray-400 font-thin">
                                {data.synopsis}
                            </div>
                            <div className="flex justify-between mt-[15px] text-gray-400 font-thin">
                                <div className="w-[50%]">
                                    <p className='mt-[5px]'>Type: {data.showType || '?'}</p>
                                    <p className='mt-[5px]'>Date aired: {data.startDate || '?'} to  {data.endDate || '?'}</p>
                                    <p className='mt-[5px]'>Average Rating: {data.averageRating || '?'}</p>
                                    <p className='mt-[5px]'>Popularity Rank: {data.popularityRank || '?'}</p>
                                    <p className='mt-[5px]'>User Count: {data.userCount || '?'}</p>
                                </div>
                                <div className="w-[50%]">
                                    <p className='mt-[5px]'>Age Rating: {data.ageRatingGuide || '?'}</p>
                                    <p className='mt-[5px]'>Status: {data.status || '?'}</p>
                                    <p className='mt-[5px]'>Episodes: {data.episodeCount || '?'}</p>
                                    <p className='mt-[5px]'>Rating Rank: {data.ratingRank || '?'}</p>
                                    <p className='mt-[5px]'>Favorites Count: {data.favoritesCount || '?'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            :
            ''
        }
        {
            (loading) ? 
            (
                <div className="flex justify-center">
                    <img src='/public/assets/images/loader.gif' className='w-[70px]' />
                </div>
            )
            : ' '
        }
      </div>
    </>
  )
}

export default AnimeDetail