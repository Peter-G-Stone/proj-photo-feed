import React, { Component } from 'react';
import PicsList from '../components/Pics/PicsList'
import {connect} from 'react-redux'

class PicsContainer extends Component {
    


    
    
    render() {
        return(
            <> 
            <PicsList pics={this.props.pics.pics} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {pics: state.pics}
}

export default connect(mapStateToProps)(PicsContainer)