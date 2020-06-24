import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/header/header.component';
import SignIn from './pages/sign-in/sign-in.component';
import SignInEs from './components/espanol/sign-in-es.component';
import SignOut from './pages/sign-out/sign-out.component';
import SignOutEs from './components/espanol/sign-out-es.component';
import Success from './pages/success/success-page.component.jsx';
import Logger from './pages/logger/logger.component';
import AdminSignIn from './pages/admin-sign-in/admin-sign-in';
import { setCurrentUser } from './redux/user/user.actions';
import useAuth from './redux/user/useAuth';
import { FirebaseContext } from './firebase/index';
import firebase from './firebase/firebase.utils';
import SearchPage from './pages/search/search-page.component';

function App() {
    const user = useAuth()
    
    return (
      <FirebaseContext.Provider value={{ user, firebase }}>
      <div >
        <Header />
          <Switch>
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/sign-in-es' component={SignInEs} />
            <Route exact path='/sign-out' component={SignOut} />
            <Route exact path='/sign-out-es' component={SignOutEs} />
            <Route exact path='/success' component={Success} />
            <Route path='/logger' component={Logger} />
            <Route path='/search' component={SearchPage} />
            <Route exact 
              path='/admin' 
              render={() =>
                user ? (
                  <Redirect to='/logger' />
                ) : (
                  <AdminSignIn /> 
                )
              }
            /> 
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