import React from 'react'
import { Link } from 'react-router-dom'

const DetailsPage = () => {
  return (
    <main className='p-6 lg:p-2 lg:pt-24 bg-mBlack '>
        <section className='flex lg:flex-row flex-col gap-x-8 w-full' >
            <aside className='text-whte bg-white text-xl w-max mt-8' >
                <h1 className='bg-lRed px-6 p-2 text-white  border-b-2 border-black'>Our Services</h1>
                <Link to={'electrician'}  ><h1 className='capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-max ' >Electrician</h1></Link>
                <Link to={'cleaning'}  ><h1 className='capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-max ' >cleaning</h1></Link>
                <Link to={'solarPlant'}  ><h1 className='capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-max ' >solar Plant</h1></Link>
                <Link to={'painter'}  ><h1 className='capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-max ' >painter</h1></Link>
                <Link to={'homeApplication'}  ><h1 className='capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-max ' >home Application</h1></Link>
                <Link to={'interiorDesign'}  ><h1 className='capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-max ' >interior Design</h1></Link>
                <Link to={'kitchenRemodel'}  ><h1 className='capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-max ' >kitchen Remodel</h1></Link>
                <Link to={'automobileService'}  ><h1 className='capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-max ' >automobile Services</h1></Link>
                <Link to={'computerServices'}  ><h1 className='capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-max ' >computer Services</h1></Link>
                <Link to={'carpentry'}  ><h1 className='capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-max ' >carpentry</h1></Link>
                <Link to={'itSolutions'}  ><h1 className='capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-max ' >IT Solutions</h1></Link>
                <Link to={'plumbing'}  ><h1 className='capitalize p-1 px-6 hover:bg-lBlack transition-all hover:text-white w-max ' >plumbing</h1></Link>
            </aside>

            <div className='bg-red-500 w-full mt-8 '>

            </div>

        </section>
        

    </main>
  )
}

export default DetailsPage