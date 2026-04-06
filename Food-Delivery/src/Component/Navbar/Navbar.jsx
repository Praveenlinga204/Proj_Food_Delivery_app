import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'

function Navbar() {
const [menu,setMenu] = useState("home")

    return (
        <div className =" Navbar">
           <img src={assets.logo} alt=""  className='logo'/>
          <ul className='navbar_menu'>
            <li onClick={()=>setMenu("home")} className={menu ==="home"?"active":""}>home</li>
           <li onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}>menu</li>
           <li onClick={()=>setMenu("mobile-App")} className={menu === "mobile-App"?"active":""}>mobile-App</li>
           <li onClick={()=>setMenu("Contact Us")} className={menu === "Contact Us"?"active":""}>Contact Us</li>
          </ul>
          <div className='navbar-right'>
           <img src={assets.search_icon} alt="" className='' />
           <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt="" />
            <div className='dot'></div>
           </div>
           <button>Sign In</button>
          </div>
        </div>
    )
}

export default Navbar
