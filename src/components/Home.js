import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../Assets/home-banner-background.png'
import BannerImage from '../Assets/home-banner-image.png'
import {FiArrowRight} from "react-icons/fi"

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
        <img src={BannerBackground} alt="bannerbg" />
      </div>
      <div className='home-text-section'>
        <h1 className='primary-heading'>
          your Favourite Food delivered hot and fresh
        </h1>
        <p className='primary-text'>
          Healthy Switcherchefs do all the prep work, like peeding,chopping & marinating, so you can cook a fresh food.

        </p>
        <button className='secondary-button'>order now <FiArrowRight/></button>
      </div>
      <div className='home-image-container'>
        <img src={BannerImage} alt="banner image" />
      </div>
      </div>




   

    </div>
  )
}

export default Home