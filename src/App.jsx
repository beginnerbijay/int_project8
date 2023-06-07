import {  } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Show from './pages/Show'
function App() {

  return (
    <div className='d-flex '>
     <Navbar/>
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/show/:id" element={ <Show/> } />
      </Routes>
    </div>
  )
}

export default App
