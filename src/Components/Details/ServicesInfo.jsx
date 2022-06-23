import React, { useEffect ,useState} from 'react'
import { useParams,useLocation } from 'react-router-dom'

const ServicesInfo = () => {


    const [serviceInfo,setServiceInfo] = useState([
        {
            id:'electrician',
            title:'electrician',
            info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium necessitatibus tenetur, aperiam ut similique vitae eum, consequuntur quasi nisi provident sint soluta sequi quas facere voluptatem ipsam architecto facilis culpa voluptate natus autem cumque. Saepe suscipit rerum illo? Praesentium quo esse sed. Suscipit voluptatem tempore praesentium, voluptate natus non quos culpa, soluta nisi, ut quis enim! Explicabo fugit cupiditate iure placeat. Quam rem dignissimos laboriosam repudiandae! Mollitia ipsum eveniet doloribus porro magnam vel veniam. Fugiat voluptates eos facilis perspiciatis atque minus tempora odit illum ipsa doloribus voluptatum velit tempore culpa quia ipsum adipisci voluptate minima repudiandae, vero harum nesciunt quibusdam.',
            img:'electrician.png'
            
        },
        {
            id:'cleaning',
            title:'cleaning',
            info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium necessitatibus tenetur, aperiam ut similique vitae eum, consequuntur quasi nisi provident sint soluta sequi quas facere voluptatem ipsam architecto facilis culpa voluptate natus autem cumque. Saepe suscipit rerum illo? Praesentium quo esse sed. Suscipit voluptatem tempore praesentium, voluptate natus non quos culpa, soluta nisi, ut quis enim! Explicabo fugit cupiditate iure placeat. Quam rem dignissimos laboriosam repudiandae! Mollitia ipsum eveniet doloribus porro magnam vel veniam. Fugiat voluptates eos facilis perspiciatis atque minus tempora odit illum ipsa doloribus voluptatum velit tempore culpa quia ipsum adipisci voluptate minima repudiandae, vero harum nesciunt quibusdam.',
            img:'cleaner.png'
            
            
        },
        {
            id:'solarPlant',
            title:'solar',
            info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium necessitatibus tenetur, aperiam ut similique vitae eum, consequuntur quasi nisi provident sint soluta sequi quas facere voluptatem ipsam architecto facilis culpa voluptate natus autem cumque. Saepe suscipit rerum illo? Praesentium quo esse sed. Suscipit voluptatem tempore praesentium, voluptate natus non quos culpa, soluta nisi, ut quis enim! Explicabo fugit cupiditate iure placeat. Quam rem dignissimos laboriosam repudiandae! Mollitia ipsum eveniet doloribus porro magnam vel veniam. Fugiat voluptates eos facilis perspiciatis atque minus tempora odit illum ipsa doloribus voluptatum velit tempore culpa quia ipsum adipisci voluptate minima repudiandae, vero harum nesciunt quibusdam.',
            img:'solar.png'
            
        },
        {
            id:'painter',
            title:'painter',
            info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium necessitatibus tenetur, aperiam ut similique vitae eum, consequuntur quasi nisi provident sint soluta sequi quas facere voluptatem ipsam architecto facilis culpa voluptate natus autem cumque. Saepe suscipit rerum illo? Praesentium quo esse sed. Suscipit voluptatem tempore praesentium, voluptate natus non quos culpa, soluta nisi, ut quis enim! Explicabo fugit cupiditate iure placeat. Quam rem dignissimos laboriosam repudiandae! Mollitia ipsum eveniet doloribus porro magnam vel veniam. Fugiat voluptates eos facilis perspiciatis atque minus tempora odit illum ipsa doloribus voluptatum velit tempore culpa quia ipsum adipisci voluptate minima repudiandae, vero harum nesciunt quibusdam.',
            img:'painter.png'
            
        },
        {
            id:'homeApplication',
            title:'HomeBook',
            info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium necessitatibus tenetur, aperiam ut similique vitae eum, consequuntur quasi nisi provident sint soluta sequi quas facere voluptatem ipsam architecto facilis culpa voluptate natus autem cumque. Saepe suscipit rerum illo? Praesentium quo esse sed. Suscipit voluptatem tempore praesentium, voluptate natus non quos culpa, soluta nisi, ut quis enim! Explicabo fugit cupiditate iure placeat. Quam rem dignissimos laboriosam repudiandae! Mollitia ipsum eveniet doloribus porro magnam vel veniam. Fugiat voluptates eos facilis perspiciatis atque minus tempora odit illum ipsa doloribus voluptatum velit tempore culpa quia ipsum adipisci voluptate minima repudiandae, vero harum nesciunt quibusdam.',
            img:'HomeBook.png'
            
        },
        {
            id:'interiorDesign',
            title:'interiorDesign',
            info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium necessitatibus tenetur, aperiam ut similique vitae eum, consequuntur quasi nisi provident sint soluta sequi quas facere voluptatem ipsam architecto facilis culpa voluptate natus autem cumque. Saepe suscipit rerum illo? Praesentium quo esse sed. Suscipit voluptatem tempore praesentium, voluptate natus non quos culpa, soluta nisi, ut quis enim! Explicabo fugit cupiditate iure placeat. Quam rem dignissimos laboriosam repudiandae! Mollitia ipsum eveniet doloribus porro magnam vel veniam. Fugiat voluptates eos facilis perspiciatis atque minus tempora odit illum ipsa doloribus voluptatum velit tempore culpa quia ipsum adipisci voluptate minima repudiandae, vero harum nesciunt quibusdam.',
            img:'interiorBook.png'
            
        },
        {
            id:'kitchenRemodel',
            title:'kitchenRemodel',
            info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium necessitatibus tenetur, aperiam ut similique vitae eum, consequuntur quasi nisi provident sint soluta sequi quas facere voluptatem ipsam architecto facilis culpa voluptate natus autem cumque. Saepe suscipit rerum illo? Praesentium quo esse sed. Suscipit voluptatem tempore praesentium, voluptate natus non quos culpa, soluta nisi, ut quis enim! Explicabo fugit cupiditate iure placeat. Quam rem dignissimos laboriosam repudiandae! Mollitia ipsum eveniet doloribus porro magnam vel veniam. Fugiat voluptates eos facilis perspiciatis atque minus tempora odit illum ipsa doloribus voluptatum velit tempore culpa quia ipsum adipisci voluptate minima repudiandae, vero harum nesciunt quibusdam.',
            img:'kitchenBook.svg'
            
        },
        {
            id:'automobileService',
            title:'automobileService',
            info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium necessitatibus tenetur, aperiam ut similique vitae eum, consequuntur quasi nisi provident sint soluta sequi quas facere voluptatem ipsam architecto facilis culpa voluptate natus autem cumque. Saepe suscipit rerum illo? Praesentium quo esse sed. Suscipit voluptatem tempore praesentium, voluptate natus non quos culpa, soluta nisi, ut quis enim! Explicabo fugit cupiditate iure placeat. Quam rem dignissimos laboriosam repudiandae! Mollitia ipsum eveniet doloribus porro magnam vel veniam. Fugiat voluptates eos facilis perspiciatis atque minus tempora odit illum ipsa doloribus voluptatum velit tempore culpa quia ipsum adipisci voluptate minima repudiandae, vero harum nesciunt quibusdam.',
            img:'auto.png'
            
        },
        {
            id:'computerServices',
            title:'computerServices',
            info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium necessitatibus tenetur, aperiam ut similique vitae eum, consequuntur quasi nisi provident sint soluta sequi quas facere voluptatem ipsam architecto facilis culpa voluptate natus autem cumque. Saepe suscipit rerum illo? Praesentium quo esse sed. Suscipit voluptatem tempore praesentium, voluptate natus non quos culpa, soluta nisi, ut quis enim! Explicabo fugit cupiditate iure placeat. Quam rem dignissimos laboriosam repudiandae! Mollitia ipsum eveniet doloribus porro magnam vel veniam. Fugiat voluptates eos facilis perspiciatis atque minus tempora odit illum ipsa doloribus voluptatum velit tempore culpa quia ipsum adipisci voluptate minima repudiandae, vero harum nesciunt quibusdam.',
            img:'computer.png'
            
        },
        {
            id:'carpentry',
            title:'carpentry',
            info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium necessitatibus tenetur, aperiam ut similique vitae eum, consequuntur quasi nisi provident sint soluta sequi quas facere voluptatem ipsam architecto facilis culpa voluptate natus autem cumque. Saepe suscipit rerum illo? Praesentium quo esse sed. Suscipit voluptatem tempore praesentium, voluptate natus non quos culpa, soluta nisi, ut quis enim! Explicabo fugit cupiditate iure placeat. Quam rem dignissimos laboriosam repudiandae! Mollitia ipsum eveniet doloribus porro magnam vel veniam. Fugiat voluptates eos facilis perspiciatis atque minus tempora odit illum ipsa doloribus voluptatum velit tempore culpa quia ipsum adipisci voluptate minima repudiandae, vero harum nesciunt quibusdam.',
            img:'carpenter.png'
            
        },
        {
            id:'itSolutions',
            title:'itSolutions',
            info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium necessitatibus tenetur, aperiam ut similique vitae eum, consequuntur quasi nisi provident sint soluta sequi quas facere voluptatem ipsam architecto facilis culpa voluptate natus autem cumque. Saepe suscipit rerum illo? Praesentium quo esse sed. Suscipit voluptatem tempore praesentium, voluptate natus non quos culpa, soluta nisi, ut quis enim! Explicabo fugit cupiditate iure placeat. Quam rem dignissimos laboriosam repudiandae! Mollitia ipsum eveniet doloribus porro magnam vel veniam. Fugiat voluptates eos facilis perspiciatis atque minus tempora odit illum ipsa doloribus voluptatum velit tempore culpa quia ipsum adipisci voluptate minima repudiandae, vero harum nesciunt quibusdam.',
            img:'ITBook.png'
            
        },
        {
            id:'plumbing',
            title:'plumbing',
            info:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium necessitatibus tenetur, aperiam ut similique vitae eum, consequuntur quasi nisi provident sint soluta sequi quas facere voluptatem ipsam architecto facilis culpa voluptate natus autem cumque. Saepe suscipit rerum illo? Praesentium quo esse sed. Suscipit voluptatem tempore praesentium, voluptate natus non quos culpa, soluta nisi, ut quis enim! Explicabo fugit cupiditate iure placeat. Quam rem dignissimos laboriosam repudiandae! Mollitia ipsum eveniet doloribus porro magnam vel veniam. Fugiat voluptates eos facilis perspiciatis atque minus tempora odit illum ipsa doloribus voluptatum velit tempore culpa quia ipsum adipisci voluptate minima repudiandae, vero harum nesciunt quibusdam.',
            img:'plumber.png'
            
        },
    ])

    const {pathname} = useLocation()

    const {service} = useParams()

    const [serviceData,setServiceData] = useState([])

    useEffect(()=>{

        const data = serviceInfo.filter((data)=>data.id == service)
        setServiceData(data)
        console.log(`'${(data[0].img)}'`)

    },[pathname])

  return (
    <div className=' bg-lBlack boder-2  w-full mt-8 shadow-black shadow-xl'>
        <div className='p-4'>

            <h1 className="text-white font-bold capitalize text-4xl   hov" data-head={serviceData[0]?.title}  >{serviceData[0]?.title}</h1>

            {serviceData.length&&(
            <div className='w-96  my-8 mx-auto rounded-full group overflow-hiddn bg-[#252525]' >
                <img src={require("../../../src/assets/home/"+serviceData[0]?.img)} alt="service_pic" className=' group-hover:scale-110  transition-all duration-500' />
            </div>)}
            <p className='my-4 text-white text-xl' >{serviceData[0]?.info}</p>
        </div>
    </div>
  )
}

export default ServicesInfo