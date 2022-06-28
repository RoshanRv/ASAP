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


    const serviceList =  [electrician,auto,cleaner,plumber,solar,painter,interior,carpenter,computer]
    
    const [aniIndex,setAniIndex]=useState(0)

    const temp =  ['electrician','automobile','cleaning','plumbing','painting','carpentry','IT']
    const serviceListSlider =  ['electrician','automobile','cleaning','plumbing','painting','carpentry','IT']
    const [randomServiceList,setRandomServiceList] = useState(()=>{
        let dummy = []
        serviceListSlider.forEach((data)=>{
            const rand = Math.floor(Math.random()*temp.length)
            dummy.push(temp[rand])
            temp.splice(rand,1)
        })
        return dummy
    })

    useEffect(()=>{

        //      updating aniIndex

        const interval = setInterval(()=>{
            setAniIndex(e=>{
                if(e>=randomServiceList.length-1)return 0
                return e+1
            })
        },1500)


        return ()=>{
            clearInterval(interval)
        }
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
                    <em><div className='my-6 lg:text-2xl flex items-center gap-x-2 text-xl transition-all slideRight duration-[500ms] text-dRed text-sha' style={{animationDelay:'200ms'}} >We Provide Best 
                    <div className='h-[2.5rem] relative bg-white rounded-lg text-lRed my-2 px-2 w-max  overflow-hidden'>
                    <div className=' transition-all duration-700 ' style={{transform:`translateY(calc(${aniIndex*(-2.23)}rem))`}} >
                        {randomServiceList.map((data,i)=>(
                            <h1 key={i} className='capitalize my-1 text-center lg:text-2xl' >{data}</h1>
                        ))}
                    </div>
                </div>
                     Services</div></em>

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

            <div className="relative rounded-full text-4xl slideLeft h-[40rem] w-[40rem] bg-gray-00  flex gap- flex-wrap transition-all duration-[500ms] text-lRed" >
               
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