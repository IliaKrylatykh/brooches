import React from 'react';
import ProductInfo from '../productInfo/ProductInfo';
import ProductList from '../productList/ProductList';

import './productContainer.scss';

const ProductContainer = () => {
    return (
        <div className='productContainer'>
            <ProductList/>
            {/* <ProductInfo /> */}
        </div>
    );
};

export default ProductContainer;