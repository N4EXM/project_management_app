import React from 'react'
import Navbar from '../components/Navbar'
import PlusIcon from '../assets/PlusIcon.png'
import CogIcon from '../assets/CogIcon.png'

const Home = () => {
  return (
    <div className='flex flex-col w-full h-full lg:h-screen lg:flex-row lg:gap-0'>
      <Navbar />

      <div className='flex flex-col items-start justify-start w-full p-4 lg:grid lg:grid-cols-12 lg:grid-rows-12'>

        <div className='flex flex-row items-center justify-between w-full gap-3 lg:col-end-13 lg:row-start-1 lg:col-start-1 '>
          <h1 className='text-base font-semibold opacity-60'>November 24 2024</h1>
          <div className='flex flex-row items-center justify-center gap-3'>
            <button>
              <img className='w-8 h-8' src={PlusIcon} alt="Plus Icon" />
            </button>
            <button>
              <img className='w-7 h-7' src={CogIcon} alt="cog Icon" />
            </button>
          </div>
        </div>

        <div className='w-full pt-4 lg:p-0 lg:row-start-2 lg:col-span-12'>
          <p className='font-semibold'>Hello, Naeem 👋🏼</p>
        </div>

      </div>

    </div>
  )
}

export default Home