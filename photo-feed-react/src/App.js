import React, { Component } from 'react';
import './App.css';
import {fetchPics} from './actions/picActions'
import { connect } from 'react-redux'


class App extends Component {
  
  componentDidMount() {
    this.props.fetchPics()
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Photo Feed (with Behance)
          </p>          
        </header>

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