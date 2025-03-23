import React from 'react'
import './Footer.css'
import insta from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import biglogo from '../Assets/logo_big.png'
const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-logo'>
        <img src = {biglogo} />
        <br/><br/><br/><br/><br/><br/>
        <p>SHOPPER</p>
       </div>
       <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
       <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src = {insta} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src = {pinterest} />
        </div>
        <div className="footer-icons-container">
            <img src = {whatsapp}/>
        </div>
       </div>
       <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All Right Reserved</p>
       </div>
    </div>
  )
}

export default Footer
