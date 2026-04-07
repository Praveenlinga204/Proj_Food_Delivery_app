import React from 'react'
import "./Footer.css"
import { assets } from '../assets/assets'

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium mollitia sint quo recusandae nam iusto quasi animi placeat. Sequi ab harum recusandae blanditiis ducimus incidunt distinctio excepturi magni enim totam?</p>
                   <div className='footer-content-icon'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                   </div>
                </div>
                <div className='footer-content-center'>
                        <h2>Company</h2>
                        <ul>
                            <li>Home</li>
                            <li>about us</li>
                            <li>delivery</li>
                            <li>privacy policy</li>
                        </ul>
                </div>
                <div className='footer-content-right'>
                        <h2>Get In Touch</h2>
                        <ul>
                            <li>Ph # -12 245 262 56</li>
                            <li>contact@tomato.com</li>
                        </ul>
                </div>
               
            </div>
             <hr />
             <p>Copyright 2026 @ Tomato.com All Right Reserved</p>
        </div>
    )
}

export default Footer
