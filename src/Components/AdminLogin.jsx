import React from 'react'

const AdminLogin = () => {
  return (
    <main className='md:flex block font-disp'>
        <div className="md:w-1/2 w-full bg-gradient-to-t to-[rgba(91,236,255,255)] from-[#3aa5fd] h-screen flex justify-center items-center text-center">
            <div className=" text-white p-6 md:p-12">
                <h1 className='md:text-5xl text-3xl top-10  my-8'>Welcome ASAP !</h1>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quis, officiis corrupti fugiat quos tempore id dignissimos cum excepturi fuga mollitia repudiandae nostrum, dolores explicabo, aspernatur eius quod voluptate! Natus eaque blanditiis ut tempore maxime, eligendi a illo voluptas officiis.</p>
            </div>
            
        </div>
        <div className="md:w-1/2 w-full bg-white flex justify-center items-end  text-center h-screen relative">
            <div className="w-full text-center md:mb-36">
                <h1 className='text-3xl md:text-6xl text-[#3aa5fd]  capitalize mb-28'>ADMIN</h1>
                <div className='w-3/4 mx-auto '>
                    <input type="text" placeholder='Username' className=' border-b-2 border-[#3aa5fd] w-full p-2  my-2 placeholder:text-[#3aa5fd] text-xl md:text-2xl mb-12 outline-0'/>
                </div>
                <div  className='w-3/4 mx-auto'>
                    <input type="password" placeholder='Password' className=' border-b-2 border-[#3aa5fd] w-full p-2  my-2 placeholder:text-[#3aa5fd] text-xl md:text-2xl outline-0'/>
                </div>
                <button className='md:px-14 px-8 text-white text-xl rounded-full py-2 mt-24 bg-gradient-to-r  to-[rgba(91,236,255,255)] from-[#3aa5fd] hover:text-gray-200 cursor-pointer hover:bg-gradient-to-l transition-all duration-500'>Login</button>
                <p className='text-gray-400 hover:cursor-pointer hover:underline hover:text-[#3aa5fd] my-10'>Forgot Password?</p>
            </div>
        </div>
        
    </main>
  )
}

export default AdminLogin