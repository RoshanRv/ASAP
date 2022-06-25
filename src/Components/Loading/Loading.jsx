import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug ,faBroom,} from '@fortawesome/free-solid-svg-icons'
import { faToilet,faCouch,faBrush,faComputer,faSolarPanel,faFireBurner,faCar } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench,faHouseChimneyUser,faPalette,faWind} from '@fortawesome/free-solid-svg-icons'

const Loading = () => {

    const [aniIndex,setAniIndex]=useState(0)


    //      Remove and Add Header
    useEffect(()=>{

        const header = document.getElementById('header')
        header.classList.add('hidden')

        //      updating aniIndex

        const interval = setInterval(()=>{
            setAniIndex(e=>{
                if(e>=2)return 0
                return e+1
            })
        },1000)


        return ()=>{
            header.classList.remove('hidden')
            clearInterval(interval)
        }
    },[])

  return (
    <main className='bg-mBlack font-prompt w-full h-screen overflow-hidden flex justify-center items-center'>
         {/*    Hero Spinner */}
         <div className="  scale-0 md:scale-[.75] lg:scale-[.80] xl:scale-[.95]  -z-0  ">

        <div className="relative rounded-full text-4xl animate-zoom h-[40rem] w-[40rem] bg-gray-00  flex gap- flex-wrap transition-all duration-[500ms] text-lRed" >
            {/*         Services   */}
            <div className=" absolute  top-1/2 glass text-center -translate-y-1/2 text-white  w-max   px-4 py-2 rounded-lg left-1/2 -translate-x-1/2"  >
                We Provide<br/>Quality<br/> 
                <div className='h-10  overflow-hidden'>
                    <div className=' transition-all' style={{transform:`translateY(calc(${aniIndex*(-2.5)}rem))`}} >
                        <h1>one</h1>
                        <h1>two</h1>
                        <h1>three</h1>
                    </div>
                </div>
            </div>
            {/*   */}
            {/* <div className="bg-lBlack mix-blend-difference w-32 h-32 rounded-full  absolute right-0 top-1/2 -translate-y-1/2"></div> */}
            <div className="w-full h-full rotate ">
                <button className='  p-4 spin-hover serv icon  h-max absolute top-8 left-1/2 -translate-x-1/2  rounded-full glass px-6  ' name='Electrician'  ><FontAwesomeIcon icon={faPlug}  /></button>
                <button className='  p-4 spin-hover serv icon  rotate-[30deg] h-max absolute top-16 right-36  rounded-full glass px-3  ' name='Cleaning'  ><FontAwesomeIcon icon={faBroom}  /></button>
                <button className='  p-4 spin-hover serv icon  rotate-[60deg] h-max absolute top-40 right-16  rounded-full glass px-4  ' name='Plumbing'  ><FontAwesomeIcon icon={faToilet}  /></button>
                <button className='  p-4 spin-hover serv icon  rotate-90 h-max absolute top-1/2 right-8 -translate-y-1/2 rounded-full glass px-3  ' name='Carpentry'  ><FontAwesomeIcon icon={faCouch}  /></button>
                <button  className='  p-4 spin-hover serv icon  rotate-[120deg] h-max absolute bottom-40 right-16   rounded-full glass px-4  ' name='Automobile Services'  ><FontAwesomeIcon icon={faCar}  /></button>
                <button  className='  p-4 spin-hover serv icon  rotate-[150deg] h-max absolute bottom-16 right-36  rounded-full glass px-3  ' name='Kitchen Remodelling'  ><FontAwesomeIcon icon={faFireBurner}  /></button>
                <button  className='  p-4 spin-hover serv icon  rotate-180  h-max absolute bottom-8 left-1/2 -translate-x-1/2   rounded-full glass px-3  ' name='Solar Plant'  ><FontAwesomeIcon icon={faSolarPanel}  /></button>
                <button  className='  p-4 spin-hover serv icon  rotate-[210deg] h-max absolute bottom-16 left-36  rounded-full glass px-3  ' name='IT Solutions'  ><FontAwesomeIcon icon={faComputer}  /></button>
                <button className='  p-4 spin-hover serv icon  rotate-[240deg] h-max absolute bottom-40 left-16  rounded-full glass px-6  ' name='Painting'  ><FontAwesomeIcon icon={faBrush}  /></button>
                <button  className='  p-4 spin-hover serv icon  rotate-[270deg] h-max absolute top-1/2 left-8 -translate-y-1/2   rounded-full glass px-4  ' name='Computer Servives'  ><FontAwesomeIcon icon={faScrewdriverWrench}  /></button>
                <button  className='  p-4 spin-hover serv icon  rotate-[300deg] h-max absolute top-40 left-16  rounded-full glass px-3  ' name='Home Application'  ><FontAwesomeIcon icon={faHouseChimneyUser}  /></button>
                <button  className=' p-4 spin-hover serv icon  rotate-[330deg] h-max absolute top-16 left-36  rounded-full glass px-4  ' name='Interior '  ><FontAwesomeIcon icon={faPalette}  /></button>
                
            </div>
            
        </div>

        </div>
    </main>

  )
}

export default Loading