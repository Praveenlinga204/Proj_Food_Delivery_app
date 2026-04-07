import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/Storecontext'

function Navbar({setLogin}) {
const [menu,setMenu] = useState("home")

const {getTotalCartAmount} = useContext(StoreContext)

    return (
        <div className =" Navbar">
           <Link to="/"><img src={assets.logo} alt=""  className='logo'/></Link>
          <ul className='navbar_menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu ==="home"?"active":""}>home</Link>
           <a href='#explore_menu' onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}>menu</a>
           <a href='#app-download' onClick={()=>setMenu("mobile-App")} className={menu === "mobile-App"?"active":""}>mobile-App</a>
           <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu === "Contact Us"?"active":""}>Contact Us</a>
          </ul>
          <div className='navbar-right'>
           <img src={assets.search_icon} alt="" className='' />
           <div className='navbar-search-icon'>
            <Link to="/Cart"><img src={assets.basket_icon} alt="" /></Link>
            <div  className={getTotalCartAmount() === 0?"":"dot"}></div>
           </div>
           <button onClick={()=>setLogin(true)}>Sign In</button>
          </div>
        </div>
    )
}

export default Navbar
