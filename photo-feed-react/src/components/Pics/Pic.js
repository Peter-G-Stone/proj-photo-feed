import React, {Component} from 'react';
import {connect} from 'react-redux'


class Pic extends Component {
    constructor(props) {
        super(props);
    }

    
    render () {
        const pic = this.props.pic
        return (
            <>
                <p><img alt="picInList" src={pic.url}/></p>
                <p>By: {pic.artist.name} <a href="#" onClick={this.props.savePic}>Save</a></p>
                <p> - </p>
            </>
        )
    }
} 

export default Pic