import React from 'react'
import pickmeals from "../Assets/pick-meals-image.png"
import delivery from "../Assets/delivery-image.png"
import chooseimage from "../Assets/choose-image.png"

const Work = () => {
    const WorkInfoData=[
{
    image:pickmeals,
    title:"pick meals",
    text:"Take away The meals from The Restaurants TOOOO "




},
{
    image:delivery,
    title:"quick deliveries ",
    text:"delivery of your fvrtttt food every where!!!! "



},
{
    image:chooseimage,
    title:"how often",
    text:"Select your Favourite dishes from your Favourite Restaurants... "



},
    ]
  return (
    <div>
        <div className='work-section-wrapper'>
                <div className="work-section-top">
                    <h1 className="primary-text">WORK</h1>
                    <p className="primary-subheading">how it works</p>
                    <p className='primary-subheading'>
                        Food is good for health
                    </p>
                </div>
                <div className='work-section-bottom'>
                    {
                            WorkInfoData.map( data =>(
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" /></div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>

                    </div>
                        ))

                    }
                    
                    
                </div>



        </div>






    </div>
  )
}

export default Work