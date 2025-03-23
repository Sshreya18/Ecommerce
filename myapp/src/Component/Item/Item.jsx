import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div classname='item'>
      <Link to= {`/product/${props.id}`}><img className='item-image' src={props.image} style={{ width: '20vw'}} /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">
            ${props.new_price}
        </div>
        <div className="item-prices-old">
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
