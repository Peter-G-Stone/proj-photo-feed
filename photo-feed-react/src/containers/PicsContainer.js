import React, { Component } from 'react';
import PicsList from '../components/PicsList'
export default class PicsContainer extends Component {
    

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

    
    
    render() {
        return(
            <> 
            <PicsList pics={this.state.pics} />
            </>
        )
    }
}