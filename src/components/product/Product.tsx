import './product.scss';
import { IProduct } from '../../models';

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {
    return (
        <div className="product">
            
            <img src={product.image} className="img" />
            <p><strong>{product.title}</strong></p>
            <p>{product.price}</p>
            <br />
            <p>{product.rating.rate}</p>
        </div>
    );
};

export default Product;