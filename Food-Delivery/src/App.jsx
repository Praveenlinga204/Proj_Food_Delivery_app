import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Footer/Footer'
import Loginpopup from './Component/Login/Loginpopup'

function App() {

   const[login,setLogin] = useState(false)

  return (
    <>
       {login ? <Loginpopup setLogin={setLogin}/> :<></>}
    <div className='app'>
      <Navbar setLogin = {setLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    
    <Footer/>
    </>
  )
}

export default App

