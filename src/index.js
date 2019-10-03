import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './components/SignUp';
import {Router,Route,browserHistory} from 'react-router';
ReactDOM.render(
  <Router history={browserHistory}>
  <Router path="/" component={App}/>
  <Route path="/SignUp" component={SignUp}/>
  </Router>
, document.getElementById('root'));