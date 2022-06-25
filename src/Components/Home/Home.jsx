import React ,{useState,useEffect, useLayoutEffect}from 'react'
import HomeHero from './HomeHero'
import Header from '../Header'
import HomeSectionOne from './HomeSectionOne'
import Loading from '../Loading/Loading'

//      Images
import electrician from '../../assets/home/electrician.png'
import solar from '../../assets/home/solar.png'
import plumber from '../../assets/home/plumber.png'
import painter from '../../assets/home/painter.png'
import interior from '../../assets/home/interior.png'
import computer from '../../assets/home/computer.png'
import auto from '../../assets/home/auto.png'
import carpenter from '../../assets/home/carpenter.png'
import cleaner from '../../assets/home/cleaner.png'


const Home = () => {

  const [serviceAssetsIndex,setServiceAssetsIndex]=useState(0)
  const [isLoading,setIsLoading]=useState(true)

  const serviceAssets = [
    {
      bg:8,
      bgColor:'#f5423c',
      color:'#266cdf',
  },
    {
      bg:4,
      bgColor:'#fb9847',
      color:'#8db4f4',
  },
    {
        bg:1,
        bgColor:'#e15a44',
        color:'#7d86b3',
    },
    {
        bg:2,
        bgColor:'#fddf49',
        color:'#049cde',
    },
    {
        bg:3,
        bgColor:'#509bef',
        color:'#dfe3ff',
    },
    
    {
        bg:5,
        bgColor:'#fb9847',
        color:'#2b468a',
    },
    {
        bg:6,
        bgColor:'#d269cc',
        color:'#e8a0df',
    },
    {
      bg:0,
      bgColor:'#5be4a9',
      color:'#9df5c9',
  },
    {
        bg:7,
        bgColor:'#f88c51',
        color:'#ffdab4',
    },
   

  ]

    useEffect(()=>{

      const timer = setInterval(()=>{
        setServiceAssetsIndex(e=>{
           if(e<serviceAssets.length-1){
               return e+1
           }else{
               return 0
           }
       })
       
   },4000)

   return ()=> clearInterval(timer)


    },[])

    //    Loading
    // useLayoutEffect(()=>{
    //   const load = setTimeout(()=>{

    //     setIsLoading(false)

    //   },100000)

    //   return ()=>clearTimeout(load)

    // },[])


  return (
    <>
    {
      isLoading?(
        <Loading/>
      ):(
        <main className=' font-prompt overflow-hidden'  >
      <HomeHero serviceAssets={serviceAssets}  serviceAssetsIndex={serviceAssetsIndex} />
      <HomeSectionOne serviceAssets={serviceAssets}  serviceAssetsIndex={serviceAssetsIndex} />
      <section className=' '>


      </section>
      

    </main>
      )
    }
    

    </>
  )
}

export default Home