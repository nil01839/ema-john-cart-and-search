import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    // console.dir(products);
    return (
        <div>
            <h2>This is Order Page: {products.length}</h2>
        </div>
    );
};


export default Orders;