import React from 'react';
import "./product.css"

const Product = ({ product, handleAddToCart }) => {

    const { img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>{name}</h3>
                <p>seller : {seller}</p>
                <p>ratings: {ratings} star</p>
                <p>price: {price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='addtocart-btn'>
                <p>AddToCart</p>
            </button>

        </div>
    );
};

export default Product;