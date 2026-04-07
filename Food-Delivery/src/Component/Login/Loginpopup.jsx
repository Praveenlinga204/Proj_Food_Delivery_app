import React, { useState } from 'react'
import "./Loginpopup.css"
import { assets } from '../../assets/assets'

function Loginpopup({setLogin}) {
    const [currState,setCurrState] = useState("Login")
    return (
        <div className='login-pop-up'>
            <form className='login-popup-container'>
                   <div className='login-popup-title'>
                    <h2> {currState}</h2>
                    <img onClick={()=>setLogin(false)} src={assets.cross_icon}/>
                   </div>
                   <div className="login-popup-input">
                    {currState === "Login"?<></>:<input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required />
                   </div>
                   <button>{currState === "Sign Up"? "Create Account":"Login"}</button>
                   <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By Continuing, I agree to the terms of use and privacy policy</p>
                   </div>
                   {currState === "Login"?<p>Create a new account...... <span onClick={()=>setCurrState("Sign Up")}>Click here...</span></p>:
                   <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Click here...</span></p>} 
            </form>
        </div>
    )
}

export default Loginpopup
