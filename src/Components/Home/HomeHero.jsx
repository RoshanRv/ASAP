import React,{useState,useEffect,useRef}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug ,faBroom,} from '@fortawesome/free-solid-svg-icons'
import { faToilet,faCouch,faBrush,faComputer,faSolarPanel,faFireBurner,faCar } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench,faHouseChimneyUser,faPalette,faWind} from '@fortawesome/free-solid-svg-icons'

//      Images
import electrician from '../../assets/home/electrician.png'
import solar from '../../assets/home/solar.png'
import plumber from '../../assets/home/plumber.png'
import painter from '../../assets/home/painter.png'
import interior from '../../assets/home/interior.png'
import computer from '../../assets/home/computer.png'
import auto from '../../assets/home/auto.png'
import carpenter from '../../assets/home/carpenter.png'
import cleaner from '../../assets/home/cleaner.png'





const HomeHero = ({serviceAssets,serviceAssetsIndex}) => {

    const [services,setService]=useState('Services')

    const serviceList =  [electrician,auto,cleaner,plumber,solar,painter,interior,carpenter,computer]
    



    useEffect(()=>{

        const btn = document.querySelectorAll('.serv')
        btn.forEach(service=>{
            service.addEventListener('mouseenter' , ()=>{

                if(services!=service.name){
                    setService(service.name)
                }

                
            })

            service.addEventListener('mouseleave',()=>{
                setService('Services')
            })
        })


    },[])

  return (
    <section className='min-h-[140vh] px-6 transition-all duration-[500ms] overflow-hidden' style={{backgroundColor:serviceAssets[serviceAssetsIndex].color , borderBottom:`6px solid ${serviceAssets[serviceAssetsIndex].bgColor }`}}  >
        {/* <div className="bg-[#fddf59]"></div> */}

    {/* <span class="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-red-400 relative inline-block">
        <span class="relative text-white text-8xl ">ASAP !!!</span>
    </span> */}
    <div className=" h-full pt-32  -z-50">
        <div className=" min-h-[70vh] relative rounded-xl flex  items-center">

            <div className='w-1/2 h-full fadeIn text-left heo align-middle'>
                <div className="w-mx w-3/4 mx-auto">
                    <div className="flex text-sha items-center gap-x-10 lg:text-9xl text-7xl  font-bold transition-all duration-[500ms] " style={{color:serviceAssets[serviceAssetsIndex].bgColor}} > 
                        <h1 className="" ><em>ASAP</em></h1>
                        <FontAwesomeIcon  icon={faWind} className='lg:text-8xl text-6xl icon-sha' />
                    </div>               
                    <p className='my-6 lg:text-2xl text-xl transition-all duration-[500ms] text-white'  ><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.</em></p>

                </div>
                

            </div>
            <div className='w-1/2 absolute top-0 fadeIn right-1/2 translate-x-1/2 h-max self-end text-center  flex justify-center flex-col items-center'>
                {serviceAssets.map((data,i)=>(
                    // <div className='w-max mx-auto text-center'>
                        <img src={serviceList[data.bg]} alt="" className={`lg:h-[32rem] h-[26rem]  mx-auto absolute top-0 right-0 translate-x-1/2 transition-all duration-[500ms] ${serviceAssetsIndex==i?' opacity-100':'opacity-0'} `} />
                    // </div>
                ))}
                
            </div>

        </div>
       
    </div>

        {/*    Hero Spinner */}
        <div className="absolute top-full scale-0 md:scale-75 lg:scale-[.85] xl:scale-90 left-1/2 -z-0 -translate-x-1/2 -translate-y-1/2">

            <div className="relative rounded-full text-4xl animate-zoom h-[40rem] w-[40rem] bg-gray-00  flex gap- flex-wrap transition-all duration-[500ms]" style={{color:serviceAssets[serviceAssetsIndex].bgColor}} >
                {/*         Services   */}
                <h1 className=" absolute  top-1/2 glass text-center -translate-y-full  w-max   px-4 py-2 rounded-lg left-1/2 -translate-x-1/2"  >{services}</h1>
                {/*   */}
                <div className="w-full h-full rotate ">
                    <button className='  p-4 spin-hover serv icon  h-max absolute top-8 left-1/2 -translate-x-1/2  rounded-full glass px-6  ' name='Electrician'  ><FontAwesomeIcon icon={faPlug}  /></button>
                    <button className='  p-4 spin-hover serv icon  rotate-[30deg] h-max absolute top-16 right-36  rounded-full glass px-3  ' name='Cleaning'  ><FontAwesomeIcon icon={faBroom}  /></button>
                    <button className='  p-4 spin-hover serv icon  rotate-[60deg] h-max absolute top-40 right-16  rounded-full glass px-4  ' name='Plumbing'  ><FontAwesomeIcon icon={faToilet}  /></button>
                    <button className='  p-4 spin-hover serv icon  rotate-90 h-max absolute top-1/2 right-8 -translate-y-1/2 rounded-full glass px-3  ' name='Carpenter'  ><FontAwesomeIcon icon={faCouch}  /></button>
                    <button className='  p-4 spin-hover serv icon  rotate-[120deg] h-max absolute bottom-40 right-16   rounded-full glass px-4  ' name='Automobile Services'  ><FontAwesomeIcon icon={faCar}  /></button>
                    <button className='  p-4 spin-hover serv icon  rotate-[150deg] h-max absolute bottom-16 right-36  rounded-full glass px-3  ' name='Kitchen Remodelling'  ><FontAwesomeIcon icon={faFireBurner}  /></button>
                    <button className='  p-4 spin-hover serv icon  rotate-180  h-max absolute bottom-8 left-1/2 -translate-x-1/2   rounded-full glass px-3  ' name='Solar Plant'  ><FontAwesomeIcon icon={faSolarPanel}  /></button>
                    <button className='  p-4 spin-hover serv icon  rotate-[210deg] h-max absolute bottom-16 left-36  rounded-full glass px-3  ' name='IT Solutions'  ><FontAwesomeIcon icon={faComputer}  /></button>
                    <button className='  p-4 spin-hover serv icon  rotate-[240deg] h-max absolute bottom-40 left-16  rounded-full glass px-6  ' name='Painting'  ><FontAwesomeIcon icon={faBrush}  /></button>
                    <button className='  p-4 spin-hover serv icon  rotate-[270deg] h-max absolute top-1/2 left-8 -translate-y-1/2   rounded-full glass px-4  ' name='Computer Servives'  ><FontAwesomeIcon icon={faScrewdriverWrench}  /></button>
                    <button className='  p-4 spin-hover serv icon  rotate-[300deg] h-max absolute top-40 left-16  rounded-full glass px-3  ' name='Home Application'  ><FontAwesomeIcon icon={faHouseChimneyUser}  /></button>
                    <button className=' p-4 spin-hover serv icon  rotate-[330deg] h-max absolute top-16 left-36  rounded-full glass px-4  ' name='Interior '  ><FontAwesomeIcon icon={faPalette}  /></button>
                </div>
                
            </div>

        </div>


        
        


    </section>
  )
}

export default HomeHero