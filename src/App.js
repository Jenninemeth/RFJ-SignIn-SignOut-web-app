import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Success from './pages/success/success-page.component.jsx';
import Logger from './pages/logger/logger.component';
import AdminSignIn from './pages/admin-sign-in/admin-sign-in';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import useAuth from './redux/user/useAuth';
import { FirebaseContext } from './firebase/index';
import firebase from './firebase/firebase.utils';
import SignOut from './components/sign-out/sign-out.component';

function App() {
  {/*
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      }
      
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
*/}
    
    const user = useAuth()
    
    return (
      <FirebaseContext.Provider value={{ user, firebase }}>
      <div >
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/sign-out' component={SignOut} />
            <Route exact path='/success' component={Success} />
            <Route path='/logger' component={Logger} />
            
            <Route exact 
              path='/admin' 
              render= {AdminSignIn} /> 
          </Switch>
      </div>
      </FirebaseContext.Provider>
    );
  }


const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);