import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import ClockFadedIcon from '../assets/ClockFadedIcon.png'

const CurrentProjectCard = ({ProjectName, PercentCompleted, DueDate, StartTime, EndTime}) => {
  return (
    <div className='flex flex-row items-center justify-between w-full p-4 bg-secondaryBackground'>

      <div>
        <div className='flex flex-col items-start justify-start gap-1'>
          <p className='text-2xl font-bold'>{ProjectName}</p>
          <div className='flex flex-row items-center justify-start gap-2'>
            <img className='w-5 h-5' src={ClockFadedIcon}/>
            <p className='font-semibold opacity-60'>{StartTime} - {EndTime}</p>
          </div>
          <p>Due date: {DueDate}</p>
        </div>
        
      </div>

    </div>
  )
}

export default CurrentProjectCard