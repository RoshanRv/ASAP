import React,{useState}from 'react'
import Form from './Form'

export const SectionCard = ({serviceAssets,serviceAssetsIndex,data,setService,setShowForm})=>{



    return(<div className="glass lg:p-6 flex justify-center items-center transition-all duration-500 " style={{ border:'4px solid' ,borderColor:serviceAssets[serviceAssetsIndex].color}} >
        <div className='w-3/4'>
            <h1 className="lg:text-3xl transition-all duration-[500ms] mb-4  " style={{color:serviceAssets[serviceAssetsIndex].bgColor,textDecorationLine:'underline',textDecorationColor:serviceAssets[serviceAssetsIndex].color, textUnderlineOffset:'5px'}}>{data.head}</h1>
            <p className="text-black text-left">{data.subHead}</p>
        </div>
        <div className='flex flex-col gap-y-8 w-1/4 justify-center '>
            <button onClick={(e)=>{
                setShowForm(true)
                setService(e.target.name)
                }} className='px-6 py-2 glass w-max mx-auto transition-all duration-[500ms]' style={{backgroundColor:serviceAssets[serviceAssetsIndex].bgColor, borderColor:serviceAssets[serviceAssetsIndex].color}} name={data.head} >Book Now</button>
            <button className='px-6 py-2 glass w-max mx-auto transition-all duration-[500ms]' style={{backgroundColor:serviceAssets[serviceAssetsIndex].bgColor, borderColor:serviceAssets[serviceAssetsIndex].color}} >View More</button>
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
        <h1 className="lg:text-6xl text-sha transition-all duration-[500ms]" style={{color:serviceAssets[serviceAssetsIndex].bgColor}}>Book Our Services</h1>
        <div className="grid grid-cols-2 mt-10 gap-16">
            {serviceDes.map((data,i)=>(<SectionCard key={i} data={data}  setService={setService} setShowForm={setShowForm} service={service} serviceAssets={serviceAssets} serviceAssetsIndex={serviceAssetsIndex}  />))}
        </div>
        <Form data={serviceAssets[serviceAssetsIndex]} serviceData={serviceDes} setService={setService} service={service} showForm={showForm} setShowForm={setShowForm} />
    </section>
  )
}

export default HomeSectionOne

