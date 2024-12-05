import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom' 
  import Home from './pages/Home'
import Projects from './pages/Projects'
import Settings from './pages/Settings'
import Calendar from './pages/Calendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='relative w-full h-full min-h-screen font-poppins bg-background text-textColor'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to='/Home'/>} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path='/Settings' element={<Settings/>}></Route>
            <Route path='/Calendar' element={<Calendar/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
