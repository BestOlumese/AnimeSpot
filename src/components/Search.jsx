import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { slideIn, staggerContainer } from "../assets/motion"
import { Link } from 'react-router-dom';

const List = ({ key, item }) => {
    const { id } = item;
    const { posterImage, popularityRank, averageRating, episodeCount, titles } = item.attributes;
    console.log(item.attributes, 'trt');
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

const Search = ({ title }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [next, setNext] = useState(`https://kitsu.io/api/edge/anime?filter[text]=${title}`)
    console.log(title);

    useEffect(() => {
        setLoading(true);
        setNext(`https://kitsu.io/api/edge/anime?filter[text]=${title}`)
    }, [title])
    
    useEffect(() => {
        async function fetchData() {
            const url = next;

            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result.data);
                setLoading(false);
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
            <div className="flex justify-between">
                <h1 className="text-3xl">Searched For: {title}</h1>
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
                            <img src='./assets/images/loader.gif' className='w-[70px]' />
                        </div>
                    )
                    : ' '
                }
        </motion.section>
    </>
  )
}

export default Search