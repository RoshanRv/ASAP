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
        <div  data-aos={animation} className="glass lg:p-6 p-4 mb-8 transition-all duration-500 " style={{ border:'4px solid' ,borderColor:serviceAssets[serviceAssetsIndex].color}} >
            <div className="flex justify-center items-center ">
                <div className="">
                    <img src={pics[index]} alt="" />
                </div>
                <div className='w-full items-center flex flex-col gap-y-10'>
                    <h1 className="lg:text-3xl text-xl transition-all duration-[500ms] mb-4  " style={{color:serviceAssets[serviceAssetsIndex].bgColor,textDecorationLine:'underline',textDecorationColor:serviceAssets[serviceAssetsIndex].color, textUnderlineOffset:'5px'}}>{data.head}</h1>
                    <p className="text-black text-left">{data.subHead}</p>

                        <div className='flex  w-full justify-between'>
                            <button className='px-6 py-2 glass w-max mx-auto transition-all duration-[500ms]' style={{backgroundColor:serviceAssets[serviceAssetsIndex].bgColor, borderColor:serviceAssets[serviceAssetsIndex].color}} >View More</button>

                            <button onClick={(e)=>{
                                setShowForm(true)
                                setService(e.target.name)
                                }} className='px-6 py-2 glass w-max mx-auto transition-all duration-[500ms]' style={{backgroundColor:serviceAssets[serviceAssetsIndex].bgColor, borderColor:serviceAssets[serviceAssetsIndex].color}} name={data.head} >Book Now</button>
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
            head:'Solar',
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
            head:'Carpenter',
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

  return (
    <section className='px-6 mt-24 text-center'>
        <h1 className="lg:text-6xl text-4xl text-sha transition-all duration-[500ms]" style={{color:serviceAssets[serviceAssetsIndex].bgColor}}>Book Our Services</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-16">
            {serviceDes.map((data,i)=>(<SectionCard key={i} data={data} animation={(i+1)%2==0?'fade-left':'fade-right'}  setService={setService} setShowForm={setShowForm} service={service} serviceAssets={serviceAssets} serviceAssetsIndex={serviceAssetsIndex} index={i} />))}
        </div>
        <Form data={serviceAssets[serviceAssetsIndex]} serviceData={serviceDes} setService={setService} service={service} showForm={showForm} setShowForm={setShowForm} />
    </section>
  )
}

export default HomeSectionOne

