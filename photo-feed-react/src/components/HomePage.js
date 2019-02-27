import React, { Component } from 'react';


export default class LoginPage extends Component {
    

    state = {
        pic: ''
    }

    componentDidMount() {
        fetch('http://localhost:3001/pics')
        .then(resp => resp.json())
        .then(pic => 
            
            this.setState({pic})   )
    }
    
    render() {
       return (
            <>Homepage! Logged in baby <img alt='dummy img' src={this.state.pic.url}/></>

       )}
}