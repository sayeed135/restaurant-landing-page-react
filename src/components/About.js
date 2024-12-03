import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import AboutBackgroundImage from "../Assets/about-background-image.png"
import AboutBackgroud from "../Assets/about-background.png"

const About = () => {
  return (
    <div>
        <div className='about-section-container'>
            <div className="about-background-image">
                <img src={AboutBackgroud} alt="bg" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="bgimg" />
            </div>
            <div className="about-section-text-container">
                <h1 className='primary-heading'>
                    Food is An important Part of A Balanced Diet
                </h1>
                <p className="primary-subheading">About </p>
                <p className="primary-text">
                Food is a universal necessity and a cornerstone of culture, connecting people through flavors, traditions, and shared experiences. From the comfort of home-cooked meals to the thrill of exploring diverse cuisines, food nourishes not only the body but also the soul, creating memories and celebrating life's moments.
                </p>
            </div>








        </div>

            <div className="about-buttons-container">
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'>
                    <BsFillPlayFill/> Watch Video
                </button>
            </div>










    </div>
  )
}

export default About