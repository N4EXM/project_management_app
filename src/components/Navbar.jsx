import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import HomeIcon from '../assets/HomeIcon.png'
import HomeActiveIcon from '../assets/HomeActiveIcon.png'
import CalendarIcon from '../assets//CalendarIcon.png'
import CalendarActiveIcon from '../assets/CalendarActiveIcon.png'
import ProjectsIcon from '../assets/ProjectsIcon.png'
import ProjectsActiveIcon from '../assets/ProjectsActiveIcon.png'
import logoIcon from '../assets/LogoIcon.png'

const Navbar = () => {
  const location = useLocation()
  const currentPath = location.pathname.slice(1) // Removes the leading '/'

  const [navLinks, setNavLinks] = useState([
    {Name: 'Home', Icon: HomeIcon, ActiveIcon: HomeActiveIcon, index:1},
    {Name: 'Projects', Icon: ProjectsIcon, ActiveIcon: ProjectsActiveIcon, index:2},
    {Name: 'Calendar', Icon: CalendarIcon, ActiveIcon: CalendarActiveIcon, index:3},
  ])

  const navigate = useNavigate()

  const handleNavigate = (link) => {
    navigate(`/${link}`)
  }

  return (
    <div className='absolute bottom-0 left-0 w-full lg:w-80 lg:h-full h-max bg-secondaryBackground lg:flex lg:flex-col lg:items-start lg:col-span-3 lg:row-span-12 lg:justify-start lg:gap-24 lg:static lg:border-r-2 lg:border-r-zinc-900'>

      <div className='flex-row items-center justify-start hidden w-full gap-1 p-5 h-max lg:flex'>
        <img className='w-12 h-12' src={logoIcon}/>
        <h1 className='text-2xl font-bold'>TaskFlow</h1>
      </div>

      <div className='flex flex-row items-center justify-around p-1 lg:p-0 lg:flex-col lg:w-full lg:gap-5'>
      {navLinks.map((link) => (
        <a 
          onClick={() => handleNavigate(link.Name)} 
          className={`lg:px-2 p-2 lg:p-1.5 lg:pl-16 cursor-pointer lg:w-full lg:flex lg:flex-row lg:gap-5 lg:items-center lg:justify-start ${currentPath === link.Name ? 'lg:border-l-4 lg:border-l-darkblue lg:bg-[#080F1C]' : ''}`} 
          key={link.index}
        >
          <img 
            className='w-8 h-8' 
            src={currentPath === link.Name ? link.ActiveIcon : link.Icon}
            alt={link.Name}
          />
          <p className={`hidden text-lg font-semibold lg:block ${currentPath === link.Name ? 'text-darkblue' : ''}`}>{link.Name}</p>
        </a>
      ))}
      </div>
    </div>
    
  )
}

export default Navbar