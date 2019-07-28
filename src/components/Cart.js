import React from 'react'
import { connect } from 'react-redux'

function Cart(props) {
    const Products = props.list
    if(Products.length) {
    return (
        <div className='container row'>
        <div className='col s12 m12'>
         <table className='highlight'>
         
                    <thead>
                      <tr>
                          <th>Name</th>
                          <th>Color</th>
                          <th>Price</th>
                          <th>Image</th>
                          <th>Quantity</th>
                          <th>Delete</th>
                      </tr>
                    </thead>
            
                    <tbody>
            {
                Products.map(product => {
                  return (
                   
                      <tr key={product.id}>
                        <td>{product.name} </td>
                        <td>{product.color}</td>
                        <td>{product.price*product.count}</td>
                        <td><img src={require(`${product.img}`)} width='100px'/></td>
                        <td>{product.count}</td>
                        <td><i className='small material-icons rmv-btn' onClick={() => props.remove(product)}>delete</i></td></tr>
                      
                  )
                })
            } 
             </tbody>
                  </table>
                  </div></div>
    )
        }else{
            return <h1 className='center purple-text'>Cart is Empty </h1>
        }
}
const mapStateToProps = (state, ownProps) => {
    return {list: state.list}
}

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (product) => dispatch({type:'Remove', payload:product})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
