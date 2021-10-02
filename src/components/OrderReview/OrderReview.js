import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import RemoveItem from '../RemoveItem/RemoveItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    // console.log(cart);
    const handleRemove = key => {
        // console.log(key);
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <RemoveItem 
                        key ={product.key}
                        product={product}
                        handleRemove = {handleRemove}
                        ></RemoveItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>



            {/* <h2>{products.length}</h2>
            <h4>{cart.length}</h4>
            <h2>This is order review</h2>
            <Cart cart={cart}></Cart> */}
        </div>
    );
};

export default OrderReview;