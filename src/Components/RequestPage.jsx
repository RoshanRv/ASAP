import React, { useState } from 'react'
import RequestSnippet from './RequestSnippet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faGear, faUser } from '@fortawesome/free-solid-svg-icons'

const RequestPage = () => {

    const [showAdminSettings, setShowAdminSettings] = useState(false)

    const data = [
        {
            service: 'Cleaning',
            requests: 5
        },
        {
            service: 'Electrician',
            requests: 9
        },
        {
            service: 'Plumbing',
            requests: 8
        },
        {
            service: 'Carpentry',
            requests: 14
        },
        {
            service: 'Interior & 3D Design',
            requests: 22
        },
        {
            service: 'Painting',
            requests: 22
        },
        {
            service: 'Kitchen Remodeling',
            requests: 22
        },
        {
            service: 'Computer Services',
            requests: 22
        },
        {
            service: 'Home Application',
            requests: 22
        },
        {
            service: 'Automobile Services',
            requests: 22
        },
        {
            service: 'Solar Plant',
            requests: 22
        },
        {
            service: 'IT Solutions',
            requests: 22
        },
    ]

    return (
        <main className='  md:px-4  bg-gradient-to-t from-amber-300 to-amber-500 min-h-screen overflow-hidden'>

            {/*         Side Menu    */}
            <div className='w-20 bg-black shadow-xl shadow-black/60 h-screen fixed top-12 left-0' >
                <div className="right-1/2 top-10 cursor-pointer absolute group">
                    <FontAwesomeIcon icon={faHome} className='text-white   hover:bg-gray-500 rounded-full transition-colors p-2 translate-x-1/2 text-2xl' />
                    <span className='bg-black text-white  absolute p-2 rounded-md shadow-xl group-hover:scale-100 scale-0 transition-all  translate-x-12 '>Home</span>
                </div>

                <div className='right-1/2 bottom-40 absolute group cursor-pointer'>
                    <FontAwesomeIcon icon={faUser} className='text-white  hover:bg-gray-500 rounded-full transition-colors p-2 translate-x-1/2 text-2xl' />
                    <span className='bg-black text-white  absolute p-2 rounded-md shadow-xl group-hover:scale-100 scale-0 transition-all  translate-x-12 '>Admin</span>
                </div>
                <div className="right-1/2 bottom-20 absolute cursor-pointer group " onClick={() => setShowAdminSettings(e => !e)}>
                    <FontAwesomeIcon icon={faGear} className='text-white   hover:bg-gray-500 rounded-full transition-colors p-2 translate-x-1/2 text-2xl' />
                    <span className='bg-black text-white  absolute p-2 rounded-md shadow-xl group-hover:scale-100 scale-0 transition-all  translate-x-12 '>Settings</span>
                    <div className={`bg-black p-4 rounded-lg absolute -translate-y-36 w-max translate-x-[5.5rem] ${showAdminSettings ? 'scale-100' : 'scale-0 '} transition-all `}>
                        <div>
                            <button className='px-4 py-2 rounded-full my-2 bg-gradient-to-br from-amber-300 to-amber-500 text-white text-lg'>Change Password</button>
                        </div>
                        <div>
                            <button className='px-4 py-2 rounded-full my-2 bg-gradient-to-br from-amber-300 to-amber-500 text-white text-lg'>Create New Admin</button>
                        </div>
                    </div>
                </div>

            </div>
            {/*                 Main             */}
            <div className="flex  ml-20 justify-center flex-col overflow-hidden h-full text-center">
                {/*         HEader */}
                <header className='h-20 flex items-center absolute w-full justify-between px-8 top-0 left-0  bg-black'>
                    <div>
                        <h1 className='text-white text-2xl'>ASAP</h1>
                    </div>
                    <div>
                        <h1 className='text-white text-xl'>Welcome, Admin</h1>
                    </div>

                </header>
                <h1 className='md:text-5xl text-2xl capitalize mt-24  text-white'>Requests</h1>
                {/* GRID         */}
                <div className="grid  grid-cols-2 md:grid-cols-3 mt-8 gap-6">
                    {data.map((data, i) => <RequestSnippet data={data} key={i} index={i} />)}
                </div>
            </div>
        </main>
    )
}

export default RequestPage