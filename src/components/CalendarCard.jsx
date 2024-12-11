import React from 'react'
import ArrowIcon from '../assets/ArrowIcon.png'
import Calendar from 'react-calendar'


const CalendarCard = () => {
  return (
    <div className='flex flex-col items-start justify-start w-full h-full gap-2 p-3 px-5 rounded-lg bg-tertiary'>

      
      <Calendar className='font-bold'/>

    </div>
  )
}

export default CalendarCard