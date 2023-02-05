import React, { useEffect,useState} from 'react';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [product,setProduct]=useState([])
    const [cart,setCart]=useState([])
    const addtoCart=(selectedProduct)=>{
        let newCart = [];
        const exitst = cart.find(product => product.id === selectedProduct.id)
        if(!exitst){
            selectedProduct.quantity=1;
            newCart=[...cart,selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exitst.quantity = exitst.quantity + 1;
            newCart = [...rest,exitst]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)

    }
    useEffect(()=>{
        const storedCart = getStoredCart();
        const saveCart = [];
        for(const id in storedCart){
           const addedPorduct= product.find(product=> product.id===id)
           if(addedPorduct){
            console.log(addedPorduct);
            const quantity = storedCart[id];
            addedPorduct.quantity=quantity;
            saveCart.push(addedPorduct);

           }
        }
        setCart(saveCart);
    },[product])
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