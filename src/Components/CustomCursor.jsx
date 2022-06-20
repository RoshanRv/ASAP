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

        // cursorRef.current.addEventListener('click',()=>console.log('red'))

    },[])

  return (
    <div className='custom-cursor' ref={cursorRef} ></div>
  )
}

export default CustomCursor