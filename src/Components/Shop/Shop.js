import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart)
    }



    return (
        <div className='shopContainer'>

            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-conatiner'>
                <h2>cart summary</h2>
                <p>seleced items : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;