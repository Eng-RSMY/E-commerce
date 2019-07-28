import React from 'react'
import Productlist from './Productlist'
import Productss from '../data'
import { connect } from 'react-redux'


const Products = (props) => {
    return (
        <div className='container'>
            <h1 className='center purple-text'> Mobile World</h1>
            <div className='row'>
            {
                Productss.map(product => {
                   return <Productlist product={product} addProduct={props.add}/>
                })
            }
           
            </div>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        list : state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (product) => dispatch({type:'Add', payload:product}),
        remove: (name) => dispatch({type:'Remove', payload:name})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
