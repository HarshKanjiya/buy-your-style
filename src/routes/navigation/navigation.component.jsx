import './navigation.styles.scss';
import { Fragment } from 'react';

import { Link, Outlet } from 'react-router-dom';


const Navigation = () => {

    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    LOGO
                </Link>
                <div className='nav-Links-container'>
                    <Link to='/shop'>shop</Link>
                    <br/>
                    <Link to='/signup'>sign up</Link>
                    <br/>
                    <Link to='/cart'>cart</Link>

                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}
export default Navigation;