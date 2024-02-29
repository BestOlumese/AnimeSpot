import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Navbar = ({ menuClick, menu }) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    const dataToSubmit = {
      ...formData // Any additional form data object here
    };
    
    navigate(
      '/search/'+dataToSubmit.search
    )
  }

  const handleInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormData({
      ...formData, // Keep existing form data
      [name]: value // Update form data for the input field that changed
    });
  }

  return (
    <div className={`bg-gradient-to-l from-purple-800 to-purple-500 w-full ${menu ? 'pl-[10px] pr-[10px] md:pl-[22%] md:pr-[30px]' : 'px-3 md:px-10'} text-white py-3 fixed z-40`}>
      <div className="flex justify-between items-center">
        <div className='flex items-center w-[100%]'>
          <div className='w-[50%] md:mr-[40px] mr-[20px]'>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Search For Anime . . .' className="bg-transparent w-full px-4 rounded-lg py-2 placeholder:text-white placeholder:font-sans focus:border-b-red-500 outline-none border-b-2 border-solid border-b-black text-sm" name='search' onChange={handleInputChange} />
            </form>
          </div>
        </div>
        <FaBarsStaggered className='cursor-pointer size-6' onClick={menuClick} />
      </div>
    </div>
  )
}

export default Navbar