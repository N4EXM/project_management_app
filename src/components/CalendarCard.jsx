import React, {useState} from 'react'
import ArrowIcon from '../assets/ArrowIcon.png'

const CalendarCard = ({month, date, year}) => {

  const [days, setDays] = useState(['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'])

  return (
    <div className='flex flex-col items-start justify-start w-full h-full col-start-9 col-end-13 gap-5 p-5 rounded-lg bg-tertiary'>

      <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row items-start justify-start gap-2 text-xl font-bold'>
          <h1>November</h1>
          <h1>2024</h1>
        </div>
        <div className='flex flex-row items-center justify-center gap-2'>
          <button className='transition duration-300 ease-in-out rounded-full hover:bg-lightblue hover:scale-125'>
            <img src={ArrowIcon} className='w-8 h-8'/>
          </button>
          <button className='transition duration-300 ease-in-out rotate-180 rounded-full hover:bg-lightblue hover:scale-125'>
            <img src={ArrowIcon} className='w-8 h-8'/>
          </button>
        </div>
      </div>

      <div className='flex flex-row items-center justify-between w-full mt-3'>
        {days.map((day,index) => (
          <p className='font-semibold' key={index++}>{day}</p>
        ))}
      </div>

    </div>
  )
}

export default CalendarCard