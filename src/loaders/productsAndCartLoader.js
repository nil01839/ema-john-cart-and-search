import { getShoppingCart } from "../utilities/fakedb";

export const productsAndCartLoader = async() =>{
    //Get products
    const productData = await fetch('products.json');
    const products = await productData.json();

    //Get Cart
    const savedCart = getShoppingCart();//fakedb.js e ache ei function ta
    const previousCart = [];
    for(const id in savedCart){ //eikhane id likhle kivabe bujhbe j kon id?
        const addedProducts = products.find(product => product.id === id)
        if(addedProducts){
            const quantity = savedCart[id]; //quantity kivabe pelo?
            addedProducts.quantity = quantity;
            previousCart.push(addedProducts);
        }
        //console.log(id, addedProducts);
    }
    
    return {products, previousCart};
    
}

