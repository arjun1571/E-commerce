import React, { useEffect,useState} from 'react';
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
            <div>
                <h4>this is product:{product.length}</h4>
            </div>
            <div>
                <h4>this is cart</h4>
            </div>
        </div>
    );
};

export default Shop;