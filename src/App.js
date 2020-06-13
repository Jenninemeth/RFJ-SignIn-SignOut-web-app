import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Success from './pages/success/success-page.component.jsx';
import Logger from './pages/logger/logger.component';
import AdminSignIn from './pages/admin-sign-in/admin-sign-in';


function App() {
  return (
    <div >
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/success' component={Success} />
          <Route path='/logger' component={Logger} />
          
          <Route exact 
            path='/admin' 
            render= {
              /* {() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : ( 
                <*/AdminSignIn/* />
              )*/
            }
          /> 
        </Switch>
    </div>
  );
}

export default App;
