import React, { useEffect, useState } from 'react'
import { ageRating, season, seasonYear } from '../assets/content'
import { motion } from 'framer-motion'
import { slideIn, staggerContainer } from "../assets/motion"
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';

const List = ({ key, item }) => {
    const { id } = item;
    const { posterImage, popularityRank, averageRating, episodeCount, titles } = item.attributes;
    return (
        <motion.div
            key={key}
        >
            <Link to={'/details/'+id}>
                <div style={{ backgroundImage: "url('"+posterImage.large+"')", }} className='h-[300px] rounded-lg cursor-pointer bg-cover bg-center w-full bg-no-repeat relative'>
                    <div className="absolute right-0 bg-white text-purple-800 w-[50px] text-center rounded-tr-lg rounded-bl-lg">
                        #{popularityRank}
                    </div>
                    <div className="absolute bottom-0 left-0 bg-white text-purple-800 w-[50px] text-center rounded-tr-lg rounded-bl-lg">
                        {averageRating}
                    </div>
                    <div className="absolute bottom-0 right-0 bg-purple-800 text-white w-[60px] text-center rounded-tl-lg rounded-br-lg">
                        EP {episodeCount}
                    </div>
                </div>
            </Link>
            <p className='text-center text-slate-300'>{titles.en}</p>
        </motion.div>
    )
}

const Filter = () => {
    const [data, setData] = useState([])
    const [year, setYear] = useState(false)
    const [rating, setRating] = useState(false)
    const [seasonstate, setSeason] = useState(false)
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(true)
    const [next, setNext] = useState(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0`)
    const [count, setCount] = useState()
    console.log(data);

    function handleChange (value){
        setOffset(20 * (value - 1));
        const offsetd = (20 * (value - 1));
        setLoading(true);
        // setNext(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offsetd}`);
        if (!rating && seasonstate && year) {
            setNext(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${year}&filter[season]=${seasonstate}&page[limit]=20&page[offset]=${offsetd}`)
        } else if (!rating && seasonstate) {
            setNext(`https://kitsu.io/api/edge/anime?filter[season]=${seasonstate}&page[limit]=20&page[offset]=${offsetd}`)
        } else if (!year && seasonstate && rating) {
            setNext(`https://kitsu.io/api/edge/anime?filter[ageRating]=${rating}&filter[season]=${seasonstate}&page[limit]=20&page[offset]=${offsetd}`)
        } else if (!year && seasonstate) {
            setNext(`https://kitsu.io/api/edge/anime?filter[season]=${seasonstate}&page[limit]=20&page[offset]=${offsetd}`)
        } else if(!seasonstate && year && rating) {
            setNext(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${year}&filter[ageRating]=${rating}&page[limit]=20&page[offset]=${offsetd}`)
        } else if(!seasonstate && year) {
            setNext(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${year}&page[limit]=20&page[offset]=${offsetd}`)
        } else if(!seasonstate && rating) {
            setNext(`https://kitsu.io/api/edge/anime?filter[ageRating]=${rating}&page[limit]=20&page[offset]=${offsetd}`)
        } else if (!year && rating) {
            setNext(`https://kitsu.io/api/edge/anime?filter[ageRating]=${rating}&page[limit]=20&page[offset]=${offsetd}`)
        }  else if(seasonstate && rating) {
            setNext(`https://kitsu.io/api/edge/anime?filter[ageRating]=${rating}&filter[season]=${seasonstate}&page[limit]=20&page[offset]=${offsetd}`)
        } else if(year && rating) {
            setNext(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${year}&filter[ageRating]=${rating}&page[limit]=20&page[offset]=${offsetd}`)
        } else if(seasonstate && year) {
            setNext(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${year}&filter[season]=${seasonstate}&page[limit]=20&page[offset]=${offsetd}`)
        } else if(!seasonstate && !year && !rating) {
            setNext(`https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${offsetd}`)
        } else {
            setNext(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${year}&filter[ageRating]=${rating}&filter[season]=${seasonstate}&page[limit]=20&page[offset]=${offsetd}`)
        }
    }

    const filterYear = (e) => {
        setLoading(true);
        setYear(e.target.value);
        if (!rating && seasonstate) {
            setNext(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${e.target.value}&filter[season]=${seasonstate}&page[limit]=20&page[offset]=${offset}`)
        } else if(!seasonstate && rating) {
            setNext(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${e.target.value}&filter[ageRating]=${rating}&page[limit]=20&page[offset]=${offset}`)
        } else if(seasonstate && rating) {
            setNext(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${e.target.value}&filter[ageRating]=${rating}&filter[season]=${seasonstate}&page[limit]=20&page[offset]=${offset}`)
        } else {
            setNext(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${e.target.value}&page[limit]=20&page[offset]=${offset}`)
        }
        console.log(next);

    }

    const filterRating = (e) => {
        setLoading(true);
        setRating(e.target.value);
        if (!year && seasonstate) {
            setNext(`https://kitsu.io/api/edge/anime?filter[ageRating]=${e.target.value}&filter[season]=${seasonstate}&page[limit]=20&page[offset]=${offset}`)
        } else if(!seasonstate && year) {
            setNext(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${year}&filter[ageRating]=${e.target.value}&page[limit]=20&page[offset]=${offset}`)
        } else if(seasonstate && year) {
            setNext(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${year}&filter[ageRating]=${e.target.value}&filter[season]=${seasonstate}&page[limit]=20&page[offset]=${offset}`)
        } else {
            setNext(`https://kitsu.io/api/edge/anime?filter[ageRating]=${e.target.value}&page[limit]=20&page[offset]=${offset}`)
        }
    }

    const filterSeason = (e) => {
        setLoading(true);
        setSeason(e.target.value);
        if (!year && rating) {
            setNext(`https://kitsu.io/api/edge/anime?filter[ageRating]=${rating}&filter[season]=${e.target.value}&page[limit]=20&page[offset]=${offset}`)
        } else if(!rating && seasonstate) {
            setNext(`https://kitsu.io/api/edge/anime?filter[season]=${seasonstate}&filter[seasonYear]=${year}&page[limit]=20&page[offset]=${offset}`)
        } else if(year && rating) {
            setNext(`https://kitsu.io/api/edge/anime?filter[seasonYear]=${year}&filter[ageRating]=${rating}&filter[season]=${e.target.value}&page[limit]=20&page[offset]=${offset}`)
        } else {
            setNext(`https://kitsu.io/api/edge/anime?filter[season]=${e.target.value}&page[limit]=20&page[offset]=${offset}`)
        }
    }
    
    useEffect(() => {
        async function fetchData() {
            const url = next;

            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result.data);
                setCount(result.meta.count);
                setLoading(false);
                console.log(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [next])
    
  return (
    <>
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className='mt-[50px]'
        >
            <div className="flex  flex-col md:flex-row justify-between">
                <h1 className="text-3xl w-[50%]">Filter Animes</h1>
                <div className='w-[50%] flex md:mt-[0px] mt-[30px]'>
                    <select name="" id="" className='bg-purple-800 text-white rounded-lg outline-none text-md p-1 sm:w-[20%] md:w-[20%] mr-[20px]' onChange={filterYear}>
                        <option value="false">-- Year --</option>
                        {seasonYear.map((seasonYear, i) => (
                        <option value={seasonYear.value} key={i}>{seasonYear.name}</option>
                        ))}
                    </select>
                    <select name="" id="" className='bg-purple-800 text-white rounded-lg outline-none text-md p-1 sm:w-[20%] md:w-[25%] mr-[20px]' onChange={filterRating}>
                        <option value="false">-- Rating --</option>
                        {ageRating.map((ageRating, i) => (
                        <option value={ageRating.value} key={i}>{ageRating.name}</option>
                        ))}
                    </select>
                    <select name="" id="" className='bg-purple-800 text-white rounded-lg outline-none text-md p-1 sm:w-[20%] md:w-[25%]' onChange={filterSeason}>
                        <option value="false">-- season --</option>
                        {season.map((season, i) => (
                        <option value={season.value} key={i}>{season.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[50px]">
                {
                    (!loading) ?
                    data.map((item, i) => (
                        <List key={i} item={item} />
                    ))
                    :
                    ''
                }
            </div>
                {
                    (loading) ? 
                    (
                        <div className="flex justify-center">
                            <img src='/public/assets/images/loader.gif' className='w-[70px]' />
                        </div>
                    )
                    : ' '
                }
            <div className="flex justify-center mt-[50px]">
                <Pagination
                  defaultCurrent={1}
                  defaultPageSize={20} //default size of page
                  onChange={handleChange}
                  total={count} //total number of card data available
                  showSizeChanger={false}
                />
            </div>
        </motion.section>
    </>
  )
}

export default Filter