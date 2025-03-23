import React from 'react'
import './Offers.css'
import image from '../Assets/download 1.png'
const Offers = () => {
  return (
    <div className='offers'>
        <br></br>
      <div className="offers-left">
        <br/>
        <br></br> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br/>
        <br/>
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <img src = {image} className='ladka'/>
      </div>
    </div>
  )
}

export default Offers
