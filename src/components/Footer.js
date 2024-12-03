import React from 'react'
import logo from "../Assets/Logo.svg"
import {FaFacebookF} from "react-icons/fa"
import {BsYoutube} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {SiLinkedin} from "react-icons/si"

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
            <img src={logo} alt="" /></div>
            <div className="footer-icons">
            <FaFacebookF/>
            <BsYoutube/>
            <BsTwitter/>
            <SiLinkedin/>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Career</span>
                <span>Work</span>
                <span>Testimonals</span>
            </div>
              <div className='footer-section-columns'>
                <span>244-53333-7783</span>
                <span>heelo@food.com</span>
                <span>press@food.com</span>
                <span>contact@food.com</span>
                
            </div>
            <div className='footer-section-columns'>
                <span>Terms and conditions </span>
                <span>Privacy Policy</span>
            
                
            </div>
        </div>



    </div>
  )
}

export default Footer