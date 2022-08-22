import React from 'react'
import SearchBar from '../components/SearchBar'
import TitleBar from '../components/TitleBar'

const Header = () => {
  return (
    <div className='flex flex-col justify-evenly bg-orange md:h-[8rem] overflow-auto'>
        <TitleBar/>
        <SearchBar/>
    </div>
  )
}

export default Header   