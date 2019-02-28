import React, { Component } from 'react';
import './App.css';
import {fetchPics} from './actions/picActions'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import PicsContainer from './containers/PicsContainer'


class App extends Component {
  
  
  
  render() {
    return (
      <div className="App">
        <Router >
            <div>
                <Route exact path="/" component={PicsContainer} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                {/* <Route path="/register" component={RegisterPage} /> */}
            </div>
        </Router>
      </div>
    );
  }
}




export default connect(null)(App)