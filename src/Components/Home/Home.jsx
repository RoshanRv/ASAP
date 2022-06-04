import React from 'react'
import HomeHero from './HomeHero'
import Header from '../Header'
// import bg1 from '../../assets/bg1.svg'
import {ReactComponent as Log} from '../../assets/bg1.svg'

const Home = () => {
  return (
    <main className='font-prompt'>
      <Header />
      <HomeHero/>
      <section className='  bg-black'>

        {/* // <img src={Log} alt="" /> */}

      </section>
      

    </main>
  )
}

export default Home