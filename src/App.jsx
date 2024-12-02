import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom' 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Settings from './pages/Settings'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className='relative bg-background text-textColor'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to='/Home'/>} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path='/Settings' element={<Settings/>}></Route>
          </Routes>
        </BrowserRouter>
        <Navbar />
      </div>
    </>
  )
}

export default App
