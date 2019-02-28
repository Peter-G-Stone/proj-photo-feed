import React, { Component } from 'react';


export default class LoginPage extends Component {
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

        const email = this.state.email 
        const password = this.state.password
        const request = {'auth': {'email': email, 'password': password}}

        console.log('submitting ', request)
        fetch('http://localhost:3001/api/user_token',
        {
            method: "POST",
            body: request,
            headers: {
                "Content-Type": "application/json"            }
        })
        .then(resp => {
            localStorage.setItem("jwt", resp.jwt)
            console.log(resp.json())
        })
    }

    render() {
       return (
            <><h2>Login</h2>
            <form onSubmit={event => this.handleSubmit(event)}>
                <p><label>Email </label>
                <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/></p>
                <p><label>Password </label>
                <input type="password" value={this.state.passowrd} name="password" onChange={this.handleChange}/></p>
                <button type="submit">Submit</button>
            </form></>

       )}
}