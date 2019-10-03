import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './components/User';
import {Router,Route,browserHistory} from 'react-router';
ReactDOM.render(
  <Router history={browserHistory}>
  <Router path="/" component={App}/>
  <Route path="/SignUp" component={User}/>
  </Router>
, document.getElementById('root'));