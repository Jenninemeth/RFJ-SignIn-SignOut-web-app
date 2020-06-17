import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import logo from '../../assets/logo.jpg';
import './header.component.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header' >
        <Link className='logo-container' to='/'>
            <img src={logo} alt="Logo" width="50em"/>
        </Link>

        <div className='options' >
            <Link className='option-center' to='/'>
                RFJ Meiswinkle Daily Sign In & Sign Out
            </Link>
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

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);