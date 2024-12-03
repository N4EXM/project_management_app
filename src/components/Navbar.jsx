import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import HomeIcon from '../assets/HomeIcon.png'
import HomeActiveIcon from '../assets/HomeActiveIcon.png'
import CalendarIcon from '../assets//CalendarIcon.png'
import CalendarActiveIcon from '../assets/CalendarActiveIcon.png'
import ProjectsIcon from '../assets/ProjectsIcon.png'
import ProjectsActiveIcon from '../assets/ProjectsActiveIcon.png'

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
    <div className='absolute bottom-0 left-0 flex flex-row items-center justify-around w-full h-full p-1 bg-secondaryBackground lg:w-80 lg:static lg:top-0 '>
      {navLinks.map((link) => (
        <a 
          onClick={() => handleNavigate(link.Name)} 
          className='p-2' 
          key={link.index}
        >
          <img 
            className='w-8 h-8' 
            src={currentPath === link.Name ? link.ActiveIcon : link.Icon}
            alt={link.Name}
          />
        </a>
      ))}
    </div>
  )
}

export default Navbar