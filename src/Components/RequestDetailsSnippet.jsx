import React from 'react'

const RequestDetailsSnippet = ({data}) => {
  return (
    <div className='w-full'>
        <div className="bg-white rounded-md p-4 flex flex-col gap-2 w-full ">
            <div className="flex items-center text-left  ">
                <h1  className=' w-1/2'>Name:</h1>
                <h1 className=' w-1/2'>{data.name}</h1>
            </div>
            <div className="flex items-center text-left">
                <h1 className='w-1/2'>Phone Number:</h1>
                <h1 className='w-1/2'>{data.phone}</h1>
            </div>
            <div className="flex items-center text-left">
                <h1  className='w-1/2'>Service Requested:</h1>
                <h1  className='w-1/2'>{data.service}</h1>
            </div>
            <div className="flex items-center text-left">
                <h1 className='w-1/2'>Service Details:</h1>
                <h1 className='w-1/2'>{data.details}</h1>
            </div>
            <div className="flex items-center text-left">
                <h1 className='w-1/2'>Address:</h1>
                <h1 className='w-1/2'>{data.address}</h1>
            </div>
        </div>
    </div>
  )
}

export default RequestDetailsSnippet