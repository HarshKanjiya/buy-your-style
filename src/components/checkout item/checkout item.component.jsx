import './checkout item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity }= cartItem;
    const { addItemToCart , removeItemFromCart , erasingItem } = useContext(CartContext);

    const add = () => addItemToCart(cartItem);
    const remove = () => removeItemFromCart(cartItem);
    const erase = () => erasingItem(cartItem)
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            
            <div className='quantity'>
                <span onClick={remove}>{`<`}&nbsp;</span>
                <span>{quantity}</span>
                <span onClick={add}>&nbsp;{`>`}</span>
            </div>
                
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={erase}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;