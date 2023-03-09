import './product.scss';
import { IProduct } from '../../models';
import { useShowProductInfo } from '../../hooks/showProductInfo';

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {


    return (
        <div className="product">
            
            <img src={product.image} className="img" onClick={e => {console.log(e.target)}}/>
            <p><strong>{product.title}</strong></p>
            <p>{product.price}</p>
            <br />
            <p>{product.rating.rate}</p>
            <button key={product.id} onClick={() => console.log(1)}>Show info</button>
        </div>
    );
};

export default Product;