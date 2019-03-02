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
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.password != this.state.confirmPassword){
            window.alert("Passwords don't match!")
        } else {
            fetch('http://localhost:3001/api/find_user', { //check if user's email is already in system
                method: "POST",
                headers: {
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                  },
                  body: JSON.stringify({user: this.state})
            })
            .then((resp) => resp.json())
            .then(jresp => {
                if (jresp.status === 500){
                    this.props.signup(this.state, this.props.history) // if email not in system, execute signup action
                } else if (jresp.email){
                    window.alert('Someone with that email is already in the system.')
                }
            })
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
