import React, { Component } from 'react';
import './App.css';
import {fetchPics} from './actions/picActions'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'


class App extends Component {
  
  componentDidMount() {
    // this.props.fetchPics()
  }
  
  render() {
    return (
      <div className="App">
        <Router >
            <div>
                {/* <PrivateRoute exact path="/" component={HomePage} /> */}
                <Route path="/login" component={LoginPage} />
                {/* <Route path="/register" component={RegisterPage} /> */}
            </div>
          </Router>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {pics: state.pictures}
}

const mapDispatchToProps = (dispatch) => ({
  fetchPics: () => dispatch(fetchPics())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)