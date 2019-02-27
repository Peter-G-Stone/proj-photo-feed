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

        const { username, password } = this.state;
    }

    render() {
       return (
            <><h2>Login</h2>
            <form>
                <label>Username </label>
                <input type="text" value={this.state.username} name="username" onChange={this.handleChange}/>
                <label>Password </label>
                <input type="password" value={this.state.passowrd} name="password" onChange={this.handleChange}/>
            </form></>

       )}
}