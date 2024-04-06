import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Scorers from './components/Scorers'
import History from './components/History'
import Players from './components/Players'
import Sunday from './components/Sunday'
import("./App.css")

const App = () => {
  return (
    <>
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>  
        <Route path='/scorers' element = {<Scorers/>}/>  
        <Route path='/history' element = {<History/>}/>  
        <Route path='/players' element = {<Players/>}/>  
        <Route path='/sunday' element = {<Sunday/>}/>  
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
