import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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

    const {isAuthenticated} = this.props

    const guestViews = (
      <>        
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />       
      </>
    )

    const userViews = (
      <>       
        <Route path="/your_collection" render={(props) => <PicsContainer {...props} containerFor="your_collection"/>} />
      </>
    )
    
    
    return (
      <div className="App">
        <Router >
          <ScrollToTop>
            <Navigation isAuthenticated={isAuthenticated} />
            
            <Container>
              
                
                <Route exact path="/" render={(props) => <PicsContainer {...props} containerFor="pic_list"/>} />

                <Route path="/about" component={About} />
                
                {isAuthenticated ? userViews : guestViews}

                <Route exact path="/artists/:id" component={ArtistContainer} key={Math.random()} />

              
            </Container>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}




const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated}
}

const mapDispatchToProps = (dispatch) => ({
  findUserWithToken: () => dispatch(findUserWithToken())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
