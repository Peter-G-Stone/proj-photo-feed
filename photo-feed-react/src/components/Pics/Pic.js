import React, {Component} from 'react';
import {connect} from 'react-redux'



class Pic extends Component {
    constructor(props) {
        super(props);
    }

    savePic = () => {
        debugger
    }

    
    render () {
        const pic = this.props.pic
        return (
            <>
                <p><img alt="picInList" src={pic.url}/></p>
                <p>By: {pic.artist.name} <a href="#" onClick={() => this.savePic()}>Save</a></p>
                <p> - </p>
            </>
        )
    }
} 

const mapStateToProps = (state) => {
    return {currentUser: state.authReducer.currentUser}
}

export default connect(mapStateToProps)(Pic)