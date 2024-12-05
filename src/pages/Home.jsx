import React from 'react'
import Navbar from '../components/Navbar'
import PlusIcon from '../assets/PlusIcon.png'
import CogIcon from '../assets/CogIcon.png'

const Home = () => {
  return (
    <div className='h-full lg:grid lg:grid-cols-12 lg:grid-rows-12 lg:h-screen'>
      <Navbar />
      <div className='flex flex-col items-start justify-start gap-3 '>

        <div className='flex flex-row items-center justify-between w-full p-4 lg:col-end-12 lg:row-start-1 lg:row-end-12 lg:col-start-3 '>
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

      </div>


    </div>
  )
}

export default Home