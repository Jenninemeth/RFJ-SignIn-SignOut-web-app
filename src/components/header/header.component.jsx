import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import logo from '../../assets/logo.jpg';

const Header = ({ currentUser }) => (
    <div className='header' >
        <Link className='logo-container' to='/'>
            <img src={logo} alt="Logo" width="50em"/>
            RFJ Meiswinkle Daily Sign In & Sign Out
        </Link>

        <div className='options' >
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    LOG OUT
                </div>
                ) : (
                <Link className='option' to='/admin'>
                    LOG IN
                </Link>
            )}
        </div> 
    </div>       
);

export default Header;