import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import("./App.css")

const App = () => {
  return (
    <>
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>  
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
