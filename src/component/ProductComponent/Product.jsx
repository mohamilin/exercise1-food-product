import React from 'react';
import ListProduct from '../ListProductComponent/ListProduct.jsx';
import './Product.css';

const Product = () => {
    return (
        <div className="product">
            <h1>Data Produk Makanan dan Minuman</h1>
            <hr/>
            <ListProduct/>
        </div>
    )
}


export default Product;