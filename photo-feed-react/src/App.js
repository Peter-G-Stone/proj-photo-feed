import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import PicsContainer from './containers/PicsContainer'
import Navigation from './Navigation'
import SavedPicsContainer from './containers/SavedPicsContainer'
import { findUserWithToken } from './actions/authActions';


class App extends Component {
  
  componentDidMount() {
    if (localStorage.token && !this.props.isAuthenticated){
      // get current_user from api
      // this is so if the user refreshes and deletes the store, we can keep them logged in
      this.props.findUserWithToken()
      
    }
  }
  
  render() {

    const {isAuthenticated, user} = this.props

    const guestViews = (
      <div id="landing-page" className="wrapper">
        <Navigation isAuthenticated={isAuthenticated} />
        <Route exact path="/" render={(props) => <PicsContainer {...props} containerFor="pic_list"/>} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        {/* <Footer/> */}
      </div>
    )

    const userViews = (
      <div className="wrapper">
        <Navigation isAuthenticated={isAuthenticated} />
        <Route exact path="/" render={(props) => <PicsContainer {...props} containerFor="pic_list"/>} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route exact path="/saved_pics" render={(props) => <PicsContainer {...props} containerFor="saved_pics"/>} />
        <Route exact path="/artist_page" render={(props) => <PicsContainer {...props} containerFor="artist_page"/>} />
        {/* <Route exact path="/saved_pics" render={() => <SavedPicsContainer/>} /> */}
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

const mapDispatchToProps = (dispatch) => ({
  findUserWithToken: () => dispatch(findUserWithToken())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
