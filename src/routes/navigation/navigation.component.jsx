import './navigation.styles.scss';
import { Fragment } from 'react';

import { Link, Outlet } from 'react-router-dom';


import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';


const Navigation = () => {

    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>shop</Link>
                    <br/>
                    <Link className='nav-link' to='/auth'>sign in</Link>
                    <br/>
                    <Link className='nav-link' to='/cart'>cart</Link>

                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}
export default Navigation;