import React, { useState } from 'react'
import HomeIcon from '../assets/HomeIcon.png'
import HomeActiveIcon from '../assets/HomeActiveIcon.png'
import CalendarIcon from '../assets//CalendarIcon.png'
import CalendarActiveIcon from '../assets/CalendarActiveIcon.png'
import ProjectsIcon from '../assets/ProjectsIcon.png'
import ProjectsActiveIcon from '../assets/ProjectsActiveIcon.png'

const Navbar = () => {

  const [navLinks, setNavLinks] = useState([
    {Name: 'Home', Icon: HomeIcon, ActiveIcon: HomeActiveIcon},
    {Name: 'Projects', Icon: ProjectsIcon, ActiveIcon: ProjectsActiveIcon},
    {Name: 'Calendar', Icon: CalendarIcon, ActiveIcon: CalendarActiveIcon},

  ])
  

  return (
    <div className='absolute bottom-0 left-0 flex flex-row items-center justify-around w-full p-1 bg-secondaryBackground'>

      

    </div>
  )
}

export default Navbar