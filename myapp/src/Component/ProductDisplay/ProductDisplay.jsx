import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplaay'>
      <div className='productdisplay-left'>
        <div className="productdisplay-img-list">
            <img src = {product.image}  alt="" />
            <img src = {product.image}  alt="" />
            <img src = {product.image}  alt="" />
            <img src = {product.image}  alt="" />
        </div>
        <div className="productdisplay-img">  
            <img className='productmainimg' src= {product.image} alt="" />
        </div>
      </div>
      <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src= {star} alt="" />
                <img src= {star} alt="" />
                <img src= {star} alt="" />
                <img src= {star} alt="" />
                <img src= {star_dull} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-prices-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
            Wrap yourself in elegance with our flowing chiffon dress, adorned with delicate lace accents. This versatile piece transitions seamlessly from daytime chic to evening glamour. Embrace effortless sophistication with every step in this wardrobe essential.
            </div>
            <div className="productdisplay-right-sizes">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button on onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women, T-shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
