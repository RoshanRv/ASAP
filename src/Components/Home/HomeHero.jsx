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

const HomeHero = () => {

    const [services,setService]=useState('Services')

    const [serviceAssetsIndex,setServiceAssetsIndex]=useState(0)
    let count = useRef(0)

    const serviceAssets = [
        {
            bg:electrician,
            bgColor:'#5be4a9',
            color:'#9df5c9',
        },
        {
            bg:auto,
            bgColor:'#e15a44',
            color:'#7d86b3',
        },
        {
            bg:cleaner,
            bgColor:'#fddf49',
            color:'#049cde',
        },
        {
            bg:plumber,
            bgColor:'#509bef',
            color:'#dfe3ff',
        },
        {
            bg:solar,
            bgColor:'#fb9847',
            color:'#8db4f4',
        },
        {
            bg:painter,
            bgColor:'#fb9847',
            color:'#2b468a',
        },
        {
            bg:interior,
            bgColor:'#d269cc',
            color:'#e8a0df',
        },
        {
            bg:carpenter,
            bgColor:'#f88c51',
            color:'#ffdab4',
        },
        {
            bg:computer,
            bgColor:'#f5423c',
            color:'#266cdf',
        },
    ]



    useEffect(()=>{

        const timer = setInterval(()=>{
             setServiceAssetsIndex(e=>{
                if(e<serviceAssets.length-1){
                    return e+1
                }else{
                    return 0
                }
            })
            
        },3000)


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

        return ()=> clearInterval(timer)

    },[])

  return (
    <section className='min-h-[135vh] px-6 -z-50 transition-all duration-1000 overflow-hidden' style={{backgroundColor:serviceAssets[serviceAssetsIndex].color}} >
        {/* <div className="bg-[#fddf59]"></div> */}

    {/* <span class="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-red-400 relative inline-block">
        <span class="relative text-white text-8xl ">ASAP !!!</span>
    </span> */}
    <div className=" h-full pt-32  -z-50">
        <div className=" min-h-[70vh]  rounded-xl flex justify-center items-center">

            <div className='w-1/2 h-full text-left align-middle'>
                <div className="w-mx w-3/4 mx-auto">
                    <div className="flex text-sha items-center gap-x-10 text-9xl  font-bold transition-all duration-1000 " style={{color:serviceAssets[serviceAssetsIndex].bgColor}} > 
                        <h1 className="" ><em>ASAP</em></h1>
                        <FontAwesomeIcon  icon={faWind} className='text-8xl' style={{filter:'drop-shadow(2px 1px 4px)'}}/>
                    </div>               
                    <p className='my-6 text-2xl transition-all duration-1000 text-white'  ><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.</em></p>

                </div>
                

            </div>
            <div className='w-1/2  h-max self-end text-center  flex justify-center flex-col items-center'>
                {serviceAssets.map((data,i)=>(
                    // <div className='w-max mx-auto text-center'>
                        <img src={data.bg} alt="" className={`h-[32rem]  mx-auto absolute top-1/2 left-3/4  -translate-y-1/2 -translate-x-1/2 transition-all duration-1000 ${serviceAssetsIndex==i?' opacity-100':'opacity-0'} `} />
                    // </div>
                ))}
                
            </div>

        </div>
       
    </div>

        {/*    Hero Spinner */}
        <div className="absolute top-full left-1/2 -z-0 -translate-x-1/2 -translate-y-1/2">

            <div className="relative rounded-full text-4xl  h-[40rem] w-[40rem] bg-gray-00  flex gap- flex-wrap transition-all duration-1000" style={{color:serviceAssets[serviceAssetsIndex].bgColor}} >
                {/*         Services   */}
                <h1 className=" absolute  top-1/2 glass text-center -translate-y-full  w-max   px-4 py-2 rounded-lg left-1/2 -translate-x-1/2"  >{services}</h1>
                {/*   */}
                <div className="w-full h-full rotate ">
                    <button className='  p-4 spin-hover serv  h-max absolute top-8 left-1/2 -translate-x-1/2  rounded-full glass px-6  ' name='Electrician'  ><FontAwesomeIcon icon={faPlug}  /></button>
                    <button className='  p-4 spin-hover serv  rotate-[30deg] h-max absolute top-16 right-36  rounded-full glass px-3  ' name='Cleaning'  ><FontAwesomeIcon icon={faBroom}  /></button>
                    <button className='  p-4 spin-hover serv  rotate-[60deg] h-max absolute top-40 right-16  rounded-full glass px-4  ' name='Plumbing'  ><FontAwesomeIcon icon={faToilet}  /></button>
                    <button className='  p-4 spin-hover serv  rotate-90 h-max absolute top-1/2 right-8 -translate-y-1/2 rounded-full glass px-3  ' name='Carpenter'  ><FontAwesomeIcon icon={faCouch}  /></button>
                    <button className='  p-4 spin-hover serv  rotate-[120deg] h-max absolute bottom-40 right-16   rounded-full glass px-4  ' name='Automobile Services'  ><FontAwesomeIcon icon={faCar}  /></button>
                    <button className='  p-4 spin-hover serv  rotate-[150deg] h-max absolute bottom-16 right-36  rounded-full glass px-3  ' name='Kitchen Remodelling'  ><FontAwesomeIcon icon={faFireBurner}  /></button>
                    <button className='  p-4 spin-hover serv  rotate-180  h-max absolute bottom-8 left-1/2 -translate-x-1/2   rounded-full glass px-3  ' name='Solar Plant'  ><FontAwesomeIcon icon={faSolarPanel}  /></button>
                    <button className='  p-4 spin-hover serv  rotate-[210deg] h-max absolute bottom-16 left-36  rounded-full glass px-3  ' name='IT Solutions'  ><FontAwesomeIcon icon={faComputer}  /></button>
                    <button className='  p-4 spin-hover serv  rotate-[240deg] h-max absolute bottom-40 left-16  rounded-full glass px-6  ' name='Painting'  ><FontAwesomeIcon icon={faBrush}  /></button>
                    <button className='  p-4 spin-hover serv  rotate-[270deg] h-max absolute top-1/2 left-8 -translate-y-1/2   rounded-full glass px-4  ' name='Computer Services'  ><FontAwesomeIcon icon={faScrewdriverWrench}  /></button>
                    <button className='  p-4 spin-hover serv  rotate-[300deg] h-max absolute top-40 left-16  rounded-full glass px-3  ' name='Home Application'  ><FontAwesomeIcon icon={faHouseChimneyUser}  /></button>
                    <button className=' p-4 spin-hover serv  rotate-[330deg] h-max absolute top-16 left-36  rounded-full glass px-4  ' name='Interior '  ><FontAwesomeIcon icon={faPalette}  /></button>
                </div>
                
            </div>

        </div>

        {/* <div className="h-[50vh] duration-" style={{backgroundColor:serviceAssets[serviceAssetsIndex].color}} ></div> */}

        
        


    </section>
  )
}

export default HomeHero