import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket ,faUser,faArrowDown} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <header className='absolute top-0 left-0 p-3 lg:px-12 text-black w-full'>
        <nav className="flex text-black/60 justify-between items-center w-full border-b-[1px] border-black/50 p-3 ">
            <h1 className="text-3xl">ASAP</h1>
            <div className="flex justify-between w-1/4 items-center">
                <h1 className="text-2xl  items-center cursor-pointer">Services</h1>
                <button className='text-xl glass  text-black p-2 rounded-xl px-3'><FontAwesomeIcon icon={faRightToBracket} /></button>
            </div>
        </nav>
    </header>
  )
}

export default Header