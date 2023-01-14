import React from 'react';
import "./Product.css"

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
            <button className='button'>
                <p>add to cart</p>
            </button>
            
        </div>
    );
};

export default Product;