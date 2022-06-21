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
    

    // console.log(document.documentElement)

    useEffect(()=>{

        document.documentElement.style.setProperty('--scroll-bg',serviceAssets[serviceAssetsIndex].color)
        document.documentElement.style.setProperty('--scroll-thumb',serviceAssets[serviceAssetsIndex].bgColor)

    },[serviceAssetsIndex])

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
    <section className='h-[100vh] fix text-center px-6 transition-all  items-cener flex flex-row-reverse  bg-mBlack  duration-[500ms] overflow-hidden'  >
       

    <div className=" h-max w-full pt-32 ">
        <div className=" h-full w-full relatve rounded-xl flex  items-cente">
            <div className="w-1/2 h-full"></div>

            <div className='md:w-full w-full z-10 h-full  ea text-left alig-middle'>
                <div className="w-mx w-full mx-auto lass p-4">
                    <div className="flex asap text-sha items-center slideRight text-lRed gap-x-10 lg:text-9xl text-7xl  font-bold transition-all duration-[500ms] "  > 
                        <h1 className="asap" ><em>ASAP</em></h1>
                        <FontAwesomeIcon  icon={faWind} className='lg:text-8xl text-6xl icon-sha' />
                    </div>               
                    <p className='my-6 lg:text-2xl text-xl transition-all slideRight duration-[500ms] text-dRed text-sha' style={{animationDelay:'200ms'}} ><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.</em></p>

                </div>
                

            </div>
            <div className='w-4/12  -z-0  absolute top-1/2 -translate-y-1/2  fadeIn right-1/2 translate-x-1/2 h-screen self-end text-center  hidden md:flex justify-center flex-col items-center'>
                {serviceAssets.map((data,i)=>(
                        
                        <img key={i} src={serviceList[data.bg]} alt="" className={`lg:h-[22rem]  h-[16rem]  mx-auto absolute top-3/4 -translate-y-1/2 right-0 translate-x-1/2 transition-all ease-in-out duration-[2000ms] ${serviceAssetsIndex==i?' opacity-100 scale-100':'opacity-0 scale-75 '} `} />
                ))}
                
            </div>

        </div>
       
    </div>

        {/*    Hero Spinner */}
        <div className="absolute top-[55%]  scale-0 md:scale-[.75] lg:scale-[.80] xl:scale-[.95] -left-[20%] -translate-y-1/2 -z-0  ">

            <div className="relative rounded-full text-4xl animate-zoom h-[40rem] w-[40rem] bg-gray-00  flex gap- flex-wrap transition-all duration-[500ms] text-lRed" >
                {/*         Services   */}
                {/* <h1 className=" absolute  top-1/2 glass text-center -translate-y-full  w-max   px-4 py-2 rounded-lg left-1/2 -translate-x-1/2"  >{services}</h1> */}
                {/*   */}
                {/* <div className="bg-lBlack mix-blend-difference w-32 h-32 rounded-full  absolute right-0 top-1/2 -translate-y-1/2"></div> */}
                <div className="w-full h-full rotate ">
                    <a href='#Electrician' className='  p-4 spin-hover serv icon  h-max absolute top-8 left-1/2 -translate-x-1/2  rounded-full glass px-6  ' name='Electrician'  ><FontAwesomeIcon icon={faPlug}  /></a>
                    <a href='#Cleaning' className='  p-4 spin-hover serv icon  rotate-[30deg] h-max absolute top-16 right-36  rounded-full glass px-3  ' name='Cleaning'  ><FontAwesomeIcon icon={faBroom}  /></a>
                    <a href='#Plumbing' className='  p-4 spin-hover serv icon  rotate-[60deg] h-max absolute top-40 right-16  rounded-full glass px-4  ' name='Plumbing'  ><FontAwesomeIcon icon={faToilet}  /></a>
                    <a href='#Carpentry' className='  p-4 spin-hover serv icon  rotate-90 h-max absolute top-1/2 right-8 -translate-y-1/2 rounded-full glass px-3  ' name='Carpentry'  ><FontAwesomeIcon icon={faCouch}  /></a>
                    <a href='#Automobile Service' className='  p-4 spin-hover serv icon  rotate-[120deg] h-max absolute bottom-40 right-16   rounded-full glass px-4  ' name='Automobile Services'  ><FontAwesomeIcon icon={faCar}  /></a>
                    <a href='#Kitchen Remodel' className='  p-4 spin-hover serv icon  rotate-[150deg] h-max absolute bottom-16 right-36  rounded-full glass px-3  ' name='Kitchen Remodelling'  ><FontAwesomeIcon icon={faFireBurner}  /></a>
                    <a href='#Solar Plant' className='  p-4 spin-hover serv icon  rotate-180  h-max absolute bottom-8 left-1/2 -translate-x-1/2   rounded-full glass px-3  ' name='Solar Plant'  ><FontAwesomeIcon icon={faSolarPanel}  /></a>
                    <a href='#IT Solutions' className='  p-4 spin-hover serv icon  rotate-[210deg] h-max absolute bottom-16 left-36  rounded-full glass px-3  ' name='IT Solutions'  ><FontAwesomeIcon icon={faComputer}  /></a>
                    <a href='#Painter' className='  p-4 spin-hover serv icon  rotate-[240deg] h-max absolute bottom-40 left-16  rounded-full glass px-6  ' name='Painting'  ><FontAwesomeIcon icon={faBrush}  /></a>
                    <a href='#Computer Services' className='  p-4 spin-hover serv icon  rotate-[270deg] h-max absolute top-1/2 left-8 -translate-y-1/2   rounded-full glass px-4  ' name='Computer Servives'  ><FontAwesomeIcon icon={faScrewdriverWrench}  /></a>
                    <a href='#Home Application' className='  p-4 spin-hover serv icon  rotate-[300deg] h-max absolute top-40 left-16  rounded-full glass px-3  ' name='Home Application'  ><FontAwesomeIcon icon={faHouseChimneyUser}  /></a>
                    <a href='#Interior Design' className=' p-4 spin-hover serv icon  rotate-[330deg] h-max absolute top-16 left-36  rounded-full glass px-4  ' name='Interior '  ><FontAwesomeIcon icon={faPalette}  /></a>
                    
                </div>
                
            </div>

        </div>


        
        


    </section>
  )
}

export default HomeHero