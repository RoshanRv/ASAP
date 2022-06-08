import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket ,faUser,faArrowDown,faBars,faClose,faImages,faBoltLightning,faInfoCircle,faHome} from '@fortawesome/free-solid-svg-icons'


const Header = ({data}) => {
  return (
    <header className='absolute slideDown top-0 left-0 p-3 lg:px-12 text-black w-full transition-all duration-500'>
        <nav className="flex text-black/60 justify-between items-center w-full border-b-[2px]  p-3 transition-all duration-500 " style={{borderColor:data.bgColor}} >
            <h1 className="text-3xl transition-all duration-500" style={{color:data.bgColor}} >ASAP</h1>
            {/*     tab , lap     */}
            <div className=" justify-between hidden md:flex w-1/2 items-center">
                <h1 className="lg:text-2xl text-xl  items-center cursor-pointer text-shaho  px-3 py-2 transition-all duration-500" style={{color:data.bgColor}} >Home</h1>
                <h1 className="lg:text-2xl text-xl  items-center cursor-pointer text-shaho px-3 py-2 transition-all duration-500" style={{color:data.bgColor}} >Services</h1>
                <h1 className="lg:text-2xl text-xl  items-center cursor-pointer text-shaho px-3 py-2 transition-all duration-500" style={{color:data.bgColor}} >Gallery</h1>
                <h1 className="lg:text-2xl text-xl  items-center cursor-pointer text-shaho px-3 py-2 transition-all duration-500" style={{color:data.bgColor}} >About Us</h1>
                <button className='lg:text-xl text-lg glass  text-black p-2 rounded-xl px-3 transition-all duration-500' style={{color:data.bgColor}} ><FontAwesomeIcon icon={faRightToBracket} /></button>
            </div>

            {/*         mobile   */}
            <div className="block md:hidden ">
                <button className='lg:text-xl text-lg glass  text-black p-2 rounded-xl px-3 transition-all duration-500' style={{color:data.bgColor}} ><FontAwesomeIcon icon={faBars} /></button>
            </div>
            {/*         Side Nav         */}
            <div className='fixed flex  flex-col justify-center items-center w-full h-full z-20 top-0 left-0 transition-all duration-500' style={{backgroundColor:data.color}}>
                <button style={{color:data.bgColor}} className='text-2xl transition-all duration-500 px-4 absolute top-4 right-4 py-2 glass'><FontAwesomeIcon icon={faClose} /></button>
                <div className="text-white transition-all duration-500" style={{color:data.bgColor}}  >
                    <div className="flex items-center gap-x-4 text-2xl">
                        <FontAwesomeIcon icon={faHome} className='text-xl' />
                        <h1 className="">Home</h1>
                    </div>
                    {/* <h1 className="text-2">Services</h1>
                    <h1 className="text-2">Gallery</h1> */}
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header