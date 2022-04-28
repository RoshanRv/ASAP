import React from 'react'
import RequestDetailsSnippet from './RequestDetailsSnippet'

const RequestDetails = () => {

    const data=[
        {
            name:'Raja',
            phone:78977898,
            service:'plumbing',
            details:'asdasdasdasd',
            address:'12,tet,asdas,sadsddsa'
        },
        {
            name:'Ram',
            phone:7891298,
            service:'plumbing',
            details:'asdasdasdasd',
            address:'12,tuyityruyrtyddsa'
        },
        {
            name:'Roy',
            phone:95377898,
            service:'plumbing',
            details:'asdsfdfdsdasd',
            address:'12,bfdsfhsrh,sadsddsa'
        }
    ]

  return (
    <main className='md:p-4 p-2 bg-gradient-to-t from-[rgba(91,236,255,255)] to-[#3aa5fd] min-h-screen'>
        <div className="flex justify-center flex-col w-full h-full text-center">
            <h1 className='md:text-5xl text-2xl capitalize mt-4 text-white'>Plumbing Requests</h1>
            {/*         Requests         */}
            <div className="grid grid-cols-1 mx-auto mt-8 gap-6 w-3/4 md:w-1/2">
                {data.map((data,i)=><RequestDetailsSnippet data={data} key={i}/>)}
            </div>
        </div>
    </main>
  )
}

export default RequestDetails