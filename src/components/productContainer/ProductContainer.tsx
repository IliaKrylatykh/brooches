import React, {useState} from 'react';
import ProductInfo from '../productInfo/ProductInfo';
import ProductList from '../productList/ProductList';

import './productContainer.scss';
import {IProduct} from '../../models';

const ProductContainer = () => {
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)
    const onProductSelected = (product: IProduct) => {
        setSelectedProduct(selectedProduct === product ? null : product)
    }
    const productInfo = selectedProduct ? <ProductInfo product={selectedProduct}/> : null
    return (
        <div className='productContainer'>
            <ProductList onProductSelected={onProductSelected}/>
            {productInfo}
        </div>
    );
};

export default ProductContainer;