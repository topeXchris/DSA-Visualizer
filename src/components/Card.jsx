import React from 'react'
import { Link } from 'react-router-dom'
const src = "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const Card = () => {
  return (
    <>
    <Link to="2">
    <div className='border border-orange-light m-5 md:flex flex-col text-center md:w-[15rem] shadow-lg shadow-black hover:translate-y-[-1rem]'>
        <div>
            <img src={src} alt="/" />
        </div>
        <div className='p-3 text-white text-lg bg-orange'>
            NAME
        
        </div>
    </div>
    </Link>
    </>
  )
}

export default Card 