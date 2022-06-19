import React,{useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const Form = ({data,serviceData,showForm,setShowForm,setService,service}) => {

    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    // const [service,setService]=useState('')
    const [details,setDetails]=useState('')
    const [address,setAddress]=useState('')


    const handleBook = (e)=>{

        if(name=='' || phone=='' || address==''){
            
        }else{
            e.preventDefault()
        }


    }


  return (
    <section className={`fixed bg-black/80 text-white  ${showForm?'top-0':'-top-full opacity-0'} left-0  h-full w-full flex justify-center items-center `}>
        <div className="bg-mBlack border-4 border-red-700 rounded-lg relative lg:p-6 p-2 lg:w-1/2 w-11/12 transition-all xl:w-6/12" >
            {/*             Close Btn */}
            <button onClick={()=>setShowForm(false)}  className='absolute text-2xl transition-all duration-500  top-3 right-3'><FontAwesomeIcon icon={faClose} /></button>
            <h1 className="text-3xl transition-all duration-500 hov" data-head='Book A Service' >Book A Service</h1>
            <form action="" className='mt-10 flex flex-col md:grid grid-cols-1 md:grid-cols-2 ap-y-6 gap-4 p-6'>
                <div className='flex  justify-aound items-baseline'>
                    {/* <label  className='text-xl transition-all duration-500'>Name</label> */}
                    <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} className='outline-0 text-black transition-all duration-500 w-full text-lg text-center p-3'  required />
                </div>
                <div  className='flex  justify-arund items-baseline'>
                    {/* <label  className='text-xl transition-all duration-500'>Phone</label> */}
                    <input type="tel" placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} className='outline-0 text-black transition-all duration-500 w-full text-lg text-center p-3'  required />
                </div>
                <div  className='flex  justify-around items-baseline col-span-2'>
                    {/* <label  className='text-xl transition-all duration-500'>Service</label> */}
                    <select value={service} onChange={(e)=>setService(e.target.value)} required className='outline-0  text-black transition-all duration-500 w-full text-lg text-center p-3'  >
                        <option value="">Services</option>
                        {serviceData.map((sData,i)=>(
                            <option key={i} value={sData.head}>{sData.head}</option>
                        ))}
                    </select >
                    
                </div>
                <div  className='flex  justify-around items-baseline col-span-2'>
                    {/* <label  className='text-xl transition-all duration-500'>Details</label> */}
                    <textarea placeholder='Details'  value={details} onChange={(e)=>setDetails(e.target.value)} className='outline-0 text-black transition-all duration-500 w-full text-lg text-center p-3 ' style={{resize:'none'}} ></textarea>
                    
                </div>
                <div  className='flex  justify-around items-baseline col-span-2'>
                    {/* <label  className='text-xl transition-all duration-500'>Address</label> */}
                    <textarea placeholder='Address'  value={address} onChange={(e)=>setAddress(e.target.value)} required className='outline-0 text-black  w-full text-lg text-center p-3 transition-all duration-500' style={{resize:'none'}} ></textarea>
                </div>

                <button className='col-span-2'><input type="submit" value="Book Now" onClick={(e)=>handleBook(e)} className='px-6 py-3 border-2 bg-dRed block cursor-pointer rounded-md mt-4 w-full mx-ato transition-all  duration-500 ' /></button>
               
            </form>
        </div>
    </section >
  )
}

export default Form