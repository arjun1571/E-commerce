import React, { useEffect,useState} from 'react';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }
    ,[])
    return (
        <div className='shop'>
            <div className='product-container'>
                {
                    product.map(product=><Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h4>this is cart</h4>
            </div>
        </div>
    );
};

export default Shop;