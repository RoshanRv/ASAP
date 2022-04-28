import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug ,faBroom,} from '@fortawesome/free-solid-svg-icons'
import { faToilet,faCouch,faBrush,faComputer,faSolarPanel,faFireBurner,faCar } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench,faHouseChimneyUser,faPalette } from '@fortawesome/free-solid-svg-icons'



const RequestSnippet = ({data,index}) => {
        
    const icons = [faBroom,faPlug,faToilet,faCouch,faPalette,faBrush,faFireBurner,faScrewdriverWrench,faHouseChimneyUser,faCar,faSolarPanel,faComputer]

  return (
    <div className='p-6 shadow-xl bg-white flex hover:bg-white/90 transition-all  items-center justify-around cursor-pointer'>
        <div className="flex flex-col">
            <FontAwesomeIcon icon={icons[index]} className='md:text-6xl text-4xl py-3 text-blue-500 '/>
            <h1 className='md:text-3xl text-xl my-4 text-[#3aa5fd]'>{data.service}</h1>
        </div>
            <h1 className={`text-lg md:text-8xl bg-[#3aa5fd] rounded-full p-1 text-center pt-5  w-36 h-36 text-white`}>{data.requests}</h1>
    </div>
  )
}

export default RequestSnippet