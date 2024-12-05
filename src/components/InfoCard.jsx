import React from 'react'

const InfoCard = ({colour, icon, title, number }) => {
  return (
    <div className={`w-full h-full flex flex-row items-start justify-start ${colour}`}>

      <div className='flex flex-col items-start justify-between'>
        <p>{title}</p>
        <p>{number}</p>
      </div>

    </div>
  )
}

export default InfoCard