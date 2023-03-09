import './product.scss';
import { IProduct } from '../../models';

interface ProductProps {
    product: IProduct
    onProductSelected: (product: IProduct) => void
}

const Product = ({product, onProductSelected}: ProductProps) => {


    return (
        <div className="product">
            
            <img src={product.image} className="img" onClick={e => {console.log(e.target)}} alt={product.title}/>
            <p><strong>{product.title}</strong></p>
            <p>{product.price}</p>
            <br />
            <p>{product.rating.rate}</p>
            <button key={product.id} onClick={() => onProductSelected(product)}>Show info</button>
        </div>
    );
};

export default Product;