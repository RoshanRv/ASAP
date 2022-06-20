import React,{useState,useEffect}from 'react'
import Form from './Form'
import AOS from 'aos';
import 'aos/dist/aos.css';
import autoBook from '../../assets/home/autoBook.png'
import carpenterBook from '../../assets/home/carpenterBook.png'
import cleanBook from '../../assets/home/cleanBook.webp'
import computerBook from '../../assets/home/computerBook.png'
import electBook from '../../assets/home/electBook.webp'
import HomeBook from '../../assets/home/HomeBook.png'
import interiorBook from '../../assets/home/interiorBook.png'
import ITBook from '../../assets/home/ITBook.png'
import kitchenBook from '../../assets/home/kitchenBook.svg'
import paintBook from '../../assets/home/paintBook.png'
import plumberBook from '../../assets/home/plumberBook.png'
import solarBook from '../../assets/home/solarBook.png'

export const SectionCard = ({serviceAssets,serviceAssetsIndex,data,setService,setShowForm,animation,index})=>{

    useEffect(()=>{
        AOS.init()
    },[])

    const pics = [electBook,cleanBook,solarBook,paintBook,HomeBook,interiorBook,kitchenBook,autoBook,computerBook,carpenterBook,ITBook,plumberBook]

    return(
        <div  id={data.head} data-aos={animation} className="gass border-4 group gru border-lRed bg-white  relative box-content lg:p-4 p-2 mb-8 transition-all duration-500 " >
            <div className="flex gap-x-3  ">
                <div className="lg:w-[20rem] flex items-center align-middle overflow-hidden">
                    <img src={pics[index]} alt="" className='group-hover:scale-[1.15]  transition-all duration-500' />
                </div>
                <div className='w-full  flex flex-col gap-10'>
                    <h1 className="lg:text-3xl text-xl w-max mx-auto transition-all duration-[500ms] relative mb-4 z-20 overflow-hidden hn   " data-head={data.head} >{data.head}</h1>
                    <p className="text-black text-left">{data.subHead}</p>

                        <div className='flex  w-full justify-between' >
                            <button className='xl:px-6 hover:scale-x-110  lg:px-4 py-2 bg-dRed border-2 border-dBlack rounded-xl w-max mx-auto transition-all duration-[500ms]' >View More</button>

                            <button onClick={(e)=>{
                                setShowForm(true)
                                setService(e.target.name)
                                }} className='xl:px-6 hover:scale-x-110 lg:px-4 py-2 bg-dRed border-2 border-dBlack rounded-xl w-max mx-auto transition-all duration-[500ms]' name={data.head} >Book Now</button>
                        </div>
                </div>
            </div>
            
            
            

        </div>

    )}

const HomeSectionOne = ({serviceAssets,serviceAssetsIndex}) => {

    const [showForm,setShowForm]=useState(false)
    const [service,setService]=useState('')

    const serviceDes = [
        {
            head:'Electrician',
            subHead:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.'
        },
        {
            head:'Cleaning',
            subHead:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.'
        },
        {
            head:'Solar Plant',
            subHead:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.'
        },
        {
            head:'Painter',
            subHead:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.'
        },
        {
            head:'Home Application',
            subHead:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.'
        },
        {
            head:'Interior Design',
            subHead:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.'
        },
        {
            head:'Kitchen Remodel',
            subHead:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.'
        },
        {
            head:'Automobile Service',
            subHead:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.'
        },
        {
            head:'Computer Services',
            subHead:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.'
        },
        {
            head:'Carpentry',
            subHead:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.'
        },
        {
            head:'IT Solutions',
            subHead:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.'
        },
        {
            head:'Plumbing',
            subHead:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, maiores.'
        },
    ]
//style={{color:serviceAssets[serviceAssetsIndex].bgColor}}
  return (
    <section className='px-6 pt-24 bg-mBlack  text-center -z-10'>
        <h1 className="lg:text-6xl text-white bg-mBlack  text-4xl tex-sha transition-all duration-[500ms] hov overflow-hidden" data-head='Book Our Services' >Book Our Services</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1  mt-10 gap-16 -z-10">
            {serviceDes.map((data,i)=>(<SectionCard key={i} data={data} animation={(i+1)%2==0?'fade-left':'fade-right'}  setService={setService} setShowForm={setShowForm} service={service} serviceAssets={serviceAssets} serviceAssetsIndex={serviceAssetsIndex} index={i} />))}
        </div>
        <Form data={serviceAssets[serviceAssetsIndex]} serviceData={serviceDes} setService={setService} service={service} showForm={showForm} setShowForm={setShowForm} />
    </section>
  )
}

export default HomeSectionOne

