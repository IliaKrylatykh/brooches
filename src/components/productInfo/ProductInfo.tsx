import React from 'react';
import './productInfo.scss';
import { IProduct } from '../../models';

interface ProductProps {
    product: IProduct
}

const ProductInfo = ({product}: ProductProps) => {


    return (
        <div className='productInfo'>
            <img src={product.image} className="img" />
            <p><strong>{product.title}</strong></p>
            <p>{product.price}</p>
            <br />
            <p>{product.rating.rate}</p>
        </div>
    );
};

export default ProductInfo;