import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import PicsContainer from './containers/PicsContainer'
import Navigation from './Navigation'
import SavedPicsContainer from './containers/SavedPicsContainer'


class App extends Component {
  
  render() {

    const {isAuthenticated, user} = this.props

    const guestViews = (
      <div id="landing-page" className="wrapper">
        <Navigation isAuthenticated={isAuthenticated} />
        <Route exact path="/" component={PicsContainer} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        {/* <Footer/> */}
      </div>
    )

    const userViews = (
      <div className="wrapper">
        <Navigation isAuthenticated={isAuthenticated} />
        <Route exact path="/" component={PicsContainer} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route exact path="/saved_pics" render={() => <SavedPicsContainer/>} />
        {/* <Footer/> */}
      </div>
    )


    return (
      <div className="App">
        <Router >
            {isAuthenticated ? userViews : guestViews}
        </Router>
      </div>
    );
  }
}




const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    user: state.authReducer.currentUser
  }
}

export default connect(mapStateToProps)(App);
