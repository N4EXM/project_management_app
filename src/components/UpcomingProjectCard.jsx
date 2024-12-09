import React from 'react'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar'
import ClockFadedIcon from '../assets/ClockFadedIcon.png'

const UpcomingProjectCard = ({ProjectName, PercentCompleted, DueDate, StartTime, EndTime}) => {
  return (
    <div className='flex flex-row items-center justify-between w-full h-full p-4 px-5 rounded-lg bg-tertiary'>

      <div className='flex flex-col items-start justify-between w-full h-full gap-5'>
        <div className='flex flex-col items-start justify-start gap-1'>
          <p className='text-2xl font-bold'>{ProjectName}</p>
          <div className='flex flex-row items-center justify-start gap-1.5'>
            <img className='w-4 h-4' src={ClockFadedIcon}/>
            <p className='text-sm font-semibold text-darkText'>{StartTime} AM - {EndTime} PM</p>
          </div>
        </div>
        <p className='flex flex-row gap-2 text-sm font-semibold text-darkText'>Due date: <span>{DueDate}</span></p>

      </div>

      <div className="h-full text-3xl font-extrabold w-36">
        <CircularProgressbar
          className="circular-progressbar"
          value={PercentCompleted} // Use the prop for dynamic values
          text={`${PercentCompleted}%`} // Dynamic text
          styles={buildStyles({
            strokeWidth: 20, // Make the progress bar thicker
            textSize: "28px", // Adjust text size for better centering
            textColor: "white", // Text color
            pathColor: "#A855F7", // Tailwind's purple-500
            trailColor: "#374151", // Tailwind's gray-800
            textAlign: "center", // Ensure text is centered
          })}
        />
      </div>


    </div>
  )
}

export default UpcomingProjectCard