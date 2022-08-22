import React from 'react'
import {AiFillGithub} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
const Footer = () => {
  return (
    <div className='flex justify-between bg-orange p-[5px] w-screen'>
        <div className='flex justify-center text-white'>
            <AiFillGithub className='w-7 h-7 mx-3'/>
        </div>
        <div className='flex justify-end text-white md:justify-between'>
            <p className='mx-3'>About</p>
            <p className='mx-3'>Contact</p>
        </div>
    </div>
  )
}

export default Footer