import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket ,faUser,faArrowDown} from '@fortawesome/free-solid-svg-icons'


const Header = ({data}) => {
  return (
    <header className='absolute slideDown top-0 left-0 p-3 lg:px-12 text-black w-full transition-all duration-500'>
        <nav className="flex text-black/60 justify-between items-center w-full border-b-[2px]  p-3 transition-all duration-500 " style={{borderColor:data.bgColor}} >
            <h1 className="text-3xl transition-all duration-500" style={{color:data.bgColor}} >ASAP</h1>
            <div className=" justify-between hidden md:flex w-1/2 items-center">
                <h1 className="lg:text-2xl text-xl  items-center cursor-pointer  px-3 py-2 transition-all duration-500" style={{color:data.bgColor}} >Home</h1>
                <h1 className="lg:text-2xl text-xl  items-center cursor-pointer  px-3 py-2 transition-all duration-500" style={{color:data.bgColor}} >Services</h1>
                <h1 className="lg:text-2xl text-xl  items-center cursor-pointer  px-3 py-2 transition-all duration-500" style={{color:data.bgColor}} >Gallery</h1>
                <h1 className="lg:text-2xl text-xl  items-center cursor-pointer  px-3 py-2 transition-all duration-500" style={{color:data.bgColor}} >About Us</h1>
                <button className='lg:text-xl text-lg glass  text-black p-2 rounded-xl px-3 transition-all duration-500' style={{color:data.bgColor}} ><FontAwesomeIcon icon={faRightToBracket} /></button>
            </div>
        </nav>
    </header>
  )
}

export default Header