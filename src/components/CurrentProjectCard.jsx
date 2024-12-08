import React from 'react'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar'
import ClockFadedIcon from '../assets/ClockFadedIcon.png'

const CurrentProjectCard = ({ProjectName, PercentCompleted, DueDate, StartTime, EndTime}) => {
  return (
    <div className='flex flex-row items-center justify-between w-full h-full p-4 px-5 rounded-lg bg-tertiary'>

      <div className='flex flex-col items-start justify-between w-full h-full gap-5'>
        <div className='flex flex-col items-start justify-start gap-1'>
          <p className='text-2xl font-bold'>{ProjectName}</p>
          <div className='flex flex-row items-center justify-start gap-2'>
            <img className='w-5 h-5' src={ClockFadedIcon}/>
            <p className='text-sm font-semibold text-darkText'>{StartTime} - {EndTime}</p>
          </div>
        </div>
        <p className='flex flex-row gap-2 text-sm font-semibold text-darkText'>Due date: <span>{DueDate}</span></p>

      </div>

      <div className="h-full text-3xl font-bold w-36">
        <CircularProgressbar
          value={PercentCompleted} // Use the prop for dynamic values
          text={`${PercentCompleted}%`} // Dynamic text
          styles={buildStyles({
            strokeWidth: 10, // Make the progress bar thicker
            textColor: "white", // Text color
            pathColor: "#38BDF8", // Tailwind's blue-500
            trailColor: "#374151", // Tailwind's gray-800
          })}
        />
      </div>

    </div>
  )
}

export default CurrentProjectCard