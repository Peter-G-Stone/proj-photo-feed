// import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import { Form, Button, Col, Grid } from 'react-bootstrap'
import { connect } from 'react-redux'
import { authenticate } from '../actions/authActions'


class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.props.authenticate(this.state, this.props.history)) {
            debugger
            // this.props.history.push('/')
            window.alert("Successfully logged in.")
        } else {
            window.alert("Sorry, something went wrong. Please try logging in again.")
        }

        // const email = this.state.email 
        // const password = this.state.password
        // const request = JSON.stringify({'auth': {'email': email, 'password': password}})

        // console.log('submitting ', request)
        // fetch('http://localhost:3001/api/user_token',
        // {
        //     method: "POST",
        //     body: request,
        //     headers: {
        //         "Content-Type": "application/json"            }
        // })
        // .then(resp => {
        //     return resp.json()
        // })
        // .then(data => {
        //     localStorage.setItem("jwt", data.jwt)
        //     console.log('data: ', data)
        // })
    }

    render() {
       return (
            <><h2>Login</h2>
            <form onSubmit={event => this.handleSubmit(event)}>
                <p><label>Email </label>
                <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/></p>
                <p><label>Password </label>
                <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/></p>
                <button type="submit">Submit</button>
            </form></>

       )}
}

export default connect(null, {authenticate})(LoginPage)
// the above had in Christine Tran's (as well as the commented out import line at beginning of file): 
// export default Login = withRouter(connect(null, {authenticate})(Login));
