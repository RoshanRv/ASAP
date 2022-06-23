import React, { useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import ServicesInfo from './ServicesInfo'


const DetailsPage = () => {

    const {service} = useParams()

  return (
    <main className='p-6 lg:p-2 lg:pt-24 bg-mBlack min-h-[100vh]'>
        <section className='flex lg:flex-row flex-col gap-x-8 w-full' >
            <aside className='text-whte bg-white h-max text-xl w-max mt-8 shadow-black shadow-xl ' >
                <h1 className='bg-lRed px-6 p-2 text-white  border-b-2 border-black'>Our Services</h1>
                <div className="w-max">
                    <Link to={'/services/electrician'}  ><h1 className={` ${service=='electrician'&&'bg-lBlack text-white'} capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-full `} >Electrician</h1></Link>
                    <Link to={'/services/cleaning'}  ><h1 className={` ${service=='cleaning'&&'bg-lBlack text-white'} capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-full `} >cleaning</h1></Link>
                    <Link to={'/services/solarPlant'}  ><h1 className={` ${service=='solarPlant'&&'bg-lBlack text-white'} capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-full `} >solar Plant</h1></Link>
                    <Link to={'/services/painter'}  ><h1 className={` ${service=='painter'&&'bg-lBlack text-white'} capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-full `} >painter</h1></Link>
                    <Link to={'/services/homeApplication'}  ><h1 className={` ${service=='homeApplication'&&'bg-lBlack text-white'} capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-full `} >home Application</h1></Link>
                    <Link to={'/services/interiorDesign'}  ><h1 className={` ${service=='interiorDesign'&&'bg-lBlack text-white'} capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-full `} >interior Design</h1></Link>
                    <Link to={'/services/kitchenRemodel'}  ><h1 className={` ${service=='kitchenRemodel'&&'bg-lBlack text-white'} capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-full `} >kitchen Remodel</h1></Link>
                    <Link to={'/services/automobileService'}  ><h1 className={` ${service=='automobileService'&&'bg-lBlack text-white'} capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-full `} >automobile Services</h1></Link>
                    <Link to={'/services/computerServices'}  ><h1 className={` ${service=='computerServices'&&'bg-lBlack text-white'} capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-full `} >computer Services</h1></Link>
                    <Link to={'/services/carpentry'}  ><h1 className={` ${service=='carpentry'&&'bg-lBlack text-white'} capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-full `} >carpentry</h1></Link>
                    <Link to={'/services/itSolutions'}  ><h1 className={` ${service=='itSolutions'&&'bg-lBlack text-white'} capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-full `} >IT Solutions</h1></Link>
                    <Link to={'/services/plumbing'}  ><h1 className={` ${service=='plumbing'&&'bg-lBlack text-white'} capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-full `} >plumbing</h1></Link>

                </div>
                
            </aside>

            
            <ServicesInfo/>

        </section>
        

    </main>
  )
}

export default DetailsPage