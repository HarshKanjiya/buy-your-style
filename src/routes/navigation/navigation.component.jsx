import { Fragment ,useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { SignOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart icon/cart icon.component';
import CartDropdown from '../../components/cart dropdown/cart dropdown.component';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import { NavigationContainer, LogoContainer, NavLink, NavLinks } from './navigation.styles';



const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    

    return(
        <Fragment>
            <NavigationContainer>

                <LogoContainer to='/'>
                    <CrwnLogo/>
                </LogoContainer>
                <NavLinks>
                    <NavLink className='nav-link' to='/shop'>SHOP</NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={SignOutUser}>SIGN OUT</NavLink>)
                        : (<NavLink className='nav-link' to='/auth'>SIGN IN</NavLink>)
                    }
                    <CartIcon/>
                </NavLinks>
                { isCartOpen && <CartDropdown/>}
            </NavigationContainer>
        <Outlet/>
        </Fragment>
    )
}
export default Navigation;