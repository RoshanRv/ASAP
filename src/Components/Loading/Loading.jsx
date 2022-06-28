import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug ,faBroom,} from '@fortawesome/free-solid-svg-icons'
import { faToilet,faCouch,faBrush,faComputer,faSolarPanel,faFireBurner,faCar } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench,faHouseChimneyUser,faPalette,faWind} from '@fortawesome/free-solid-svg-icons'

const Loading = () => {

    const [aniIndex,setAniIndex]=useState(0)

    const temp =  ['electrician','automobile','cleaning','plumbing','painting','carpentry','IT']
    const serviceList =  ['electrician','automobile','cleaning','plumbing','painting','carpentry','IT']
    const [randomServiceList,setRandomServiceList] = useState(()=>{
        let dummy = []
        serviceList.forEach((data)=>{
            const rand = Math.floor(Math.random()*temp.length)
            dummy.push(temp[rand])
            temp.splice(rand,1)
        })
        return dummy
    })


    //      Remove and Add Header
    useEffect(()=>{

        const header = document.getElementById('header')
        header.classList.add('hidden')

        //      updating aniIndex

        const interval = setInterval(()=>{
            setAniIndex(e=>{
                if(e>=serviceList.length-1)return 0
                return e+1
            })
        },1500)

        


        return ()=>{
            header.classList.remove('hidden')
            clearInterval(interval)
        }
    },[])



  return (
    <main className='bg-mBlack font-prompt w-full h-screen overflow-hidden flex justify-center items-center'>
         {/*    Hero Spinner */}
         <div className="  scale-0 md:scale-[.75] lg:scale-[.80] xl:scale-[.95]  -z-0  ">

        <div className="relative rounded-full text-4xl animate-zoomInOut h-[40rem] w-[40rem] bg-gray-00  flex gap- flex-wrap transition-all duration-[500ms] text-lRed" >
            {/*         Services   */}
            <div className=" absolute  top-1/2 glass text-center -translate-y-1/2 text-white  w-max   px-4 py-2 rounded-lg left-1/2 -translate-x-1/2"  >
                We Provide<br/>Quality<br/> 
                <div className='h-[2.8rem] bg-white text-lRed rounded-full  my-2 px-2  overflow-hidden'>
                    <div className=' transition-all duration-700' style={{transform:`translateY(calc(${aniIndex*(-2.8)}rem))`}} >
                        {randomServiceList.map((data,i)=>(
                            <h1 key={i} className='capitalize my-1' >{data}</h1>
                        ))}
                    </div>
                </div>
                Services
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


export const ServiceLoading = ({id})=>{

    

    const [serviceInfo,setServiceInfo] = useState([
        {
            id:'electrician',
            img:'electrician.png'
            
        },
        {
            id:'cleaning',
            img:'cleaner.png'
            
            
        },
        {
            id:'solarPlant',
            img:'solar.png'
            
        },
        {
            id:'painter',
            img:'painter.png'
            
        },
        {
            id:'homeApplication',
            img:'HomeBook.png'
            
        },
        {
            id:'interiorDesign',
            img:'interiorBook.png'
            
        },
        {
            id:'kitchenRemodel',
            img:'kitchenBook.svg'
            
        },
        {
            id:'automobileService',
            img:'auto.png'
            
        },
        {
            id:'computerServices',
            img:'computer.png'
            
        },
        {
            id:'carpentry',
            img:'carpenter.png'
            
        },
        {
            id:'itSolutions',
            img:'ITBook.png'
            
        },
        {
            id:'plumbing',
            img:'plumber.png'
            
        },
    ])

    useEffect(()=>{
        const header = document.getElementById('header')
        header.classList.add('hidden')

        return ()=>{
            header.classList.remove('hidden')
        }

    })

    const serviceImg = serviceInfo.filter((data)=>data.id==id)

    return(
        <main className='bg-mBlack font-prompt w-full h-screen overflow-hidden flex justify-center items-center'>
           

                {/*    Hero Spinner */}
            <div className="absolute top-1/2  scale-0 md:scale-[.75] lg:scale-[.80] xl:scale-[.85] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10  ">

                <div className="relative rounded-full text-4xl animate-zoomInOut h-[40rem] w-[40rem] bg-gray-00  flex gap- flex-wrap transition-all duration-[500ms] text-lRed" >
                
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

            <div className="z-50 h-96 w-96 ">
                <img src={require(`../../assets/home/${serviceImg[0].img}`)} alt="" />
            </div>

        </main>
    )
}