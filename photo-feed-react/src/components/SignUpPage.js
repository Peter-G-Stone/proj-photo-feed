// import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import { signup, getUser } from '../actions/authActions'


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
        if (this.state.password !== this.state.confirmPassword){
            window.alert("Those passwords don't match!")
        } else {           
            this.props.signup(this.state, this.props.history)
        }
    }


    render() {
       return (
        <Container>
        <Form  onSubmit={event => this.handleSubmit(event)}>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" value={this.state.username} name="username" onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={this.state.email} name="email" onChange={this.handleChange}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" value={this.state.confirmPassword} name="confirmPassword" onChange={this.handleChange}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form></Container>

       )}
}

const mapDispatchToProps = (dispatch) => ({
    signup: (credentials, history) => dispatch(signup(credentials, history)),
    getUser: (credentials) => dispatch(getUser(credentials))
  })
  

export default connect(null, mapDispatchToProps)(SignUpPage)
// the above had in Christine Tran's (as well as the commented out import line at beginning of file): 
// export default Login = withRouter(connect(null, {authenticate})(Login));