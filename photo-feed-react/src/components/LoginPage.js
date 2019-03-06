// import { withRouter } from 'react-router-dom'
import React, { Component } from 'react'
// import {Form, Button} from 'react-bootstrap'
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
        this.props.authenticate(this.state, this.props.history)
    }

    render() {
       return (
           <><h2>Login</h2>
             <form onSubmit={event => this.handleSubmit(event)}>
                 <p><label>Email</label>
                 <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/></p>
                 <p><label>Password </label>
                 <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/></p>
                 <button type="submit">Submit</button>
             </form></>
        
        
        // <>
        // <Form>
        //     <Form.Group controlId="formBasicEmail">
        //         <Form.Label>Email address</Form.Label>
        //         <Form.Control type="email" placeholder="Enter email" />
        //         <Form.Text className="text-muted">
        //             We'll never share your email with anyone else.
        //         </Form.Text>
        //     </Form.Group>
        
        //     <Form.Group controlId="formBasicPassword">
        //         <Form.Label>Password</Form.Label>
        //         <Form.Control type="password" placeholder="Password" />
        //     </Form.Group>
        //     <Form.Group controlId="formBasicChecbox">
        //         <Form.Check type="checkbox" label="Check me out" />
        //     </Form.Group>
            
        // </Form></>

       )}
}

export default connect(null, {authenticate})(LoginPage)
// the above had this in Christine Tran's example (as well as the commented out import line at beginning of file): 
// export default Login = withRouter(connect(null, {authenticate})(Login));




  // <><h2>Login</h2>
            // <form onSubmit={event => this.handleSubmit(event)}>
            //     <p><label>Email</label>
            //     <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/></p>
            //     <p><label>Password </label>
            //     <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/></p>
            //     <button type="submit">Submit</button>
            // </form></>