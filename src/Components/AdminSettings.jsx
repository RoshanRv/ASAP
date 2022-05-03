import React from 'react'

const AdminSettings = () => {
  return (
    <main className=' bg-gradient-to-br from-amber-300 to-amber-500 min-h-screen min-w-screen flex flex-col justify-center items-center'>
        <div className="bg-black p-4 rounded-lg ">
            <div>
                <button className='px-4 py-2 rounded-full my-2 bg-gradient-to-br from-amber-300 to-amber-500 text-white text-lg'>Change Password</button>
            </div>
            <div>
                <button className='px-4 py-2 rounded-full my-2 bg-gradient-to-br from-amber-300 to-amber-500 text-white text-lg'>Create New Admin</button>
            </div>
        </div>
    </main>
  )
}

export default AdminSettings