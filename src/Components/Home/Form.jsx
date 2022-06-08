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
    <section className={`fixed bg-black/80 ${showForm?'top-0':'-top-full opacity-0'} left-0  h-full w-full flex justify-center items-center `}>
        <div className="bg-white rounded-lg relative lg:p-4 p-2 lg:w-1/2 w-3/4 transition-all xl:w-4/12" style={{border:`4px solid ${data.color}`}}>
            {/*             Close Btn */}
            <button onClick={()=>setShowForm(false)} style={{color:data.bgColor}} className='absolute text-2xl transition-all duration-500  top-3 right-3'><FontAwesomeIcon icon={faClose} /></button>
            <h1 className="text-3xl transition-all duration-500" style={{color:data.bgColor,textDecorationLine:'underline',textDecorationColor:data.color, textUnderlineOffset:'5px'}}>Book A Service</h1>
            <form action="" className='mt-10 flex flex-col gap-y-6 justify-between gap-x-10'>
                <div className='flex  justify-around items-baseline'>
                    <label style={{color:data.bgColor}} className='text-xl transition-all duration-500'>Name</label>
                    <input type="text" placeholder='Eg: Ram' value={name} onChange={(e)=>setName(e.target.value)} className='outline-0 transition-all duration-500 p-2 w-1/2 text-lg' style={{borderBottom:`2px solid ${data.color}`}} required />
                </div>
                <div  className='flex  justify-around items-baseline'>
                    <label style={{color:data.bgColor}} className='text-xl transition-all duration-500'>Phone</label>
                    <input type="tel" placeholder='Eg: 9182730645' value={phone} onChange={(e)=>setPhone(e.target.value)} className='outline-0 transition-all duration-500 p-2 w-1/2 text-lg' style={{borderBottom:`2px solid ${data.color}`}} required />
                </div>
                <div  className='flex  justify-around items-baseline'>
                    <label style={{color:data.bgColor}} className='text-xl transition-all duration-500'>Service</label>
                    <select value={service} onChange={(e)=>setService(e.target.value)} required className='outline-0 transition-all duration-500 p-2 w-1/2 text-lg' style={{borderBottom:`2px solid ${data.color}`}} >
                        {/* <option value="">Select</option> */}
                        {serviceData.map((sData,i)=>(
                            <option key={i} value={sData.head}>{sData.head}</option>
                        ))}
                    </select >
                    
                </div>
                <div  className='flex  justify-around items-baseline'>
                    <label style={{color:data.bgColor}} className='text-xl transition-all duration-500'>Details</label>
                    <textarea placeholder='Eg: TV Is Not Working'  value={details} onChange={(e)=>setDetails(e.target.value)} className='outline-0 transition-all duration-500 p-2 w-1/2 text-lg ' style={{borderBottom:`2px solid  ${data.color}`,resize:'none'}} ></textarea>
                    
                </div>
                <div  className='flex  justify-around items-baseline'>
                    <label style={{color:data.bgColor}} className='text-xl transition-all duration-500'>Address</label>
                    <textarea placeholder='Eg: 5B, 3rd Floor, K Block, ABC Flat'  value={address} onChange={(e)=>setAddress(e.target.value)} required className='outline-0 p-2 w-1/2 text-lg transition-all duration-500' style={{borderBottom:`2px solid ${data.color}`,resize:'none'}} ></textarea>
                </div>

                <button><input type="submit" value="Book Now" onClick={(e)=>handleBook(e)} className='px-6 py-2 border-2 cursor-pointer rounded-md mt-4 w-max mx-auto transition-all  duration-500' style={{backgroundColor:data.bgColor, borderColor:data.color}} /></button>
               
            </form>
        </div>
    </section >
  )
}

export default Form