import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoder = async () =>{
    const productData = await fetch('products.json');
    const products = await productData.json();

    const savedCart = getStoredCart();
    const priviousCart = [];
    // console.log("saved cart",savedCart);
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct){
            const quantity = savedCart[id]
            addedProduct.quantity =quantity;
            priviousCart.push(addedProduct); 
        }
    }

    return {products:products,initialCart:priviousCart};

}