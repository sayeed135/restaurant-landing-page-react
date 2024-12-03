import React from 'react'
import profilepic from "../Assets/sayeed.jpg"
import {AiFillStar} from "react-icons/ai"


const Testimonals = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <h1 className="primary-heading">Testimonals</h1>
            <p className="primary-subheading">what they are saying</p>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum officiis ab natus numquam quaerat repellendus nam illum, ea quidem.
            </p>
        </div>
        <div className="testimonial-section-bottom">
  <p className="primary-text">I made this page</p>
  <img className="sayeedimg" src={profilepic} alt="Sayeed's profile picture" />
        <div className='testimonal-stars-container'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
</div>

    </div>
  )
}

export default Testimonals