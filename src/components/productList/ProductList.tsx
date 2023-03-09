import React from 'react';
import Product from '../product/Product';
import { useProduct } from '../../hooks/getProduct';

import './productList.scss'
import {IProduct} from '../../models';

interface ProductProps {
    onProductSelected: (product: IProduct) => void
}

const ProductList = ({onProductSelected}: ProductProps) => {
    const {products} = useProduct();
    return (
        <div className='productList'>
            {products.map(product => <Product product={product} key={product.id} onProductSelected={onProductSelected}/>)}
        </div>
    );
};

export default ProductList;