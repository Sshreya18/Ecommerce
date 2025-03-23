import React from 'react'
import './Landing.css'
import arrow from '../Assets/arrow.png'
import hero from '../Assets/main 1.png'
const Landing = () => {
  return (
    <div className='landing'>
        <div className="landing-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hand-icon">
                    <p>New</p>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="land-latest-btn">
                <div> Latest Collection</div>
                <img src= {arrow}/>
            </div>
        </div>
        <div className="landing-right">
            <img src= {hero}/>
        </div>
    </div>
  )
}

export default Landing
