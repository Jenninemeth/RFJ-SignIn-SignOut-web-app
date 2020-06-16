import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Success from './pages/success/success-page.component.jsx';
import Logger from './pages/logger/logger.component';
import AdminSignIn from './pages/admin-sign-in/admin-sign-in';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/success' component={Success} />
            <Route path='/logger' component={Logger} />
            
            <Route exact 
              path='/admin' 
              render= {
                /* {() => 
                this.props.currentUser ? (
                  <Redirect to='/logger' />
                ) : ( 
                  <*/AdminSignIn/* />
                )*/
              }
            /> 
          </Switch>
      </div>
    );
  }

}

export default App;
