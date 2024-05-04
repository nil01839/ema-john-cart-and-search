import React, { useEffect, useState } from 'react';
import './Shops.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shops = () => {
    const [products, setProducts] = useState([]);//Jehetu data gulo array of objects akare ache, tai initial value hocche empty array
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        console.log(product);
        //cart.push(product); //Do Not Do This
        const newCart = [...cart, product]; // Evabe korle Diff Algorithm er jonno subidha hoy
        setCart(newCart);
    }

    return (
        <div className='shop-container'> 
            <div className="product-container">
                {
                products.map(product =><Products 
                    key={product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shops;