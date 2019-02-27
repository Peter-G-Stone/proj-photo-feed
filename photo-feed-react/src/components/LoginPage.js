import React, { Component } from 'react';


export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const username = this.state.username 
        const password = this.state.password
        const request = {'auth': {'username': username, 'password': password}}

        console.log('submitting ', this.state)
        fetch('http://localhost:3001/login',
        {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"            }
        })
        .then(resp => resp.json())
        .then(jsonData => console.log(jsonData))
    }

    render() {
       return (
            <><h2>Login</h2>
            <form onSubmit={event => this.handleSubmit(event)}>
                <p><label>Username </label>
                <input type="text" value={this.state.username} name="username" onChange={this.handleChange}/></p>
                <p><label>Password </label>
                <input type="password" value={this.state.passowrd} name="password" onChange={this.handleChange}/></p>
                <button type="submit">Submit</button>
            </form></>

       )}
}