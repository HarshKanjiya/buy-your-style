import './productCard.styles.scss';
import  Btn  from '../button/button.component';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';


const ProductCard = ({ product }) => {
    const { name , price , imageUrl } = product;
    const {addItemToCart} = useContext(CartContext);

    const addproduct = () => addItemToCart(product);
    return(
        <div className='product-card-container'>
            <img src={imageUrl}  alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{ name }</span>
                <span className='price'>${ price }</span>
            </div>
            <Btn buttonType='inverted' onClick={addproduct}>Add to card</Btn>
        </div>
    )

}

export default ProductCard;