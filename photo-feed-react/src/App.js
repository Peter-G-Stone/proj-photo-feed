import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import Container from 'react-bootstrap/Container'

import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'

import PicsContainer from './containers/PicsContainer'
import ScrollToTop from './containers/ScrollToTop';
import ArtistContainer from './containers/ArtistContainer';

import Navigation from './Navigation'
import About from './About'

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
      <>        
        <Route path="/about" component={About} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />       
      </>
    )

    const userViews = (
      <>       
        <Route path="/about" component={About} />
        <Route path="/saved_pics" render={(props) => <PicsContainer {...props} containerFor="saved_pics"/>} />
      </>
    )


    return (
      <div className="App">
        <Router >
          <ScrollToTop>
            <Navigation isAuthenticated={isAuthenticated} />
            
            <Container>
              <Switch>
                
                <Route exact path="/" render={(props) => <PicsContainer {...props} containerFor="pic_list"/>} />

                {isAuthenticated ? userViews : guestViews}

                <Route exact path="/artists/:artist_name" component={ArtistContainer} />

              </Switch>
            </Container>
          </ScrollToTop>
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
