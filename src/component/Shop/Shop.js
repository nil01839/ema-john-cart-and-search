import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
  const products = useLoaderData();

    //const [products, setProducts] = useState([]);//Jehetu data gulo array of objects akare ache, tai initial value hocche empty array
    const [cart, setCart] = useState([]);
    /* N.B- Reacr Router - er Loader use korar jonno nic er useEffect and uporer State ta comment kora holo
    useEffect(()=>{
        // console.log('Product load before fetch#1')
        fetch('products.json')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
            // console.log('Product Data Stored#4');
        })
    },[])
    */
    //console.log(products);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        // console.log(storedCart);
        const savedCart = [];
        // console.log('Local Storage First Line #2', products);
        for(const id in storedCart){
            //console.log(id);
            const addedProducts = products.find(product=> product.id === id)
            if(addedProducts){
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                // console.log(addedProducts);
                savedCart.push(addedProducts)
            }
        }
        setCart(savedCart);
        // console.log('Local Storage Finished#3');
    },[products])

    const handleAddToCart = (selectedProduct) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct] // Evabe korle Diff Algorithm er jonno subidha hoy
        }
        else{
            
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity +1;
            newCart = [...rest, exists];
        }
        // console.log(product);
        //cart.push(product); //Do Not Do This
        
        setCart(newCart);
        addToDb(selectedProduct.id)
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

export default Shop;