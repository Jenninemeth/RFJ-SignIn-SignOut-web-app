import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../redux/user/useAuth';
import firebase from '../../firebase/firebase.utils';

import logo from '../../assets/logo.jpg';
import './header.component.styles.scss';

function Header() {
    const user = useAuth();
    
    return(
    <div className='header' >
        <Link className='logo-container' to='/sign-in'>
            <img src={logo} alt="Logo" width="50em"/>
        </Link>

        <div className='options' >
            <Link className='option-center' to='/sign-in'>
                RFJ Meiswinkel Daily <Link className='language' to ='/sign-in'>Sign In</Link> & <Link className='language' to='/sign-out'>Sign Out</Link>
            </Link> 
            
            {user ? (
                <div className='option'>
                <Link className='option' to='/logger'>
                    ENTRY LOG
                </Link>,
                <div className='option' onClick={() => firebase.logout()}>
                    LOG OUT
                </div>
                </div>
                ) : (
                <Link className='option' to='/admin'>
                    LOG IN
                </Link>
                )} 
        </div> 
    </div>
    );       
};

export default Header;