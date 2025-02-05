import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
    <div className="container-fluid p-0">
    <Navbar/>
    <Routes >
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/gallery' element={<Gallery/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/signin' element={<SignIn/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    <Footer/>
    </div>
    </>
  )
}

export default App