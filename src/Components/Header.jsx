import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket ,faUser,faArrowDown} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <header className='absolute top-0 left-0 p-3 lg:px-12 text-white w-full'>
        <nav className="flex justify-between items-center w-full border-b-[1px] border-white/50 p-3 ">
            <h1 className="text-3xl">ASAP</h1>
            <div className="flex justify-between w-1/4 items-center">
                <h1 className="text-2xl text-white items-center cursor-pointer">Services</h1>
                <button className='text-xl bg-white text-black p-2 rounded-full px-3'><FontAwesomeIcon icon={faRightToBracket} /></button>
            </div>
        </nav>
    </header>
  )
}

export default Header