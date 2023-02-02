import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,price,seller}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <p>{name}</p>
                <p>price:${price}</p>
                <p>seler:{seller}</p>
            </div>
            <button onClick={()=>props.addtoCart(props.product)} className='button'>
                <p className='text'>add to cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;