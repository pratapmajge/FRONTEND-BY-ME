import React from 'react'
import LandingPage from './folders/pages/LandingPage.jsx'
import ProductMenu from'./folders/components/ProductMenu.jsx'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route , Routes } from 'react-router-dom'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element = {<LandingPage />}/>
        <Route path='/products/:firmId/:firmName' element = {<ProductMenu />}/>
      </Routes>
    </div>
  )
}

export default App
