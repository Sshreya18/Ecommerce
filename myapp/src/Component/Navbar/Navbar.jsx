import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../Assets/logo_big.png'
import cart from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src = {logo}/>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:'none', color:'black'}} to='/'>Shop</Link>{menu==="shop" ?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration:'none',color:'black'}} to='/mens'> Men </Link>{menu==="mens" ?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration:'none',color:'black'}} to='/womens'> Women </Link>{menu==="womens" ?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration:'none',color:'black'}} to='/kids'>Kids</Link>{menu==="kids" ?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to ='/login'><button>Login</button></Link>}
        <Link to ='/cart'><img src= {cart} /></Link>
        <div className="nav-cart-count">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  )
}
  
export default Navbar
