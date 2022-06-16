import './cart dropdown.styles.scss';
import Btn from '../button/button.component';
import CartItem from '../cart item/cart item.component';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';



const CartDropdown = () => {
    const {cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOut = () => {
        navigate('/checkout')
    }

    return(
        <div className='cart-dropdown-container'> 
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Btn onClick={goToCheckOut}>Checkout</Btn>
        </div>
    )
}
export default CartDropdown;