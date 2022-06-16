import './check out.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import CheckoutItem from '../../components/checkout item/checkout item.component';
const CheckOut = () => {
    const {cartItems, setIsCartOpen, priceCount} = useContext(CartContext);
    
    
    setIsCartOpen(false);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem)=>{
                    return(
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )
                })
            }

            <span className='total'>Total : ${priceCount}</span>
        </div>
    )
}

export default CheckOut;