import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Navigation from './navigation.js';
import Header from './header.js';
import './styles.css';
import Feed from './Feed.js';
import AllUsers from './AllUsers.js'
import NavigationNoAuth from './navigationNoAuth.js';
import LogInPage from './LogIn';
import SignUpPage from './SignUp.js';

class App extends Component {

  constructor(props) {
		super(props);
		this.state = {
			isAuth: false
		};

		if (localStorage.getItem('token') !== null) {
			this.state.isAuth = true;
		}
	}

  render() {
    const navigation = this.state.isAuth ? <Navigation/> : <NavigationNoAuth/>;
    const header = <Header/>;
    const main = (
      <Switch>
        <Route path="/feed" component={Feed}/>
        <Route exact path="/" component={Feed}/>
        <Route path="/users" component={AllUsers}/>
        <Route path="/login" component={LogInPage}/>
        <Route path="/signup" component={SignUpPage}/>
      </Switch>
    );
    return (
      <div>
        {header}
        <div className="container">
            
            <nav className="navigation">{navigation}</nav> 
        
            <main className="main">{main}</main>

            <div className="add">
                РЕКЛАМА 
            </div>
        </div>
      </div>
    );
  }
}

export default App;
