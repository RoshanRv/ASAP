import React,{useState,useEffect}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug ,faBroom,} from '@fortawesome/free-solid-svg-icons'
import { faToilet,faCouch,faBrush,faComputer,faSolarPanel,faFireBurner,faCar } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench,faHouseChimneyUser,faPalette } from '@fortawesome/free-solid-svg-icons'
const HomeHero = () => {

    const [services,setService]=useState('Services')


    useEffect(()=>{


        const btn = document.querySelectorAll('.serv')
        btn.forEach(service=>{
            service.addEventListener('mouseenter' , ()=>{
                console.log(service)

                if(services!=service.name){
                    setService(service.name)
                }

                
            })

            service.addEventListener('mouseleave',()=>{
                setService('Services')
            })
        })
        // console.log(btn[0].name)

    },[])

  return (
    <section className='min-h-screen hero-bg'>

    <span class="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-red-400 relative inline-block">
        <span class="relative text-white text-8xl ">ASAP !!!</span>
    </span>

        {/*    Hero Spinner */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">

            <div className=" relative rounded-full text-4xl  h-[40rem] w-[40rem] bg-gray-00  flex gap- flex-wrap ">
                {/*         Services   */}
                <h1 className=" absolute top-1/2 text-center -translate-y-full text-white border-2 w-max   px-4 py-2 rounded-lg left-1/2 -translate-x-1/2">{services}</h1>
                {/*   */}
                <div className="w-full h-full rotate">
                    <button className='border-2 serv border-white  p-4 spin-hover text-white h-max absolute top-8 left-1/2 -translate-x-1/2  rounded-full px-6  ' name='Electrician' ><FontAwesomeIcon icon={faPlug}/></button>
                    <button className='border-2 serv border-white  p-4 spin-hover text-white rotate-[30deg] h-max absolute top-16 right-36  rounded-full px-3  ' name='Cleaning' ><FontAwesomeIcon icon={faBroom}/></button>
                    <button className='border-2 serv border-white  p-4 spin-hover text-white rotate-[60deg] h-max absolute top-40 right-16  rounded-full px-4  ' name='Plumbing' ><FontAwesomeIcon icon={faToilet}/></button>
                    <button className='border-2 serv border-white  p-4 spin-hover text-white rotate-90 h-max absolute top-1/2 right-8 -translate-y-1/2 rounded-full px-3  ' name='Carpenter' ><FontAwesomeIcon icon={faCouch}/></button>
                    <button className='border-2 serv border-white  p-4 spin-hover text-white rotate-[120deg] h-max absolute bottom-40 right-16   rounded-full px-4  ' name='Automobile Services' ><FontAwesomeIcon icon={faCar}/></button>
                    <button className='border-2 serv border-white  p-4 spin-hover text-white rotate-[150deg] h-max absolute bottom-16 right-36  rounded-full px-3  ' name='Kitchen Remodelling' ><FontAwesomeIcon icon={faFireBurner}/></button>
                    <button className='border-2 serv border-white  p-4 spin-hover text-white rotate-180  h-max absolute bottom-8 left-1/2 -translate-x-1/2   rounded-full px-3  ' name='Solar Plant' ><FontAwesomeIcon icon={faSolarPanel}/></button>
                    <button className='border-2 serv border-white  p-4 spin-hover text-white rotate-[210deg] h-max absolute bottom-16 left-36  rounded-full px-3  ' name='IT Solutions' ><FontAwesomeIcon icon={faComputer}/></button>
                    <button className='border-2 serv border-white  p-4 spin-hover text-white rotate-[240deg] h-max absolute bottom-40 left-16  rounded-full px-6  ' name='Painting' ><FontAwesomeIcon icon={faBrush}/></button>
                    <button className='border-2 serv border-white  p-4 spin-hover text-white rotate-[270deg] h-max absolute top-1/2 left-8 -translate-y-1/2   rounded-full px-4  ' name='Computer Services' ><FontAwesomeIcon icon={faScrewdriverWrench}/></button>
                    <button className='border-2 serv border-white  p-4 spin-hover text-white rotate-[300deg] h-max absolute top-40 left-16  rounded-full px-3  ' name='Home Application' ><FontAwesomeIcon icon={faHouseChimneyUser}/></button>
                    <button className='border-2 serv border-white p-4 spin-hover text-white rotate-[330deg] h-max absolute top-16 left-36  rounded-full px-4  ' name='Interior ' ><FontAwesomeIcon icon={faPalette}/></button>
                </div>
                
            </div>

        </div>

        
        


    </section>
  )
}

export default HomeHero