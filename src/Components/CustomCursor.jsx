import React,{useEffect,useRef} from 'react'

const CustomCursor = () => {

    const cursorRef = useRef(null)

    useEffect(()=>{

        window.addEventListener('mousemove',e=>{
            const {clientX , clientY} = e

            const mouseX = clientX - cursorRef.current.clientWidth/2
            const mouseY = clientY - cursorRef.current.clientHeight/2
            cursorRef.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`
            
        })

    },[])

  return (
    <div className='custom-cursor w-4 h-4 bg-red-600 rounded-full  fixed' ref={cursorRef} ></div>
  )
}

export default CustomCursor