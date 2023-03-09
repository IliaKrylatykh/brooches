import React from 'react';
import Product from '../product/Product';
import { useProduct } from '../../hooks/getProduct';

import './productList.scss'

const ProductList = () => {
    const {products, addProduct} = useProduct();
    return (
        <div className='productList'>
            {products.map(product => <Product product={product} key={product.id}/>)}
        </div>
    );
};

export default ProductList;