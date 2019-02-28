import React, { Component } from 'react';
import PicsList from '../components/Pics/PicsList'
import {connect} from 'react-redux'

class PicsContainer extends Component {
    

    // componentDidMount() {
    //     fetch('http://localhost:3001/pics')
    //     .then(resp => resp.json())
    //     .then(pics =>             
    //         {
    //             this.setState({pics})})
    // }


    
    
    render() {
        return(
            <> 
            <PicsList pics={this.props.pics} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {pics: state.pics}
}

export default connect(mapStateToProps)(PicsContainer)