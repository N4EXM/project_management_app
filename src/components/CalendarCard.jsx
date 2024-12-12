import React from 'react'

const CalendarCard = ({month, date, year}) => {
  return (
    <div className='flex flex-col items-start justify-start w-full h-full col-start-9 col-end-13 gap-3 p-2 bg-tertiary'>

      <div className='flex flex-row items-center justify-between '>
        <div className='flex flex-row items-start justify-start gap-2'>
          <h1>November</h1>
          <h1>2024</h1>
        </div>
        
      </div>

    </div>
  )
}

export default CalendarCard