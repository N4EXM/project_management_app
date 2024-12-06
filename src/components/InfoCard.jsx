import React from 'react'

const InfoCard = ({colour, icon, title, number }) => {
  return (
    <div className={`w-full h-full flex flex-row items-center justify-between ${colour} p-4 px-5 rounded-lg lg:col-span-4 row-span-2`}>

      <div className='flex flex-col items-start justify-between h-full gap-4'>
        <p className='font-semibold '>{title}</p>
        <p className='text-4xl font-bold'>{number}</p>
      </div>

      <img className='w-14 h-14' src={icon }/>

    </div>
  )
}

export default InfoCard