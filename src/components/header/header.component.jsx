import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import useAuth from '../../redux/user/useAuth';
import { auth } from '../../firebase/firebase.utils';
import firebase from '../../firebase/firebase.utils';
import { FirebaseContext } from '../../firebase/'

import logo from '../../assets/logo.jpg';
import './header.component.styles.scss';

function Header(props) {
    const user = useAuth();
    console.log({ user });
    

    return(
    <div className='header' >
        <Link className='logo-container' to='/'>
            <img src={logo} alt="Logo" width="50em"/>
        </Link>

        <div className='options' >
            <Link className='option-center' to='/'>
                RFJ Meiswinkel Daily Sign In & Sign Out
            </Link> {/*
            <Link className='option' to='/admin'>
                LOG IN
            </Link>*/}
            
            {user ? (
                <div className='option' onClick={() => firebase.logout()}>
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
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);