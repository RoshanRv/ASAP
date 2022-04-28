import React from 'react'
import RequestSnippet from './RequestSnippet'

const RequestPage = () => {

    const data= [
        {
            service:'Cleaning',
            requests:5
        },
        {
            service:'Electrician',
            requests:9
        },
        {
            service:'Plumbing',
            requests:8
        },
        {
            service:'Carpentry',
            requests:14
        },
        {
            service:'Interior & 3D Design',
            requests:22
        },
        {
            service:'Painting',
            requests:22
        },
        {
            service:'Kitchen Remodeling',
            requests:22
        },
        {
            service:'Computer Services',
            requests:22
        },
        {
            service:'Home Application',
            requests:22
        },
        {
            service:'Automobile Services',
            requests:22
        },
        {
            service:'Solar Plant',
            requests:22
        },
        {
            service:'IT Solutions',
            requests:22
        },
    ]

  return (
    <main className='md:p-4 p-2 bg-gradient-to-t from-[rgba(91,236,255,255)] to-[#3aa5fd] min-h-screen'>
        <div className="flex justify-center flex-col w-full h-full text-center">
            <h1 className='md:text-5xl text-2xl capitalize mt-4 text-white'>Requests</h1>
            {/*         GRID         */}
            <div className="grid grid-cols-2 md:grid-cols-3 mt-8 gap-6">
                {data.map((data,i)=><RequestSnippet data={data} key={i} index={i}/>)}
            </div>
        </div>
    </main>
  )
}

export default RequestPage