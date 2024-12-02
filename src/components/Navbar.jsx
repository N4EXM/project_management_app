import React, { useState } from 'react'
import HomeIcon from '../assets/HomeIcon.png'
import HomeActiveIcon from '../assets/HomeActiveIcon.png'

const Navbar = () => {

  const [active, setActive] = useState(false)

  return (
    <div className='absolute bottom-0 left-0 flex flex-row items-center w-full p-2 bg-secondaryBackground justify-evenly'>

      <button className='flex flex-col items-center justify-center'>
        <img src={active ?  HomeActiveIcon : HomeIcon} alt="Home" className='w-5 h-5' />
      </button>

    </div>
  )
}

export default Navbar