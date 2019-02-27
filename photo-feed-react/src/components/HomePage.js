import React, { Component } from 'react';


export default class LoginPage extends Component {
    

    state = {
        pics: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/pics')
        .then(resp => resp.json())
        .then(pics =>             
            {
                this.setState({pics})})
    }

    mapThruPhotos = () => {
        return this.state.pics.map(pic => {
            return <p><img alt="picInList" src={pic.url}/></p>
        })
    }
    
    render() {
       return (
            <> <p>Homepage! Logged in</p> 
            <ul>
                {this.mapThruPhotos()}
            </ul>
            </>

       )}
}