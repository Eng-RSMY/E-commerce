import React from 'react'
import { Link } from 'react-router-dom'

function ProductDetail(props) {
    const { product } = props.location.state;
    return (
        <div className='row container detail'>
            <div className='col s6'>
                <img src={require(`${product.img}`)} className='detailImg' />
            </div>
            <div className='col s6'>
                <h1>{product.name}</h1>
                <p><b>Modal : </b>{product.name}</p>
                <p><b>Color : </b>{product.color}</p>
                <p className='red-text'><b>Price : </b>{product.price}</p>
                <p><b>More Detail About Modal :</b></p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                     a galley of type and scrambled it to make a type specimen book.</p>
                <Link to='/'><button className='pink btn'>HomePage</button></Link>
            </div>
        </div>
    )
}

export default ProductDetail
