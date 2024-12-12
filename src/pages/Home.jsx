import React from 'react'
import Navbar from '../components/Navbar'
import PlusIcon from '../assets/PlusIcon.png'
import CogIcon from '../assets/CogIcon.png'
import InfoCard from '../components/InfoCard'
import clipBoardIcon from '../assets/ClipboardIcon.png'
import checkIcon from '../assets/CheckIcon.png'
import clockIcon from '../assets/ClockIcon.png'
import CurrentProjectCard from '../components/CurrentProjectCard'
import UpcomingProjectCard from '../components/UpcomingProjectCard'
import CalendarCard from '../components/CalendarCard'
  const Home = () => {
    return (
      <div className='relative flex flex-col w-full h-full lg:h-screen lg:flex-row lg:gap-0'>
        <Navbar />

      <div className='flex flex-col items-start justify-start w-full gap-6 p-4 pb-20 lg:grid lg:grid-rows-12 lg:grid-cols-12 lg:gap-x-4 lg:gap-y-1 lg:p-6'>

        <div className='flex flex-row items-center justify-between w-full lg:col-end-13 lg:row-start-1 lg:col-start-1 '>
          <h1 className='text-base font-semibold opacity-60'>November 24 2024</h1>
          <div className='flex flex-row items-center justify-center gap-3'>
            <button>
              <img className='w-8 h-8' src={PlusIcon} alt="Plus Icon" />
            </button>
            
          </div>
        </div>

        {/* <div className='w-full lg:hidden'>
          <p className='font-semibold'>Hello, Naeem 👋🏼</p>
        </div> */}

        <InfoCard 
          icon={clipBoardIcon} 
          title={'Total active projects: '} 
          colour={'bg-gradient-to-r from-lightblue to-darkblue'} 
          number={'12'}
        />
        <InfoCard 
          icon={clockIcon} 
          title={'Upcoming deadlines: '} 
          colour={'bg-gradient-to-r from-lightpurple to-darkpurple'} 
          number={'12'}
        />
        <InfoCard 
          icon={checkIcon} 
          title={'Total completed: '} 
          colour={'bg-gradient-to-r from-lightgreen to-darkgreen'} 
          number={'12'}
        />

        <div className='flex flex-col w-full col-span-4 row-span-6 row-start-4 gap-4 pt-3 h-72 lg:h-full'>
          <h1 className='text-xl font-bold '>Current projects: </h1>
          <div className='flex flex-col items-start justify-start w-full h-full gap-4 p-2 overflow-y-scroll rounded-lg bg-secondaryBackground'>
            <CurrentProjectCard
              ProjectName={'Task 1'}
              StartTime={'10:00'}
              EndTime={'12:00'}
              DueDate={'12/12/2024'}
              PercentCompleted={75}

            />  
            <CurrentProjectCard
              ProjectName={'Task 1'}
              StartTime={'10:00'}
              EndTime={'12:00'}
              DueDate={'12/12/2024'}
              PercentCompleted={75}

            />  
            <CurrentProjectCard
              ProjectName={'Task 1'}
              StartTime={'10:00'}
              EndTime={'12:00'}
              DueDate={'12/12/2024'}
              PercentCompleted={75}

            />  
          </div>
          
          
        </div>

        <div className='flex flex-col w-full col-span-4 row-span-6 row-start-4 gap-4 pt-3 h-72 lg:h-full'>
          <h1 className='text-xl font-bold '>Upcoming projects: </h1>
          <div className='flex flex-col items-start justify-start w-full h-full gap-4 p-2 overflow-y-scroll rounded-lg bg-secondaryBackground'>
            <UpcomingProjectCard
              ProjectName={'Task 1'}
              StartTime={'10:00'}
              EndTime={'12:00'}
              DueDate={'12/12/2024'}
              PercentCompleted={75}

            />  
            <UpcomingProjectCard
              ProjectName={'Task 1'}
              StartTime={'10:00'}
              EndTime={'12:00'}
              DueDate={'12/12/2024'}
              PercentCompleted={75}

            />  
            <UpcomingProjectCard
              ProjectName={'Task 1'}
              StartTime={'10:00'}
              EndTime={'12:00'}
              DueDate={'12/12/2024'}
              PercentCompleted={75}

            />  
          </div>
          
          
        </div>
        
        <div className='w-full h-full col-start-9 col-end-13 row-start-4 row-end-13'>
          <h1 className='text-xl font-bold'>Calendar: </h1>
          <CalendarCard/>
        </div>

      </div>

    </div>
  )
}

export default Home