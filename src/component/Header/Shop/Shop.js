import React, { useEffect,useState} from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [product,setProduct]=useState([])
    const [cart,setCart]=useState([])
    const addtoCart=(product)=>{
        console.log(product.id)

        const newCart=[...cart,product]
        setCart(newCart)

    }
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
                    product.map(product=><Product product={product} addtoCart={addtoCart} key={product.id}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;