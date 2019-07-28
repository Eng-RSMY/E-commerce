import React from 'react'
import {Link } from 'react-router-dom'
import cart from './images/cart.png'
import { connect } from 'react-redux'

const Productlist = (props) => {
   const {product} = props;
    return (
        <div className='col s3'>
          
          <div className="card white darken-0 ">
                 <div className="card-content black-text singleProduct">
                 <Link to={{pathname:'/details', state: { product:product}}}>
                    <img src={require(`./images/${product.id}.png`)} className='productImg' />
                    </Link>
                <span className="card-title">{product.name}</span>
                <p>{`Price ${product.price}`}
                <button className='right cart-btn'><img src={cart} onClick={() => props.addProduct(product)} /></button>
                </p>
                
        </div>
      
      </div> 
        </div>
    )
}



export default (Productlist)
