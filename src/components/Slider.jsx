import React, { useState } from 'react'
import { slider } from '../assets/content'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { fadeIn, staggerContainer } from '../assets/motion';
import { motion } from 'framer-motion'

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const length = slider.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slider) || slider.length <= 0) {
        return null;
    }

  return (
    <>
        {slider.map((slide, i) => (
            <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={i}
        >
            <motion.div variants={fadeIn("up", "spring", i * 0.5, 0.75)} className={`flex select-none flex-col ${i === current ? '' : 'hidden'}`}>
                <div className='w-full h-[350px] overflow-hidden bg-cover rounded-t-lg bg-center relative' style={{ backgroundImage: 'url('+slide.image+')' }}>
                    <IoIosArrowBack className='absolute text-purple-800 hover:text-white py-2 top-[50%] size-10 hover:bg-purple-800 cursor-pointer rounded-r-lg h-[70px]' onClick={prevSlide} />
                    <IoIosArrowForward className='absolute text-purple-800 hover:text-white py-2 top-[50%] right-0 size-10 hover:bg-purple-800 cursor-pointer rounded-l-lg h-[70px]' onClick={nextSlide} />
                </div>
                <div className='bg-gradient-to-l from-purple-800 to-purple-500 p-2 md:p-6 rounded-b-lg'>
                    <h2 className="md:text-4xl text-2xl font-semibold mb-3">{slide.title}</h2>
                    <p className="font-medium md:block hidden">{slide.description}</p>
                </div>
            </motion.div>
            </motion.section>
        ))}
    </>
  )
}

export default Slider