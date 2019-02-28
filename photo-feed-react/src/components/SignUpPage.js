// import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import { Form, Button, Col, Grid } from 'react-bootstrap'
import { connect } from 'react-redux'
import { signup } from '../actions/authActions'


class SignUpPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            username: '',
            confirmPassword: ''
        };

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.signup(this.state)) {
          this.props.history.push('/')
          window.alert("Thank you for signing up.")
        } else {
          window.alert("We're having issues creating your account. Apologies! Please try again another time.")
        }
    }


    render() {
       return (
            <><h2>SignUp</h2>
            <form onSubmit={event => this.handleSubmit(event)}>
                <p><label>Username </label>                
                <input type="text" value={this.state.username} name="username" onChange={this.handleChange}/></p>
                <p><label>Email </label>
                <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/></p>
                <p><label>Password </label>
                <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/></p>
                <p><label>Confirm Password </label>
                <input type="password" value={this.state.confirmPassword} name="confirmPassword" onChange={this.handleChange}/></p>
                <button type="submit">Submit</button>
            </form></>

       )}
}

export default connect(null, {signup})(SignUpPage)
// the above had in Christine Tran's (as well as the commented out import line at beginning of file): 
// export default Login = withRouter(connect(null, {authenticate})(Login));
