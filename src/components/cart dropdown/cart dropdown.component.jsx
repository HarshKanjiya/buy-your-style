import './cart dropdown.styles.scss';
import Btn from '../button/button.component';
import CartItem from '../cart item/cart item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';


const CartDropdown = () => {
    const {cartItems } = useContext(CartContext);

    return(
        <div className='cart-dropdown-container'> 
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Btn>Checkout</Btn>
        </div>
    )
}
export default CartDropdown;