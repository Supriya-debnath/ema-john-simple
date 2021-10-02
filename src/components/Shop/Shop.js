import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // products to be rendered on the UI.
    const [displayProducts, setDisplayProducts] = useState([]);


    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);
    }

    useEffect( () => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        setDisplayProducts(data);
    });
    }, [])

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;