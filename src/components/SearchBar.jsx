import React from 'react'
import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom'
const SearchBar = () => {
  return (
    <>
    <div className='flex flex-row justify-center items-center '>
        <div className='mx-4 text-xl text-white'>Search:</div>
        <div>
            <input className='focus:outline-orange-light md:w-[50rem] md:p-1' type="text" placeholder="Type Here"/>
        </div>
        <div className='mx-4 hover:bg-orange-light focus:bg-orange text-white'>
            <button  className='border border-white p-2'><FaSearch /></button>
        </div>
    </div>
    </>
  )
}

export default SearchBar